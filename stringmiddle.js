document.addEventListener("DOMContentLoaded",function() {


        var button = document.getElementById("button2");
        var check = document.getElementById("check");
        var input = document.getElementById("string");
        var answer = document.getElementById("answer");
        button.addEventListener("click", findMiddle);


    function findMiddle(string) {
        var string = input.value;
        if (check.checked) {
            string = string.replace(/\s/g,''); // remove whitespaces
            }
        var inArray = string.split("");
        var middle;
        if (inArray.length % 2 != 0) {
            middle = inArray[(Math.floor(inArray.length / 2))];
        } else {
            middle = (inArray[(Math.floor(inArray.length / 2)) - 1] + inArray[(Math.floor(inArray.length / 2))]);
        }
        answer.innerText = middle;
    }

});