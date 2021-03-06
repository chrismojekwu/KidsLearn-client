import React from "react";
import backpack from "../img/clothes/backpack.png";
import cap from "../img/clothes/cap.png";
import jeans from "../img/clothes/fashion.png";
import glasses from "../img/clothes/glasses.png";
import shorts from "../img/clothes/pants.png";
import gloves from "../img/clothes/protection.png";
import scarf from "../img/clothes/scarf.png";
import shoes from "../img/clothes/shoes.png";
import socks from "../img/clothes/socks.png";
import tshirt from "../img/clothes/tshirt.png";
const xss = require("xss");

function Item(props) {
  function scoreQuiz(e) {
    e.preventDefault();
    const {
      backpack,
      cap,
      jeans,
      glasses,
      shorts,
      shoes,
      scarf,
      tshirt,
      socks,
      gloves,
    } = e.target;
    const questions = [
      "backpack",
      "cap",
      "jeans",
      "glasses",
      "shorts",
      "shoes",
      "scarf",
      "tshirt",
      "socks",
      "gloves",
    ];
    const answer = {
      backpack: [
        "shoulders",
        "back",
        "body",
        "torso",
        "shoulder",
        "backpack",
        "pack",
      ],
      cap: ["head", "cap", "hat", "baseball hat", "baseball cap"],
      jeans: ["legs", "leg", "jeans", "pants", "trousers"],
      glasses: ["head", "eyes", "eye", "glasses", "sunglasses", "specticals"],
      shorts: [
        "legs",
        "leg",
        "shorts",
        "short pants",
        "swim trunks",
        "swimming trunks",
        "trunks",
      ],
      shoes: ["foot", "feet", "shoes", "sneakers", "trainers", "creps"],
      scarf: ["head", "neck", "scarf"],
      tshirt: ["body", "torso", "chest", "shirt", "t-shirt", "tee shirt"],
      socks: ["foot", "feet", "socks", "sock", "sox", "stockings"],
      gloves: [
        "hands",
        "hand",
        "gloves",
        "dishwashing gloves",
        "rubber gloves",
      ],
    };
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (
        answer[questions[i]].includes(
          xss(eval(questions[i]).value.toLowerCase())
        )
      ) {
        score += 10;
      }
    }

    props.clothing(score);
  }
  return (
    <div className="activity">
      <div className="clothingdisplay">
        <form onSubmit={scoreQuiz} id="quiz" className="clothing">
          <div className="quiz-pair">
            <img
              src={backpack}
              alt="Illustration of a backpack"
              className="clothing-image"
            />
            <input
              required
              name="backpack"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={cap}
              alt="Illustration of a baseball cap"
              className="clothing-image"
            />
            <input
              required
              name="cap"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={jeans}
              alt="Illustration of a pair of jeans"
              className="clothing-image"
            />
            <input
              required
              name="jeans"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={glasses}
              alt="Illustration of a pair of sunglasses"
              className="clothing-image"
            />
            <input
              required
              name="glasses"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={shorts}
              alt="Illustration of a pair of short"
              className="clothing-image"
            />
            <input
              required
              name="shorts"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={shoes}
              alt="Illustration of a pair of sneakers"
              className="clothing-image"
            />
            <input
              required
              name="shoes"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={scarf}
              alt="Illustration of a scarf"
              className="clothing-image"
            />
            <input
              required
              name="scarf"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={tshirt}
              alt="Illustration of a t-shirt"
              className="clothing-image"
            />
            <input
              required
              name="tshirt"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={socks}
              alt="Illustration of a pair of socks"
              className="clothing-image"
            />
            <input
              required
              name="socks"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>

          <div className="quiz-pair">
            <img
              src={gloves}
              alt="Illustration of a pair of kitchen gloves"
              className="clothing-image"
            />
            <input
              required
              name="gloves"
              type="text"
              className="clothing-input"
              placeholder="Item or Body Part"
            />
          </div>
        </form>

        <div className="controls">
          <input type="submit" form="quiz" value="SUBMIT" />
          <p>
            SCORE:{" "}
            {props.score === "CLOTHING TEST NOT TAKEN YET"
              ? props.score
              : `${props.score}  %`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
