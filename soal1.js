// Puji Damayanti
// Soal 1

var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

var a = 1
var b = 2
var c = 4
var d = 2
var e = 1
var f = 8
var g = 3
var h = 2
var i = 4
var j = 1

var count1 = data1.filter(a => a === 1).length;
var count2 = data1.filter(b => b === 2).length;
var count3 = data1.filter(c => c === 4).length;
var count4 = data2.filter(d=> d === 2).length;
var count5 = data2.filter(e => e === 1).length;
var count6 = data2.filter(f => f === 8).length;
var count7 = data3.filter(g => g === 3).length;
var count8 = data3.filter(h => h === 2).length;
var count9 = data3.filter(i => i === 4).length;
var count10 = data3.filter(j => j === 1).length;

console.log("Data 1 :");
if (count1 > count2 && count1 > count3){
    console.log(`total data paling banyak keluar adalah ${a} dengan jumlah ${count1}` );
} else if (count2 > count1 && count2 > count3){
    console.log(`total data paling banyak keluar adalah ${b} dengan jumlah ${count2}` );
} else {
    console.log(`total data paling banyak keluar adalah ${c} dengan jumlah ${count3}` );
}
console.log("\n");

console.log("Data 2 :");
if (count4 > count5 && count4 > count6){
    console.log(`total data paling banyak keluar adalah ${d} dengan jumlah ${count4}` );
} else if (count5 > count4 && count5 > count6){
    console.log(`total data paling banyak keluar adalah ${e} dengan jumlah ${count5}` );
} else {
    console.log(`total data paling banyak keluar adalah ${f} dengan jumlah ${count6}` );
}
console.log("\n");

console.log("Data 3 :");
if (count7 > count8 && count7 > count9 && count7 > count10){
    console.log(`total data paling banyak keluar adalah ${g} dengan jumlah ${count7}` );
} else if (count8 > count7 && count8 > count9 && count8 > count10){
    console.log(`total data paling banyak keluar adalah ${h} dengan jumlah ${count8}` );
} else if (count9 > count7 && count9 > count8 && count8 > count10){
    console.log(`total data paling banyak keluar adalah ${i} dengan jumlah ${count9}` );
} else {
    console.log(`total data paling banyak keluar adalah ${j} dengan jumlah ${count10}` );
}

