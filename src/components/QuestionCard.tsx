import React from 'react';

type QuestionProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<QuestionProps> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNum,
    totalQuestions,
}) => (
    <div>
        <p className='number'>
            Question: {questionNum} / {totalQuestions}
        </p>
        {/* find replacement for dangerously */}
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>'
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard;