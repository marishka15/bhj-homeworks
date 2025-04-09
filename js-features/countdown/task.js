const p = document.getElementById("timer")

const printResuletsetInterval = setInterval(() => {
    if ((p.textContent = Number(p.textContent) - 1) === 0)
        {alert("Вы победили в конкурсе!")
        clearInterval(printResuletsetInterval)
        }
}, 1000)

