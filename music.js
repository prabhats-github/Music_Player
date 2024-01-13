let audioplayer=document.getElementById("audioplayer")
let i1=document.getElementById("i1");

let playbtn=document.getElementById("playbtn")
playbtn.addEventListener('click',function(){
    audioplayer.play();

    
})

let pausebtn=document.getElementById("pausebtn")
pausebtn.addEventListener('click',function(){
    audioplayer.pause();
})

let restartbtn=document.getElementById("restartbtn")
restartbtn.addEventListener('click',function(){
    audioplayer.currentTime=audioplayer.currentTime=0;
})

let bckbtn=document.getElementById("bckbtn")
bckbtn.addEventListener('click',function(){
    audioplayer.currentTime=audioplayer.currentTime-10;
    
})


let fwbtn=document.getElementById("fwbtn")
fwbtn.addEventListener('click',function(){
    audioplayer.currentTime=audioplayer.currentTime+10;
})

let halfspeed=document.getElementById("halfspeed")
halfspeed.addEventListener('click',function(){
    audioplayer.playbackRate=0.5;
})

let highspeed=document.getElementById("highspeed")
highspeed.addEventListener('click',function(){
    audioplayer.playbackRate=2*2;
})



let arr=[{id_1:1,music_name:'The_Neighbourhood_-_Softcore',music_img:'img1.jpg',music_path:'The_Neighbourhood_-_Softcore_(ColdMP3.com).mp3'}, 

{id_1:2,music_name:'Dhoom Anthem',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'Dhoom Anthem (Saba Azad) - 190Kbps.mp3'},

{id_1:3,music_name:'Bande Hain Hum Uske ',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'05 Bande Hain Hum Uske - Shivam.mp3.mp3'},

{id_1:4,music_name:'Kamli - Sunidhi Chauhan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'02 Kamli - Sunidhi Chauhan.mp3'},

{id_1:5,music_name:' Tu Hi Junoon - Mohit Chauhan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'03 Tu Hi Junoon - Mohit Chauhan.mp3'},

{id_1:6,music_name:' Dhoom Machale Dhoom',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'04 Dhoom Machale Dhoom - Aditi Singh Sharma.mp3'},

{id_1:7,music_name:'Cheques - Shubh',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113801/152087-cheques-shubh-mp3-song-300.jpg',music_path:'Cheques - Shubh.mp3'},

{id_1:8,music_name:' Still Rollin - Shubh',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113801/152092-still-rollin-shubh-mp3-song-300.jpg',music_path:'Still Rollin - Shubh.mp3'},


{id_1:9,music_name:'Tu hai kahan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113510/152104-tu-hai-kahan-mp3-song-300.jpg',music_path:'Tu hai kahan.mp3'},

{id_1:10,music_name:'Laado',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113510/151904-laado-mp3-song-300.jpg',music_path:'Laado.mp3'},]

var play =document.getElementById('playlist_wrapper')
for(var i = 0;i<arr.length;i++){
    play.innerHTML+=`<div onclick="playfunction(${arr[i].id_1})"
    id="card1" class="playlist-card">
    <img class="thumbnail" src="${arr[i].music_img}" alt="">
    <h3 class="music_card_title" >${arr[i].music_name}</h3>`
}

let ganna=document.getElementById("idplay12")
ganna.innerHTML="Listen your favourite music..."

function playfunction(id_1){
    ganna.innerHTML=`<img src=${arr[id_1-1].music_img}
    "alt="" height="200px width="200px">`
    audioplayer.src=`${arr[id_1-1].music_path}`
}