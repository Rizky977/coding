// ==============================
// Ambil Elemen
// ==============================

const pages = document.querySelectorAll(".page");

const startBtn = document.getElementById("startBtn");
const galleryBtn = document.getElementById("galleryBtn");
const endBtn = document.getElementById("endBtn");
const loveBtn = document.getElementById("loveBtn");

const typing = document.getElementById("typing");

const popup = document.getElementById("popup");




// ==============================
// Fungsi Pindah Halaman
// ==============================

function showPage(id){

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}


// ==============================
// Surat
// ==============================

const message =

`Selamat ulang tahun Titi🌷

Semoga di usiamu yang baru,
kamu selalu diberikan kesehatan,
kebahagiaan,
dan semua hal baik yang pantas kamu dapatkan.

Tetaplah menjadi dirimu sendiri,
karena itulah yang membuatmu istimewa.

Semoga hari ini dipenuhi
senyum,tawa,
dan orang-orang yang menyayangimu.

Happy Birthday ❤️`;

let index = 0;

function typeLetter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,45);

    }

}



// ==============================
// Tombol Awal
// ==============================

startBtn.onclick = ()=>{

    showPage("letter");

    typeLetter();

    

}



// ==============================
// Galeri
// ==============================

galleryBtn.onclick = ()=>{

    showPage("gallery");

}



const slides = document.querySelectorAll(".slide");

const captions = [

"Senyummu selalu indah 🌸",

"Semoga semua doa baikmu terkabul 🤍",

"Happy Birthday ❤️"

];

const caption = document.getElementById("caption");

let current = 0;

setInterval(()=>{

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

    caption.innerHTML = captions[current];

},3500);



// ==============================
// Halaman Terakhir
// ==============================

endBtn.onclick = ()=>{

    showPage("ending");

}



// ==============================
// Popup
// ==============================

loveBtn.onclick = ()=>{

    popup.style.display="flex";

    confetti();

}



// ==============================
// Confetti Sederhana
// ==============================

function confetti(){

    for(let i=0;i<120;i++){

        const item=document.createElement("div");

        item.innerHTML=["❤️","🤍","🌸","✨","🎉"][Math.floor(Math.random()*5)];

        item.style.position="fixed";

        item.style.left=Math.random()*100+"vw";

        item.style.top="-20px";

        item.style.fontSize=(Math.random()*18+18)+"px";

        item.style.transition="5s linear";

        item.style.zIndex="9999";

        document.body.appendChild(item);

        setTimeout(()=>{

            item.style.top="110vh";

            item.style.transform=
            "rotate("+Math.random()*720+"deg)";

        },50);

        setTimeout(()=>{

            item.remove();

        },5000);

    }

}



// ==============================
// Bunga Jatuh
// ==============================

const flowerContainer=document.getElementById("flowers");

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML=["🌸","🌺","💮","🤍"][Math.floor(Math.random()*4)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.animationDuration=
    (Math.random()*4+5)+"s";

    flower.style.fontSize=
    (Math.random()*18+18)+"px";

    flowerContainer.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },9000);

}

setInterval(createFlower,500);



// ==============================
// Klik Popup untuk Menutup
// ==============================

popup.onclick=()=>{

    popup.style.display="none";

}
