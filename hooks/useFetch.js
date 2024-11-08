import { useState, useEffect } from "react";
import api from "@/config/api";


const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
    
      try {
        const response = await api.get(endpoint, options);
        console.log("Response:", response);
        if (isMounted) setData(response.data);
      } catch (err) {
        if (err.response?.status === 429) {
          // Tambahkan delay jika 429 Too Many Requests
          console.warn("Too many requests - Retrying in 5 seconds...");
          setTimeout(fetchData, 5000); // Retry after 5 seconds
        } else {
          console.error("Fetch error:", err.response ? err.response.data : err.message);
          if (isMounted) setError("Gagal memuat data. Pastikan endpoint valid.");
        }
      } finally {
        setLoading(false);
      }
    };
    

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, options]);

  return { data, loading, error };
};

export default useFetch;
