/*More functionalities to be added in the future (Next And Previous And also proper pausing and playing),
If and only if i have time, 
I know There are quite a few bugs or abnormalities but as this project is very small and not so 
complicated, i decided not to waste to much time on it.
Beside, this project is mainly for the UI aspect..
And This Project was poorly planned as i designed (in figma) and developed this project in just 4 days.

*/

window.addEventListener("load", function () {
  Swal.fire(
    "Some Features Of Player Are Yet To Be Added.",
    "You Still Can Use Play & Pause of Player, But first you need play a song from the playlist, in order to use play & pause Button of the player (not applicable for moblie or tablet users) .",
    "info"
  );
});

let progress = document.getElementById("progress");
let previousBtn = document.getElementById("previous");
let playerPlay = document.getElementById("player-play");
let playerPause = document.getElementById("player-pause");
let nextBtn = document.getElementById("next");
//Notice For previous & Next Button
previousBtn.addEventListener("click", function () {
  Swal.fire(
    'Why Isn"t it Working?',
    "Prev Feature Is Yet To Be Added.",
    "question"
  );
});

nextBtn.addEventListener("click", function () {
  Swal.fire(
    'Why Isn"t it Working?',
    "Next Feature Is Yet To Be Added.",
    "question"
  );
});

// importing Tracks
const track1 = new Audio();
track1.src = "Tracks/track1.mp3";
const track2 = new Audio();
track2.src = "Tracks/track2.mp3";
const track3 = new Audio();
track3.src = "Tracks/track3.mp3";
const track4 = new Audio();
track4.src = "Tracks/track4.mp3";
const track5 = new Audio();
track5.src = "Tracks/track5.mp3";
const track6 = new Audio();
track6.src = "Tracks/track6.mp3";
const track7 = new Audio();
track7.src = "Tracks/track7.mp3";
const track8 = new Audio();
track8.src = "Tracks/track8.mp3";
const track9 = new Audio();
track9.src = "Tracks/track9.mp3";
const track10 = new Audio();
track10.src = "Tracks/track10.mp3";
// array of tracks
trackList = [
  track1,
  track2,
  track3,
  track4,
  track5,
  track6,
  track7,
  track8,
  track9,
  track10,
];
// console.log(track1.currentTime);

//Getting Current Time of the tracks
for (let i = 0; i < trackList.length; i++) {
  trackList[i].addEventListener("timeupdate", (e) => {
    let cur_time = e.path[0].currentTime;
    let duration = e.path[0].duration;
    let timeLapse = (cur_time / duration) * 100;
    progress.style.width = `${timeLapse}%`;
  });
}

// Track Details

const trackDes = [
  {
    artist: "Alan Walker",
    name: "Fade",
  },
  {
    artist: "Cartoon",
    name: "ON & ON",
  },

  {
    artist: "Syn Cole",
    name: "Feel Good",
  },

  {
    artist: "Tobu",
    name: "Infectious",
  },

  {
    artist: "Jim Yosef",
    name: "Firefly",
  },

  {
    artist: "Culture Code",
    name: "Make Me Move",
  },

  {
    artist: "Lost Sky",
    name: "Dreams pt.II",
  },

  {
    artist: "Vanze",
    name: "Survive",
  },

  {
    artist: "Verm",
    name: "Explode",
  },

  {
    artist: "DEAF KEV",
    name: "Safe & Sound",
  },
];

// console.log(trackDes.length);

for (let i = 0; i < trackDes.length; i++) {
  // console.log(trackDes[i].name);
  let trackName = trackDes[i].name;
  let artistName = trackDes[i].artist;
  let n = i + 1;
  //Appending The Track Details using Jquery
  $(`.track${n}`).append(
    `<img src="./Images/ncs1.jpg" class="responsive-img" alt=""><h4>${artistName} - ${trackName}</h4><div class="Play-pause"><i class="fa fa-play"><span class="num">${n}</span></i><i class="fa fa-pause"><span class="num">${n}</span></i>`
  );
}
//Calling The Play Function
let playlist = document.querySelectorAll(".fa-play").length;
for (let i = 0; i < playlist; i++) {
  let playbtn = document.querySelectorAll(".fa-play")[i];
  playbtn.addEventListener("click", playit);
}
//Calling The Pause Function
for (let i = 0; i < playlist; i++) {
  let pausebtn = document.querySelectorAll(".fa-pause")[i];
  pausebtn.addEventListener("click", pauseit);
}
//declaring & initialization few Var after Appending
let musicName = document.getElementById("track-name");
let artistName = document.getElementById("artist-name");
let coverImage = document.getElementById("cover-image");
let playbtn = document.querySelectorAll(".fa-play");
let pausebtn = document.querySelectorAll(".fa-pause");

//Main Play function
function playit() {
  // let num = document.querySelectorAll(".fa-car");
  // console.log(this.innerText);

  let text = this.innerText;
  switch (text) {
    case "1":
      track1.play();
      showPauseBtn(0);
      GetTrackDetails(0);

      break;

    case "2":
      track2.play();
      showPauseBtn(1);
      GetTrackDetails(1);
      break;

    case "3":
      track3.play();
      showPauseBtn(2);
      GetTrackDetails(2);
      break;

    case "4":
      track4.play();
      showPauseBtn(3);
      GetTrackDetails(3);
      break;

    case "5":
      track5.play();
      showPauseBtn(4);
      GetTrackDetails(4);
      break;

    case "6":
      track6.play();
      showPauseBtn(5);
      GetTrackDetails(5);
      break;

    case "7":
      track7.play();
      showPauseBtn(6);
      GetTrackDetails(6);
      break;

    case "8":
      track8.play();
      showPauseBtn(7);
      GetTrackDetails(7);
      break;

    case "9":
      track9.play();
      showPauseBtn(8);
      GetTrackDetails(8);
      break;

    case "10":
      track10.play();
      showPauseBtn(9);
      GetTrackDetails(9);
      break;
  }
  //Function For The player Play Button
  current = text;
  if (trackList[current].paused) {
    function playerPlayIt() {
      trackList[current - 1].play();
      playerPlay.style.display = "none";
      playerPause.style.display = "inline";
    }
    playerPlay.addEventListener("click", playerPlayIt);
  }
}
//Main Pause function
function pauseit() {
  let text = this.innerText;
  switch (text) {
    case "1":
      track1.pause();
      hidePauseBtn(0);
      break;

    case "2":
      track2.pause();
      hidePauseBtn(1);
      break;

    case "3":
      track3.pause();
      hidePauseBtn(2);
      break;

    case "4":
      track4.pause();
      hidePauseBtn(3);
      break;

    case "5":
      track5.pause();
      hidePauseBtn(4);
      break;

    case "6":
      track6.pause();
      hidePauseBtn(5);
      break;

    case "7":
      track7.pause();
      hidePauseBtn(6);
      break;

    case "8":
      track8.pause();
      hidePauseBtn(7);
      break;

    case "9":
      track9.pause();
      hidePauseBtn(8);
      break;
    case "10":
      track10.pause();
      hidePauseBtn(9);
      break;
  }
  //Function For The player Pause Button
  if (trackList[text].played) {
    function playerPauseIt() {
      trackList[text - 1].pause();
      playerPlay.style.display = "inline";
      playerPause.style.display = "none";
    }
  }

  playerPause.addEventListener("click", playerPauseIt);
}

//Toogling The Pause And Play Button
let showPauseBtn = (n) => {
  pausebtn[n].style.display = "block";
  playbtn[n].style.display = "none";
};

let hidePauseBtn = (n) => {
  pausebtn[n].style.display = "none";
  playbtn[n].style.display = "block";
};

// Track Details For Player
let GetTrackDetails = (n) => {
  musicName.innerHTML = trackDes[n].name;
  artistName.innerHTML = trackDes[n].artist;
  coverImage.src = `Images/cover${n + 1}.jpg`;
};
