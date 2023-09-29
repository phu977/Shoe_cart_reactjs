import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import Detail from "./Detail";

export default class Shoe_redux extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <Cart />
          </div>
          <div className="col-7">
            <ListShoe />
          </div>
          <Detail />
        </div>
      </div>
    );
  }
}
