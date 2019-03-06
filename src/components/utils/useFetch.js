import { useEffect, useState } from "react";

const useFetch = (url, defaultData) => {
  const [data, setData] = useState(defaultData);

  async function fetchUrl() {
    const resp = await fetch(url);
    const json = await resp.json();
    setData(json);
  }

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return data;
};

export default useFetch;
