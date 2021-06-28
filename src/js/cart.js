
// Cart Functionalities

let currentPosition = 0;
let circle = document.querySelector(".circle")
let rightBtn = document.querySelector(".right-btn"),
    leftBtn = document.querySelector(".left-btn");


leftBtn.disabled = true;

rightBtn.addEventListener("click", () => {
    gsap.to(".circle-2", {
        rotation: currentPosition === 0 ? 90 : 180,
        duration: 1.5,

    });

    gsap.to(".circle", {
        rotation: currentPosition === 0 ? 0 : 90,
        duration: 1.2,
        onComplete: increasePosition(currentPosition)
    })

})



leftBtn.addEventListener('click', () => {
    gsap.to(".circle-2", {
        rotation: currentPosition === 2 ? 90 : 0,
        duration: 1.5,
    });

    gsap.to(".circle", {
        rotation: currentPosition === 2 ? 0 : -90,
        duration: 0.8,
        onComplete: decreasePosition(currentPosition)
    })
})
function increasePosition(pos) {

    currentPosition = pos + 1;
    console.log(currentPosition);
    if (currentPosition === 2) {
        rightBtn.disabled = true
        // currentPosition = 0
    }

    if (currentPosition === 1 || currentPosition === 2) {
        leftBtn.disabled = false
    }

}

function decreasePosition(pos) {
    currentPosition = pos - 1

    if (currentPosition === 1) {
        rightBtn.disabled = false
    }
    if (currentPosition === 0) {
        leftBtn.disabled = true
    }
}


// Decrease and Increase Quantity Logic

const decreaseButtons = document.querySelectorAll(".decrease")
const increaseButtons = document.querySelectorAll(".increase")

decreaseButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let qty = e.target.parentNode.querySelector('span');

        if (qty.innerHTML > 0) {
            qty.innerHTML = Number(qty.innerHTML) - 1
        }
    })
})


increaseButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let qty = e.target.parentNode.querySelector('span');
        qty.innerHTML = Number(qty.innerHTML) + 1
    })
})