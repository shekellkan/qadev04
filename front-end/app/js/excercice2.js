/**
 * Created by MiguelTerceros on 8/21/2015.
 */

/**
 * return the first number capicua
 * @param offest
 * @param limit
 * @returns {*}
 */
var getFirstCapicua = function(offest,limit){
    for(var i = offest; i < limit ; i ++){
        if(isCapicua(i)){
            break;
        }
    }
    return i;
};

var isCapicua = function (number) {
    var revNumber = parseInt(number.toString().split('').reverse().join(''));
    return number == revNumber;
}

/**
 * print all Even numbers
 * @param cantidad
 */
var getEvenNumbers = function(cantidad){
    var i = 1;
    var cont = 1;
    checkj: while (i <= cantidad) {
        if ((cont % 2) != 0){
            cont++;
            continue checkj;
        }else{
            console.log(cont + " is even.");
            cont++;
            i++;
        }
    }
}
/**
 * print all odd numbers
 * @param cantidad
 */
var getOddNumbers = function(cantidad){
    var i = 1;
    var cont = 0;
    checkj: while (i <= cantidad) {
        if ((cont % 2) == 0){
            cont++;
            continue checkj;
        }else{
            console.log(cont + " is odd.");
            cont++;
            i++;
        }
    }
}
/**
 *
 * @param cadena
 * @returns {string}
 */
var reverseString = function(cadena){
    var resp = '';
    for (var i = cadena.length - 1; i >= 0; i--){
        resp += cadena[i];
    }
    return resp;
}

var truncate = function(paragraph, limit){
    var resp = '';
    var inicio = 0;
    while(inicio < limit){
        resp += paragraph[inicio];
        inicio++;
    }
    return resp;
}

var cadena = "holamundo";
var limit = 3;
console.log('string truncate: ', truncate(cadena,limit))
console.log('array reverse:', reverseString(cadena));
console.log('First Capicua is:', getFirstCapicua(50,100));
//getEvenNumbers(5);
//getEvenNumbers(4);


//using CONTINUE break statement
// getOddNumber(5); //1,3,5,7,9
//getOddNumber(3); //1,3,5