document.getElementById("subm-button").addEventListener('click', function () {
    submitForm();
})
//create div + 2 p elements inside w/ user input when user clicks submit
function submitForm() {
    let node = document.getElementById("subm-page");
    let name = document.getElementById("name").value;
    let request = document.getElementById("request").value;

    var containerEl = document.createElement("div");
    containerEl.className = "req-container";
    node.appendChild(containerEl);

    var nameEl = document.createElement("p");
    nameEl.textContent = name;
    nameEl.className = "req-name";
    containerEl.appendChild(nameEl);

    var requestEl = document.createElement("p");
    requestEl.className = "request";
    requestEl.textContent = request;
    containerEl.appendChild(requestEl);
    containerEl.scrollIntoView({ behavior: "smooth" });

    //https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    let start;
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;

        // expand div out from top in a non-linear fashion
        containerEl.style.transform = 'scale(1,' + inOutQuad(Math.min(elapsed / 1000, 1)) + ')';

        if (elapsed < 1000) { // Stop the animation after 1 second
            window.requestAnimationFrame(step);
        }
    }
}

function inOutQuad(n){
    n *= 2;
    if (n < 1) return 0.5 * n * n;
    return - 0.5 * (--n * (n - 2) - 1);
};

