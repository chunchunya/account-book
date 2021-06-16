import React, {Component} from 'react';
import {TYPE_INCOME,TYPE_OUTCOME} from "../utility";

class TotalPrice extends Component {
    render() {
        const {InCome,OutCome} = this.props
        return (
            <div className="row">
                <div className="col">收入:{InCome}</div>
                <div className="col">支出:{OutCome}</div>
            </div>
        );
    }
}

export default TotalPrice;