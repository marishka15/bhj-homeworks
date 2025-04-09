const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i < 10; i++ ) {
    let hole = getHole(i);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains('hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
 
        if (counterDead === 10) {
            alert ('Победа!');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
        }

        if (counterLost === 5) {
            alert ('Вы проиграли');
            counterDead = 0;
            counterLost = 0;
            lost.textContent = counterLost;
            dead.textContent = counterDead;
        }
    });
}