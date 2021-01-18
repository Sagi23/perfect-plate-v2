import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import PlateList from "./components/PlateList";
import SearchForm from "./components/SearchItemForm";
import useGetData from "./hooks/useGetData";

function App() {
  const [plate, setPlate] = useState([]);
  const { getData, cal, pro, fat } = useGetData();
  return (
    <div className="App">
      <Header />
      <div className="landing">
        <SearchForm
          getData={getData}
          cal={cal}
          pro={pro}
          fat={fat}
          setPlate={setPlate}
          plate={plate}
        />
        <PlateList plate={plate} setPlate={setPlate} />
      </div>
      <About />
    </div>
  );
}

export default App;
