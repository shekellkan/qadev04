/**
 * Created by MiguelTerceros on 8/10/2015.
 */
console.log('this is a JS code from a JS file');

/*
* Documenttation..
*/

var sayHello = function (cadena) {
    var hellostr = 'hello ' + cadena +'..!'
    console.log(hellostr);
}

sayHello('ivan donde esta el damian');


/**
 * Class Description...
 * @param name
 * @param edad
 * @constructor
 */
var Persona = function(name, edad){
    this.name = name;
    this.edad = edad;

    /**
     * Method description....
     */
    this.sayHello = function(name){
        console.log(arguments);
        console.log('Hello', name, ', my name is ', this.name);
    }
};

//var age = '';
/*
function calculateAge(bornYear)
{
    var age = 2015 - bornYear;
    return age;
}
*/

function calculateAge(bornYear)
{
    age = 2015 - bornYear;
    return age;
}

var paco = new Persona('Paco',12);
var hugo = new Persona('Hugo',11);

