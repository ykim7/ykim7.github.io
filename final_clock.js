const clock = document.querySelector(".jsClock");

function getTime() {
    const nowTime = new Date();
    const hours = String(nowTime.getHours()).padStart(2,"0");
    const minutes = String(nowTime.getMinutes()).padStart(2,"0");
    const seconds = String(nowTime.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);
