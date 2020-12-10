function rot13(str) {
  var ex = new RegExp('[a-z]','i');
  var min = 'A'.charCodeAt(0);
  var max = 'Z'.charCodeAt(0);
  var factor = 13;
  var result = "";
  str = str.toUpperCase();

  for (var i = 0; i <str.length; i++){
    result += (ex.test(str[i]) ? 
      String.fromCharCode((str.charCodeAt(i) -min + factor) % (max - min + 1) + min) : str[i]);
  }

  return result;
}

rot13("SERR PBQR PNZC");
