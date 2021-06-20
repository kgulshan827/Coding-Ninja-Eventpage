import React from "react";
import "./Body.css";
import { Eventsinfo } from "./Eventsinfo";
import { useEffect, useState } from "react";
import { Container, Nav, Tab, Tabs } from "react-bootstrap";
import { Subeventlist } from "./Subeventlist";
import {Tags} from "./Tags"
export const Body = (props) => {
  const url = "https://api.codingninjas.com/api/v3/events";
  console.log(props.tag_list)
  let tag_list=[]
  return (
    <div className="content">
      <div className="event">
        <div className="eventitle">
          <h3>Events & News</h3>
        </div>
        <div className="eventSubtitle">Learn,Compete and Grow</div>
      </div>

      <div className="eventslist">
        <div className="events-wrapper">
          <div className="event-categories">
            <Tabs
              defaultActiveKey="All Events"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="All Events" title="All Events">
              <div class="show-event">
                <div class="tab-conatiner">
                  <Subeventlist event_category={"ALL_EVENTS"} tag_list={tag_list}></Subeventlist>
                  </div>
                  <Tags tags_list={tag_list} catg={"all"}></Tags>
                </div>
              </Tab>
              <Tab eventKey="Webinar" title="Webinar">
              <div class="show-event">
              <div class="tab-conatiner">
                <Subeventlist event_category={"WEBINAR"} tag_list={tag_list}></Subeventlist>
                </div>
                <Tags tags_list={tag_list} catg={"webinar"}></Tags>
                </div>
              </Tab>
              <Tab eventKey="Coding Events" title="Coding Events">
              <div class="show-event">
              <div class="tab-conatiner">
                <Subeventlist event_category={"CODING_EVENT"} tag_list={tag_list}></Subeventlist>
                </div>
                <Tags tags_list={tag_list} catg={"coding"}></Tags>
                </div>
              </Tab>
              <Tab eventKey="Bootcamp" title="Bootcamp Events">

              <div class="show-event">
              <div class="tab-conatiner">
                <Subeventlist event_category={"BOOTCAMP_EVENTS"} tag_list={tag_list}></Subeventlist>
                </div>
                <Tags tags_list={tag_list} catg={"Bootcamp"}></Tags>
                </div>
              </Tab>
              <Tab eventKey="Workshop" title="Workshop">
              <div class="show-event">
              <div class="tab-conatiner">
                <Subeventlist event_category={"WORKSHOP"} tag_list={tag_list}></Subeventlist>
                </div>
                <Tags tags_list={tag_list} catg={"workshop"}></Tags>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

/*export const Tags = () => {
const taglist=new Set()
  var click = 0;
  const tags = [
    "Interview Preparation",
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
    "Scholarship Test",
  ];
  let AddTags = (button) => {
 //   console.log(button);
    
 document.getElementById(button).style.backgroundColor === "#fa7328"?document.getElementById(button).style.backgroundColor="#eee":document.getElementById(button).style.backgroundColor="#fa7328";
  
 taglist.add(button)
   console.log(taglist)
    // button.style.background-color="red"
  };
  return (
    <div className="taglist">
      <b>Tags</b>
      {tags.map((onevent) => {
      //  console.log(onevent);
        console.log(taglist)
        return (
          <div className="tags">
            <p taglist={taglist}
              id={onevent}
              onClick={() => {
              
                AddTags(onevent);
              }}
            >
              {onevent}
            </p>
          </div>
        );
      })}
    </div>
  );
};
*/