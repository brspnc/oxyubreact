import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Link } from 'react-router-dom';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class UBCalendar extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Test"
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Calendar</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>Calendar</h2>
              </div>
        </div>
          <div classname="row">
              <Calendar
                  localizer={localizer}
                  defaultDate={new Date()}
                  defaultView="month"
                  events={this.state.events}
                  style={{ height: "100vh" }}
                />
          </div>    
      </div>
    );
  }
}

export default UBCalendar;
