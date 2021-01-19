import { useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [cal, setCal] = useState("");
  const [pro, setPro] = useState("");
  const [fat, setFat] = useState("");

  const getData = async (size, item) => {
    const headers = {
      headers: { "X-Api-Key": "TRB6Zg6NXcqfDADsPvtaRA==o3CbQWd2rWFQeXef" },
    };
    const { data } = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=${size}g ${item}`,
      headers
    );
    const info = data.items[0];
    if (info) {
      setCal(info.calories);
      setPro(info.protein_g);
      setFat(info.fat_total_g);
    }
    return;
  };

  return { getData, cal, pro, fat };
};

export default useGetData;
