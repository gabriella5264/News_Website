//var output = document.getElementById('output').src = "https://github.com/bbc/news-coding-test-dataset.git";
//
//output.innerHTML = output;

//var obj = JSON.parse("https://github.com/bbc/news-coding-test-dataset.git");
//
//document.getElementById("output").innerHTML = obj

fetch('http://some-site.com/cors-enabled/some.json', {mode: 'cors'})
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    console.log('Request successful', text);
  })
  .catch(function(error) {
    log('Request failed', error);
  });
