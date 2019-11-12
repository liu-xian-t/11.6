import React, { Component } from 'react';
import {connect} from 'dva'
import styles from "./indexPage.css"
export class indexPage extends Component {
    btnClick(e){
        console.log('e...',e,this)
    }
    render() {
        let {changeNum} =this.props
        return (
            <div className={styles.normal}>
             <h1 className={styles.title}>Yay! Welcome to dva!</h1>
                    <div>
                    <button onClick={()=>changeNum('+')}>+</button>
                      <span>{this.props.num}</span>
                    <button onClick={()=>changeNum('-')}>-</button>
                </div>
           </div>
        );
    }
}
indexPage.protoTypes={
    num:Number
}
indexPage.defaultProps = {
    num: 1000
  }
const mapStateToPorps=state=>{
    console.log('state...',state);
    return{
        num:state.num.num
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        changeNum:type=>dispatch({
            type:'num/changeNum',
            payload:{type}
        })
    }
}
export default connect(mapStateToPorps, mapDispatchToProps)(indexPage);
