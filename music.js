let audioplayer=document.getElementById("audioplayer")
let i1=document.getElementById("i1");

let playbtn=document.getElementById("playbtn")
playbtn.addEventListener('click',function(){
    audioplayer.play();
    i1.style.height='10px'
    i1.style.width= '89%';
   i1.style.marginLeft= '40px';
   i1.style. marginTop= '-30px';
   i1.style. marginBottom= '10px';
   i1.style. borderRadius= '10px';
   i1.style. border= '1px solid black';
    i1.style.backgroundColor= 'rgb(127, 101, 101)';
    i1.style.animationName= 'fun1';
    i1.style.animationDuration= '20s';
    i1.style.animationDelay= '1s';
    i1.style.animationIterationCount= '1';
    
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



let arr=[{music_name:'Malang',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'Malang.mp3'}, 

{music_name:'Dhoom Anthem',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'Dhoom Anthem (Saba Azad) - 190Kbps'},

{music_name:'Bande Hain Hum Uske ',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'05 Bande Hain Hum Uske - Shivam'},

{music_name:'Kamli - Sunidhi Chauhan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'02 Kamli - Sunidhi Chauhan'},

{music_name:' Tu Hi Junoon - Mohit Chauhan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'03 Tu Hi Junoon - Mohit Chauhan'},

{music_name:' Dhoom Machale Dhoom',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/8517/thumb-dhoom-3-201311-300.jpg',music_path:'04 Dhoom Machale Dhoom - Aditi Singh Sharma'},

{music_name:'Cheques - Shubh',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113801/152087-cheques-shubh-mp3-song-300.jpg',music_path:'Cheques - Shubh'},

{music_name:' Still Rollin - Shubh',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113801/152092-still-rollin-shubh-mp3-song-300.jpg',music_path:'Still Rollin - Shubh'},


{music_name:'Tu hai kahan',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113510/152104-tu-hai-kahan-mp3-song-300.jpg',music_path:'Tu hai kahan'},

{music_name:'Laado',music_img:'https://www.pagalworld.online/GpE34Kg9Gq/113510/151904-laado-mp3-song-300.jpg',music_path:'Laado'},]