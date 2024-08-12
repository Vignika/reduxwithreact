import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux';
import { buyIcecream } from '../redux/icecream/iceAction';

function ItemContainer(ownProps) {
  return (
    <div>
        <h2>Own Item - {ownProps.item}</h2>
        <button onClick={ownProps.buyItem}>buy items</button>
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
      ? state.cake.numCakes
      : state.iceCream.numIcecreams;
    return {
      item: itemState,

    };
  };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       buyCake: () => dispatch(buyCake()),
//       buyIcecream: () => dispatch(buyIcecream()),

//     };
//   };
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
      ? () => dispatch(buyCake(1))
      : () => dispatch(buyIcecream());
    return {
      buyItem: dispatchFunction,
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);