const book = document.getElementById("book");
const element = document.querySelectorAll(".font-size");

element.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        element.forEach(el => el.classList.remove("font-size_active"));
        
        item.classList.add("font-size_active");

        book.classList.remove("book_fs-small", "book_fs-big");

        const size = item.dataset.size;
        if (size === "small"){
            book.classList.add("book_fs-small");
        } else if (size == "big") {
            book.classList.add("book_fs-big");
        }
    })
})
