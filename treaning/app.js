//1-
// console.log("Bonjour, Monde");
//2-
 function() {
var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);
}