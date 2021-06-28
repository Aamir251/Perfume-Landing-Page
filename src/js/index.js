gsap.registerPlugin(ScrollTrigger)

gsap.from(".white", { yPercent: -100, duration: 1.5 })
gsap.from("h1", { xPercent: -100, duration: 1 })
gsap.from("header p", { xPercent: -200, duration: 1, delay: 0.5 })

const featureTl = gsap.timeline()

featureTl.from(".features-section", { scale: 0.5, duration: 1 })
  .from(".features-section h2", { xPercent: -50, duration: 0.5 })

ScrollTrigger.create({
  animation: featureTl,
  scrollTrigger: {
    trigger: ".features-section",
    start: "top 70%",
    toggleActions: "restart none restart none"
  }
})

if (window.innerHeight < 800) {
  ScrollTrigger.create({
    animation: featureTl,
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 30%",
      toggleActions: "restart none restart none"
    }
  })
}
gsap.from(".feature", {
  xPercent: -50,
  duration: 0.8,
  stagger: 0.5,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".features-section",
    start: "top 20%",
    toggleActions: "restart none restart none"
  },
})
gsap.from(".bleu-green img", {
  xPercent: -50,
  scrollTrigger: {
    trigger: ".products-section",
    scrub: true,
    start: "top center",
    onEnter: bleuGreen,
  },
});

function bleuGreen() {
  gsap.from(".bleu-green div", { xPercent: 50, duration: 1 })
}

gsap.from(".n-chanel img", {
  xPercent: 50,
  scrollTrigger: {
    trigger: ".bleu-green img",
    scrub: true,
    start: "top center",
    onEnter: nChanel,
    onUpdate: self => showSmoke(self.progress)
  }
});

function showSmoke(progress) {
  let netProgress = parseInt(progress * 100)
  document.querySelector(".smoke").style.clipPath = `polygon(0 0, 100% 0, 100% ${netProgress}%, 0 ${netProgress}%)`
}

function nChanel() {
  gsap.from(".n-chanel div", { xPercent: -30, duration: 1 })
}

gsap.from(".chanel-blue img", {
  xPercent: -30,
  scrollTrigger: {
    trigger: ".n-chanel img",
    scrub: true,
    start: "top center",
    onEnter: chanelBlue,
  }
})

function chanelBlue() {
  gsap.from(".chanel-blue div", { xPercent: 30, duration: 1 })
}
