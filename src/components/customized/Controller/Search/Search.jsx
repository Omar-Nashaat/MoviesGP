<<<<<<< HEAD
import { useEffect, useState } from "react";
import { getAPI, getParams } from "../APIController/controller";
import Cards from "../../ui/Cards/Cards";
export default function Search(filter) {
  const [results, setResults] = useState([]);
  const load = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjBhM2ViMDhhMWQ5Y2RjY2E1NGZjNjcwMTgxMmFjOCIsIm5iZiI6MTcyODM5OTU2NS43NTE0Miwic3ViIjoiNjZmOTgyNjIxYTljOTE4OGZlY2M2M2RjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.keNsd-uSLYEfqV7UebVqVQcph1bHJFI1bdE-Wn7_FNU",
      },
    };

    fetch(getAPI(filter) + getParams(filter), options)
      .then((response) => response.json())
      .then((response) => {
        setResults(response.results);
        console.log(response.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    load();
  }, [filter]);
  return (
    <Cards
      Results={results}
      Type={filter.filter.type == "all" ? "movie" : filter.filter.type}
    />
  );
}
=======
import Cards from "@/components/customized/ui/Cards/Cards";
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
>>>>>>> eec6d5d93ef76fb5e6022635fdcfeeec07e6c7b8
