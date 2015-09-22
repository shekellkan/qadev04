/**
 * Created by MiguelTerceros on 8/27/2015.
 */


/**
 *
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name, age){
    var _name = name;
    var _age = age;


    /**
     * metodo privado  // este metodo se queda dentro de la clase
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
    this.getName = function(){
        return _name;
    };
    this.setName = function(newName){
        _name = newName;
    };
};
//definiendo una funcion fuera de una clase
Person.sayHello = function(){
    console.log('say hello');
}
//con el prototype se vuelve publica un metodo que esta fuera de la clase
Person.prototype.printBio = function(){
    console.log('Hello, my name is: ', this.getName(), 'and I am', this.getAge(), 'years old') ;
    //_doSomethingPrivate();
};

//test person class
var pepe = new Person('Pepe', 23);
pepe.printBio();
Person.sayHello();
//pepe._doSomethingPrivate(); //ERROR
//_doSomethingPrivate(); //ERROR