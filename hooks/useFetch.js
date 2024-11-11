import { useState, useEffect } from "react";
import api from "@/config/api";

export default function useFetch(url, dependencies = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching from URL:", url); // Debug URL yang dipakai
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await api.get(url);
                console.log("Fetched data:", response.data); // Debug hasil fetch data
                setData(response.data.data); // Set hasil data di sini
            } catch (err) {
                console.error("Fetch error:", err); // Debug error
                setError("Gagal fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, dependencies);

    return { data, loading, error };
}
