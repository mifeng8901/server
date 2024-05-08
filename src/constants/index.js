const countryExp =
  /AD|安道尔共和国|Andorra|AE|阿拉伯联合酋长国|United Arab Emirates|AF|阿富汗|Afghanistan|AG|安提瓜和巴布达|Antigua and Barbuda|AI|安圭拉岛|Anguilla|AL|阿尔巴尼亚|Albania|AM|亚美尼亚|Armenia|AO|安哥拉|Angola|AR|阿根廷|Argentina|AT|奥地利|Austria|AU|澳大利亚|Australia|AZ|阿塞拜疆|Azerbaijan|BB|巴巴多斯|Barbados|BD|孟加拉国|Bangladesh|BE|比利时|Belgium|BF|布基纳法索|Burkina-faso|BG|保加利亚|Bulgaria|BH|巴林|Bahrain|BI|布隆迪|Burundi|BJ|贝宁|Benin|BL|巴勒斯坦|Palestine|BM|百慕大群岛|Bermuda Is.|BN|文莱|Brunei|BO|玻利维亚|Bolivia|BR|巴西|Brazil|BS|巴哈马|Bahamas|BW|博茨瓦纳|Botswana|BY|白俄罗斯|Belarus|BZ|伯利兹|Belize|CA|加拿大|Canada|CF|中非共和国|Central African Republic|CG|刚果|Congo|CH|瑞士|Switzerland|CK|库克群岛|Cook Is.|CL|智利|Chile|CM|喀麦隆|Cameroon|CN|中国|China|CO|哥伦比亚|Colombia|CR|哥斯达黎加|Costa Rica|CS|捷克|Czech|CU|古巴|Cuba|CY|塞浦路斯|Cyprus|CZ|捷克|Czech Republic|DE|德国|Germany|DJ|吉布提|Djibouti|DK|丹麦|Denmark|DO|多米尼加共和国|Dominica Rep.|DZ|阿尔及利亚|Algeria|EC|厄瓜多尔|Ecuador|EE|爱沙尼亚|Estonia|EG|埃及|Egypt|ES|西班牙|Spain|ET|埃塞俄比亚|Ethiopia|FI|芬兰|Finland|FJ|斐济|Fiji|FR|法国|France|GA|加蓬|Gabon|GB|英国|United Kiongdom|GD|格林纳达|Grenada|GE|格鲁吉亚|Georgia|GF|法属圭亚那|French Guiana|GH|加纳|Ghana|GI|直布罗陀|Gibraltar|GM|冈比亚|Gambia|GN|几内亚|Guinea|GR|希腊|Greece|GT|危地马拉|Guatemala|GU|关岛|Guam|GY|圭亚那|Guyana|HK|中国香港特别行政区|Chinese Hongkong|HN|洪都拉斯|Honduras|HT|海地|Haiti|HU|匈牙利|Hungary|ID|印度尼西亚|Indonesia|IE|爱尔兰|Ireland|IL|以色列|Israel|IN|印度|India|IQ|伊拉克|Iraq|IR|伊朗|Iran|IS|冰岛|Iceland|IT|意大利|Italy|JM|牙买加|Jamaica|JO|约旦|Jordan|JP|日本|Japan|KE|肯尼亚|Kenya|KG|吉尔吉斯坦|Kyrgyzstan|KH|柬埔寨|Kampuchea (Cambodia )|KP|朝鲜|North Korea|KR|韩国|Korea|KT|科特迪瓦共和国|Republic of Ivory Coast|KW|科威特|Kuwait|KZ|哈萨克斯坦|Kazakstan|LA|老挝|Laos|LB|黎巴嫩|Lebanon|LC|圣卢西亚|St.Lucia|LI|列支敦士登|Liechtenstein|LK|斯里兰卡|Sri Lanka|LR|利比里亚|Liberia|LS|莱索托|Lesotho|LT|立陶宛|Lithuania|LU|卢森堡|Luxembourg|LV|拉脱维亚|Latvia|LY|利比亚|Libya|MA|摩洛哥|Morocco|MC|摩纳哥|Monaco|MD|摩尔多瓦|Moldova, Republic of|MG|马达加斯加|Madagascar|ML|马里|Mali|MM|缅甸|Burma|MN|蒙古|Mongolia|MO|中国澳门|Chinese Macao|MS|蒙特塞拉特岛|Montserrat Is|MT|马耳他|Malta|MU|毛里求斯|Mauritius|MV|马尔代夫|Maldives|MW|马拉维|Malawi|MX|墨西哥|Mexico|MY|马来西亚|Malaysia|MZ|莫桑比克|Mozambique|NA|纳米比亚|Namibia|NE|尼日尔|Niger|NG|尼日利亚|Nigeria|NI|尼加拉瓜|Nicaragua|NL|荷兰|Netherlands|NO|挪威|Norway|NP|尼泊尔|Nepal|NR|瑙鲁|Nauru|NZ|新西兰|New Zealand|OM|阿曼|Oman|PA|巴拿马|Panama|PE|秘鲁|Peru|PF|法属玻利尼西亚|French Polynesia|PG|巴布亚新几内亚|Papua New Cuinea|PH|菲律宾|Philippines|PK|巴基斯坦|Pakistan|PL|波兰|Poland|PR|波多黎各|Puerto Rico|PT|葡萄牙|Portugal|PY|巴拉圭|Paraguay|QA|卡塔尔|Qatar|RO|罗马尼亚|Romania|RU|俄罗斯|Russia|SA|沙特阿拉伯|Saudi Arabia|SB|所罗门群岛|Solomon Is|SC|塞舌尔|Seychelles|SD|苏丹|Sudan|SE|瑞典|Sweden|SG|新加坡|Singapore|SI|斯洛文尼亚|Slovenia|SK|斯洛伐克|Slovakia|SL|塞拉利昂|Sierra Leone|SM|圣马力诺|San Marino|SN|塞内加尔|Senegal|SO|索马里|Somali|SR|苏里南|Suriname|ST|圣多美和普林西比|Sao Tome and Principe|SV|萨尔瓦多|EI Salvador|SY|叙利亚|Syria|SZ|斯威士兰|Swaziland|TD|乍得|Chad|TG|多哥|Togo|TH|泰国|Thailand|TJ|塔吉克斯坦|Tajikstan|TM|土库曼斯坦|Turkmenistan|TN|突尼斯|Tunisia|TO|汤加|Tonga|TR|土耳其|Turkey|TT|特立尼达和多巴哥|Trinidad and Tobago|TW|中国台湾|Chinese Taiwan|TZ|坦桑尼亚|Tanzania|UA|乌克兰|Ukraine|UG|乌干达|Uganda|US|美国|United States of America|UY|乌拉圭|Uruguay|UZ|乌兹别克斯坦|Uzbekistan|VC|圣文森特岛|Saint Vincent|VE|委内瑞拉|Venezuela|VN|越南|Vietnam|YE|也门|Yemen|YU|南斯拉夫|Yugoslavia|ZA|南非|South Africa|ZM|赞比亚|Zambia|ZR|扎伊尔|Zaire|ZW|津巴布韦|Zimbabwe/g;

const countryMap = {
  AD: '安道尔共和国',
  安道尔共和国: '安道尔共和国',
  Andorra: '安道尔共和国',
  AE: '阿拉伯联合酋长国',
  阿拉伯联合酋长国: '阿拉伯联合酋长国',
  'United Arab Emirates': '阿拉伯联合酋长国',
  AF: '阿富汗',
  阿富汗: '阿富汗',
  Afghanistan: '阿富汗',
  AG: '安提瓜和巴布达',
  安提瓜和巴布达: '安提瓜和巴布达',
  'Antigua and Barbuda': '安提瓜和巴布达',
  AI: '安圭拉岛',
  安圭拉岛: '安圭拉岛',
  Anguilla: '安圭拉岛',
  AL: '阿尔巴尼亚',
  阿尔巴尼亚: '阿尔巴尼亚',
  Albania: '阿尔巴尼亚',
  AM: '亚美尼亚',
  亚美尼亚: '亚美尼亚',
  Armenia: '亚美尼亚',
  AO: '安哥拉',
  安哥拉: '安哥拉',
  Angola: '安哥拉',
  AR: '阿根廷',
  阿根廷: '阿根廷',
  Argentina: '阿根廷',
  AT: '奥地利',
  奥地利: '奥地利',
  Austria: '奥地利',
  AU: '澳大利亚',
  澳大利亚: '澳大利亚',
  Australia: '澳大利亚',
  AZ: '阿塞拜疆',
  阿塞拜疆: '阿塞拜疆',
  Azerbaijan: '阿塞拜疆',
  BB: '巴巴多斯',
  巴巴多斯: '巴巴多斯',
  Barbados: '巴巴多斯',
  BD: '孟加拉国',
  孟加拉国: '孟加拉国',
  Bangladesh: '孟加拉国',
  BE: '比利时',
  比利时: '比利时',
  Belgium: '比利时',
  BF: '布基纳法索',
  布基纳法索: '布基纳法索',
  'Burkina-faso': '布基纳法索',
  BG: '保加利亚',
  保加利亚: '保加利亚',
  Bulgaria: '保加利亚',
  BH: '巴林',
  巴林: '巴林',
  Bahrain: '巴林',
  BI: '布隆迪',
  布隆迪: '布隆迪',
  Burundi: '布隆迪',
  BJ: '贝宁',
  贝宁: '贝宁',
  Benin: '贝宁',
  BL: '巴勒斯坦',
  巴勒斯坦: '巴勒斯坦',
  Palestine: '巴勒斯坦',
  BM: '百慕大群岛',
  百慕大群岛: '百慕大群岛',
  'Bermuda Is.': '百慕大群岛',
  BN: '文莱',
  文莱: '文莱',
  Brunei: '文莱',
  BO: '玻利维亚',
  玻利维亚: '玻利维亚',
  Bolivia: '玻利维亚',
  BR: '巴西',
  巴西: '巴西',
  Brazil: '巴西',
  BS: '巴哈马',
  巴哈马: '巴哈马',
  Bahamas: '巴哈马',
  BW: '博茨瓦纳',
  博茨瓦纳: '博茨瓦纳',
  Botswana: '博茨瓦纳',
  BY: '白俄罗斯',
  白俄罗斯: '白俄罗斯',
  Belarus: '白俄罗斯',
  BZ: '伯利兹',
  伯利兹: '伯利兹',
  Belize: '伯利兹',
  CA: '加拿大',
  加拿大: '加拿大',
  Canada: '加拿大',
  CF: '中非共和国',
  中非共和国: '中非共和国',
  'Central African Republic': '中非共和国',
  CG: '刚果',
  刚果: '刚果',
  Congo: '刚果',
  CH: '瑞士',
  瑞士: '瑞士',
  Switzerland: '瑞士',
  CK: '库克群岛',
  库克群岛: '库克群岛',
  'Cook Is.': '库克群岛',
  CL: '智利',
  智利: '智利',
  Chile: '智利',
  CM: '喀麦隆',
  喀麦隆: '喀麦隆',
  Cameroon: '喀麦隆',
  CN: '中国',
  中国: '中国',
  China: '中国',
  CO: '哥伦比亚',
  哥伦比亚: '哥伦比亚',
  Colombia: '哥伦比亚',
  CR: '哥斯达黎加',
  哥斯达黎加: '哥斯达黎加',
  'Costa Rica': '哥斯达黎加',
  CS: '捷克',
  捷克: '捷克',
  Czech: '捷克',
  CU: '古巴',
  古巴: '古巴',
  Cuba: '古巴',
  CY: '塞浦路斯',
  塞浦路斯: '塞浦路斯',
  Cyprus: '塞浦路斯',
  CZ: '捷克',
  'Czech Republic': '捷克',
  DE: '德国',
  德国: '德国',
  Germany: '德国',
  DJ: '吉布提',
  吉布提: '吉布提',
  Djibouti: '吉布提',
  DK: '丹麦',
  丹麦: '丹麦',
  Denmark: '丹麦',
  DO: '多米尼加共和国',
  多米尼加共和国: '多米尼加共和国',
  'Dominica Rep.': '多米尼加共和国',
  DZ: '阿尔及利亚',
  阿尔及利亚: '阿尔及利亚',
  Algeria: '阿尔及利亚',
  EC: '厄瓜多尔',
  厄瓜多尔: '厄瓜多尔',
  Ecuador: '厄瓜多尔',
  EE: '爱沙尼亚',
  爱沙尼亚: '爱沙尼亚',
  Estonia: '爱沙尼亚',
  EG: '埃及',
  埃及: '埃及',
  Egypt: '埃及',
  ES: '西班牙',
  西班牙: '西班牙',
  Spain: '西班牙',
  ET: '埃塞俄比亚',
  埃塞俄比亚: '埃塞俄比亚',
  Ethiopia: '埃塞俄比亚',
  FI: '芬兰',
  芬兰: '芬兰',
  Finland: '芬兰',
  FJ: '斐济',
  斐济: '斐济',
  Fiji: '斐济',
  FR: '法国',
  法国: '法国',
  France: '法国',
  GA: '加蓬',
  加蓬: '加蓬',
  Gabon: '加蓬',
  GB: '英国',
  英国: '英国',
  'United Kiongdom': '英国',
  GD: '格林纳达',
  格林纳达: '格林纳达',
  Grenada: '格林纳达',
  GE: '格鲁吉亚',
  格鲁吉亚: '格鲁吉亚',
  Georgia: '格鲁吉亚',
  GF: '法属圭亚那',
  法属圭亚那: '法属圭亚那',
  'French Guiana': '法属圭亚那',
  GH: '加纳',
  加纳: '加纳',
  Ghana: '加纳',
  GI: '直布罗陀',
  直布罗陀: '直布罗陀',
  Gibraltar: '直布罗陀',
  GM: '冈比亚',
  冈比亚: '冈比亚',
  Gambia: '冈比亚',
  GN: '几内亚',
  几内亚: '几内亚',
  Guinea: '几内亚',
  GR: '希腊',
  希腊: '希腊',
  Greece: '希腊',
  GT: '危地马拉',
  危地马拉: '危地马拉',
  Guatemala: '危地马拉',
  GU: '关岛',
  关岛: '关岛',
  Guam: '关岛',
  GY: '圭亚那',
  圭亚那: '圭亚那',
  Guyana: '圭亚那',
  HK: '中国香港',
  中国香港特别行政区: '中国香港',
  'Chinese Hongkong': '中国香港',
  HN: '洪都拉斯',
  洪都拉斯: '洪都拉斯',
  Honduras: '洪都拉斯',
  HT: '海地',
  海地: '海地',
  Haiti: '海地',
  HU: '匈牙利',
  匈牙利: '匈牙利',
  Hungary: '匈牙利',
  ID: '印度尼西亚',
  印度尼西亚: '印度尼西亚',
  Indonesia: '印度尼西亚',
  IE: '爱尔兰',
  爱尔兰: '爱尔兰',
  Ireland: '爱尔兰',
  IL: '以色列',
  以色列: '以色列',
  Israel: '以色列',
  IN: '印度',
  印度: '印度',
  India: '印度',
  IQ: '伊拉克',
  伊拉克: '伊拉克',
  Iraq: '伊拉克',
  IR: '伊朗',
  伊朗: '伊朗',
  Iran: '伊朗',
  IS: '冰岛',
  冰岛: '冰岛',
  Iceland: '冰岛',
  IT: '意大利',
  意大利: '意大利',
  Italy: '意大利',
  JM: '牙买加',
  牙买加: '牙买加',
  Jamaica: '牙买加',
  JO: '约旦',
  约旦: '约旦',
  Jordan: '约旦',
  JP: '日本',
  日本: '日本',
  Japan: '日本',
  KE: '肯尼亚',
  肯尼亚: '肯尼亚',
  Kenya: '肯尼亚',
  KG: '吉尔吉斯坦',
  吉尔吉斯坦: '吉尔吉斯坦',
  Kyrgyzstan: '吉尔吉斯坦',
  KH: '柬埔寨',
  柬埔寨: '柬埔寨',
  'Kampuchea (Cambodia )': '柬埔寨',
  KP: '朝鲜',
  朝鲜: '朝鲜',
  'North Korea': '朝鲜',
  KR: '韩国',
  韩国: '韩国',
  Korea: '韩国',
  KT: '科特迪瓦共和国',
  科特迪瓦共和国: '科特迪瓦共和国',
  'Republic of Ivory Coast': '科特迪瓦共和国',
  KW: '科威特',
  科威特: '科威特',
  Kuwait: '科威特',
  KZ: '哈萨克斯坦',
  哈萨克斯坦: '哈萨克斯坦',
  Kazakstan: '哈萨克斯坦',
  LA: '老挝',
  老挝: '老挝',
  Laos: '老挝',
  LB: '黎巴嫩',
  黎巴嫩: '黎巴嫩',
  Lebanon: '黎巴嫩',
  LC: '圣卢西亚',
  圣卢西亚: '圣卢西亚',
  'St.Lucia': '圣卢西亚',
  LI: '列支敦士登',
  列支敦士登: '列支敦士登',
  Liechtenstein: '列支敦士登',
  LK: '斯里兰卡',
  斯里兰卡: '斯里兰卡',
  'Sri Lanka': '斯里兰卡',
  LR: '利比里亚',
  利比里亚: '利比里亚',
  Liberia: '利比里亚',
  LS: '莱索托',
  莱索托: '莱索托',
  Lesotho: '莱索托',
  LT: '立陶宛',
  立陶宛: '立陶宛',
  Lithuania: '立陶宛',
  LU: '卢森堡',
  卢森堡: '卢森堡',
  Luxembourg: '卢森堡',
  LV: '拉脱维亚',
  拉脱维亚: '拉脱维亚',
  Latvia: '拉脱维亚',
  LY: '利比亚',
  利比亚: '利比亚',
  Libya: '利比亚',
  MA: '摩洛哥',
  摩洛哥: '摩洛哥',
  Morocco: '摩洛哥',
  MC: '摩纳哥',
  摩纳哥: '摩纳哥',
  Monaco: '摩纳哥',
  MD: '摩尔多瓦',
  摩尔多瓦: '摩尔多瓦',
  'Moldova, Republic of': '摩尔多瓦',
  MG: '马达加斯加',
  马达加斯加: '马达加斯加',
  Madagascar: '马达加斯加',
  ML: '马里',
  马里: '马里',
  Mali: '马里',
  MM: '缅甸',
  缅甸: '缅甸',
  Burma: '缅甸',
  MN: '蒙古',
  蒙古: '蒙古',
  Mongolia: '蒙古',
  MO: '中国澳门',
  中国澳门: '中国澳门',
  'Chinese Macao': '中国澳门',
  MS: '蒙特塞拉特岛',
  蒙特塞拉特岛: '蒙特塞拉特岛',
  'Montserrat Is': '蒙特塞拉特岛',
  MT: '马耳他',
  马耳他: '马耳他',
  Malta: '马耳他',
  MU: '毛里求斯',
  毛里求斯: '毛里求斯',
  Mauritius: '毛里求斯',
  MV: '马尔代夫',
  马尔代夫: '马尔代夫',
  Maldives: '马尔代夫',
  MW: '马拉维',
  马拉维: '马拉维',
  Malawi: '马拉维',
  MX: '墨西哥',
  墨西哥: '墨西哥',
  Mexico: '墨西哥',
  MY: '马来西亚',
  马来西亚: '马来西亚',
  Malaysia: '马来西亚',
  MZ: '莫桑比克',
  莫桑比克: '莫桑比克',
  Mozambique: '莫桑比克',
  NA: '纳米比亚',
  纳米比亚: '纳米比亚',
  Namibia: '纳米比亚',
  NE: '尼日尔',
  尼日尔: '尼日尔',
  Niger: '尼日尔',
  NG: '尼日利亚',
  尼日利亚: '尼日利亚',
  Nigeria: '尼日利亚',
  NI: '尼加拉瓜',
  尼加拉瓜: '尼加拉瓜',
  Nicaragua: '尼加拉瓜',
  NL: '荷兰',
  荷兰: '荷兰',
  Netherlands: '荷兰',
  NO: '挪威',
  挪威: '挪威',
  Norway: '挪威',
  NP: '尼泊尔',
  尼泊尔: '尼泊尔',
  Nepal: '尼泊尔',
  NR: '瑙鲁',
  瑙鲁: '瑙鲁',
  Nauru: '瑙鲁',
  NZ: '新西兰',
  新西兰: '新西兰',
  'New Zealand': '新西兰',
  OM: '阿曼',
  阿曼: '阿曼',
  Oman: '阿曼',
  PA: '巴拿马',
  巴拿马: '巴拿马',
  Panama: '巴拿马',
  PE: '秘鲁',
  秘鲁: '秘鲁',
  Peru: '秘鲁',
  PF: '法属玻利尼西亚',
  法属玻利尼西亚: '法属玻利尼西亚',
  'French Polynesia': '法属玻利尼西亚',
  PG: '巴布亚新几内亚',
  巴布亚新几内亚: '巴布亚新几内亚',
  'Papua New Cuinea': '巴布亚新几内亚',
  PH: '菲律宾',
  菲律宾: '菲律宾',
  Philippines: '菲律宾',
  PK: '巴基斯坦',
  巴基斯坦: '巴基斯坦',
  Pakistan: '巴基斯坦',
  PL: '波兰',
  波兰: '波兰',
  Poland: '波兰',
  PR: '波多黎各',
  波多黎各: '波多黎各',
  'Puerto Rico': '波多黎各',
  PT: '葡萄牙',
  葡萄牙: '葡萄牙',
  Portugal: '葡萄牙',
  PY: '巴拉圭',
  巴拉圭: '巴拉圭',
  Paraguay: '巴拉圭',
  QA: '卡塔尔',
  卡塔尔: '卡塔尔',
  Qatar: '卡塔尔',
  RO: '罗马尼亚',
  罗马尼亚: '罗马尼亚',
  Romania: '罗马尼亚',
  RU: '俄罗斯',
  俄罗斯: '俄罗斯',
  Russia: '俄罗斯',
  SA: '沙特阿拉伯',
  沙特阿拉伯: '沙特阿拉伯',
  'Saudi Arabia': '沙特阿拉伯',
  SB: '所罗门群岛',
  所罗门群岛: '所罗门群岛',
  'Solomon Is': '所罗门群岛',
  SC: '塞舌尔',
  塞舌尔: '塞舌尔',
  Seychelles: '塞舌尔',
  SD: '苏丹',
  苏丹: '苏丹',
  Sudan: '苏丹',
  SE: '瑞典',
  瑞典: '瑞典',
  Sweden: '瑞典',
  SG: '新加坡',
  新加坡: '新加坡',
  Singapore: '新加坡',
  SI: '斯洛文尼亚',
  斯洛文尼亚: '斯洛文尼亚',
  Slovenia: '斯洛文尼亚',
  SK: '斯洛伐克',
  斯洛伐克: '斯洛伐克',
  Slovakia: '斯洛伐克',
  SL: '塞拉利昂',
  塞拉利昂: '塞拉利昂',
  'Sierra Leone': '塞拉利昂',
  SM: '圣马力诺',
  圣马力诺: '圣马力诺',
  'San Marino': '圣马力诺',
  SN: '塞内加尔',
  塞内加尔: '塞内加尔',
  Senegal: '塞内加尔',
  SO: '索马里',
  索马里: '索马里',
  Somali: '索马里',
  SR: '苏里南',
  苏里南: '苏里南',
  Suriname: '苏里南',
  ST: '圣多美和普林西比',
  圣多美和普林西比: '圣多美和普林西比',
  'Sao Tome and Principe': '圣多美和普林西比',
  SV: '萨尔瓦多',
  萨尔瓦多: '萨尔瓦多',
  'EI Salvador': '萨尔瓦多',
  SY: '叙利亚',
  叙利亚: '叙利亚',
  Syria: '叙利亚',
  SZ: '斯威士兰',
  斯威士兰: '斯威士兰',
  Swaziland: '斯威士兰',
  TD: '乍得',
  乍得: '乍得',
  Chad: '乍得',
  TG: '多哥',
  多哥: '多哥',
  Togo: '多哥',
  TH: '泰国',
  泰国: '泰国',
  Thailand: '泰国',
  TJ: '塔吉克斯坦',
  塔吉克斯坦: '塔吉克斯坦',
  Tajikstan: '塔吉克斯坦',
  TM: '土库曼斯坦',
  土库曼斯坦: '土库曼斯坦',
  Turkmenistan: '土库曼斯坦',
  TN: '突尼斯',
  突尼斯: '突尼斯',
  Tunisia: '突尼斯',
  TO: '汤加',
  汤加: '汤加',
  Tonga: '汤加',
  TR: '土耳其',
  土耳其: '土耳其',
  Turkey: '土耳其',
  TT: '特立尼达和多巴哥',
  特立尼达和多巴哥: '特立尼达和多巴哥',
  'Trinidad and Tobago': '特立尼达和多巴哥',
  TW: '中国台湾',
  中国台湾: '中国台湾',
  'Chinese Taiwan': '中国台湾',
  TZ: '坦桑尼亚',
  坦桑尼亚: '坦桑尼亚',
  Tanzania: '坦桑尼亚',
  UA: '乌克兰',
  乌克兰: '乌克兰',
  Ukraine: '乌克兰',
  UG: '乌干达',
  乌干达: '乌干达',
  Uganda: '乌干达',
  US: '美国',
  美国: '美国',
  'United States of America': '美国',
  UY: '乌拉圭',
  乌拉圭: '乌拉圭',
  Uruguay: '乌拉圭',
  UZ: '乌兹别克斯坦',
  乌兹别克斯坦: '乌兹别克斯坦',
  Uzbekistan: '乌兹别克斯坦',
  VC: '圣文森特岛',
  圣文森特岛: '圣文森特岛',
  'Saint Vincent': '圣文森特岛',
  VE: '委内瑞拉',
  委内瑞拉: '委内瑞拉',
  Venezuela: '委内瑞拉',
  VN: '越南',
  越南: '越南',
  Vietnam: '越南',
  YE: '也门',
  也门: '也门',
  Yemen: '也门',
  YU: '南斯拉夫',
  南斯拉夫: '南斯拉夫',
  Yugoslavia: '南斯拉夫',
  ZA: '南非',
  南非: '南非',
  'South Africa': '南非',
  ZM: '赞比亚',
  赞比亚: '赞比亚',
  Zambia: '赞比亚',
  ZR: '扎伊尔',
  扎伊尔: '扎伊尔',
  Zaire: '扎伊尔',
  ZW: '津巴布韦',
  津巴布韦: '津巴布韦',
  Zimbabwe: '津巴布韦',
};


module.exports = {
  countryExp,
  countryMap
};
