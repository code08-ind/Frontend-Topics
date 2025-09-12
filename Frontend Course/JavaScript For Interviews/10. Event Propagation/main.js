// Event Propagation

// What is event propagation?

// What is event bubbling?

// focus and blur don't bubble.

// event.target vs this.target vs event.currentTarget: event.currentTarget bubbles, target will not bubble and will show the exact target where the click event happens, this also bubbles and works the same way as event.currentTarget

// What is event capturing or trickling? By default we always have the event bubbling and we can pass a  param such as {capture: true} to make it capture from top to bottom. This capture needs to be added in the event listeners.

// How to stop event bubbling or capturing? We can stop it using event.stopPropagation().

// What is event delegation? It is the Basically a pattern to handle events effciently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event listener to a parent element and call an event on a particular target using the .target property of the event object.

// When we have button, outside we have form and outside of form we have a div. If we want the output as form, button, div as output. We can do this by using the capture in the form tag.

// Create a modal which closes on negative space
const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener('click', () => {
    toggleModal(true);
});

function toggleModal(toggle) {
    container.style.display = toggle ? "flex" : "none";
}

container.addEventListener('click', (e) => {
    if (e.target.className === "modalContainer") {
        toggleModal(false);
    }
});
