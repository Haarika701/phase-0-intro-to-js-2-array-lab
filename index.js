// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
    
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function  appendCat(name){
    var cat = [...cats, name];
    return cat;
}

function prependCat(name){
   var cat = [name,...cats];
   return cat;
}
function removeLastCat(){
    var cat = cats.slice(0,cats.length-1);
    return cat;
}
function removeFirstCat(){
var cat = cats.slice(1);
return cat;
}
