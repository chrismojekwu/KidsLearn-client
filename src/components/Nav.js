import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div
          role="button"
          onClick={() => this.props.history.push("/letters")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          LETTERS
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/shapes")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          SHAPES
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/objects")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          THINGS
        </div>
        {window.innerWidth < 760 ? <br /> : ""}
        <div
          role="button"
          onClick={() => this.props.history.push("/animals")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          ANIMALS
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/clothing")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          CLOTHES
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/doodle")}
          className="nav-link activity-btn"
          tabindex="0"
        >
          DOODLE
        </div>
      </nav>
    );
  }
}

export default Nav;
