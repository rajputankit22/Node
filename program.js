var sum = 0;
process.argv.forEach(function(element) {
  sum += Number(element)
});
console.log(sum);
