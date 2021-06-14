import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {padLeft} from "../utility";

class MonthPicker extends Component {
    state = {
    isOpen:false
    }
    render() {
        const {isOpen} = this.state
        const {year,month} = this.props
        return (
            <div className="dropdown month-picker-component">
                <h4>选择月份</h4>
                <button className="btn btn-lg btn-secondary dropdown-toggle">
                    {`${padLeft(year)}年 ${padLeft(month)}月`}
                </button>
                {isOpen &&
                    <div className="dropdown-menu" style={{display:"block"}}>
                        <h2>Hello World</h2>
                    </div>
                }
            </div>
        );
    }
}

export default MonthPicker;
