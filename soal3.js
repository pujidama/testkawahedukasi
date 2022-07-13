// Puji Damayanti
// Soal 3

var hasil1 = "";
for (var x=1; x<=6; x++) {
    for (var y=1; y<=x; y++) {
        hasil1 += "*";
    }
    hasil1 += "\n";
}

console.log("Output 1 :");
console.log(hasil1); // menampilkan hasil


var hasil2 = "";
for (var i=1; i<=6; i++) {
    for (var j=i; j<=6; j++) {}
        for (var k=1; k<=i; k++){
            hasil2 += "*";
        }
    hasil2 += "\n";
}

console.log("Output 2 :");
console.log(hasil2);