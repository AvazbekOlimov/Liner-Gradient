const btn = document.querySelector('.btn')
const lineGrad = document.querySelector('.lineGrad')

btn.addEventListener('click', () => {
  colors()
})

function colors() {
  const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]
  const adder = () => {
    let add = ''
    for (let i = 0; i < 6; i++) {
      let random = Math.round(Math.random() * 15)
      let valueRandom = values[random]
      add += valueRandom
    }
    return add
  }

  const mixer1 = adder()
  const mixer2 = adder()
  const randomDeg = Math.floor(Math.random() * 360 + 1)
  const linearGrad = `linear-gradient(${randomDeg}deg, #${mixer1} , #${mixer2})`
  lineGrad.innerText = linearGrad
  document.body.style.background = linearGrad
}