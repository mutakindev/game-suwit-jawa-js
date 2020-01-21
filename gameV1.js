var tanya = true;
while (tanya) {
    var choose = prompt('pilih : gajah, semut, orang');

    var comp = Math.random();

    if( comp < 0.34){
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang'
    } else {
        comp = 'semut';
    }


    var result = '';
    if( choose == comp){
        result = 'SERI!';
    } else if(choose == 'gajah' ){
        result = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if(choose == 'orang'){
        result = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if(choose == 'semut'){
        result = (comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
        result = 'memasukan pilihan yang salah!';
    }

    alert(`Kamu memilih : ${choose} dan komputer memilih :  ${comp}
    Maka hasilnya : kamu ${result}`);

    tanya = confirm('main lagi ?');
}

alert('terimakasih sudah bermain.');