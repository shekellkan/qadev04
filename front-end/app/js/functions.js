/**
 * Created by MiguelTerceros on 8/24/2015.
 */
/**
 *
 * @param numA
 * @param numB
 * @param callback, function
 */
var doOperation = function (numA, numB, callback) {
    callback();
    callback();
    callback();
    callback();
    return numA + numB;
};


doOperation(1,2,function(){
    console.log('hello');
});

var sayHello = function(name){
    if(!name){
        name = 'world';
    }
    console.log('hello', name);
};
sayHello('Pepe');

(function(name){
    if(!name){
        name = 'world';
    }
    console.log('hello', name);
})('Ivan cree en mi');

(function(){
    console.log('anonymous: hello');
})();

// Nested funtions
/**
 *
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name, age){
    var _name = name;
    var _age = age;

    this.printBio = function(){
      console.log('Hello, my name is: ', _name, 'and I am', _age, 'years old') ;
        _doSomethingPrivate();
    };
    /**
     * metodo privado
     * @private
     */
    var _doSomethingPrivate = function(){
        console.log('this is a private method')
    };
    this.getAge = function(){
      return _age;
    };
    this.setAge = function(newAge){
        _age = newAge;
    };
};
//definiendo una funcion fuera de una clase
Person.sayHello = function(){
    console.log('say hello');
}

//test person class
var pepe = new Person('Pepe', 23);
pepe.printBio();
Person.sayHello();
//pepe._doSomethingPrivate(); //ERROR
//_doSomethingPrivate(); //ERROR