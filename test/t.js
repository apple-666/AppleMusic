eventList.forEach(function (item) {
  let imgReg = /<img.*?(?:>|\/>)/gi //ƥ��ͼƬ�е�img��ǩ
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i // ƥ��ͼƬ�е�src
  let str = item.content
  let arr = str.match(imgReg)  //ɸѡ�����е�img
  let srcArr = []
  for (let i = 0; i < arr.length; i++) {
    let src = arr[i].match(srcReg)
    // ��ȡͼƬ��ַ
    srcArr.push(src[1])
  }
  item.dataValues.imgList = srcArr
})