document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question'); // All question divs
    const previousButton = document.getElementById('previousButton'); // Previous button
    const nextButton = document.getElementById('nextButton'); // Next button
    const submitButton = document.getElementById('submitButton'); // Submit button
    const container = document.querySelector('.questions-container'); // Container for questions
    let currentQuestion = 0; // Track the current question index

    // Function to show the current question and hide others
    function showQuestion(index) {
        // Hide all questions
        questions.forEach((question) => {
            question.classList.remove('active', 'previous');
            question.style.opacity = '0';
            question.style.transform = 'translateX(100%)';
        });

        // Show the current question
        const currentQuestionElement = questions[index];
        currentQuestionElement.classList.add('active');
        currentQuestionElement.style.opacity = '1';
        currentQuestionElement.style.transform = 'translateX(0)';

        // Adjust the container height to fit the active question's content
        container.style.minHeight = `${currentQuestionElement.scrollHeight + 10}px`;

        // Update button visibility
        // Update button visibility
        previousButton.style.visibility = index === 0 ? 'hidden' : 'visible'; // Hide "Previous" on the first question
        nextButton.style.display = index === questions.length - 1 ? 'none' : 'block'; // Hide "Next" on the last question
        submitButton.style.display = index === questions.length - 1 ? 'block' : 'none'; // Show "Submit" on the last question.style.display = index === questions.length - 1 ? 'block' : 'none'; // Show "Submit" on the last question
    }

    // Event listener for the "Next" button
    nextButton.addEventListener('click', function () {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++; // Move to the next question
            showQuestion(currentQuestion); // Update the UI
        }
    });

    // Event listener for the "Previous" button
    previousButton.addEventListener('click', function () {
        if (currentQuestion > 0) {
            currentQuestion--; // Move to the previous question
            showQuestion(currentQuestion); // Update the UI
        }
    });

    // Event listener for form submission
    document.getElementById('consultationForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get selected checkboxes for "type"
        const typeCheckboxes = document.querySelectorAll('input[name="type"]:checked');
        const selectedTypes = Array.from(typeCheckboxes).map(checkbox => checkbox.value);

        // Get selected checkboxes for "overwhelmed"
        const overwhelmedCheckboxes = document.querySelectorAll('input[name="overwhelmed"]:checked');
        const selectedOverwhelmed = Array.from(overwhelmedCheckboxes).map(checkbox => checkbox.value);

        // Log selected values (replace with your logic)
        console.log('Selected types:', selectedTypes);
        console.log('Selected overwhelmed frequencies:', selectedOverwhelmed);

        alert('Form submitted successfully!');
    });
    showQuestion(currentQuestion);

    // Emergency Contact Card Logic
    const suicidePlansRadios = document.querySelectorAll('input[name="suicide_plans"]');
    const emergencyCardTemplate = document.getElementById('emergencyCardTemplate');

    suicidePlansRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'Yes') {
                // Clone the emergency card template and append it to the body
                const emergencyCard = emergencyCardTemplate.cloneNode(true);
                emergencyCard.style.display = 'block'; // Make it visible
                document.body.appendChild(emergencyCard);

                // Add event listener for the close button
                const closeBtn = emergencyCard.querySelector('.emergency-close-btn');
                closeBtn.addEventListener('click', () => {
                    emergencyCard.remove(); // Remove the card when closed
                });
            }
        });
    });
});