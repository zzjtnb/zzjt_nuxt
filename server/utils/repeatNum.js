//统计一个数组中有多少个重复的单词：
// let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// console.log('数组counts中"李"出现的次数是：' + counts(["李", "李", "设", "弟", "弟", "生", "生", "李"], "李"));
// 不用reduce时：
/**
 * 统计一个数组中有多少个重复的单词
 * @param {Array} array 待分页的数组
 * @return {Object}  统计后的对象
 */
function getRepeatNum(array) {
  let obj = {};
  for (let i = 0, l = array.length; i < l; i++) {
    let item = array[i];
    obj[item] = (obj[item] + 1) || 1;
  }
  return obj;
}
// let arr = ["李", "李", "设", "弟", "弟", "生", "生", "李"];
// console.log(getRepeatNum(arr));
module.exports = {
  getRepeatNum
}