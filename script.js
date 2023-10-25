const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollBoxes);

scrollBoxes();

function scrollBoxes () {
    const triggerShowBox = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerShowBox) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}