function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value
    if (Client.urlToAnalyze (formText)) {
      console.log('formHandler1')
      Client.postURL('http://localhost:8081/postInput', {uInput: formText})
       .then(function(res) {
         Client.updateUI(res)
       })
      console.log({uInput: formText})
    } else {
       alert('Please enter valid URL');
     }
}

export { handleSubmit }
