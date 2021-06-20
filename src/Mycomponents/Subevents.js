import React from 'react'
import axios from "axios";
import { Evenlist } from "./Evenlist";
import { Eventsinfo } from './Eventsinfo';
import  { useState, useEffect } from "react";
export const Subevents = (props) => {
    let [tag, setTag] = useState(["tag_list="]);
    let urltemp="https://api.codingninjas.com/api/v3/events?"+"event_category="+props.event_category+"&event_sub_category="+props.event_sub_category+"&"+tag+"&offset=0"
    
 let [url,geturl]=useState([urltemp])
    useEffect(() => {
      gettag()
      geturl("https://api.codingninjas.com/api/v3/events?"+"event_category="+props.event_category+"&event_sub_category="+props.event_sub_category+"&"+tag+"&offset=0"
      )
    }, []);
    const gettag = ()=> {
        if(props.tag_list[props.tag_list.length-1]===undefined)
        {
            setTag("tag_list=")
        }
        else{
            setTag(props.tag_list[0])
        }
    }
    
    
    const [list, getlist] = useState([]);
    useEffect(() => {
      getAlllist();
    }, []);
    
    //console.log(url)
    const getAlllist = () => {
      axios
        .get(`${url}`)
        .then((response) => {
          const alllist = response.data;
          const alllist1 = JSON.parse(JSON.stringify(alllist));
          //console.log("data");
          //console.log(alllist1.data.events);
          getlist(alllist1.data.events);
        })
        .catch((error) => console.error(`Error': ${error}`));
    };
  
    return (
      <div className="eventbody">
        <div className="grid">
          {list.length > 0 ? (
            list.map((onevent) => {
              //console.log(onevent.name);
              return <Evenlist events={onevent}></Evenlist>;
            })
          ) : (
            <h3>No Events Found</h3>
          )}
      
        </div>
      </div>
    );
  };
  