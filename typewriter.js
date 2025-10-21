// typewriter.js
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById('typewriter');
    const text = element.textContent; // get the text
    element.textContent = '';         // clear it for typing effect
    let i = 0;

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // speed per character
      }
    }

    type();
});
