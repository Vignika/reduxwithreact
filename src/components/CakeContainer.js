import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { buyIcecream } from "../redux/icecream/iceAction";
import { buyCups } from "../redux/CupCake/cupActions";

function CakeContainer(props) {
  return (
    <div>
      <h2> num of cakes are-{props.numCakes}</h2>
      <button onClick={props.buyCake}>buy cake</button>

      <h2> num of icecream are-{props.numIcecreams}</h2>
      <button onClick={props.buyIcecream}>buy icecream</button>

      <h2> num of CupCakes are-{props.numCups}</h2>
      <button onClick={props.buyCups}>buy CupCakes</button>

    </div>
    
  );
}
//convert state to props
const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcecreams:state.icecream.numIcecreams,
    numCups:state.cup.numCups
  };
};

//convert dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
    buyCups: () => dispatch(buyCups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);