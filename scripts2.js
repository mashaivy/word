$(document).ready(function(){
    $("form#sentence").submit(function(event){
event.preventDefault();
var vowels = ["a", "e", "o", "u", "i"];
var sentence = $("input#anything").val();
var characters = sentence.split("")
//console.log(sentence)
if (characters = vowels) {
var finalsentence = characters.replace(vowels,"-");
//var replace = characters.replace("vowels","-");
//var replace =characters.replace("[a,e,o,u,i]","-")
}
$("#results").text(finalsentence);

}

)
})
