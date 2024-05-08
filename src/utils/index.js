const https = require('https');
const qs = require('qs');
const yaml = require('js-yaml');
const cheerio = require('cheerio');
const axios = require('axios').default;
const { countryExp, countryMap } = require('../constants/index');

const dayjs = require('dayjs');

const httpsAgent = new https.Agent({ rejectUnauthorized: false });
httpsAgent.options.rejectUnauthorized = false;

const http = axios.create({
  headers: {
    'User-Agent': 'NekoBox/Android/1.3.3 (Prefer ClashMeta Format)',
  },
  httpsAgent,
});

dayjs.locale('zh-cn');

async function getSubinfo(url) {
  try {
    if (/api\/v1\/client\/subscribe/.test(url)) {
      url = url.split('&')[0] + '&flag=clash';
    }

    const { data, headers } = await http.get(url).catch((e) => {
      console.log(e.response.data);
      return {};
    });

    if (!headers) {
      return { msg: '这个订阅貌似用不了啊' };
    }

    let subDetail = {};

    const { 'profile-web-page-url': site, 'subscription-userinfo': subInfo } =
      headers || {};

    if (site) {
      const title = await getTitle(site);
      subDetail.site = site;
      subDetail.title = title;
    }

    if (subInfo) {
      subDetail = { ...subDetail, ...parseSubInfo(subInfo) };
    }

    const { proxies = [] } = yaml.load(data) || {};
    const nodeMap = new Map();
    proxies.forEach((proxy) => {
      if (
        !['1.1.1.1', '0.0.0.0', 'localhost', '127.0.0.1'].includes(proxy.server)
      ) {
        nodeMap.set(`${proxy.server}:${proxy.port}`, proxy);
      }
    });
    const rawProxies = [...nodeMap.values()];

    subDetail.count = rawProxies.length;
    subDetail.areas = getAreas(rawProxies);

    return subDetail;
  } catch (error) {
    return {};
  }
}

function getAreas(proxies) {
  const areaSet = new Set();
  proxies.forEach((proxy) => {
    const name = proxy.name.match(countryExp)?.[0];
    if (name) areaSet.add(countryMap[name]);
  });

  return [...areaSet];
}

async function getTitle(url) {
  const { data } = await http.get(url);
  const $ = cheerio.load(data);
  const title = $('title').text();
  return title;
}

function parseB(b) {
  return (b / 1024 / 1024 / 1024).toFixed(2);
}

function parseTime(m) {
  if (m < 0) {
    return '已过期';
  }
  const day = Math.floor(m / 60 / 24);
  const hour = Math.floor((m - day * 60 * 24) / 60);
  const minute = Math.floor(m % 60);
  return ` ${day} 天 ${hour} 时 ${minute} 分 `;
}

function parseSubInfo(subInfo) {
  const [upload, download, total, expire] = subInfo
    .split('; ')
    .map((item) => item.split('=')[1]);

  const totalSize = parseB(total);
  const downloadSize = parseB(download);
  const uploadSize = parseB(upload);
  const expireTime = expire
    ? dayjs.unix(expire).format('YYYY-MM-DD HH:mm:ss')
    : '应该是不限时';

  const timeLeft = expire
    ? parseTime(dayjs.unix(expire).diff(dayjs(), 'm'))
    : null;

  return { totalSize, downloadSize, uploadSize, expireTime, timeLeft };
}

module.exports = {
  getSubinfo,
};
