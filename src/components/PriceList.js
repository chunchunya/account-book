import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';   //使用PropTypes检查属性类型   类型检查可以帮助我们更好的发现

class PriceList extends Component {
    render() {
        console.log(this.props)
        const {items,onModifyItem,onDeleteItem} = this.props;
        return (
          <ul className='list-group list-group-flush'>
              {
                  items.map((item)=>{
                     return <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                         <span className="col-1 badge badge-primary">
                             <Ionicon
                                 className="rounded-circle"  
                                 fontSize="30px"
                                 style={{backgroundColor:"#007bff",padding:"5px"}}
                                 color={'#fff'}
                                 icon={item.category.iconName}
                             ></Ionicon></span>
                         <span className="col-5">{item.title}</span>
                         <span className="col-2 font-weight-bold">
                             {item.category.type === "income"?"+":"-"}
                             {item.price}元
                         </span>
                         <span className="col-2">{item.date}</span>
                         <a className="col-1" herf="#" onClick={()=>{onModifyItem(item)}}>
                             <Ionicon
                                 className="rounded-circle"
                                 fontSize="30px"
                                 style={{backgroundColor:"#28a745",padding:"5px"}}
                                 color={'#fff'}
                                 icon="ios-create-outline"
                             ></Ionicon>
                         </a>
                         <a className="col-1" herf="#"  onClick={()=>{onDeleteItem(item)}}>
                             <Ionicon
                                 className="rounded-circle"
                                 fontSize="30px"
                                 style={{backgroundColor:"#dc3545",padding:"5px"}}
                                 color={'#fff'}
                                 icon="ios-close"
                             ></Ionicon>
                         </a>
                     </li>
                  })

              }
          </ul>

        );
    }
};
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired,

}
//Props默认的值：defaultProps   为某些量提供一些默认值
// PriceList.defaultProps = {
//     onModifyItem:()=>{}
// }
export default PriceList;