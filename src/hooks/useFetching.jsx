import { useState } from "react";

const useFetching = (callback) => {
  const [loading, setLoading] = useState(false);

  const fetching = async () => {
    setLoading(true);
    await callback();
    setLoading(false);
  };

  return [fetching, loading];
};

export default useFetching;
