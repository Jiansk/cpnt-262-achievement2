// spongebob case
//'are you sure about that?' ----- 'AreYouSureAboutThat?'

function alternatetext(spongebob){
    var characters =spongebob.toLowerCase().split("");
    for(var i=0;i<characters.length;i=i+2){
        characters[i]=characters[i].toUpperCase();
    }
    return characters.join("");
}

console.log(alternatetext("AreYouSureAboutThat?"));


// 'AreYouSureAboutThat?' ----- 'ArE yOu SuRe AbOuT tHaT?'

let spongebob = "Are You Sure About That?";
spongebob= spongebob.split("").map((letter,i) =>(i%2)==0 ?
letter.toUpperCase() : letter.toLocaleLowerCase())

.join("");

  console.log(spongebob);