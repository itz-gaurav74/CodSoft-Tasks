
document / addEventListener('DOMContentLoaded', () => {

    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.id == '=') {
                display.value = eval(display.value);
            } else if (btn.id === 'C') {
                display.value = "";
            } else if (btn.id == "back") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += btn.id;
            }
            if (display.value == "undefined") {
                display.value = "";
            }
        });
    });
})

