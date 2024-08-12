import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import DocTitleOne from "./hooks/DocTitleOne";
import DocTitleTwo from "./hooks/DocTitleTwo";
import CounterOne from "./hooks/CounterOne";
import CounterTwo from "./hooks/CounterTwo";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
//npm i react-redux
// npm i --save redux-logger

//npm install  @redux-devtools/extension
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CounterOne/>
      <CounterTwo/> */}
        <NewCakeContainer />
        <ItemContainer cake/>
        {/* <CakeContainer />
        <HooksCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;