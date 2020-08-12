import React, { useState } from "react";
import TokenService from "../services/token-service";
import ReportsApiService from "../services/reports-api-service";

function ProgressForm(props) {
  const [error, setError] = useState("");

  function handleSave(e) {
    e.preventDefault();
    const { letters, colors, objects, animals, comments } = e.target;

    const clothes = props.clothing === "NO CLOTHING SCORE" ? 0 : props.clothing;
    setError("");

    ReportsApiService.postReport({
      letters: letters.value,
      colors: colors.value,
      objects: objects.value,
      animals: animals.value,
      clothes: clothes,
      comments: comments.value,
    })
      .then((report) => {
        letters.value = "";
        colors.value = "";
        objects.value = "";
        animals.value = "";
        comments.value = "";
        props.clearScore();
        props.history.push("/progress");
      })
      .catch((res) => {
        setError(res.error);
      });
  }
  function renderForm() {
    return (
      <form onSubmit={handleSave} className="progress-form">
        <div className="errors">{error}</div>
        <h4>Progress</h4>
        <label
          htmlFor="letters-progress"
          className="inputslabels prog-form-title"
        >
          LETTERS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          value={props.letters}
          onChange={(e) => props.saveLetters(e.target.value)}
          name="letters"
          id="letters-progress"
          className="inputslabels"
        />{" "}
        <button
          type="button"
          onClick={() => props.saveLetters(props.increment(props.letters))}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => props.saveLetters(props.decrement(props.letters))}
        >
          -
        </button>
        <label
          htmlFor="shapes-progress"
          className="inputslabels prog-form-title"
        >
          SHAPES
        </label>
        <input
          type="number"
          min="0"
          max="20"
          value={props.shapes}
          onChange={(e) => props.saveShapes(e.target.value)}
          name="colors"
          id="shapes-progress"
          className="inputslabels"
        />
        <button
          type="button"
          onClick={() => props.saveShapes(props.increment(props.shapes))}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => props.saveShapes(props.decrement(props.shapes))}
        >
          -
        </button>
        <label
          htmlFor="objects-progress"
          className="inputslabels prog-form-title"
        >
          OBJECTS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          value={props.objects}
          onChange={(e) => props.saveObjects(e.target.value)}
          name="objects"
          id="objects-progress"
          className="inputslabels"
        />
        <button
          type="button"
          onClick={() => props.saveObjects(props.increment(props.objects))}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => props.saveObjects(props.decrement(props.objects))}
        >
          -
        </button>
        <label
          htmlFor="animals-progress"
          className="inputslabels prog-form-title"
        >
          ANIMALS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          value={props.animals}
          onChange={(e) => props.saveAnimals(e.target.value)}
          name="animals"
          id="animals-progress"
          className="inputslabels"
        />
        <button
          type="button"
          onClick={() => props.saveAnimals(props.increment(props.animals))}
        >
          +
        </button>
        <button
          type="button"
          onClick={() => props.saveAnimals(props.decrement(props.animals))}
        >
          -
        </button>
        <label htmlFor="clothes-score" className="inputslabels prog-form-title">
          CLOTHES
        </label>
        {props.clothing === "NO CLOTHING SCORE"
          ? props.clothing
          : `${props.clothing}  %`}
        <label htmlFor="journal" className="inputslabels prog-form-title">
          NOTES
        </label>
        <textarea
          id="journal"
          value={props.comments}
          onChange={(e) => props.saveComments(e.target.value)}
          name="comments"
          className="inputslabels"
        />
        <input type="submit" value="SAVE" className="inputslabels" />
      </form>
    );
  }
  function renderMessage() {
    return (
      <div className="progress-form">
        Please <a href="/sign-up">create an account</a> and/or{" "}
        <a href="/">sign in</a> to track your childs progress.
      </div>
    );
  }

  return <>{TokenService.hasAuthToken() ? renderForm() : renderMessage()}</>;
}

export default ProgressForm;
