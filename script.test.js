const googleSearch = require('./script')

// 실제 테스트에서 데이터베이스 전부를 가져오는 것은 
// 비효율적이기 때문에 더미 데이터를 만들어줌
const dbMock = [
  'dog.com',
  'netflix.com',
  'doghouse.com'
]

describe('googleSearch', () => {
  
  test('it is a test', () => {
    expect('hello').toBe('hello')
  })
  
  it('google test', () => {
    expect(googleSearch('dog', dbMock))
      .toEqual(['dog.com', 'doghouse.com'])
  
    expect(googleSearch('hello', dbMock))
      .toEqual([])
  })
  
  it('work with undified & null input', () => {
    expect(googleSearch(undefined, dbMock))
      .toEqual([])
    expect(googleSearch(null, dbMock))
      .toEqual([])
  })

})