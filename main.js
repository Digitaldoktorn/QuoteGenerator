async function generateQuotes() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  document.getElementById('content').innerHTML = data.content
  document.getElementById('author').innerHTML = data.author
  document.getElementById('tag').innerHTML = data.tags.join(' | ')
  //   console.log(data.author)
  //   console.log(data.content)
  console.log(data.length)
  //   data.tags.map(function (x) {
  //     console.log('Tag: ' + x)
  //   })
  //   data.tags.forEach((element) => {
  //     console.log(element)
  //   })
}
generateQuotes()
let start = setInterval(generateQuotes, 9000)
