document.getElementById("logoLink").addEventListener("click", function(event) {
    event.preventDefault();    
    this.classList.add("targeted");  
    setTimeout(() => {     
      window.location.href = this.getAttribute("href");
    }, 250); 
  });
