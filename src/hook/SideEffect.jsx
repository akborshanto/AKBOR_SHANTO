import React, { useEffect, useState } from "react";

const SideEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(data);
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  return { data };
};

export default SideEffect;
