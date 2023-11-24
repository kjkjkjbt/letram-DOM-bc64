//---------- bài 1- tính TIỀN LƯƠNG NHÂN VIÊN----->
/* MÔ HÌNH 3 KHỐI:
INPUT: 
- lương 1 ngày: 100,000
- user nhập vào số ngày làm
Process:
-lương 1 ngày *số ngày làm
output:
-tính tiền lương nhân viên
- ĐƯA LÊN GIAO DIỆN
*/

document.getElementById('btn1').onclick = function(){
    luong1Ngay = 100000;
    var soNgayLam = document.getElementById('soNgayLam').value*1 ;
    var ketQua1 =luong1Ngay* soNgayLam;
    console.log(ketQua1);
    document.getElementById('ketQua1').innerHTML= ketQua1.toLocaleString(
        'it-IT', 
        {style : 'currency', currency : 'VND'});
     
}



//-------- bài 2- TÍNH GIÁ TRỊ TRUNG BÌNH----------------->

/* MÔ HÌNH 3 KHỐI:
INPUT: 
-nhập 5 số thực

process:
-tổng 5 số user nhập
-giá trị tb =tổng 5 số/5
output:
- tính giá trị trung bình của 5 số
- đưa lên giao diện
*/

document.getElementById('btn2').onclick=function(){
    var No1 =document.getElementById('N1').value*1;
    var No2 =document.getElementById('N2').value*1;
    var No3 =document.getElementById('N3').value*1;
    var No4 =document.getElementById('N4').value*1;
    var No5 =document.getElementById('N5').value*1;
    ketQua2 = (No1+No2+No3+No4+No5)/5 ;
    console.log(ketQua2);


    document.getElementById('ketQua2').innerHTML=ketQua2;

}

// ------bài 3: QUY ĐỔI TIỀN TỆ USD-VND----->
/*  MÔ HÌNH 3 KHỐI:
 INPUT: 
 -tỉ giá usd: 23,500
 -người dùng nhập vào số tiền vnd

 process:
- tỉ giá usd * số tiền usd 

 output:
 -tính va xuất ra số tiền sau quy đổi sang vnd
 -đưa lên giao diện */

document.getElementById('btn3').onclick=function(){
     Tg_usd =23500; 
    var VND = document.getElementById('Tg_vnd').value*1;
     ketQua3 = Tg_usd * VND ;
     console.log(ketQua3);
     document.getElementById('ketQua3').innerHTML= ketQua3.toLocaleString(
        'it-IT', 
        {style : 'currency', currency : 'VND'});
     
}

// ---------- TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT------->
/*  MÔ HÌNH 3 KHỐI:
INPUT: 
- Chiểu dài hcn (x)
-chiều rộng hcn (y)

process:
- S= x*y
- p (chu vi) =(x+y)*2

output:
- tính toán S, chu vi hcn sau khi user nhập dữ liệu 
- đưa lên giao diện */

document.getElementById('btn4').onclick=function(){
    var x = document.getElementById('chieuDai').value*1;
    var y = document.getElementById('chieuRong').value*1;
    var S = x*y;
    var p = (x + y)*2;
    console.log(S);
    console.log(p);

    ketQua4 = '';
    document.getElementById('ketQua4').innerHTML="Diện tích: " +  (x*y) + " -- " +  "  Chu vi: " +  (x+y)*2 ;
}

// --------------BÀI 5: TÍNH TỔNG 2 KÝ SỐ ----------------->
/*  MÔ HÌNH 3 KHỐI:
INPUT: 
- nhập 1 số bất kỳ, có 2 chữ số : ví dụ (12, 32 )

process:
- lấy số hàng đv: int so_hang_dv= so %10
- lấy sô hàng chục : int so_hang_chuc =so/10
- tính tổng 2 số trong cung 1 số (12=1+2)

output: 
-viết chuong trình user nhập số vào
-tính tổng số vừa nhập
-đưa lên giao diện */


document.getElementById('btn5').onclick=function(){
    var so = document.getElementById('so').value*1;
    var so_hang_dv = so % 10;
    var so_hang_chuc = so / 10;
    var tg = so_hang_chuc * 10 + so_hang_dv;
    console.log(tg);
    
    if (so <= 10) {
        alert("haizzzz vui lòng nhập giá trị > 10 nha bà con ")
    }
    else if (so <= 99) {
        console.log(tg);
    }
    ketQua5 = '';
    document.getElementById('ketQua5').innerHTML="Tổng các ký số là:  " (ketQua5)  ;
    
   

    
}