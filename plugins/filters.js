import Vue from 'vue'

// 首字母大写过滤器
Vue.filter('readTimes ', function (value) {
  if (!value) return '';
  let readTime = value / 400; //计算阅读时间(一般，人的阅读速度是300-500字/分钟 ，所以就取了个400，这个值可以根据自己的实际需求来更改)
  let mathReadTime = Math.round(readTime); //四舍五入
  if (mathReadTime > 1) {
    return mathReadTime;
    // console.log('预计阅读时长：' + readTime + '分钟');
  } else {
    return 1;
    // console.log('预计阅读时长：1分钟');
  }
})