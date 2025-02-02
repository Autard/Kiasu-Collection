// FAQ POPUP ELEMENTS
const faqOpenBtn = document.getElementById('faqOpenBtn');
const faqBox = document.getElementById('faqBox');
const faqCloseBtn = document.getElementById('faqCloseBtn');
const faqQuestions = document.querySelectorAll('.faq-question');

// OPEN THE FAQ POPUP
faqOpenBtn.addEventListener('click', () => {
  faqBox.style.display = 'flex';
});

// CLOSE THE FAQ POPUP
faqCloseBtn.addEventListener('click', () => {
  faqBox.style.display = 'none';
});

// TOGGLE FAQ ANSWERS
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
