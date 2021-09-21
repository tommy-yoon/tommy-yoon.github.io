var arr = ["one","two","three"];

arr.forEach(function(part){
  part = "four";
  return "four";
})

console.log(arr);


str = "abc def ghi"
arr = str.split(' ');
result = arr.map(s => s.substring(0,1).toUpperCase() + s.substring(1)).join(' ');
console.log(result);