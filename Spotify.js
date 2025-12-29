console.log("welcome to the Spotify");

let songindex = 0;
let audioelement = new Audio('audio1.mp3')

let masterplay =document.getElementById('masterplay')
let myprogressbar = document.getElementById('myprogressbar')
let gif = document.getElementById('gif')
let songitem = Array.from(document.getElementsByClassName('songitem'))


let songs = [
    {songName: "Dhakk Champion", filePath: "audio1.mp3", coverPath: "cover.jpg"},
    {songName: "Haseen", filePath: "audio.mp3", coverPath: "bg.jpg"},
    {songName: "Dhakk Champion", filePath: "audio1.mp3", coverPath: "cover.jpg"},
    {songName: "Haseen", filePath: "audio.mp3", coverPath: "bg.jpg"},
    {songName: "Dhakk Champion", filePath: "audio1.mp3", coverPath: "cover.jpg"},
    {songName: "Haseen", filePath: "audio.mp3", coverPath: "bg.jpg"},
    {songName: "Dhakk Champion", filePath: "audio1.mp3", coverPath: "cover.jpg"},
    {songName: "Haseen", filePath: "audio.mp3", coverPath: "bg.jpg"},
    {songName: "Dhakk Champion", filePath: "audio1.mp3", coverPath: "cover.jpg"},
    {songName: "Haseen", filePath: "audio.mp3", coverPath: "bg.jpg"},

]
songitem.forEach((element,i) =>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    
})


// audioelement.play()
// handle play puse click
masterplay.addEventListener('click',()=>{
    if(audioelement.paused|| audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;


    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity = 0;

    }
})
// listen to the events
audioelement.addEventListener('timeupdate',()=>{
    progress = parseInt(( audioelement.currentTime/audioelement.duration)*100)
    myprogressbar.value = progress;    

    
})
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;

})
const makeallplay = ()=>{
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        songindexindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioelement.src = songs[songindex].filePath;
        audioelement.currentTime= 0;
        audioelement.play();
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
    })
})