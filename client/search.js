//THIS FETCH REQUEST SHOULD CALL THE EXTERNAL API DIRECTLY

// 
// function search(query) {
//   console.log('QUERY', query);
//   return fetch(`http://api.waqi.info/feed/${query}/?token=f0be4f42542748763ca5795f6e5768ba0303a091`, {
//     accept: 'application/json',
//   }).then(checkStatus)
//     .then(parseJSON)
// }
//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error);
//   throw error;
// }
//
// function parseJSON(response) {
//   return response.json();
// }
//
// const Search = { search };
// export default Search;
