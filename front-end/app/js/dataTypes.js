/**
 * Created by MiguelTerceros on 8/20/2015.
 */
var  countWords = function(paragraph){
    var words = paragraph.split(' ');
    return words.length;
}


var fechaActual = function(){
    var date = new Date();

    var day = date.getDay();
    var days = ['Sun', 'Mon','Tu','Wend','Thursday','Friday','Saturday']

    var time2 = date.toLocaleTimeString();

    var hour = date.getHours();
    if(hour > 12)
        hour = hour - 12;

    var min = date.getMinutes();
    var seconds = date.getSeconds();

    console.log("Today is :", days[day]);
    console.log("Current time is :  ", hour + " PM : " + min + ": " + seconds);     //4 PM : 50 : 22
    console.log("Current time is: " , time2);
}

console.log('Number of words', countWords("Hola Mundo"));
fechaActual();


