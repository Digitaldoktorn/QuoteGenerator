// function renderWelcomeScreen() {
//   document.getElementById('welcome').innerHTML = `
//         <h3>Welcome!</h3>
//         <p>Start and pause with the buttons.</p>
//     `
// }

async function generateQuotes() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  document.getElementById('content').innerHTML = data.content
  document.getElementById('author').innerHTML = data.author
  document.getElementById('tag').innerHTML = data.tags.join(' | ')
  // console.log(data.length)
  //   data.tags.map(function (x) {
  //     console.log('Tag: ' + x)
  //   })
  //   data.tags.forEach((element) => {
  //     console.log(element)
  //   })
}
// renderWelcomeScreen()
let start = setInterval(generateQuotes, 12000)
