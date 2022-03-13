import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import when_playing from "../assets/when_playing.mp3";
import when_correct from "../assets/when_correct.mp3";
import when_wrong from "../assets/when_wrong.mp3";
import when_correct1 from "../assets/when_correct1.mp3";
import when_wrong1 from "../assets/when_wrong1.mp3";

export default function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(when_playing);
    const [correctAnswer] = useSound(when_correct);
    const [wrongAnswer] = useSound(when_wrong);
    
    const [correctAnswer1] = useSound(when_correct1);
    const [wrongAnswer1] = useSound(when_wrong1);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(2000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
            delay(3000, () => {
            if (a.correct) {
                if (Math.random() > 0.5) {
                    correctAnswer();
                } else {
                    correctAnswer1();
                }
                delay(2000, () => {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            });
            }
          else {
                if (Math.random() > 0.5) {
                    wrongAnswer();
                } else {
                    wrongAnswer1();
                }
                delay(2000, () => {
                setStop(true);
            })}
        });
    };


    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"}
                        onClick={() => handleClick(a)}
                    >

                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    )
}