import './App.css';
import '../src/bootstrap-4.5.3-dist/css/bootstrap.css';
import './components/PriceList'
import PriceList from "./components/PriceList";
import ViewTab from "./components/ViewTab";
import { LIST_VIEW,CHART_VIEW } from "./utility";
import MonthPicker from "./components/MonthPicker";
import Home from "./containers/Home";

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": 200,
    "date": "2020-10-01",
    "category":{
      "id":1,
      "name":"旅游",
      "type":"outcome",
      "iconName": "ios-plane"
    }
  },
  {
    "id": 2,
    "title": "去山西旅游",
    "price": 400,
    "date": "2020-10-01",
    "category":{
      "id":1,
      "name":"旅游",
      "type":"outcome",
      "iconName": "ios-plane"
    }
  }
]
function App() {
  return (
    <div className="App">
       <Home></Home>
    </div>
  );
}

export default App;
