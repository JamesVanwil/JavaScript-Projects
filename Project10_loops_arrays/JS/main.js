function count_to_five() { //While loop
    var Digit = "";
    var x = 1;
    while (x < 6) {
        Digit += "<br>" + x;
        x++
    }
    document.getElementById("five").innerHTML = Digit;
}

var Vehicles = ["Car", "Plane", "Boat", "Bike"]; //For loop
var Content = "";
var y;
function for_Loop() {
    for (y = 0; y < Vehicles.length; y++) {
        Content += Vehicles[y] + "<br>";
    }
    document.getElementById("Vehicles").innerHTML = Content;
 }

 function array() { //Array
     var Dog_pic = [];
     Dog_pic[0] = "playing";
     Dog_pic[1] = "resting";
     Dog_pic[2] = "sleeping";
     Dog_pic[3] = "eating";
     document.getElementById("Dog").innerHTML = "Here we can see that the dog is " +
     Dog_pic[3] + ".";
 }

 var a = 56; //Object using the let keyword
 document.write(a);
 {
     let a = 12;
     document.write("<br>" + a);
 }
 document.write("<br>" + a);