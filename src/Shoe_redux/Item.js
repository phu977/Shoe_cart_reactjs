import React, { Component } from "react";
import { connect } from "react-redux";
import { BUY_SHOE, VIEW } from "./reducer/constant/constant";

class Item extends Component {
  converNameShoe = (name) => {
    let maxLength = 12;
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    } else {
      return name;
    }
  };
  render() {
    let { name, image } = this.props.item;
    return (
      <div className="col-3">
        <div className="card text-left">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.converNameShoe(name)}</h4>
            <p className="card-text">
              <button
                className="btn btn-info mr-2"
                onClick={() => {
                  this.props.handleView(this.props.item);
                }}
              >
                View
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.handleBuy(this.props.item);
                }}
              >
                Add
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (shoe) => {
      let action = {
        type: BUY_SHOE,
        payload: shoe,
      };
      dispatch(action);
    },
    handleView: (shoe) => {
      let action = {
        type: VIEW,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Item);
