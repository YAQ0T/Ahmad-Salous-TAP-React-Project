import axios from "axios";
import { useEffect, useState } from "react";
let cache = {};
const useAxios = (url, method = "GET") => {
  const [res, setRes] = useState(cache[url]);
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
        setRes(response.data ? response.data : []);
        if (response.data) cache[url] = response.data;
      } catch (e) {
        setError(e);
      }
    };
    if (!cache[url]) fetchData();
    else setRes(cache[url]);
  }, [url, method]);
  return { res, error };
};
export default useAxios;
