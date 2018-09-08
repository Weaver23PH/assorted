document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("button2");
    var input = document.getElementById("string");
    var answer = document.getElementById("answer");
    button.addEventListener("click", palindrome);


    function palindrome() {
        var string = input.value;

        string = string.replace(/\W/g, '').toLowerCase(); // remove whitespaces and alphanumerics

        var inArray = string.split("").reverse();
        inArray = inArray.join("");

        if (string === inArray) {
            answer.innerText = "Yes";
        } else if (string != inArray){
            answer.innerText = "No";
        }
    }

});