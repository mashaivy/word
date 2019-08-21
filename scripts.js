$(document).ready (function(){
  $("form#sentence").submit(function(event){
event.preventDefault();

var wovels =["a","e","i","o", "u"];
var userInput =$("input#anything").val();

var splitInput = userInput.split("");
for (var i = 0; i < anything.length; i += 1) {
  if (splitInput[i] === "a" || splitInput === "e" || splitInput === "i"||splitInput === "o"|| splitinput==="u"){
    splitInput[i] = "-";

}
}
outPut = splitInput.join("");
alert(outPut);
});
});
