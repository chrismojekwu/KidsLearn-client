import React, { useState } from "react";
import TokenService from "../services/token-service";
import ReportsApiService from "../services/reports-api-service";

function ProgressForm(props) {
  const [error, setError] = useState();
  function handleSave(e) {
    e.preventDefault();
    const { letters, colors, objects, animals, comments } = e.target;

    const clothes =
      props.clothing === "CLOTHING TEST NOT TAKEN YET" ? 0 : props.clothing;
    setError(null);

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
        props.history.push("/progress");
      })
      .catch((res) => {
        setError(res.error);
        alert(error);
      });
  }
  function renderForm() {
    return (
      <form onSubmit={handleSave} className="progress-form">
        <label htmlFor="letters-progress" className="inputslabels">
          LETTERS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          name="letters"
          id="letters-progress"
          className="inputslabels"
        />
        <label htmlFor="shapes-progress" className="inputslabels">
          SHAPES
        </label>
        <input
          type="number"
          min="0"
          max="20"
          name="colors"
          id="shapes-progress"
          className="inputslabels"
        />
        <label htmlFor="objects-progress" className="inputslabels">
          OBJECTS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          name="objects"
          id="objects-progress"
          className="inputslabels"
        />
        <label htmlFor="animals-progress" className="inputslabels">
          ANIMALS
        </label>
        <input
          type="number"
          min="0"
          max="20"
          name="animals"
          id="animals-progress"
          className="inputslabels"
        />
        <label htmlFor="clothes-score" className="inputslabels">
          CLOTHES
        </label>
        {props.clothing === "CLOTHING TEST NOT TAKEN YET"
          ? props.clothing
          : `${props.clothing}  %`}
        <label htmlFor="journal" className="inputslabels">
          COMMENTS
        </label>
        <textarea id="journal" name="comments" className="inputslabels" />
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
