import React, {Component} from 'react'
import PriceList from "../components/PriceList";
import ViewTab from "../components/ViewTab";
import { LIST_VIEW,CHART_VIEW,TYPE_INCOME,TYPE_OUTCOME} from "../utility";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from '../components/CreateBtn';
import TotalPrice from '../components/TotalPrice';

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
class Home extends Component{
    render(){
        let totalIncome = 0,totalOutcome = 0
        items.forEach(item=>{
            if(item.category.type === TYPE_OUTCOME){
                totalOutcome+=item.price
            }else{
                totalIncome+=item.price
            }
        })
        return (
            <div className="Home" style={{background:'#8FC7F8'}}>
                <header>
                    <div className="row px-3 py-1">
                        <div className="col">
                            <MonthPicker
                                year={2021}
                                month={5}
                                onChange={(year,month) =>{console.log(year,month)}}
                            >
                            </MonthPicker>
                        </div>
                        <div className="col my-5">
                                <TotalPrice
                                    InCome={totalIncome}
                                    OutCome={totalOutcome}
                                ></TotalPrice>
                        </div>
                    </div>
                </header>
                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={LIST_VIEW}
                        onTabChange={(view)=>{console.log(view)}}>
                    </ViewTab>
                    <CreateBtn onClick={() => {}}/>
                    <PriceList
                        items = {items}
                        onModifyItem = {(item)=>{alert(item.id)}}
                        onDeleteItem = {(item)=>{alert(item.id)}}/>
                </div>
            </div>
        );
    }
}

export default Home;