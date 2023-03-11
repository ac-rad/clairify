function reveal() {
    const reveals = document.querySelectorAll("block.reactive");
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementBottom = reveals[i].getBoundingClientRect().bottom;
      const elementVisibleTop = 100;
      const elementVisibleBottom = 550;
      const winHeight = window.innerHeight;

      console.log(winHeight)
      if (elementTop < (windowHeight - 0.1*winHeight) & (windowHeight - 0.9*winHeight) < elementBottom) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  reveal()
  window.addEventListener("scroll", reveal);

  window.addEventListener('resize', function() {
    window.resizeTo(width, height);
});