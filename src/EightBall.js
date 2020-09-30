import React, {useState} from 'react';
import { random } from './helpers';
import './EightBall.css';

const EightBall = (props) => {
let [shake, setShake] = useState({ msg: "Think of a Question", color: "black" });
let [shakes, setShakes] = useState(0)

    function shakeBall(){
        setShake(props.answers[random(props.answers.length)]);
        setShakes(shakes +=1)
    }
    function reset(){
        setShake({ msg: "Think of a Question", color: "black" });
        setShakes(0);
    }

    return (
        <div className="EightBall">
            <span>{shakes}</span>
            <div className={`EightBall-background ${shake.color}`}   onClick={shakeBall}>
    <span className="EightBall-msg">{shake.msg}</span>

            </div>
        <button onClick={reset} >Reset</button>
        </div>
    )

}


EightBall.defaultProps = { answers :
    [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ]
};

export default EightBall;