import Cards from "@/components/ui/Cards/Cards";
import { useEffect, useState } from "react";

import { fetchHandler } from "../APIController/fetch";
export default function Search(filter) {
  const [results, setResults] = useState([]);

  const load = async () => {
    const [results, size] = await fetchHandler(filter);
    filter.set(size);
    setResults(results);
  };
  useEffect(() => {
    document.querySelector(".page").style.display = "none";
    document.querySelector(".loading").style.display = "flex";
    load();
  }, [filter]);

  useEffect(() => {
    document.querySelector(".page").style.display = "";
    document.querySelector(".loading").style.display = "";
  }, [results]);
  return (
    <>
      <Cards
        Results={results}
        Type={filter.filter.type == "all" ? "movie" : filter.filter.type}
      />
    </>
  );
}
