import React from "react";

const useLoad = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const loadPage = async () => {
      const minLoadTime = 1000;
      const startTime = Date.now();

      await Promise.all([
        new Promise((resolve) => setTimeout(resolve, minLoadTime)),
      ]);

      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < minLoadTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoadTime - elapsedTime)
        );
      }

      setIsLoading(false);
    };

    loadPage();
  }, []);

  return { isLoading, setIsLoading };
};

export default useLoad;
