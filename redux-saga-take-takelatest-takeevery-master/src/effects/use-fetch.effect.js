import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let reqHeader = new Headers();
      reqHeader.append(
        "Content-Type",
        "text/json",
        "Access-Control-Allow-Origin"
      );
      let initObject = {
        method: "GET",
        headers: reqHeader,
      };
      const res = await fetch(url, initObject);
      const dataArray = await res.json();
      setData(dataArray[0]);
    };

    fetchData();
  });

  return data;
};

export default useFetch;
