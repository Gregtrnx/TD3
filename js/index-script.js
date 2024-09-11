window.addEventListener('click', chat);

function chat(event) {
    let posiX = event.pageX || event.changedTouches[0].pageX;
    console.log(posiX);
}   