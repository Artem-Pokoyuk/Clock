function clock() {
    const hoursArrow = document.querySelector('.hours');
    const minutesArrow = document.querySelector('.minutes');
    const secondsArrow = document.querySelector('.seconds');
 const deg = 6; 

 setInterval(() => {
    let time = new Date();

    const hours = time.getHours() * 30; 
    const minutes = time.getMinutes() * deg; 
    const seconds = time.getSeconds() * deg;

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)` 
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`
 }, 0)
}
clock()