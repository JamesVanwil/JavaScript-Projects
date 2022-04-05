function Time_function() { //Time function with if and else statements
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is mornig time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function get_Date() { //Function with if statement
    if (new Date().getHours < 18) {
        document.getElementById("Hello").innerHTML = "How is your day?";
    }
}

var X = Dog; //Global variable
function Add_words_1() {
    document.write(A + X + "<br>");
}
function Add_words_2() {
    document.write(The + X);
}
Add_words_1();
Add_words_2();

function Add_words_1() { //Local variable
    var X = Dog;
    document.write(A + X + "<br>");
}
function Add_words_2() {
    document.write(The + X);
}
Add_words_1();
Add_words_2();

function Add_words_1() { //Use console log to help debug code
    var X = Dog;
    console.log(A + X + "<br>");
}
function Add_words_2() {
    console.log(The + X);
}
Add_words_1();
Add_words_2();




