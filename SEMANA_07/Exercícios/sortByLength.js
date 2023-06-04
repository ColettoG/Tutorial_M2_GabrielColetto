let frase = 'sj a sa df r e w f d s a v c x z sd fd';
let listFrase = frase.split(" ");

listFrase.sort(function(a, b){
    return b.length - a.length;
})
console.log(listFrase);
