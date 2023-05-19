

const askQuestion = (question) => {

  // return new Promise((resolve, reject) => {
  //     resolve('Test Response')
  // })


  const urlBase = 'http://192.168.1.22:5000/'

  return fetch(urlBase + 'question', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: question
    })
  })
  .then(response => response.json())
  .then(json => {
    return json.answer
  })
  .catch(error => {
    console.error(error)
  })
}

export default askQuestion