// skill-card 3d effect
window.addEventListener('scroll', () => {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const distance = rect.top - window.innerHeight / 1.3;
      if (distance < 0) {
        card.style.transform = `rotateX(${distance / 10}deg) rotateY(${distance / 10}deg)`;
        card.style.transition = 'transform 0.5s ease';
      }
    });
  });

  // contactForm validation: 

  document.querySelector("form").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form elements
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
  
    // Regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Flag for form validity
    let isValid = true;
  
    // Validate Full Name
    if (fullName.value.trim() === "") {
      alert("Please enter your full name.");
      fullName.focus();
      isValid = false;
    }
  
    // Validate Email
    else if (!emailPattern.test(email.value)) {
      alert("Please enter a valid email address.");
      email.focus();
      isValid = false;
    }
  
    // Validate Message
    else if (message.value.trim() === "") {
      alert("Please enter your message.");
      message.focus();
      isValid = false;
    }
  
    // Submit form if valid
    if (isValid) {
      alert("Form submitted successfully!");
      this.submit(); // Only submit the form if all fields are valid
    }
  });

  // Typewritereffect
  const words = ["Student", "Front-End Developer", "Software Developer"];
  let wordIndex = 0;
  let letterIndex = 0;
  const typingSpeed = 100; // Speed of typing
  const delayBetweenWords = 2000; // Delay between each word
  
  function typeWord() {
    const typewriterElement = document.getElementById("typewriter");
    
    if (letterIndex < words[wordIndex].length) {
      // Add next letter
      typewriterElement.textContent += words[wordIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(typeWord, typingSpeed); // Type next letter
    } else {
      // Word is fully typed, wait before deleting
      setTimeout(deleteWord, delayBetweenWords);
    }
  }
  
  function deleteWord() {
    const typewriterElement = document.getElementById("typewriter");
    
    if (letterIndex > 0) {
      // Remove the last letter
      typewriterElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(deleteWord, typingSpeed); // Delete next letter
    } else {
      // Move to the next word and start typing
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWord, typingSpeed);
    }
  }
  
  // Start the typing effect
  typeWord();

  //Preloader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.getElementById("main-content");

    // Hide the preloader and show the main content
    preloader.style.display = "none";
    mainContent.style.display = "block";
});


// Active class

 document.addEventListener("DOMContentLoaded", () => {
  // Select all navbar links
  const navLinks = document.querySelectorAll("nav ul li a");

  // Select all sections
  const sections = document.querySelectorAll("section");

  // Function to update active class
  const updateActiveClass = () => {
    let currentSection = "";

    // Determine the current section in the viewport
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100; // Adjust offset for fixed header
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update the active class on navbar links
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  };

  // Add event listener for scroll
  window.addEventListener("scroll", updateActiveClass);

  // Initial call to set the active class when the page loads
  updateActiveClass();
});




  

  
  