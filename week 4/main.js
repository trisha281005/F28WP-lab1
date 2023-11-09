var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://trisha281005.github.io/F28WP-lab1/week%204/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();
