import React, {Component} from 'react';
import Ionicon from "react-ionicons";

class CreateBtn extends Component {
    render() {
        return (
            <div>
                <div className="row middle" style={{background:"#B3D1F1"} }>
                    <Ionicon
                        className="rounded-circle mr-2"
                        fontSize="25px"
                        color={'#011121'}
                        icon="ios-paper"
                    ></Ionicon>
                    <p>创建一条新的记账记录</p>
                </div>
            </div>
        );
    }
}

export default CreateBtn;