function precision_Method() {
    var X = 16538.3012945784112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function tostring_Method() {
    var X = 84;
    document.getElementById("toString").innerHTML = X.toString();
}

function slice_Method() {
    var Sentence = "Hello all my name is Bob";
    var Section = Sentence.slice(10, 17);
    document.getElementById("Slice").innerHTML = Section;
}

function contact_Method() {
    var part_1 = "Hello ";
    var part_2 = "my name is ";
    var part_3 = "Bob.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Contact").innerHTML = whole_sentence;
}


