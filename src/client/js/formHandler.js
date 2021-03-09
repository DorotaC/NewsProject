function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    if (urlToAnalyze (formText)) {
      console.log('formHandler1')
      postURL('http://localhost:8081/postInput', {uInput: formText})
       .then(function(res) {
         updateUI(res)
       })
      console.log({uInput: formText})
    } else {
       alert('Please enter valid URL');
     }
}

function urlToAnalyze (url){
    let reg = /^https?:\/\//;
    return reg.test(url);
}

const postURL = async (url = ' ', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const getURL = await response.json();
    return getURL;
  } catch (error) {
    console.log(error);
  };
};

//Function that put the results of analysis on the website
const updateUI = (newsData) => {
  document.getElementById('agreement').innerHTML = `Agreement score: ${newsData.agreement}`
  document.getElementById('subjectivity').innerHTML = `Subjectivity score: ${newsData.subjectivity}`
  document.getElementById('irony').innerHTML = `Irony score: ${newsData.irony}`
  document.getElementById('confidence').innerHTML = `Confidence score: ${newsData.confidence}`
}


export { handleSubmit }
export { urlToAnalyze }
