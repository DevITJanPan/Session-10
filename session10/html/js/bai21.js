let resource
do {
  resource = Number(prompt('Nhập vào số nguyên liệu'))
  if (isNaN(resource)) {
    alert('vui lòng nhập số nguyên liệu là một số:')
  } else {
    if (resource < 5000 || resource > 30000) {
      alert('Vui lòng nhập số nhiên liệu có giá trị trong khoảng 5000-30000')
    } else {
      pilot = Number(prompt('Nhập vào số phi hành gia'))
      if (isNaN(pilot)) {
        console.log('Nhập lại số phi hành gia là một số')
      } else {
        if (pilot < 1 || pilot > 7) {
          console.log('Nhập lại số phi hành gia 1-7')
        } else {
          break
        }
      }
    }
  }
} while (true)
let resource50km = 100 * pilot
let times = Math.floor(resource / resource50km)
let maxHeight = resource * times
let resourceRemainder = maxHeight - resource
console.log(resource)
console.log(pilot)
console.log('1 lần tăng độ cao 50km thì cần ' + resource50km + 'nhiên liệu')

console.log('tàu con thoi tăng độ cao được' + times + 'lần')
console.log('độ cao tối đa tàu đạt được:' + maxHeight)
console.log('số nhiên liệu còn lại của tàu:' + resourceRemainder)
