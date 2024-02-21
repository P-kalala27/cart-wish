/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import apiClient from "../../utils/api-client";
const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data.products))
      .catch((err) => setError(err.message));
  }, []);
  return { data, error };
};

export default useData;
