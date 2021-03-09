//Function that put the results of analysis on the website.
const updateUI = (newsData) => {
  document.getElementById('agreement').innerHTML = `Agreement score: ${newsData.agreement}`
  document.getElementById('subjectivity').innerHTML = `Subjectivity score: ${newsData.subjectivity}`
  document.getElementById('irony').innerHTML = `Irony score: ${newsData.irony}`
  document.getElementById('confidence').innerHTML = `Confidence score: ${newsData.confidence}`
}

export { updateUI }
