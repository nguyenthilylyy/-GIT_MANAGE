//Tinh lai suat ngan hang

let money = +prompt("Nhap so tien:");
let rate = +prompt("Nhap lai suat:");
let time = +prompt("Nhap so nam:");
interest = money + time * (money * rate/100);

document.write("So tien nhan lai sau " + time + " nam la:" + interest);
