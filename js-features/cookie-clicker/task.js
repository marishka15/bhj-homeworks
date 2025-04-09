const img = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
let counter = 0;

img.addEventListener('click', function() {
    counter++;
    clicker.textContent = counter;
    if (counter % 2 == 0) {
        img.width += 50
    }
    if (counter % 2 !== 0) {
        img.width -= 50
    }
})



