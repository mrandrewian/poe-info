import { useEffect, useState } from "react";

const useFetch = (url, defaultData, mode = "cors") => {
  const [data, setData] = useState(defaultData);

  async function fetchUrl() {
    try {
      const resp = await fetch(url, {mode: mode});
      console.log("resp", resp)
      const json = await resp.json();
      setData(json);
    } catch(err) {
      // catches errors both in fetch and response.json
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, [url]);

  return data;
};

export default useFetch;
