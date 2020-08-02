import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <button
          onClick={() => this.props.history.push("/letters")}
          className="nav-link activity-btn"
        >
          LETTERS
        </button>

        <button
          onClick={() => this.props.history.push("/shapes")}
          className="nav-link activity-btn"
        >
          SHAPES
        </button>

        <button
          onClick={() => this.props.history.push("/objects")}
          className="nav-link activity-btn"
        >
          THINGS
        </button>
        {window.innerWidth < 760 ? <br /> : ""}
        <button
          onClick={() => this.props.history.push("/animals")}
          className="nav-link activity-btn"
        >
          ANIMALS
        </button>

        <button
          onClick={() => this.props.history.push("/clothing")}
          className="nav-link activity-btn"
        >
          CLOTHES
        </button>

        <button
          onClick={() => this.props.history.push("/doodle")}
          className="nav-link activity-btn"
        >
          DOODLE
        </button>
      </nav>
    );
  }
}

export default Nav;
