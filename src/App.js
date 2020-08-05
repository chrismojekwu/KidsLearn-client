import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Doodle from "../src/Doodle/Doodle";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Progress from "./components/Progress";
import ProgressForm from "./components/ProgressForm";
import Letters from "./Letters/Letters";
import Shapes from "./Shapes/Shapes";
import Objects from "./Objects/Objects";
import Footer from "./components/Footer";
import Animals from "./Animals/Animals";
import Clothing from "./Clothing/Clothing";
import PrivateRoute from "../src/components/Utils/PrivateRoute";
import WelcomeInstructions from "../src/Instructions/WelcomeInstructions";
import ProgressInstructions from "../src/Instructions/ProgressInstructions";
import ReportSharePage from "./components/ReportSharePage";
import header from "../src/img/kidslearn3.png";
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideRef = React.createRef();
    this.state = {
      clothingScore: "NO CLOTHING SCORE",
      letters: 0,
      shapes: 0,
      objects: 0,
      animals: 0,
    };
  }

  updateClothing = (num) => {
    this.setState({
      clothingScore: num.toString(),
    });
  };

  saveLetters = (num) => {
    this.setState({
      letters: num,
    });
  };

  saveShapes = (num) => {
    this.setState({
      shapes: num,
    });
  };

  saveObjects = (num) => {
    this.setState({
      objects: num,
    });
  };

  saveAnimals = (num) => {
    this.setState({
      animals: num,
    });
  };

  clearScore = () => {
    this.setState({
      clothingScore: "NO CLOTHING SCORE",
      letters: 0,
      shapes: 0,
      objects: 0,
      animals: 0,
    });
  };

  render() {
    return (
      <>
        <header>
          <Link to="/progress">
            <img src={header} className="header-logo" alt="kids learn logo" />
          </Link>
        </header>
        <Route
          exact
          path={[
            "/",
            "/progress",
            "/sign-up",
            "/doodle",
            "/letters",
            "/shapes",
            "/objects",
            "/animals",
            "/clothing",
            "/share/:rep_id",
          ]}
          render={(props) => <Nav {...props} />}
        />
        <section className="page">
          <section className="sidebar" ref={this.sideRef}>
            <Route
              exact
              path={[
                "/doodle",
                "/letters",
                "/shapes",
                "/objects",
                "/animals",
                "/clothing",
              ]}
              render={(props) => (
                <ProgressForm
                  clothing={this.state.clothingScore}
                  letters={this.state.letters}
                  saveLetters={this.saveLetters}
                  shapes={this.state.shapes}
                  saveShapes={this.saveShapes}
                  objects={this.state.objects}
                  saveObjects={this.saveObjects}
                  animals={this.state.animals}
                  saveAnimals={this.saveAnimals}
                  clearScore={this.clearScore}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/progress"
              render={(props) => <ProgressInstructions />}
            />
            <Route
              exact
              path={["/", "/share/:rep_id"]}
              render={(props) => <WelcomeInstructions />}
            />
          </section>
          <main className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <Login clearScore={this.clearScore} {...props} />
              )}
            />
            <Route
              exact
              path="/sign-up"
              render={(props) => <Signup {...props} />}
            />
            <PrivateRoute
              path={"/progress"}
              component={Progress}
              clearScore={this.clearScore}
            />
            <Route exact path="/letters" render={(props) => <Letters />} />
            <Route exact path="/shapes" render={(props) => <Shapes />} />
            <Route exact path="/objects" render={(props) => <Objects />} />
            <Route exact path="/animals" render={(props) => <Animals />} />
            <Route
              exact
              path="/clothing"
              render={(props) => (
                <Clothing
                  score={this.state.clothingScore}
                  clothing={this.updateClothing}
                />
              )}
            />
            <Route
              exact
              path="/doodle"
              render={(props) => (
                <Doodle sideRef={this} sideWidth={this.state.sideBarWidth} />
              )}
            />
            <Route
              exact
              path="/share/:rep_id"
              render={(props) => <ReportSharePage {...props} />}
            />
          </main>
        </section>

        <footer>
          <Route
            exact
            path={[
              "/",
              "/progress",
              "/sign-up",
              "/doodle",
              "/letters",
              "/shapes",
              "/objects",
              "/animals",
              "/clothing",
              "/share/:rep_id",
            ]}
            render={(props) => <Footer />}
          />
        </footer>
      </>
    );
  }
}

export default App;
