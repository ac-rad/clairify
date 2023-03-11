function reveal() {
    const reveals = document.querySelectorAll("block.reactive");
    
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementBottom = reveals[i].getBoundingClientRect().bottom;
      const elementVisibleTop = 100;
      const elementVisibleBottom = 550;
      console.log(elementTop)
      if (elementTop < (windowHeight - elementVisibleTop) & (windowHeight - elementVisibleBottom) < elementBottom) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  reveal()
  window.addEventListener("scroll", reveal);