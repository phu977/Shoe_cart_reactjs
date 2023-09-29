import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGEQUANTITY, REMOVE_ITEM } from "./reducer/constant/constant";

class Cart extends Component {
  renderTbody = () => {
    let { cart, handleRemove, handleChangeQuantity } = this.props;
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <img style={{ width: "100px" }} src={item.image} alt="" />
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleChangeQuantity(item.id, -1);
              }}
            >
              -
            </button>
            <strong>{item.soLuong}</strong>
            <button
              className="btn btn-dark"
              onClick={() => {
                handleChangeQuantity(item.id, 1);
              }}
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleRemove(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderTbody()}</tbody>
      </table>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoe.cartShoe,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (shoeid) => {
      let action = {
        type: REMOVE_ITEM,
        payload: shoeid,
      };
      dispatch(action);
    },
    handleChangeQuantity: (id, option) => {
      let action = {
        type: CHANGEQUANTITY,
        payload: { id, option },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
