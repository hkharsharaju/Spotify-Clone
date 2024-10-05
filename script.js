const music = new Audio('audio/12.mp3');

const songs = [
    {
        id: "1",
        songName: `Shivoham <br>
        <div class="subtitle">
            Haricharan
        </div>`,
        poster: 'Images/1.jpg',
    },

    {
        id: "2",
        songName: `Priya Mithunam <br>
        <div class="subtitle">
            Karthik
        </div>`,
        poster: 'Images/2.jpg',
    },

    {
        id: "3",
        songName: `Jai ShriRam <br>
        <div class="subtitle">
            Ajay Atul
        </div>`,
        poster: 'Images/3.jpg',
    },

    {
        id: "4",
        songName: `Huppa Huyiya <br>
        <div class="subtitle">
            Sukhwinder Singh
        </div>`,
        poster: 'Images/4.jpg',
    },

    {
        id: "5",
        songName: `Baitikochi Chuste <br>
        <div class="subtitle">
            Anirudh Ravichandar
        </div>`,
        poster: 'Images/5.jpg',
    },

    {
        id: "6",
        songName: `Gaali Valugaa <br>
        <div class="subtitle">
            Anirudh Ravichandar
        </div>`,
        poster: 'Images/6.jpg',
    },

    {
        id: "7",
        songName: `Kodakaa Koteswar Rao <br>
        <div class="subtitle">
            Pawan Kalyan
        </div>`,
        poster: 'Images/7.jpg',
    },

    {
        id: "8",
        songName: `Buttabomma <br>
        <div class="subtitle">
            Armaan Malik
        </div>`,
        poster: 'Images/8.jpg',
    },

    {
        id: "9",
        songName: `OMG Daddy <br>
        <div class="subtitle">
            Roll Rida
        </div>`,
        poster: 'Images/9.jpg',
    },

    {
        id: "10",
        songName: `Ramuloo Ramula <br>
        <div class="subtitle">
            Anurag Kulkarni
        </div>`,
        poster: 'Images/10.jpg',
    },

    {
        id: "11",
        songName: `Samajavaragamana <br>
        <div class="subtitle">
            Sid Sriram
        </div>`,
        poster: 'Images/11.jpg',
    },

    {
        id: "12",
        songName: `Anaganaganaga <br>
        <div class="subtitle">
            Arman Malik
        </div>`,
        poster: 'Images/12.jpg',
    },

    {
        id: "13",
        songName: `Peniviti <br>
        <div class="subtitle">
            Kaala Bhairava
        </div>`,
        poster: 'Images/13.jpg',
    },

    {
        id: "14",
        songName: `Reddamma Thalli <br>
        <div class="subtitle">
            Penchal Das
        </div>`,
        poster: 'Images/14.jpg',
    },
    {
        id: "15",
        songName: `Reddy Ikkada Soodu <br>
        <div class="subtitle">
            daler Mehendi
        </div>`,
        poster: 'Images/15.jpg',
    },
    {
        id: "16",
        songName: `Yeda Poyindo <br>
        <div class="subtitle">
            Nikhitha Srivalli
        </div>`,
        poster: 'Images/16.jpg',
    },
    {
        id: "17",
        songName: `Kadalalle <br>
        <div class="subtitle">
            Justin Prabhakaran
        </div>`,
        poster: 'Images/17.jpg',
    },
    {
        id: "18",
        songName: `Nee Neeli kannullona <br>
        <div class="subtitle">
            Gowtham Bharadwaj
        </div>`,
        poster: 'Images/18.jpg',
    },
    {
        id: "19",
        songName: `Bonalu <br>
        <div class="subtitle">
            Rahul Sipligunj
        </div>`,
        poster: 'Images/19.jpg',
    },
    {
        id: "20",
        songName: `Dhimaak Kharab <br>
        <div class="subtitle">
            Keerthana Sharma
        </div>`,
        poster: 'Images/20.jpg',
    },
    {
        id: "21",
        songName: `Ismart <br>
        <div class="subtitle">
            Anurag Kulkarni
        </div>`,
        poster: 'Images/21.jpg',
    },
    {
        id: "22",
        songName: `Undipoo <br>
        <div class="subtitle">
            Anurag Kulkarni
        </div>`,
        poster: 'Images/22.jpg',
    },
    {
        id: "23",
        songName: `Adento Ganni Vunnapatuga <br>
        <div class="subtitle">
            Anirudh Ravichandar
        </div>`,
        poster: 'Images/23.jpg',
    },
    {
        id: "24",
        songName: `Spirit Of Jersey <br>
        <div class="subtitle">
            Kaala Bhairava
        </div>`,
        poster: 'Images/24.jpg',
    },
    {
        id: "25",
        songName: `Dakko Dakko Meka <br>
        <div class="subtitle">
            Shivam
        </div>`,
        poster: 'Images/25.jpg',
    },
    {
        id: "26",
        songName: `Eyy Bidda Idhi Naa Adda <br>
        <div class="subtitle">
            Nakash Aziz
        </div>`,
        poster: 'Images/26.jpg',
    },
    {
        id: "27",
        songName: `Oo Antava Oo Oo Antava <br>
        <div class="subtitle">
            Indravathi Chauhan
        </div>`,
        poster: 'Images/27.jpg',
    },
    {
        id: "28",
        songName: `Saami Saami <br>
        <div class="subtitle">
            Mounika Yadav
        </div>`,
        poster: 'Images/28.jpg',
    },
    {
        id: "29",
        songName: `Srivalli <br>
        <div class="subtitle">
            Sis Sriram
        </div>`,
        poster: 'Images/29.jpg',
    },
    {
        id: "30",
        songName: `Dosti <br>
        <div class="subtitle">
            Hemachandra
        </div>`,
        poster: 'Images/30.jpg',
    },
    {
        id: "31",
        songName: `Etthara Jenda  <br>
        <div class="subtitle">
            Vishal Mishra
        </div>`,
        poster: 'Images/31.jpg',
    },
    {
        id: "32",
        songName: `Komuram Bheemudo <br>
        <div class="subtitle">
            Kaala Bhairava
        </div>`,
        poster: 'Images/32.jpg',
    },
    {
        id: "33",
        songName: `Nattu Nattu <br>
        <div class="subtitle">
            Rahul Sipligunj
        </div>`,
        poster: 'Images/33.jpg',
    },
    {
        id: "34",
        songName: `Inthandham <br>
        <div class="subtitle">
            SPB Charan
        </div>`,
        poster: 'Images/34.jpg',
    },
    {
        id: "35",
        songName: `Kaanunna Kalyanam <br>
        <div class="subtitle">
            Anurag Kulkarni
        </div>`,
        poster: 'Images/35.jpg',
    },
    {
        id: "36",
        songName: `Oh Sita Hey Rama <br>
        <div class="subtitle">
            Sushmita
        </div>`,
        poster: 'Images/36.jpg',
    }
]

const pic =[
    {
        id:"37",
        poster:'Images/37.jpg',
    },
    {
        id:"38",
        poster:'Images/38.jpg',
    },
    {
        id:"39",
        poster:'Images/39.jpg',
    },
    {
        id:"40",
        poster:'Images/40.jpg',
    },
    {
        id:"41",
        poster:'Images/41.jpg',
    },
    {
        id:"42",
        poster:'Images/42.jpg',
    },
    {
        id:"43",
        poster:'Images/43.jpg',
    },
    {
        id:"44",
        poster:'Images/44.jpg',
    },
    {
        id:"45",
        poster:'Images/45.jpg',
    },
    {
        id:"46",
        poster:'Images/46.jpg',
    },
    {
        id:"47",
        poster:'Images/47.jpg',
    },
    {
        id:"48",
        poster:'Images/48.jpg',
    }

]
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('Img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

Array.from(document.querySelectorAll('.item li')).forEach((e, j) => {
    e.querySelector('img').src = pic[j].poster;
});

let masterplay = document.getElementById('masterPlay');

masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

let index = 1;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `Images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});



let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;

back.addEventListener('click', () => {
    index -= 1;
    if(index <1){
        index = Array.from(document.getElementsByClassName('songItem')).length; 
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllPlays();
    wave.classList.add('active1');
});


next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `Images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
    makeAllPlays();
    wave.classList.add('active1');
});
