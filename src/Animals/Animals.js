import React, { useState } from "react";
import logo from "../img/kidslearn2.png";
import bear from "../img/animals/bear.png";
import bee from "../img/animals/bee.png";
import bird from "../img/animals/bird.png";
import butterfly from "../img/animals/butterfly.png";
import chicken from "../img/animals/chicken.png";
import clownfish from "../img/animals/clownfish.png";
import cow from "../img/animals/cow.png";
import duck from "../img/animals/duck.png";
import elephant from "../img/animals/elephant.png";
import frog from "../img/animals/frog.png";
import hippo from "../img/animals/hippo.png";
import horse from "../img/animals/horse.png";
import lion from "../img/animals/lion.png";
import monkey from "../img/animals/monkey.png";
import mouse from "../img/animals/mouse.png";
import owl from "../img/animals/owl.png";
import pig from "../img/animals/pig.png";
import shark from "../img/animals/shark.png";
import snail from "../img/animals/snail.png";
import squirrel from "../img/animals/squirrel.png";
import turtle from "../img/animals/turtle.png";

function Animals() {
  const [animal, setAnimal] = useState(logo);
  return (
    <div className="activity">
      <div className="animals">
        <div className="animalsdisplay">
          <img
            src={animal}
            className="selectedAnimal"
            alt={`illustration of an animal`}
          />
        </div>

        <div className="controls">
          <label>
            Choose an Animal
            <select
              onChange={(e) =>
                setAnimal(
                  e.target.options[e.target.options.selectedIndex].value
                )
              }
            >
              <option defaultValue value={logo}>
                ANIMALS
              </option>
              <option value={bear}>Bear</option>
              <option value={bee}>Bee</option>
              <option value={bird}>Bird</option>
              <option value={butterfly}>Butterfly</option>
              <option value={chicken}>Chicken</option>
              <option value={clownfish}>Fish</option>
              <option value={cow}>Cow</option>
              <option value={duck}>Duck</option>
              <option value={elephant}>Elephant</option>
              <option value={frog}>Frog</option>
              <option value={hippo}>Hippo</option>
              <option value={horse}>Horse</option>
              <option value={lion}>Lion</option>
              <option value={monkey}>Monkey</option>
              <option value={mouse}>Mouse</option>
              <option value={owl}>Owl</option>
              <option value={pig}>Pig</option>
              <option value={shark}>Shark</option>
              <option value={snail}>Snail</option>
              <option value={squirrel}>Squirrel</option>
              <option value={turtle}>Turtle</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Animals;
