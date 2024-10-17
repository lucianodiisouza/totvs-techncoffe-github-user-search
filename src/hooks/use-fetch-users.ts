import { useState } from "react";
import { ResultData } from "../utils/types";

export const useFetchUsers = (userName: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [resultData, setResultData] = useState<ResultData>({
    items: [],
    incomplete_status: true,
    total_count: 0,
  });

  const fetchData = async () => {
    if (userName.trim().length === 0) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/search/users?per_page=42&page=1&q=${userName.trim()}`
      );
      const data = await response.json();
      setResultData(data);
    } catch (err) {
      setError("Erro ao buscar usuários.");
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, resultData, fetchData, error };
};
