import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';

const totalQuestion = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, getGameOver] = useState(true);

    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    }

    const nextQuestion = () => {

    }

    return (
        <div className='App'>
            <h1>Film Quiz</h1>
            <button className='start' onClick={startTrivia}>
                Start
            </button>
            <p className='score'>Score:</p>
            {/* replace with spinner later */}
            <p>Loading Questions...</p>
            <QuestionCard
                questionNum={number + 1}
                totalQuestions={totalQuestions}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers && userAnswers[number]}
                callBack={checkAnswer}
            />
            <button className='next' onClick={nextQuestion}>
                Next question
            </button>
        </div>
    )
}

export default App;
