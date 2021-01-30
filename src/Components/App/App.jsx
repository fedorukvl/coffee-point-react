import React, { useState } from "react";

import { Navigation } from "../index.js";

function App() {
  const [navigationList] = useState([
    { id: 1, title: "наши точки" },
    { id: 2, title: "френд-пасс" },
    { id: 3, isLogo: true, title: "coffee-point" },
    { id: 4, title: "журнал" },
    { id: 5, title: "наши точки" },
  ]);
  return (
    <div className="App">
      <Navigation navigationList={navigationList} />
    </div>
  );
}

export default App;
