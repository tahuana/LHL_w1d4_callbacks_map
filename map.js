var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

function map (arr, callback) {
  var result = [];

  arr.forEach( function (element) {
    result.push(callback(element));
  });

  return result;
}
