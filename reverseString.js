function reverseString(str) {
    var string = "";
    for (var i = str.length-1; i>= 0; i--) {
        string += str[i];
    }
    console.log(string);
}
reverseString("Meenu");
reverseString("Yadav");
reverseString("Mahi");
reverseString("Yaduvanshi");