import React, { useState } from "react";

function Letters() {
  const [display, setDisplay] = useState("Hello World");

  return (
    <div className="activity">
      <div className="letters">
        <div className="letterDisplay">{display}</div>

        <div className="controls">
          <form>
            <input
              type="text"
              className="letterInput"
              onChange={(e) => setDisplay(e.target.value)}
            />
          </form>
          Type in the area above to update the display with words or letters.
        </div>
      </div>
    </div>
  );
}

export default Letters;
