const reveal = document.querySelectorAll('.reveal')

document.addEventListener("scroll", function(){
    reveal.forEach(item => {
        const {top, bottom} = item.getBoundingClientRect()
        if (bottom < 0) {
            return false;         
        }
        if (top > window.innerHeight) {
            return false;
        }
    return item.classList.add('reveal_active');
    })
})


