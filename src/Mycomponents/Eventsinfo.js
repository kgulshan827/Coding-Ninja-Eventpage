import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Evenlist } from "./Evenlist";
import "./Subeventlist.css";
import { Card } from "react-bootstrap";
export const Eventsinfo = (props) => {
  const [list, getlist] = useState([]);
   
  const url = props.url;

  useEffect(() => {
    getAlllist();
  }, []);

  const getAlllist = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const alllist = response.data;
        const alllist1 = JSON.parse(JSON.stringify(alllist));
        console.log("data");
        console.log(alllist1.data.events);
        getlist(alllist1.data.events);
      })
      .catch((error) => console.error(`Error': ${error}`));
  };

  return (
    <div className="eventbody">
      <div className="grid">
        {list.length > 0 ? (
          list.map((onevent) => {
            console.log(onevent.name);
            return <Evenlist events={onevent}></Evenlist>;
          })
        ) : (
          <h3>No Events Found</h3>
        )}
    
      </div>
    </div>
  );
};
