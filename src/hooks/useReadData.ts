import React from "react";

export const useReadData = (path: string) => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(path).then((r) => r.text());

      console.log({ result });
      setData(result.toString());
    };

    fetchData();
  }, [path]);

  return { data };
};
