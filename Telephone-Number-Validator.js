function telephoneCheck(str) {
// for string with paranthesis
  if (/^1?(\s|-)?\(\d{3}\)(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str)){
    console.log('true');
    return true;
  }

  else if(/^1?(\s|-)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str)){
// for string wihtout paranthesis
    console.log('true');
    return true;
  }

  else{
    console.log('false');
    return false;
  }
}

telephoneCheck("555-555-5555");
