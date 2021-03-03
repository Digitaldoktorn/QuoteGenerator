async function generateQuotes() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()

  if (data.length < 150) {
    document.getElementById('content').innerHTML = data.content
    document.getElementById('author').innerHTML = data.author
    document.getElementById('tag').innerHTML = data.tags.join(' | ')
    // console.log(data.length)
  } else {
    return null
  }
}

let start = setInterval(generateQuotes, 12000)
