function reverse(s) {
  var output = '';
  for (var i = s.length - 1; i >= 0; i--)
    output += s[i];
  return output;
}

function reverseSayText(text) {
  console.log(reverse(text));
}

reverseSayText("Reverse");
