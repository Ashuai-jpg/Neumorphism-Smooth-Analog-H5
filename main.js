const deg = 6

const sec = document.getElementById("sec")
const min = document.getElementById("min")
const hr = document.getElementById("hr")
const date = new Date();
// setInterval(() => {
//     let date = new Date();
//     let ss = date.getSeconds() * deg;
//     let mm = date.getMinutes() * deg;
//     let hh = date.getHours() * 30;

//     sec.style.transform = `rotateZ($(ss)deg)` 
//     this.sec.style.transform = `rotateZ(${ss}deg)`
//     this.min.style.transform = `rotateZ(${mm}deg)`
//     this.hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
//     console.log(`every angel: hr:${hh}, min:${mm}, sec:${ss}`)
//     let ms = date.getMilliseconds()
//     console.log(ms)
// }, 10);


/** 
 * smooth hands
*/

function moveHands() {
    const secs = date.getSeconds(),
        mins = date.getMinutes() * 60,
        hours = date.getHours() * 3600;
        sec.style.animationDelay= `-${secs}s`;
        min.style.animationDelay= `-${mins}s`;
        hr.style.animationDelay= `-${hours}s`;
    console.log(`every angel: hr:${sec.style}, min:${min.style}, sec:${hr.style}`)
}  
moveHands()

