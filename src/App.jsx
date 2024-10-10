import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Controller/Search/Search";
import Filter from "./components/ui/Filter/Filter";

function App() {
  const [page, setPage] = useState(1);
  const changePage = (e) => {
    const target = e.target;
    switch (target.innerHTML) {
      case "«": {
        setPage(1);
        break;
      }
      case "←": {
        setPage(page - 1);
        break;
      }
      case "→": {
        setPage(page + 1);
        break;
      }
      case "»": {
        setPage(500);
        break;
      }
      default: {
        setPage(+target.innerHTML);
      }
    }
  };
  const showPages = () => {
    let pages = [];
    if (page > 1) {
      pages.push(<li onClick={changePage}>«</li>);
      pages.push(<li onClick={changePage}>←</li>);
    }
    if (page > 2) {
      pages.push(<li onClick={changePage}>{page - 2}</li>);
      pages.push(<li onClick={changePage}>{page - 1}</li>);
    }
    if (page == 2) {
      pages.push(<li onClick={changePage}>{page - 1}</li>);
    }
    pages.push(
      <li onClick={changePage} className="active">
        {page}
      </li>
    );
    if (page < 500) {
      pages.push(<li onClick={changePage}>{page + 1}</li>);
      if (page + 1 < 500) {
        pages.push(<li onClick={changePage}>{page + 2}</li>);
      }
      pages.push(<li onClick={changePage}>→</li>);
      pages.push(<li onClick={changePage}>»</li>);
    }
    return pages;
  };
  const [filterObject, setFilterObject] = useState({
    type: "movie",
    year: "all",
    genre: [],
    country: [],
    search: "",
  });
  useEffect(() => {
    setPage(1);
  }, [filterObject]);
  return (
    <div className="App">
      <Filter set={setFilterObject} value={filterObject} />
      <div className="pageNumbers">
        <ul>{showPages()}</ul>
      </div>
      <Search page={page} filter={filterObject} />
    </div>
  );
}

export default App;
