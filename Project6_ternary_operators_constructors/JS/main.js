function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 6;
        function Plus_one() {Starting_point += 1;} //Adds 1 to our starting number which is 9
        Plus_one()
        return Starting_point;
    }
}

function Dog(Age, Breed, Color) {  //Constructor function for Dog objects using the "this" and "new" keywords
    this.Dog_Age = Age;
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
}
var Bob = new Dog("5", "Jack Russel", "Black");
var Tim = new Dog("4", "German Sheppard", "Brown");
function Dog_Function() {
    document.getElementById("Dog").innerHTML = 
    " Tim has a " + Tim.Dog_Age + " year old " + Tim.Dog_Breed + 
    " who is " + Tim.Dog_Color;
}

function Car_Function() { //Ternary operation using browser input
    var Hours, Can_do_test;
    Hours = document.getElementById("Hours").value;
    Can_do_test = (Hours < 20) ? "You don't have enough experience" : "Yay! You can go to the driving school"; 
    document.getElementById("Test").innerHTML = Can_do_test + " to do the test. ";
}

