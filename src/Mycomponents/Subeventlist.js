import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Subevents } from "./Subevents";
import "./Subeventlist.css"
export const Subeventlist = (props) => {
 // console.log(props.tag_list)
  return (
    <div className="event-sub-categories">
      <Tabs
        defaultActiveKey="Upcoming"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Upcoming" title="Upcoming">
          <div className="events-body">
            <Subevents event_category={props.event_category} event_sub_category={"Upcoming"} tag_list={props.tag_list}></Subevents>
            </div>
        </Tab>
        <Tab eventKey="Archived" title="Archived">
            <Subevents event_category={props.event_category} event_sub_category={"Archived"} tag_list={props.tag_list} ></Subevents>
        </Tab>
        <Tab eventKey="All Times Favourite" title="All Times Favourite">
        <Subevents event_category={props.event_category} event_sub_category={"All Time Favorites"} tag_list={props.tag_list}></Subevents>
        </Tab>
      </Tabs>
      
    </div>
  );
};
