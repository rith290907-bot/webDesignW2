function countChar(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      count++;
    }
  }
  return count+1;
}

console.log(countChar("Hello By Kim Heng"));