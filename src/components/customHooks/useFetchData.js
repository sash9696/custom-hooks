import { useEffect } from "react";
import { useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(
    function () {
      fetch(url) //returns a promise
        .then((response) => response.json())
        .then((data) => setData(data));
    },
    [url]
  );

  return [data];
};

export default useFetchData;
