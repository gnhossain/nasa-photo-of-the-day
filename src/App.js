import React from "react";

import APODList from "./components/APODList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>NASA APOD</h1>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
      <APODList/>
    </div>
  );
}

export default App;
