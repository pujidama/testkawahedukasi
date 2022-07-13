// Puji Damayanti
// Soal 2

var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

re = /^[a-zA-Z _!]*$/;

    if(input1.match(re)){
     console.log(input1);
    }else {
      console.log(false)
    }
    
    if(input2.match(re)){
     console.log(input2);
    }else {
      console.log(false)
    }

    if(input3.match(re)){
     console.log(input3);
    }else {
      console.log(false)
    }

    if(input4.match(re)){
     console.log(input4);
    }else {
      console.log(false)
    }