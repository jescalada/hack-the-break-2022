import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./Timer";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Question 1 name",
      answers: [
        {
          text: "Answer 1",
          correct: false,
        },
        {
          text: "Answer 2 (true)",
          correct: true,
        },
        {
          text: "Answer 3",
          correct: false,
        },
        {
          text: "Answer 4",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "Question 2 name",
      answers: [
        {
          text: "Answer 1",
          correct: false,
        },
        {
          text: "Answer 2 (true)",
          correct: true,
        },
        {
          text: "Answer 3",
          correct: false,
        },
        {
          text: "Answer 4",
          correct: false,
        },
      ]
    }
  ]
  const moneyPyramid = useMemo (() => 
    [
      { id: 1, amount: "$1 00" },
      { id: 2, amount: "$1 00" },
      { id: 3, amount: "$1 00" },
      { id: 4, amount: "$1 00" },
      { id: 5, amount: "$1 00" },
      { id: 6, amount: "$1 00" },
      { id: 7, amount: "$1 00" },
      { id: 8, amount: "$1 00" },
      { id: 9, amount: "$1 00" },
      { id: 10, amount: "$1 00" },
      { id: 11, amount: "$1 00" },
      { id: 12, amount: "$1 00" },
      { id: 13, amount: "$1 00" },
      { id: 14, amount: "$1 00" },
      { id: 15, amount: "$1 00" },
    ].reverse(),
  []
  );

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);

  }, [moneyPyramid, questionNumber]);


  return (
    <div className="app">
      <div className="main">
        {stop ? (
        <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
              <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber} />
        </div>
        </>)
          }
    
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber"> {m.id} </span>
              <span className="moneyListItemNumber"> {m.amount} </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
