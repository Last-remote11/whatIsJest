const googleDatabase = [
  'cats.com',
  'soup.com',
  'flowers.com',
  'animalscats.com',
  'hololivecats.us',
  'nizisanzicats.jp'
]

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('cats', googleDatabase));

// 웹팩 같은걸 쓰는 중이 아니기 때문에 일반 js처럼 module.export를 사용
module.exports = googleSearch