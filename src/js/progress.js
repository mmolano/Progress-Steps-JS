export function progress(next, param, stepSentence = 0) {

    const sentence = [
        {
            step0: 'step 1',
            step1: 'step 2',
            step2: 'step 3'
        }
    ];

    const progressText = [...document.querySelectorAll(".step p")];
    const progressCheck = [...document.querySelectorAll(".step .ovSelect")];
    const bullet = [...document.querySelectorAll(".step .bullet")];
    let current = param;

    for (let _i = 0; _i < progressText.length; _i++) {
        progressText[_i].innerHTML = sentence[stepSentence]['step'+_i]
    }

    if (next === true && bullet[current - 1]) {
        bullet[current - 1].classList.add("active");
        bullet[current].classList.add("preg");
        progressCheck[current - 1].classList.remove("active");
        if (bullet[current - 1].classList.contains("backStep")) {
            bullet[current - 1].classList.remove("backStep");
        }
        progressCheck[current].classList.add("active");
        progressText[current - 1].classList.add("active");
        progressText[current].classList.add("active");
        current += 1;
    } else if (next === false) {
        bullet[current - 1].classList.remove("active");
        bullet[current - 1].classList.add("backStep");
        bullet[current].classList.remove("preg");
        progressCheck[current].classList.remove("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current].classList.remove("active");
        progressText[current - 1].classList.add("active");
        current -= 1;
    }
}

export function mobileProgress(next, param) {
    const bg = [...document.querySelectorAll(".steps")];
    let current = param;

    if (next === true && bg[current - 1]) {
        bg[current - 1].classList.add("active");
        bg[current].classList.add("active");
        current += 1;
    } else if (next === false) {
        bg[current].classList.remove("active");
        bg[current].classList.add("backStep");
        current -= 1;
    }
}

