document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');
    const container = document.querySelector('.questions-container')
    let currentQuestion = 0;

    function showQuestion(index, direction) {
        // Hide all questions
        questions.forEach((question) => {
            question.classList.remove('active', 'previous');
            question.style.opacity = '0';
            question.style.transform = 'translateX(100%)';
        });

        // Show the current question
        const currentQuestionElement = questions[index];
        
        currentQuestionElement.style.opacity = '1';
        currentQuestionElement.style.transform = 'translateX(0)';
        currentQuestionElement.classList.add('active');

        // Update button visibility
        // if (currentQuestion < 2){
        //   container.style.minHeight = "330px";
        // } else if (currentQuestion == 2){
        //   container.style.minHeight = "330px"
        // } 
        
        previousButton.style.display = index === 0 ? 'none' : 'block';
        nextButton.style.display = index === questions.length - 1 ? 'none' : 'block';
        submitButton.style.display = index === questions.length - 1 ? 'block' : 'none';
    }
    

    nextButton.addEventListener('click', function () {
        console.log('Next button clicked');
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion, 'next');
        }
    });

    previousButton.addEventListener('click', function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion, 'previous');
        }
    });

    // Handle form submission
    document.getElementById('consultationForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        alert('Form submitted successfully!'); // Replace with your submission logic
    });

    // Show the first question initially
    showQuestion(currentQuestion, 'next');
});