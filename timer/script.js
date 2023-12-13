const circle = document.querySelector('.circle');

const rad = circle.r.baseVal.value

const circleArea = 2 * Math.PI * rad;

function setTime(percent) {
    circle.style.strokeDashoffset = (circleArea - percent / 100 * circleArea)
}

