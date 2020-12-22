import React, { useState } from "react";
import "./styles.css";

var color = "yellow";
//var heading=prompt("give me your name")
var heading = "Emoji Interpreter";

var emojiDictionary = {
  "🏂": "snowboarder",
  "🏄": "surfing",
  "🏊‍♂️": "swimming",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "❤️": "love",
  "👇": "finger down",
  "💔": "broken heart",
  "🍉": "watermelon",
  "🏠": "Home"
};
var emojilist = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojichange(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    // console.log(meaning);
    setmeaning(meaning);
  }

  function clickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        <span style={{ backgroundColor: color }}> welcome to {heading}</span>
      </h1>
      <input onChange={emojichange} />
      <h2>{meaning}</h2>
      <h3> Emoji's We Know </h3>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => clickhandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
