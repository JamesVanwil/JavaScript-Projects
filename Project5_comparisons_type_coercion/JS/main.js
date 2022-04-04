document.write(typeof 3); //Displays the data type number

function not_Function() {
    document.getElementById("Not").innerHTML = !( 5 > 10); // return will be true because it is false
}

document.write( 5 > 10 && 15 < 20); // return will be true because both are true

document.write(12 < 2 || 30 > 10); // return will be true because one of them is true

x = 10;
y = 5;
document.write( x === y); // return would be false because they are not the same

a = 2;
b = 3;
document.write(a == b); // return would be false because they are not ther same 

document.write("12" + 2); //Adds the number 2 behind 12 to make 122