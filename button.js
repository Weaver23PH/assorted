document.addEventListener("DOMContentLoaded",function() {
    var button1 = document.getElementById("butt1");
    var button2 = document.getElementById("butt2");

    button1.addEventListener("mouseover", disappear);

    function disappear(event) {
        button1.style.visibility = "hidden";
        button2.style.visibility = "visible";
        button1.addEventListener("mouseout", appear);
        function appear(event) {
            button2.style.visibility = "hidden";
            button1.style.visibility = "visible";
        }
    }

});
