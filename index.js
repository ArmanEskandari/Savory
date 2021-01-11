function openSide() {
    document.querySelector('.sidenav2').style.width = "160px";
    document.querySelector(".navButton").style.marginLeft = "160px";
    document.getElementById('btn').innerHTML = '&#x2716;';
    document.getElementById('btn').style.backgroundColor = 'white';
    document.getElementById('btn').style.color = 'black';
}

function closeSide() {
    document.querySelector('.sidenav2').style.width = "0px";
    document.querySelector(".navButton").style.marginLeft = "0px";
    document.getElementById('btn').innerHTML = '&#9776;';
    document.getElementById('btn').style.backgroundColor = 'black';
    document.getElementById('btn').style.color = 'white ';
}

let count = 0;
document.getElementById('btn').addEventListener('click', clickCounter);

function clickCounter() {
    count++
    if (count % 2 == 0) {
        closeSide();
    } else {
        openSide();
    };
}