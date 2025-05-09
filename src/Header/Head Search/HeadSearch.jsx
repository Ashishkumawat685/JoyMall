import React, { useEffect, useState } from "react";
import "./HeadSearch.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function HeadSearch({ searchValue, showSearch, setShowSearch }) {
  const ShowBox = () => {
    setTimeout(() => {
      setShowSearch("none");
    }, 500);
  };

  const [ApiDataa, setApiData] = useState([]);

  const [filterData, setfilterData] = useState([]);
  async function ProductGet() {
    const ApiUrl = await fetch("http://localhost:3000/Category");
    const ApiData = await ApiUrl.json();
    setApiData(ApiData);
    setfilterData(ApiData);
  }

  useEffect(() => {
    ProductGet();
  }, []);

  function DropDownProduct() {
    if (searchValue === "") {
      setfilterData(ApiDataa);
    } else {
      const Filterdata = ApiDataa.filter(
        (finddata) =>
          finddata.ProductName?.toLowerCase().includes(
            searchValue.toLowerCase()
          ) ||
          finddata.Category?.toLowerCase().includes(
            searchValue.toLowerCase()
          ) ||
          finddata.rom?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setfilterData(Filterdata);
    }
  }

  useEffect(() => {
    DropDownProduct();
  }, [searchValue]);

  const DetailedPage = useNavigate();
  function GotoDetailed(ID) {
    DetailedPage(`/ProductDetails/${ID}`);
  }
  return (
    <>
      <section
        onMouseLeave={ShowBox}
        style={{ display: `${showSearch}` }}
        className="SearchHead"
      >
        <div className="Search_Container">
          <ul>
            {filterData.map((SearchPrdct) => {
              return (
                <>
                  <li onClick={() => GotoDetailed(SearchPrdct.id)}>
                    <CiSearch className="SearchHead_search_icon" />
                    {SearchPrdct.ProductName}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export { HeadSearch };
