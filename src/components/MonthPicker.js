import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {padLeft} from "../utility";
import {range} from "../utility";

class MonthPicker extends Component {
    state = {
        isOpen: false,
        selectedYear:this.props.year,
        selectedMonth:this.props.month
    }
    toggleDropdown = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    selectYear = (event,yearNumber)=>{
        event.preventDefault()
        this.setState({
            selectedYear :yearNumber
        })
    }
    selectMonth = (event,monthNumber)=>{
        event.preventDefault()
        this.setState({
            isOpen:false,
            selectedMonth: monthNumber
        })
        this.props.onChange(this.state.selectedYear,monthNumber)
    }
    render() {
        const {isOpen} = this.state
        const {year, month} = this.props
        //日期选择器里的年月选项
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(number => number + year)
        const {selectedYear} = this.state
        const {selectedMonth} = this.state

        return (
            <div className="dropdown month-picker-component">
                <h4>选择月份</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={this.toggleDropdown}
                >
                    {`${this.state.selectedYear}年 ${padLeft(this.state.selectedMonth)}月`}
                </button>
                {isOpen &&
                <div className="dropdown-menu" style={{display: 'block'}}>
                    <div className="row">
                        <div className="col border-right">
                            {yearRange.map((yearNumber, index) =>
                                <a key={index}
                                   herf="#"
                                   onClick={(event)=>{this.selectYear(event,yearNumber)}}
                                   className={(yearNumber===selectedYear)?"dropdown-item active":"dropdown-item"}>
                                    {yearNumber}年</a>
                            )}
                        </div>
                        <div className="col">
                            {monthRange.map((monthNumber, index) =>
                                <a key={index}
                                   herf="#"
                                   onClick={(event)=>{this.selectMonth(event,monthNumber)}}
                                   className={(monthNumber===selectedMonth)?"dropdown-item active":"dropdown-item"}>
                                    {padLeft(monthNumber)}月</a>
                            )}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month:PropTypes.number.isRequired,
    onChange:PropTypes.func.isRequired,
}
export default MonthPicker;
