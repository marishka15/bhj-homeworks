const rotator =  document.querySelectorAll(".rotator")

rotator.forEach(item => {
    let index = 0;
    const rotatorCase = item.querySelectorAll(".rotator__case")
    function changeRotator() {
        rotatorCase[index].classList.remove("rotator__case_active");
        index = (index + 1) % rotatorCase.length;
        const nextRotator = rotatorCase[index]
        nextRotator.classList.add("rotator__case_active")
    }
    setInterval(changeRotator, 1000)
})



