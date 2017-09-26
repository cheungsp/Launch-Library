const BASE_URL = 'http://localhost:8000';
const API_KEY = 'd5c234ff7b9b6bb96e7a125b8f6755ae539eb7e6b0ebabfc4dffe26f021059e8';
//
// export function deleteQuestion (id) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
//   return fetch(`${BASE_URL}/missions/${id}`, {
//     method: 'DELETE',
//     headers
//   })
//     .then(res => res.json());
// }
//
//
// export function postQuestion (data) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`,
//     'Content-Type':'application/json'
//   });
//   return fetch(`${BASE_URL}/questions`, {
//     method: 'POST',
//     body: JSON.stringify({question: data}),
//     headers
//   })
//     .then(res => res.json());
// }

export function getMissions () {
  const headers = new Headers({
    'Authorization':`Apikey ${API_KEY}`
  });
  return fetch(`${BASE_URL}/missions`, {headers})
  // return fetch(`${BASE_URL}/missions`)
    // .then(res => console.log(res.json))
    .then(res => res.json());
  // console.log('test export');
}

// export function getQuestion (id) {
//   const headers = new Headers({
//     'Authorization':`Apikey ${API_KEY}`
//   });
//   return fetch(`${BASE_URL}/questions/${id}`, {headers})
//   // A better practice when handling response from fetch
//   // is to check its status if it was successful (Status: 200 OK)
//   // before parsing as json with (res.json()).
//     .then(res => res.json());
// }
