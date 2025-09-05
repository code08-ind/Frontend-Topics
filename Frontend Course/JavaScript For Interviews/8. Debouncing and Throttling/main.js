// Debouncing and Throttling
// Q1. Create a button UI and debounce as follows:
// --> Show "Button Pressed X Times" every time button is pressed
// --> Increase "Triggered Y Times" count after 800ms of debounce.
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggerCount = 0;

function debounce(cb, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => cb.apply(context, args), wait);
    }
}

const debounceCount = debounce(() => {
    count.innerHTML = ++triggerCount;
}, 800);

// btn.addEventListener('click', function () {
//     btnPress.innerHTML = ++pressedCount;
//     debounceCount();
// });

// Debouncing and Throttling
// Q2. Create a button UI and throttle as follows:
// --> Show "Button Pressed X Times" every time button is pressed
// --> Increase "Triggered Y Times" count after 800ms of throttle.

function throttle(cb, delay) {
    let last = 0;

    return function (...args) {
        let now = new Date().getTime();
        if (last - now < delay) return;
        last = now;
        return cb(...args);
    }
}

const throttleCount = throttle(() => {
    count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener('click', function () {
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
});
