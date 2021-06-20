import "./Subeventlist.css"
import React, { useState, useEffect } from "react";

export const Tags= (props) => {
   // console.log(props);
  const [tag, setTag] = useState([]);
  useEffect(() => {
    const params = new URLSearchParams({
      tag_list: tag
    });
  props.tags_list[0]=(params.toString());
    //console.log(props.tags_list)
  }, [tag]);

  //console.log(tag);
  var listTag = [  "Interview Preparation",
  "Contest Solutions",
  "Competitive Programming",
  "Futuristic Tech",
  "Coding Concepts",
  "Career Guidance",
  "Web Development",
  "Android",
  "Machine Learning",
  "Campus Event",
  "Online Coding Event",
  "Hackathon",
  "Women Who Code",
  "GSoC",
  "Placement",
  "Aptitude Preparation",
  "Efficient Coding",
  "Programming Contest",
  "Coding Marathon",
  "All Night Coding",
  "Code Wars",
  "Scholarship Test",];


  var listTagComp = listTag.map((val) => (
    <Tag
      name={val}
      onclick={(name) => {
          
        document.getElementById(name).style.backgroundColor="#ff7328";
        setTag([...tag, val]);
      }}
      catg={props.catg}

      ondbclick ={(name)=>{
        console.log(name)
        document.getElementById(name).style.backgroundColor="#eee";
    }}



    />
  ));
  return (
    <div>
      <h1>Tags</h1>
      {listTagComp}
    </div>
  );
}

function Tag({ name, onclick,ondbclick,catg }) {
//  console.log(name+catg)
  return (
    <div className="tags">
      <p id={name+catg} onClick={()=>{
          onclick(name+catg)}}
          onDoubleClick={()=>{
              ondbclick(name+catg)}}
      >
        {name}
      </p>
    </div>
  );
}
