import {mobileProgress, progress} from "./progress";

let nextButton = document.getElementById('next-button');
let previousButton = document.getElementById('previous-button');

mobileProgress(true, 0);
progress(true, 0);

let m = 0;
nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (m !== 2){
        m++;
    }
    mobileProgress(true, m);
    progress(true, m);
    console.log(m);
});

previousButton.addEventListener('click', function (e) {
    e.preventDefault();
    mobileProgress(false, m);
    progress(false, m);
    if (m !== 0) {
        m-- ;
    }
    console.log(m);
});

