import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Image } from "react-bootstrap";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      return await axios.get("https://random.dog/woof.json");
    };
    fetchData()
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <div>
        {data && (
          <Image
            style={{ width: "500px", height: "500px" }}
            src={data.url}
            fluid
          />
        )}
      </div>
      <button onClick={() => window.location.reload(false)}>NEW DOG</button>
    </div>
  );
}

export default App;
