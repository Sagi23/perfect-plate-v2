import { useState } from "react";
import "./App.css";
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
      <SearchForm
        getData={getData}
        cal={cal}
        pro={pro}
        fat={fat}
        setPlate={setPlate}
        plate={plate}
      />
      {/*  */}
      <PlateList plate={plate} />
      {/* PlateForm */}
      {/* About */}
      {/*  */}
    </div>
  );
}

export default App;
