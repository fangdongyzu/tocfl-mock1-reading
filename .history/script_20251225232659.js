let currentParts = [];
let currentPartIndex = 0;
let userAnswers = {};
let questionsByPart = {};

// DOM Elements
const partSelection = document.querySelector('.part-selection');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const partTitle = document.getElementById('part-title');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const resultsDetails = document.getElementById('results-details');
const partBreakdownElement = document.getElementById('part-breakdown');
const startQuizBtn = document.getElementById('start-quiz-btn');
const homeBtn = document.getElementById('home-btn');

// Part information
const partInfo = {
    1: { name: "Part 1: Sentence Comprehension" },
    2: { name: "Part 2: Picture Description" },
    3: { name: "Part 3: Word Fill-in" },
    4: { name: "Part 4: Paragraph Completion" },
    5: { name: "Part 5: Reading Comprehension" }
};

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', showPreviousPart);
nextBtn.addEventListener('click', showNextPart);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Home button event listener
if (homeBtn) {
    homeBtn.addEventListener('click', () => {
        window.location.href = "https://fangdongyzu.github.io/tocflmock/";
    });
}

// Update start button state based on selection
document.querySelectorAll('.part-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', updateStartButton);
});

function updateStartButton() {
    const selectedParts = Array.from(document.querySelectorAll('.part-checkbox input:checked'));
    startQuizBtn.disabled = selectedParts.length === 0;
}

function startQuiz() {
    const selectedCheckboxes = Array.from(document.querySelectorAll('.part-checkbox input:checked'));
    currentParts = selectedCheckboxes.map(cb => parseInt(cb.dataset.part)).sort();
    
    if (currentParts.length === 0) {
        alert('Please select at least one part to start the quiz!');
        return;
    }
    
    currentPartIndex = 0;
    userAnswers = {};
    
    // Organize questions by part
    questionsByPart = {};
    currentParts.forEach(part => {
        questionsByPart[part] = quizData.filter(q => q.part === part).sort((a, b) => a.id - b.id);
    });
    
    partSelection.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    
    showCurrentPart();
    // Scroll to top when starting
    window.scrollTo(0, 0);
}

function showCurrentPart() {
    const currentPart = currentParts[currentPartIndex];
    const currentPartQuestions = questionsByPart[currentPart];
    
    partTitle.textContent = `${partInfo[currentPart].name}`;
    
    // Show all questions for current part
    showAllQuestions(currentPartQuestions);
    updateNavigationButtons();
    // Scroll to top when switching parts
    window.scrollTo(0, 0);
}

function showAllQuestions(questions) {
    let questionsHTML = '';
    
    // Text for 41-45
    const text41_45 = "昨天晚上我覺得很不舒服， ___（41）___ ，所以很早就睡覺了。今天早上起來， ___（42）___ 。我去看病，醫生說我感冒了，給了我一些藥， ___（43）___ 要多休息，多喝水，才會快點好。這幾天的天氣一會兒熱，一會兒冷， ___（44）___ 。我要___（45） ___，不要再感冒了。";

    questions.forEach(question => {
        // --- Insert Shared Context (Images/Text) ---

        // Part 3 (31-35)
        if (question.id === 31) {
            questionsHTML += `
                <div class="context-container">
                    <img src="images/31-35.png" alt="Reference for questions 31-35">
                </div>`;
        }
        
        // Part 4 (36-40)
        if (question.id === 36) {
            questionsHTML += `
                <div class="context-container">
                    <img src="images/36-40.png" alt="Reference for questions 36-40">
                </div>`;
        }

        // Part 4 (41-45)
        if (question.id === 41) {
            questionsHTML += `
                <div class="context-container">
                    <div class="reading-passage">${text41_45}</div>
                </div>`;
        }

        // --- Create Question Card ---
        questionsHTML += createStandardQuestion(question);
    });
    
    questionContainer.innerHTML = questionsHTML;
    
    // Click listeners for options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', (e) => {
            const questionId = parseInt(e.currentTarget.dataset.questionId);
            const selectedOption = e.currentTarget.dataset.option;
            
            // Remove previous selection
            document.querySelectorAll(`.option[data-question-id="${questionId}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selection
            e.currentTarget.classList.add('selected');
            
            // Save answer
            userAnswers[questionId] = selectedOption;
        });
    });
    
    // Restore previous answers
    questions.forEach(question => {
        if (userAnswers[question.id]) {
            const selectedOption = document.querySelector(`.option[data-question-id="${question.id}"][data-option="${userAnswers[question.id]}"]`);
            if (selectedOption) {
                selectedOption.classList.add('selected');
            }
        }
    });
}

function createStandardQuestion(question) {
    // Check if question ID is in the range that uses shared images (31-40)
    const isSharedImageRange = (question.id >= 31 && question.id <= 40);
    const showImageInCard = question.image && !isSharedImageRange;

    return `
        <div class="question-item">
            <div class="question-text">${question.id}. ${question.question}</div>
            ${showImageInCard ? `
                <div class="question-image">
                    <img src="${question.image}" alt="Question ${question.id} Image">
                </div>
            ` : ''}
            <div class="options">
                ${question.options.map((option, index) => {
                    const optionLetter = String.fromCharCode(65 + index); 
                    return `
                        <div class="option" data-question-id="${question.id}" data-option="${optionLetter}">
                            <span class="option-text">${option}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function updateNavigationButtons() {
    const isFirstPart = currentPartIndex === 0;
    const isLastPart = currentPartIndex === currentParts.length - 1;
    
    prevBtn.style.display = isFirstPart ? 'none' : 'block';
    
    if (isLastPart) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function showPreviousPart() {
    if (currentPartIndex > 0) {
        currentPartIndex--;
        showCurrentPart();
    }
}

function showNextPart() {
    if (currentPartIndex < currentParts.length - 1) {
        currentPartIndex++;
        showCurrentPart();
    }
}

function submitQuiz() {
    let totalScore = 0;
    let totalQuestions = 0;
    
    // Calculate scores
    const partScores = {};
    currentParts.forEach(part => {
        const partQuestions = questionsByPart[part];
        const partTotal = partQuestions.length;
        let partScore = 0;
        
        partQuestions.forEach(question => {
            totalQuestions++;
            if (userAnswers[question.id] === question.answer) {
                partScore++;
                totalScore++;
            }
        });
        
        partScores[part] = {
            score: partScore,
            total: partTotal,
            percentage: Math.round((partScore / partTotal) * 100)
        };
    });
    
    // Display results
    scoreElement.textContent = totalScore;
    totalElement.textContent = totalQuestions;
    
    // Show breakdown
    showPartBreakdown(partScores);
    
    // Show details
    showDetailedResults();
    
    // Switch views
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    // NEW: Scroll to the very top of the page instantly
    window.scrollTo(0, 0);
}

function showPartBreakdown(partScores) {
    partBreakdownElement.innerHTML = '<h3>Performance Analysis by Part</h3>';
    
    currentParts.forEach(part => {
        const scoreInfo = partScores[part];
        const breakdownItem = document.createElement('div');
        breakdownItem.className = 'breakdown-item';
        
        breakdownItem.innerHTML = `
            <h4>${partInfo[part].name}</h4>
            <div>Score: ${scoreInfo.score} / ${scoreInfo.total}</div>
            <div>Accuracy: ${scoreInfo.percentage}%</div>
        `;
        
        partBreakdownElement.appendChild(breakdownItem);
    });
}

function showDetailedResults() {
    resultsDetails.innerHTML = '<h3>Detailed Answer Results</h3>';
    
    currentParts.forEach(part => {
        const partQuestions = questionsByPart[part];
        
        partQuestions.forEach(question => {
            const userAnswer = userAnswers[question.id];
            const isCorrect = userAnswer === question.answer;
            const isAnswered = userAnswer !== undefined;
            
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isCorrect ? 'correct' : isAnswered ? 'incorrect' : 'unanswered'}`;
            
            let statusText = '';
            if (isCorrect) {
                statusText = '✓ Correct';
            } else if (isAnswered) {
                statusText = '✗ Incorrect';
            } else {
                statusText = '○ Not Answered';
            }
            
            const userAnswerText = userAnswer ? `Your Answer: ${userAnswer}` : 'Not Answered';
            const correctAnswerText = `Correct Answer: ${question.answer}`;
            
            resultItem.innerHTML = `
                <div class="result-question">${partInfo[part].name} - Question ${question.id}: ${statusText}</div>
                <div class="result-answer">${userAnswerText} | ${correctAnswerText}</div>
            `;
            
            resultsDetails.appendChild(resultItem);
        });
    });
}

function restartQuiz() {
    resultsContainer.classList.add('hidden');
    partSelection.classList.remove('hidden');
    
    // Reset inputs
    document.querySelectorAll('.part-checkbox input').forEach(checkbox => {
        checkbox.checked = false;
    });
    updateStartButton();
    
    currentParts = [];
    currentPartIndex = 0;
    userAnswers = {};
    questionsByPart = {};
    window.scrollTo(0, 0);
}

// Initialize
updateStartButton();