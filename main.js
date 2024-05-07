const heart = document.querySelector('.heart');

function rain() {
    const e = document.createElement('div');

    e.classList.add('drop');
    heart.appendChild(e);

    const left = Math.floor(Math.random() * 300);
    const duration = Math.random() * 0.5;

    e.style.left = `${left}px`;
    e.style.animationDuration = `${1 + duration}s`;

    setTimeout(() => {
        e.remove();
    }, 4000);
}

setInterval(rain, 50);