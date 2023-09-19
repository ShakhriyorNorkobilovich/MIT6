function checkSimilarity(shoptoli1, shoptoli2) {
  
  shoptoli1 = shoptoli1;
  shoptoli2 = shoptoli2;
  
  return shoptoli1.split('').sort().join('') === shoptoli2.split('').sort().join('');
}
const result = checkSimilarity("laepp", "apple");
console.log(result); 