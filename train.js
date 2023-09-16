function getDigits(input_string) {
    let digit_count = 0;
  
    for (const char of input_string) {
      if (!isNaN(parseInt(char))) {
        digit_count += 1;
      }
    }
  
    return digit_count;
  }
  
  const result = getDigits("ag1aw5g6");
  console.log(result); 
  