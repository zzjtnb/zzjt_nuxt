const axios = require('axios');  //请求处理
const express = require('express')  //服务器模块
const app = express.Router();
async function getData() {
  // Make a request for a user with a given ID
  let url = 'https://update.miui.com/updates/v1/fullromdownload.php?d=lancelot_eea_global&b=F&r=eea&n='
  let config = {
    proxy: {
      host: '127.0.0.1',
      port: 3000,
    },
  }
  await axios.get(url).then((res) => {
    // handle success
    // console.log(response);
    console.log(1);
    return res
  })
    .catch(function (error) {
      // handle error
      // console.log(error);
    })
}

app.get('/redmi9', async (req, res) => {
  let data = await getData()
  console.log(data);
  // res.status(200).json(data);
})

module.exports = app;