function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    if (urlToAnalyze (formText)) {
      // fetch('http://localhost:8081/test')
      // .then(res => res.json())
      // .then(function(res) {
      //     document.getElementById('results').innerHTML = res.message
      // })
      console.log('formHandler1')
      postURL('http://localhost:8081/postInput', {uInput: formText})
       //.then(res => res.json())
       .then(function(data) {
         updateUI(data)
         //document.getElementById('results').innerHTML = res
    })
      //postURL('/postInput', {uInput: formText})
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

const updateUI = async (newSata) => {
  const req = await fetch('/');
  try {
    const reqData = await req.json();
    console.log(reqData);
  } catch(error) {
    console.log(error);
  }
}


export { handleSubmit }
export { urlToAnalyze }
