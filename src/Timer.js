import { useEffect, useState, React } from "react";
import "./Timer.css";
import moment from "moment";

function Timer() {
  const [timer, setTimer] = useState(null);
  const [color, setColor] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setTimer(moment().format("LTS"));
      setColor(color == "red" ? "green" : "red");
    }, 1000);
  });
  return (
    <div className="timer-container">
      <h1 className={color + " timer"}>{timer}</h1>
    </div>
  );
}

export default Timer;
