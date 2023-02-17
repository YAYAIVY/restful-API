import React, { useEffect, useState } from "react";
import { LIST_DATA } from "../components/Api_config";
import ListTable from "../components/ListTable.js";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";

function AbList() {

  const location = useLocation()
  console.log("1--", location.search);
  const usp = new URLSearchParams(location.search);

  const [data, setData] = useState({
    page: 0,
    rows: [],
    perPage: 0,
    totalPages: 0,
    totalRows: 0,
  });

  const getListData = async (page=1) => {
    const r = await fetch(LIST_DATA + `?page=${page}`);
    const json = await r.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    // 設定功能
    console.log("useEffect--");
    getListData( +usp.get('page') );

    return () => {
      // 解除功能
      console.log("unmount AbList--");
    };
  }, [ location.search ]);

  return (
    <div className="container">
      {console.log("render AbList--")}
      <Pagination page={data.page} totalPages={data.totalPages} getListData={getListData} />

      <ListTable rows={data.rows} />
    </div>
  );
}

export default AbList;