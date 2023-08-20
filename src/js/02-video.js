// task 7
import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

// task 5 & task 7
const VP_CURRENT_TIME = "videoplayer-current-time";
const REFRESH_TIME = 1000; //current time update every 1s

// task 3 - vimeo player initialization
const findVimeoPlayer = document.querySelector("#vimeo-player");
const player = new Vimeo(findVimeoPlayer);

// console log title of movie
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

// task 5 & 6 - player initialization & current time in local sorage
player.setCurrentTime(Math.round(localStorage.getItem(VP_CURRENT_TIME)))
// seconds = the actual time that the player seeked to
.then(seconds => console.log(`seconds: ${seconds} = the actual time that the player seeked to`))
// the time was less than 0 or greater than the video’s duration
.catch(error => console.log(`${error} the time was less than 0 or greater than the video’s duration`));

// on(event: string, callback: function): void
const onPlay = timeUpdate => {
    player.getEnded().then(ended => {
        // ended = whether or not the video has ended
        if(ended) {
            console.log(`The video has ended`);
            localStorage.setItem(VP_CURRENT_TIME, 0)
        } else {
            console.log("The video is being played");
            localStorage.setItem(VP_CURRENT_TIME, timeUpdate.seconds)
        }
    });
}
// Events  *** task 7
player.on('timeupdate', throttle(onPlay, REFRESH_TIME));


