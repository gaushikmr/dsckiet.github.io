import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Events from "../Events/Events";

export default class EventsPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="fluid-container" style={{ paddingBottom: "0" }}>
          <div class="container ">
            <h2 class="title mt-4">DSC KIET's Events</h2>
            <p class="description">
              Questions? Please contact dsckiet@gmail.com.
            </p>
          </div>

          <div>
            <div class="container pt-4 pb-4">
              <h4 class="title">Upcoming Events</h4>
              <p class="description">
                Our events are open to newbies, students and developers who are
                interested in cutting-edge technologies or use them as part of
                their projects.
              </p>
              <br />
              <Events />
            </div>
          </div>

          <div class="featured">
            <div class="container pt-4 pb-4">
              <h5 class="title" style={{ color: "#444444" }}>
                Directory of Past Events
              </h5>
              <p class="description">
                Events are listed in reverse chronological order by date.
                <br />
                Here are the recent 10 events. To know more about the past
                events let us know at dsckiet@gmail.com.
              </p>
              <Events />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}