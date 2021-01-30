  
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.backgroundColor = 'red';

    setTimeout(() => {
        document.body.style.backgroundColor = 'gray';
    }, 7000);
});


document.getElementById("greenButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 'green';
})

document.getElementById("yellowButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 'yellow';
})

document.getElementById("pinkButton").addEventListener("click", () => {
    document.body.style.backgroundColor = 'pink';
})

document.getElementById("greenButton").addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = 'cyan';
});

document.getElementById("greenButton").addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = 'black';
});