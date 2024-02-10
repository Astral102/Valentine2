function sound2() {
var snd = new Audio('./media/NO! Sound Effect.mp3');
snd.play();
}

function sound() {
    var snd = new Audio('./media/yay.mp3');
    snd.play();
    }


    const button = document.getElementById('no');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert(':(')
})