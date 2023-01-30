// Get the button:
let toTopBtn = document.querySelector("#goTop");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}

toTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    })
})