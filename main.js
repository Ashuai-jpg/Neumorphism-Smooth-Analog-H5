const sec = document.getElementById("sec")
const min = document.getElementById("min")
const hr = document.getElementById("hr")
const clockNum = document.querySelector(".digital")
const date = new Date();


/** 
 * smooth hands
*/
function moveHands() {
    const secs = date.getSeconds(),
        mins = date.getMinutes() * 60 + date.getSeconds(),
        hours = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    sec.style.animationDelay = `-${secs}s`;
    min.style.animationDelay = `-${mins}s`;
    hr.style.animationDelay = `-${hours}s`;
}
function digiFormatter() {
    const time = new Date();
    let ss = time.getSeconds();
    let mm = time.getMinutes();
    let hh = time.getHours();
    let dayNight = "AM"
    let digitHours
    if (hh > 12) {
        dayNight = "PM";
        digitHours = hours - 12;
    }
    if (ss < 10) {
        ss = '0' + ss;
    }
    if (mm < 10) {
        mm = '0' + mm
    };
    if (hh < 10) {
        hh = '0' + hh
    };
    clockNum.textContent = `${hh} : ${mm} : ${ss} : ${dayNight}`
    console.log(clockNum.textContent)
}
setInterval(() => {
    moveHands()
    digiFormatter()
}, 1000);

