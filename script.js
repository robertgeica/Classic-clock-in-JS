const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60 ) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hoursDegrees = ((hour / 12) * 360)+ 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds);
}
setInterval(setDate, 1000);


function circularText(txt, radius, classIndex) {
    txt = txt.split(",");
    classIndex = document.getElementsByClassName("circTxt")[classIndex];

    let deg = 360 / txt.length;
    origin = 0;

    txt.forEach((element) => {
        element = `<p style='height:${radius}px;
                            position: absolute;
                            transform: rotate(${origin}deg);
                            transform-origin: 0 100%'>${element}
                    </p>`;

        classIndex.innerHTML += element;
        origin += deg;
    });
}
circularText("12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11", 160, 0);