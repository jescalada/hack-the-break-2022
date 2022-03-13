import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./Timer";
import Start from "./components/Start";

function App() {
  
  const [username, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

const data = [
    {
        id : 1,
        question : 'What is a correct syntax to output "Hello World" in Python?',
        answers : [
            {
                text : 'print("Hello World")',
                correct : true
            },
            {
                text : 'echo "Hello World"',
                correct : false
            },
            {
                text : 'p("Hello World")',
                correct : false
            },
            {
                text : 'echo("Hello World");',
                correct : false
            }
        ]
    },
    {
        id : 2,
        question : 'How do you insert COMMENTS in Python code?',
        answers : [
            {
                text : '#This is a comment',
                correct : true
            },
            {
                text : '//This is a comment',
                correct : false
            },
            {
                text : '/*This is a comment*/',
                correct : false
            },
            {
                text : 'Nothing',
                correct : false
            }
        ]
    },
    {
        id : 3,
        question : 'Which one is NOT a legal variable name?',
        answers : [
            {
                text : 'Myvar',
                correct : false
            },
            {
                text : 'my_var',
                correct : false
            },
            {
                text : 'my-var',
                correct : true
            },
            {
                text : '_myvar',
                correct : false
            }
        ]
    },
    {
        id : 4,
        question : 'How do you create a variable with the numeric value 5?',
        answers : [
            {
                text : 'Both the other answers are correct',
                correct : true
            },
            {
                text : 'x = 5',
                correct : false
            },
            {
                text : 'x = int(5)',
                correct : false
            },
            {
                text : 'Nothing',
                correct : false
            }
        ]
    },
    {
        id : 5,
        question : 'What is the correct file extension for Python files?',
        answers : [
            {
                text : '.py',
                correct : true
            },
            {
                text : '.pt',
                correct : false
            },
            {
                text : '.pyth',
                correct : false
            },
            {
                text : '.pyt',
                correct : false
            }
        ]
    },
    {
        id : 6,
        question : 'How do you create a variable with the floating number 2.8?',
        answers : [
            {
                text : 'Both the other answers are correct',
                correct : true
            },
            {
                text : 'x = float(2.8)',
                correct : false
            },
            {
                text : 'x = 2.8',
                correct : false
            },
            {
                text : 'Nothing',
                correct : false
            }
        ]
    },
    {
        id : 7,
        question : 'What is the correct syntax to output the type of a variable or object in Python?',
        answers : [
            {
                text : 'print(typeof x)',
                correct : false
            },
            {
                text : 'print(type(x))',
                correct : true
            },
            {
                text : 'print(typeOf(x))',
                correct : false
            },
            {
                text : 'print(typeof(x))',
                correct : false
            }
        ]
    },
    {
        id : 8,
        question : 'What is the correct way to create a function in Python?',
        answers : [
            {
                text : 'def myFunction():',
                correct : true
            },
            {
                text : 'function myfunction():',
                correct : false
            },
            {
                text : 'create myFunction():',
                correct : false
            },
            {
                text : 'myFunction() => ',
                correct : false
            }
        ]
    },
    {
        id : 9,
        question : 'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
        answers : [
            {
                text : 'trim()',
                correct : false
            },
            {
                text : 'strip()',
                correct : true
            },
            {
                text : 'len()',
                correct : false
            },
            {
                text : 'ptrim()',
                correct : false
            }
        ]
    },
    {
        id : 10,
        question : 'Which method can be used to return a string in upper case letters?',
        answers : [
            {
                text : 'upper()',
                correct : true
            },
            {
                text : 'upperCase()',
                correct : false
            },
            {
                text : 'uppercase()',
                correct : false
            },
            {
                text : 'toUpperCase()',
                correct : false
            }
        ]
    },
    {
        id : 11,
        question : 'Which method can be used to replace parts of a string?',
        answers : [
            {
                text : 'repl()',
                correct : false
            },
            {
                text : 'replace()',
                correct : true
            },
            {
                text : 'replaceString()',
                correct : false
            },
            {
                text : 'switch()',
                correct : false
            }
        ]
    },
    {
        id : 12,
        question : 'Which operator is used to multiply numbers?',
        answers : [
            {
                text : '#',
                correct : false
            },
            {
                text : 'x',
                correct : false
            },
            {
                text : '%',
                correct : false
            },
            {
                text : '*',
                correct : true
            }
        ]
    },
    {
        id : 13,
        question : 'Which operator can be used to compare two values?',
        answers : [
            {
                text : '<>',
                correct : false
            },
            {
                text : '==',
                correct : true
            },
            {
                text : '><',
                correct : false
            },
            {
                text : '=',
                correct : false
            }
        ]
    },
    {
        id : 14,
        question : 'Which of these collections defines a LIST?',
        answers : [
            {
                text : '{"name": "apple", "color": "green"}',
                correct : false
            },
            {
                text : '{"apple", "banana", "cherry"}',
                correct : false
            },
            {
                text : '("apple", "banana", "cherry")',
                correct : false
            },
            {
                text : '["apple", "banana", "cherry"]',
                correct : true
            }
        ]
    },
    {
        id : 15,
        question : 'Which of these collections defines a TUPLE?',
        answers : [
            {
                text : '("apple", "banana", "cherry")',
                correct : true
            },
            {
                text : '{"apple", "banana", "cherry"}',
                correct : false
            },
            {
                text : '["apple", "banana", "cherry"]',
                correct : false
            },
            {
                text : '{"name": "apple", "color": "green"}',
                correct : false
            }
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

  var solution = data[questionNumber - 1].answers.find((elem) => elem.correct === true);


  return (
    <div className="app">
      {username ? (
        <>
      <div className="main">
        {stop ? (
        <h1 className="endText">You earned: {earned}. The answer is <span id="sol">{solution.text}</span></h1>
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
        </>
      ) : <Start setUserName={setUserName}/>}

    </div>
  );
}

export default App;
