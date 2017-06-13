import $ from 'jquery';

const search = function(query, callback) {
  $.get(`http://api.waqi.info/feed/${query}/?token=f0be4f42542748763ca5795f6e5768ba0303a091`, function(result) {
    callback(result.data.aqi)
  })
};


const Search = { search };
export default Search;
