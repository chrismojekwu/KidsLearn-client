import React from "react";

class Nav extends React.Component {
  /*shouldComponentUpdate() {
    return false;
  }*/

  render() {
    return (
      <nav>
        <div
          role="button"
          onClick={() => this.props.history.push("/letters")}
          className="nav-link activity-btn"
        >
          LETTERS
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/shapes")}
          className="nav-link activity-btn"
        >
          SHAPES
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/objects")}
          className="nav-link activity-btn"
        >
          THINGS
        </div>
        {window.innerWidth < 760 ? <br /> : ""}
        <div
          role="button"
          onClick={() => this.props.history.push("/animals")}
          className="nav-link activity-btn"
        >
          ANIMALS
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/clothing")}
          className="nav-link activity-btn"
        >
          CLOTHES
        </div>

        <div
          role="button"
          onClick={() => this.props.history.push("/doodle")}
          className="nav-link activity-btn"
        >
          DOODLE
        </div>
      </nav>
    );
  }
}

export default Nav;
