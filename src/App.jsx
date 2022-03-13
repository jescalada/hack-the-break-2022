import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./Timer";
import Start from "./components/Start";

function App() {
  
  const [username, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 points");

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
                text : 'System.out.println("Hello World")',
                correct : false
            },
            {
                text : 'console.log("Hello World");',
                correct : false
            }
        ]
    },
    {
      id : 2,
      question : 'What is the correct file extension for Python files?',
      answers : [
          {
              text : '.pyt',
              correct : false
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
              text : '.py',
              correct : true
          }
      ]
    },
    {
        id : 3,
        question : 'Which one of these is NOT a legal variable name in Python?',
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
        question : 'Which ONE of the following is NOT a Python keyword?',
        answers : [
            {
                text : 'without',
                correct : true
            },
            {
                text : 'nonlocal',
                correct : false
            },
            {
                text : 'del',
                correct : false
            },
            {
                text : 'def',
                correct : false
            }
        ]
    },
    {
      id : 5,
      question : 'Which ONE of the following can be used with lists AND with tuples?',
      answers : [
          {
              text : 'remove()',
              correct : false
          },
          {
              text : 'sort()',
              correct : false
          },
          {
              text : 'append()',
              correct : false
          },
          {
              text : 'len()',
              correct : true
          }
      ]
    },
    {
        id : 6,
        question : 'How can you create a variable with the value 2.8 in Python?',
        answers : [
          {
            text : 'x = float(2.8)',
            correct : false
          },
          {
            text : 'x = 2.8',
            correct : false
          },  
          {
                text : 'Both',
                correct : true
            },
            {
                text : 'Neither',
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
        question : 'Which ONE of the following is not always a part of a function definition?',
        answers : [
            {
                text : 'keyword def',
                correct : false
            },
            {
                text : 'possibly empty list of comma-separated\nparameters wrapped in parentheses',
                correct : false
            },
            {
                text : 'keyword return',
                correct : true
            },
            {
                text : 'function name',
                correct : false
            }
        ]
    },
    {
        id : 9,
        question : 'Suppose I write a = 5 and b = 5. \nAre a and b bound to the same object in memory, or are they bound to different integer objects at different addresses, each containing the integer 5?',
        answers : [
            {
                text : "ints aren't objects Chris what are you talking about",
                correct : false
            },
            {
                text : 'None of these choices is true',
                correct : false
            },
            {
                text : 'Same object -- a and b are aliases',
                correct : true
            },
            {
                text : 'Different objects -- each variable contains a different memory address',
                correct : false
            }
        ]
    },
    {
        id : 10,
        question : 'Which one of these expressions is NOT part of the Zen of Python?',
        answers : [
            {
                text : 'Readability counts.',
                correct : false
            },
            {
                text : 'Now is better than never.',
                correct : false
            },
            {
                text : 'Beautiful is better than ugly.',
                correct : false
            },
            {
                text : 'Write once, run anywhere.',
                correct : true
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
        question : 'Which one of these statements is FALSE?',
        answers : [
            {
                text : 'Python interns all the integers. All of them.',
                correct : true
            },
            {
                text : 'Variables contain addresses',
                correct : false
            },
            {
                text : 'When we assign a value to a variable, \nwe are binding the address of the object to an identifier.',
                correct : false
            },
            {
                text : 'Variables that point the same object are aliases',
                correct : false
            }
        ]
    },
    {
        id : 13,
        question : 'What is the best way to make a sorted copy of a list without modifying the original list?',
        answers : [
            {
                text : 'Pass the list as an argument \nto the global sorted function \nand assign the return value to a new variable',
                correct : true
            },
            {
                text : "Invoke the list object's sorted method",
                correct : false
            },
            {
                text : "Invoke the list object's sort method and assign the return value to a new variable",
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
        question : 'Which of these statements about scope is FALSE?',
        answers : [
            {
                text : 'Built-in elements are always visible all the time. Period.',
                correct : false
            },
            {
                text : 'When a function ends, the local variables disappear from scope.',
                correct : false
            },
            {
                text : 'Global elements are never visible \noutside of the module in which they are defined.',
                correct : true
            },
            {
                text : 'Global variables are visible to all members of a module',
                correct : false
            }
        ]
    },
    {
      id : 15,
      question : 'In addition to a list, the filter function accepts which ONE of the following:',
      answers : [
          {
              text : 'A predicate function that returns True or False',
              correct : true
          },
          {
              text : 'A predicate function that returns an integer',
              correct : false
          },
          {
              text : 'A predicate function that returns None',
              correct : false
          },
          {
              text : 'A predicate function that returns a new list',
              correct : false
          }
      ]
  },
  {
    id : 16,
    question : 'CONGRATULATIONS, YOU ARE A PYTHON MASTER!',
    answers : [
        {
            text : 'See results',
            correct : false
        },
        {
            text : 'See results',
            correct : false
        },
        {
            text : 'See results',
            correct : false
        },
        {
            text : `Please dont click here \n or else the game will crash`,
            correct : true
        }
    ]
}
]
  const moneyPyramid = useMemo (() => 
    [
        { id: 1, amount: "Python Newbie" },
        { id: 2, amount: "500 points" },
        { id: 3, amount: "1000 points" },
        { id: 4, amount: "1500 points" },
        { id: 5, amount: "Python Apprentice" },
        { id: 6, amount: "2000 points" },
        { id: 7, amount: "2500 points" },
        { id: 8, amount: "3000 points" },
        { id: 9, amount: "3500 points" },
        { id: 10, amount: "Python Aficionado" },
        { id: 11, amount: "4000 points" },
        { id: 12, amount: "4500 points" },
        { id: 13, amount: "5000 points" },
        { id: 14, amount: "6000 points" },
        { id: 15, amount: "Python Master" },
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
        <h2 className="endText">You earned: {earned}. {"\n"}The answer is <span id="sol">{solution.text}</span></h2>
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
