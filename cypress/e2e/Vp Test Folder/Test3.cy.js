var no = 100;
var str = "JavaScript";
var b = true;
var nll = null;
var undfd;

console.log(no);
console.log(str);
console.log(b);
console.log(nll);
console.log(undfd);

console.log("---------------Entered In the Block ----------------------");

{
    var no = 1001;
    var str = "JavaScript value changed";
    var b = false;
    var nll = null;
    var undfd = "Test";
    var newVar = "InSide Block"
    
    console.log(no);
    console.log(str);
    console.log(b);
    console.log(nll);
    console.log(undfd);

}
sum();
console.log("---------------Outside of the Block ----------------------");

    console.log(no);
    console.log(str);
    console.log(b);
    console.log(nll);
    console.log(undfd);
    console.log(newVar);

function sum(){
    console.log("--------------- Sum ----------------------");
    var no = 100100;
   var str = "JavaScriptTest";
   str1 = "JavaScriptTest123";
   console.log(no);
   console.log(str);
   console.log(str1);
}
console.log(str1);