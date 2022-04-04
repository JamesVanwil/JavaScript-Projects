function my_Dictionary() {
    var Car = {
        Brand:"Chevrolet",
        Color:"Purple",
        MaxSpeed:"200",
        Age:3,
        Sound:"VroomVroom"
    };
    delete Car.Sound; //Deletes Sound
    document.getElementById("Dictionary").innerHTML = Car.Brand; //Displays Car Brqnd
    document.getElementById("Dictionary").innerHTML = Car.Sound; //Won't display text as it has been deleted
}