import "./App.css"
import { useState } from "react";

function App() {
  const [ques, setQues] = useState("");
  const [result, setResult] = useState("0");

  const updateInput = (e) => {
    const buttonText = e.target.innerText;

    if (buttonText === "=") {
      let question = ques.replace(/x/g, "*");
      question = question.replace(/\b0+(\d+)/g, "$1");
      const r = eval(question);
      setResult(r);
      setQues(r.toString()); 
    } else if (buttonText === "AC") {
      setQues("");
      setResult("0");
    } else if (buttonText === ".") {
      if (!/[/+*-]$/.test(ques) && !/\.$/.test(ques) && !/\.\d*$/.test(ques)) {
        setQues((prevQues) => prevQues + buttonText);
      }
    } else {
      if (buttonText === "0" && ques === "0") return;

      if (/[*x\/+-]$/.test(ques) && buttonText === '-') {
        console.log("inside: ", buttonText);
        setQues((prevQues) => prevQues + buttonText);
      } else if (ques.endsWith('-') && buttonText === '-') {
      } else if (/[*x\/+-]{2}$/.test(ques) && /[+x\/-]/.test(buttonText)) {
        console.log("inside: ", buttonText);
        setQues((prevQues) => {
          const newQues = prevQues.replace(/[*x\/+-]{2}$/, '');
          return newQues + buttonText;
        });
      } else {
        console.log("inside: ", buttonText);
        setQues((prevQues) => prevQues + buttonText);
      }

    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div id="display">{ques || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="input" onClick={updateInput}>
        <div id="clear">AC</div>
        <div id="divide">/</div>
        <div id="multiply">x</div>
        <div id="seven">7</div>
        <div id="eight">8</div>
        <div id="nine">9</div>
        <div id="subtract">-</div>
        <div id="four">4</div>
        <div id="five">5</div>
        <div id="six">6</div>
        <div id="add">+</div>
        <div id="one">1</div>
        <div id="two">2</div>
        <div id="three">3</div>
        <div id="equals">=</div>
        <div id="zero">0</div>
        <div id="decimal">.</div>
      </div>
    </div>
  );
}

export default App;


