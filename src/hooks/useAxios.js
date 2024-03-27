import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, method = "GET") => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const instance = axios.create({
          baseURL: url,
          timeout: 5000,
          method: method,
        });
        const response = await instance.request();
        setRes(response.data);
      } catch (e) {
        setError(e);
      }
    };
    fetchData();
  }, [url, method]);
  return { res, error };
};
export default useAxios;
