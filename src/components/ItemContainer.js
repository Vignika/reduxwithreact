import React from 'react'
import { connect } from 'react-redux';

 function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
    </div>
  )
}


const mapStateToProps = (state,ownProps) => {
    const itemState  = 
    ownProps.cake ? state.cake.numCakes
    :state.icecream.numIcecreams
    return {
     item: itemState

    };
  };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       buyCake: () => dispatch(buyCake()),
//       buyIcecream: () => dispatch(buyIcecream()),

//     };
//   };

export default connect(mapStateToProps)(ItemContainer);