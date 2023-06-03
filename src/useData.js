import { useState, useEffect } from "react";
import axios from "axios";
export default function useDate(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.results);

        console.log(
          "🚀 ~ file: useData.js:16 ~ .then ~ res.data:",
          res.data.results
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}
