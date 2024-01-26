import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../styles/getdata.css";

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ap-south-1.aws.data.mongodb-api.com/app/satya123-diawr/endpoint/getdata"
      );

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="getcontainer">
      <h2>All Post ({data.length})</h2>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
}

export default GetData;
