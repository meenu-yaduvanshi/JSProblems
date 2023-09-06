
function repeat(str, num) {
    var output = "";
    if (num > 0){
        for (var i = 0; i < num; i++) {
            output = output + str;
        }
    console.log(output);
}
else {
    console.log("error");
}
}

repeat("Meenu" , 4)
repeat("Ping" , 1)
repeat("Ping" , 0)
repeat("Hey" , 2)

