let value = document.querySelector(" .dropdown__value");
const list = document.querySelector(" .dropdown__list");
let items = document.querySelectorAll(" .dropdown__item");


value.addEventListener('click', function() {
    list.classList.add("dropdown__list_active");

})

items.forEach((dropdown__item) => {
    dropdown__item.addEventListener('click', function(event){
        event.preventDefault();
        const selectedValue = this.textContent;
        value.textContent = selectedValue;
        list.classList.remove("dropdown_list_active")
    })
})

document.addEventListener('click', function(event){
    if (!event.target.closest('.dropdown')){
        list.classList.remove("dropdown__list_active")
    }
})



