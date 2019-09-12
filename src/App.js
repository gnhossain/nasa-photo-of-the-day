import React from "react";
import styled from "styled-components";

import APODList from "./components/APODList";
import "./App.css";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: DeepSkyBlue;

  padding: .5em;
  background: Lavender;
`;


function App() {
  return (
    <div className="App">
      <Title>NASA APOD</Title>
      {/* <h1>NASA APOD</h1> */}
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <APODList/>
    </div>
  );
}

export default App;
