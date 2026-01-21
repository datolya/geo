const jobTitles = [
  'Big Data Consultancy',
  'Data Architecture',
  'Cloud Data Engineering',
  'M&A Analysis',
  'Payment Systems Advisory',
];

let currentTitleIndex = 0;
let charIndex = 0;
let isTyping = true;
let isDeleting = false;
let rotatingText = document.getElementById('rotating-text');
let cursor = document.getElementById('cursor');

function typeEffect() {
  const currentTitle = jobTitles[currentTitleIndex];

  // Typing effect
  if (isTyping) {
    if (charIndex < currentTitle.length) {
      rotatingText.textContent += currentTitle.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100); // Typing speed
    } else {
      // Finished typing, wait before starting to delete
      setTimeout(deleteEffect, 1500);
    }
  }

  // Delete effect
  if (isDeleting) {
    if (charIndex > 0) {
      rotatingText.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteEffect, 50); // Deleting speed
    } else {
      // Start typing the next title
      isTyping = true;
      isDeleting = false;
      currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
      setTimeout(typeEffect, 500); // Pause before typing new word
    }
  }
}

// Trigger delete effect after typing
function deleteEffect() {
  const currentTitle = jobTitles[currentTitleIndex];
  isTyping = false;
  isDeleting = true;

  typeEffect(); // Continue deletion process
}

// Initialize typing effect
typeEffect();

// Blinking cursor
setInterval(() => {
  cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1';
}, 500); // Cursor blinks every 500ms
