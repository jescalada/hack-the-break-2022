import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import chrispic from '../assets/chris.jpg';

import playing from "../assets/when_playing.mp3";
import playing1 from "../assets/met_ur_mother.mp3";
import playing2 from "../assets/this_is_tricky.mp3";

import wrong from "../assets/when_wrong.mp3";
import wrong1 from "../assets/when_wrong1.mp3";
import wrong2 from "../assets/covered_this.mp3";
import wrong3 from "../assets/review_slides.mp3";

import correct from "../assets/when_correct.mp3";
import correct1 from "../assets/when_correct1.mp3";
import correct2 from "../assets/alright_this_is_great.mp3";
import correct3 from "../assets/brilliant.mp3";
import correct4 from "../assets/good nice job.mp3";
import correct5 from "../assets/on_fire.mp3";
//import correct6 from "../assets/well_done.mp3"; BROKEN
import correct7 from "../assets/wonderful.mp3";

import ding from "../assets/ding_ding.mp3";

import pythonic from "../assets/pythonic.mp3";


export default function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    
    const [letsPlay] = useSound(playing);

    const [correctAnswer] = useSound(correct);
    const [correctAnswer1] = useSound(correct1);
    const [correctAnswer2] = useSound(correct2);
    const [correctAnswer3] = useSound(correct3);
    const [correctAnswer4] = useSound(correct4);
    const [correctAnswer5] = useSound(correct5);
    //const [correctAnswer6] = useSound(correct6);
    const [correctAnswer7] = useSound(correct7);
    
    const [wrongAnswer] = useSound(wrong);
    const [wrongAnswer1] = useSound(wrong1);
    const [wrongAnswer2] = useSound(wrong2);
    const [wrongAnswer3] = useSound(wrong3);

    const [dingSound] = useSound(ding);
    const [pythonicSound] = useSound(pythonic);
    const [tricky] = useSound(playing2);

    useEffect(() => {
        let randomNum = Math.floor(Math.random() * 4);
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

    const [displayAnsewer, setDisplayAnswer] = useState(false);

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(2000, () => setClassName(a.correct ? "answer correct" : "answer wrong"));
            delay(3000, () => {
            if (a.correct) {
                let randomNum = Math.floor(Math.random() * 10);
                if (randomNum == 0) {
                    correctAnswer();
                } else if (randomNum === 1) {
                    correctAnswer1();
                } else if (randomNum === 2) {
                    correctAnswer2();
                }else if (randomNum === 3) {
                    correctAnswer3();
                }else if (randomNum === 4) {
                    correctAnswer4();
                }else if (randomNum === 5) {
                    correctAnswer5();
                }else if (randomNum === 6) {
                    dingSound();
                }else if (randomNum === 7) {
                    correctAnswer7();
                } else {
                    pythonicSound();
                }

                setDisplayAnswer(true);
                setTimeout(() => setDisplayAnswer(false), 3000);

                delay(2000, () => {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            });
            }
          else {
            let randomNum = Math.floor(Math.random() * 5);
                if (randomNum === 0) {
                    wrongAnswer();
                } else if (randomNum === 1) {
                    wrongAnswer1();
                } else if (randomNum === 2) {
                    wrongAnswer2();
                } else if (randomNum === 3) {
                    wrongAnswer3();
                } else {
                    tricky();
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