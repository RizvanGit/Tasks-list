import { useCallback, useState } from "react";
import { ApplyFnType, RequestType } from "../types/types";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = useCallback(
    async (request: RequestType, applyFunction: ApplyFnType) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(request.url, {
          method: request.method ? request.method : "GET",
          body: request.body ? request.body : null,
          headers: request.headers ? request.headers : {},
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const data = await response.json();

        applyFunction(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An error occurred while sending request");
        }
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
