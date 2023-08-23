import "./App.css";
import plan from "./assets/plan.png";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { useState, useEffect } from "react";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  const [iconSize, setIconSize] = useState({ width: "250px", height: "250px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIconSize({ width: "100px", height: "100px" });
      } else if (window.innerWidth <= 768) {
        setIconSize({ width: "120px", height: "120px" });
      } else if (window.innerWidth <= 1024) {
        setIconSize({ width: "150px", height: "150px" });
      } else {
        setIconSize({ width: "250px", height: "250px" });
      }
    };

    // Run it once to set the initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className="budget-home">
          <h1 className="title">BudgetFlow</h1>
          <div className="budget-home-img">
            <div className="plan-image">
              <img src={plan} alt="Planning" className="p-image" />
              <p className="plan-text1">🤑Saving...</p>
              <p className="plan-text2">💡Idea</p>
              <p className="plan-text3">🏆Acquire</p>
              <p className="plan-text4">💡Planning...</p>
            </div>
          </div>

          <div className="budget-texts">
            <h3 className="budget-home-title">
              Welcome, Let's Get Something Planning😋!
            </h3>
            <p className="home-subtext">Save & Plan towards that thingy...</p>
            <div className="rocket">
              <a href="www">
                <lord-icon
                  src="https://cdn.lordicon.com/qduilmpq.json"
                  trigger="loop"
                  stroke="15"
                  colors="primary:#121331,secondary:#08a88a"
                  style={iconSize}
                ></lord-icon>
              </a>
              <p className="rocket-text">Click the Rocket!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Block ---------- */}
      {/* <div className="credits">
        <blockquote>
          "A goal without a plan is just a wish."
          <cite>- Antoine de Saint-Exupéry</cite>
        </blockquote>
        <blockquote>
          "Good fortune is what happens when opportunity meets with planning."
          <cite>- Thomas Edison</cite>
        </blockquote>
        <p className="author">
          <a href="https://www.linkedin.com/in/dennis-agbokpe-b1b4241aa/">
            Creator & Author: <span>Dennis K.</span>
          </a>
        </p>
      </div> */}
      {/* Credit Block End ---------- */}
    </>
  );
}

export default App;
