eventList.forEach(function (item) {
  let imgReg = /<img.*?(?:>|\/>)/gi //匹配图片中的img标签
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i // 匹配图片中的src
  let str = item.content
  let arr = str.match(imgReg)  //筛选出所有的img
  let srcArr = []
  for (let i = 0; i < arr.length; i++) {
    let src = arr[i].match(srcReg)
    // 获取图片地址
    srcArr.push(src[1])
  }
  item.dataValues.imgList = srcArr
})