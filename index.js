var string = "My name is Dyes"

function shout(){
    return string.toUpperCase();
}
function whisper(){
    return string.toLowerCase();
}
function logShout() {
    console.log (string.toUpperCase());
}
function logWhisper() {
    console.log(string.toLowerCase());
}
function sayHiToGrandma() {
    if (string.toLowerCase == true) {
        return 'I can\'t hear you!';
    }else if (string.toUpperCase == true){
        return "YES INDEED!";
    }else if (string = "I love you Grandma") {
        return "I love you, too";
    }
}
console.log (shout());
console.log (whisper());
logShout();
logWhisper();
console.log (sayHiToGrandma());