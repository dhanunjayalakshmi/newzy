import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (baseUrl, params = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { category, page_size } = params;

  useEffect(() => {
    if (!baseUrl) return;

    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(baseUrl, {
          params: {
            category,
            page_size,
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
  }, [baseUrl, category, page_size]);

  return { data, loading, error };
};

export default useFetchData;
