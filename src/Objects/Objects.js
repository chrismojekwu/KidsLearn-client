import React, { useState } from "react";
import icons from "./icons";

function Objects(props) {
  const [object, setObject] = useState("");

  const keyHandler = (e, item) => {
    if (e.key == "Enter") {
      setObject(`fas ${item} fa-10x`);
    }
  };

  const buttons = icons.map((items, index) => {
    return (
      <i
        onClick={() => setObject(`fas ${items} fa-10x`)}
        onKeyPress={(e) => keyHandler(e, items)}
        className={`fas ${items} fa-lg`}
        key={index}
        id="objecticon"
        tabIndex="0"
      ></i>
    );
  });

  return (
    <div className="activity">
      <div className="objects">
        <div className="objectsdisplay">
          <i id="objectlarge" className={object}></i>
        </div>

        <div className="controls">{buttons}</div>
      </div>
    </div>
  );
}

export default Objects;

/* <i value class="fas fa-couch"></i>
                    <i class="fas fa-bicycle"></i> */
