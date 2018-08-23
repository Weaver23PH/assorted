document.addEventListener("DOMContentLoaded",function() {

    var button = document.getElementById("button");

    button.addEventListener("click", writeHcf);

    function factors(number) {
        var factorArray = [];
        if (number < 0) {
            return factorArray;
        } else {
            for (i = 1; i <= number; i++) {
                if (number % i == 0) {
                    factorArray.push(i);
                }
            }
            return factorArray;
        }
    }

    function getHCF(number1, number2) {
        var num1Array = factors(number1);
        var num2Array = factors(number2);
        var long, short;
        var commonFactors = [];
        if (num1Array.length > num2Array.length) {
            long = num1Array;
            short = num2Array;
        } else {
            long = num2Array;
            short = num1Array;
        }
        for (i = 0; i <= long.length; i++) {
            for (j = 0; j <= short.length; j++) {
                if (long[i] === short[j]) {
                    commonFactors.push(long[i]);
                }
            }
        }
        var hcf = getMaxNumber(commonFactors);
        return hcf;
    }

    function getMaxNumber(array) {
        max = 0;
        for (i = 0; i <= array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    function writeHcf(event){
        var answer = document.getElementById("answer");
        var num1 = parseInt(document.getElementById("number1").value);
        var num2 = parseInt(document.getElementById("number2").value);
        console.log(number1 + " " + number2);
           answer.innerText = getHCF(num1, num2);
    }

});
