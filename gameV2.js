const playerImg = document.querySelectorAll('.area-player img');
const komputerImg = document.querySelector('.area-komputer img.img-komputer');
const info = document.querySelector('.info');
let pilihanPlayer;
let skorKomputer = 0;
let skorPlayer = 0;

function getPilihanKomputer() {
    let pilihanKomputer = Math.random();
    if (pilihanKomputer < 0.34) return 'gajah';
    if (pilihanKomputer >= 0.34 && pilihanKomputer < 0.67) return 'orang';
    return 'semut';
}

function getHasil(pilihanKomputer, pilihanPlayer) {
    if (pilihanPlayer == pilihanKomputer) return 'SERI!';
    if (pilihanPlayer == 'gajah') return (pilihanKomputer == 'orang') ? 'MENANG!' : 'KALAH!';
    if (pilihanPlayer == 'orang') return (pilihanKomputer == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (pilihanPlayer == 'semut') return (pilihanKomputer == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar() {
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(() => {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        komputerImg.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;
    }, 100);
}

playerImg.forEach(pilih => {
    pilih.addEventListener('click', () => {
        pilihanPlayer = pilih.className;
        putar();
        setTimeout(() => {
            let pilihanKomputer = getPilihanKomputer();
            komputerImg.setAttribute('src', 'img/' + pilihanKomputer + '.png');
            let result = getHasil(pilihanKomputer, pilihanPlayer);
            info.innerHTML = result;
            if(result == 'MENANG!'){
                skorPlayer++;
            }else if(result == 'KALAH!') {
                skorKomputer++;
            }
            const skor = document.querySelector('.skor');
            skor.innerHTML = 'Comp ' + skorKomputer + ' - Player ' + skorPlayer;
        }, 1000);
    })
});

