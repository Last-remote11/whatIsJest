const fetch = require('node-fetch')
const chuck = require('./script2')

it('call Chuck Norris', (done) => {
  expect.assertions(1)
  // assertions이 1개이다.
  // 아래의 함수가 비동기함수라서 pending상태이기 때문에
  // 오류가 남(0개라고 판단)
  // done을 쓰면 비동기가 끝나고 판단
  // 혹은 그냥 promise 앞에 return을 붙여줘도됨
  chuck.chuckNorris(fetch).then(data => {
    expect(data.value).toEqual(true)
    done()
  })
})

it('call async Chuck Norris', () => {
  chuck.aysyncChuckNorris(fetch).then(data => {
    expect(data.value).toEqual(true)
  })
})