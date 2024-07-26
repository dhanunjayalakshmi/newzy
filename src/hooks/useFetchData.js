import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (baseUrl, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    if (!baseUrl) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(baseUrl, {
          params: {
            ...params,
            country: "us",
            language: "en",
            apiKey: apiKey,
          },
        });

        setData(response?.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, params, apiKey]); // Dependency array includes URL and options to refetch when they change

  return { data, loading, error };
};

export default useFetchData;
