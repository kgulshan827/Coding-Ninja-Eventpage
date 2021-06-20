import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Subeventlist.css";
import { Row, Container, Col, Card } from "react-bootstrap";
export const Evenlist = (props) => {

var timestamp = (props.events.start_time.toString());
var myDate = new Date( timestamp *1000);
let x=myDate.toLocaleString();
x=x.replaceAll('/','-');

//console.log(date)
  return (
    <div className="box">
      <Card>
        <Card.Img variant="top" src={props.events.cover_picture} />
        <Card.Body>
          <Card.Title>{props.events.name}</Card.Title>
          <div className="detail">
            <div className="event-info-item">
              <p className="item-label">
                <b>Starts on</b>
              </p>
              <p className="item-value">{x}</p>
            </div>
            <div className="event-info-item">
              <p className="item-label">
                <b>Entry Fee</b>
              </p>
              <p className="item-value">
                {props.events.currency} {props.events.fees}
              </p>
            </div>
            <div className="event-info-item">
              <p className="item-label">
                <b>Venue</b>
              </p>
              <p className="item-value">{props.events.venue}</p>
            </div>
          </div>

          <Card.Text>{props.events.short_desc}</Card.Text>
          <div className="tag-container">
            {props.events.card_tags.map((tags) => {
              return <div className="tag">{tags}</div>;
            })}
          </div>
          <div className="registered-user">
            <div className="profile-image-container">
              {
                //
                props.events.registered_users.top_users.map((people) => {
                  //console.log(props.events.registered_users.top_users.other_users_count)
                  return (
                    <div className="image">
                      <img className="img" src={people.image_url}></img>
                    </div>
                  );
                })
              }
            </div>
            {
              props.events.registered_users.other_users_count>0?
            (  <p className="count">
                 and {props.events.registered_users.other_users_count} others registered
              </p>):""
            }
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
