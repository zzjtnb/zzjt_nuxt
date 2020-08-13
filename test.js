let arr = [{ "attributes": { "title": "111.md", "categories": "测试", "tags": ["Hexo"] }, "body": "1", "id": "X3Bvc3RzXOa1i-ivlVwxLm1k", "date": "2020-08-13 23:15:30" }, { "attributes": { "title": "12.md", "categories": "测试", "tags": ["Hexo"] }, "body": "2", "id": "X3Bvc3RzXOa1i-ivlVwyLm1k", "date": "2020-08-13 23:15:20" }, { "attributes": { "title": "3.md", "categories": "测试", "tags": ["Hexo"] }, "body": "3", "id": "X3Bvc3RzXOa1i-ivlVwzLm1k", "date": "2020-08-13 23:15:08" }]

function searchCont(value) {
  return arr.filter((text) => {
    if (text.attributes.title.match(value) != null) {
      return text
    }
  })
}
let data = searchCont('1')
console.log(data);