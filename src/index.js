const express = require('express');
const { getSubinfo } = require('./utils');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/getSubInfo', async (req, res) => {
  const { url } = req.body;
  console.log(req.body);
  if (url) {
    const data = await getSubinfo(url);
    res.json(data);
  } else {
    res.json({ msg: '请输入订阅链接' });
  }
});

app.listen(3005);
