let rotationX = 0;
let rotationY = 0;

function rotateScreen(event) {
const rotationSpeed = 5;
if (event.key === 'ArrowLeft') {
    rotationY -= rotationSpeed;
} else if (event.key === 'ArrowRight') {
    rotationY += rotationSpeed;
} else if (event.key === 'ArrowUp') {
    rotationX -= rotationSpeed;
} else if (event.key === 'ArrowDown') {
    rotationX += rotationSpeed;
}else if (event.key === ' '){
    resetRotation();
}
main.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}

function resetRotation() {
rotationX = 0;
rotationY = 0;
main.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

document.addEventListener('keydown', rotateScreen);