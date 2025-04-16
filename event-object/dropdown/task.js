const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

     value.addEventListener('click', () => {
        list.classList.add('dropdown__list_active');
    });

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            const selectedValue = item.textContent;
            value.textContent = selectedValue;

            list.classList.remove('dropdown__list_active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')){
            list.classList.remove("dropdown__list_active")
        }
    });
});

