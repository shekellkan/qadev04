/**
 * Created by MiguelTerceros on 8/14/2015.
 */
var Calculator = function () {
    var me = this;
    this.calculatorOperation = function () {
        if (arguments.length == 0) {
            throw "Cannot do the evaluation without params";
        }
        console.log('the sum is:', this.getSum(arguments));
        console.log('The max is:', this.getMax(arguments));
        console.log('The min is:', this.getMin(arguments));
        console.log('The avg is:', this.getAverage(arguments));
    };
    this.getSum = function () {
        if (typeof(arguments[0]) == 'object') {
            return getSum2(arguments[0]);
        }
        return getSum2(arguments);
    }
    /**
     *
     * @param numeros
     * @param pos
     * @returns {the sum of the arguments}
     */
    var getSum2 = function (numeros, pos) {
        if (pos === undefined) {
            pos = numeros.length - 1;
        }
        if (pos == 0) {
            return numeros[pos];
        }
        else {
            return numeros[pos] + getSum2(numeros, pos - 1);
        }
    };

    this.getAverage = function () {
        if (typeof(arguments[0]) == 'object') {
            return average(arguments[0]);
        }
        return average(arguments);
    }
    /**
     *
     * @param numeros
     * @param pos
     * @returns {the average of the arguments}
     */
    var average = function (numeros, pos) {
        if (pos === undefined) {
            pos = numeros.length - 1;
        }
        if(pos == 0){
            return numeros[pos] / numeros.length ;
        }
        else{
            return (numeros[pos] + getSum2(numeros, pos -1))/ numeros.length ;
        }
    };

    this.getMin = function () {
        if (typeof(arguments[0]) == 'object') {
            return min(arguments[0]);
        }
        return min(arguments);
    }
    /**
     *
     * @param numeros
     * @param pos
     * @param menor
     * @returns {the minor of the arguments}
     */
    var min = function (numeros, pos, menor) {
        if(pos === undefined){
            pos = numeros.length - 1;
        }
        if (menor === undefined || numeros[pos] < menor) {
            menor = numeros[pos];
        }
        if (pos == 0) {
            return menor;
        }
        else {
            return min(numeros, pos-1, menor);
        }
    };

    this.getMax = function () {
        if (typeof(arguments[0]) == 'object') {
            return max(arguments[0]);
        }
        return max(arguments);
    }
    /**
     *
     * @param numeros
     * @param pos
     * @param mayor
     * @returns {the maximum of the arguments}
     */
    var max = function (numeros, pos, mayor) {
        if (pos === undefined) {
            pos = numeros.length - 1;
        }
        if (mayor === undefined || numeros[pos] > mayor) {
            mayor = numeros[pos];
        }
        if (pos == 0) {
            return mayor;
        }
        else {
            return max(numeros, pos-1, mayor);
        }
    };
};
var sum = function (a, b) {
    if (!a || !b) {
        throw "Number is Required";
    }
    return a + b;
}

var calculator = new Calculator();
calculator.calculatorOperation(1,2,3,4,5,6,7,8,9,10);
/*aser que funcione con esta linea
calculator.totalSuma(1,2,3,8,6);
 calculator.max(1,2,3,7,9);
 calculator.min(1,2,3,0,5);
 calculator.average(1,2,3,4,5,6,7,8,9);
*/