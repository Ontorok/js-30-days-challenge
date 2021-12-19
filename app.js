const secondHand = document.querySelector('.second-hand');
const minhand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();


    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minhand.style.transform = `rotate(${minsDegree}deg)`;


    const hour = (now.getHours() - 12);

    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);