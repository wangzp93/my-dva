import React from 'react';
import WzpChild from '../components/WzpChild';
import { connect } from 'dva';
import * as apis from '../services/example';    // * 代表把内容全部引过来

class IndexWzp extends React.Component {
    constructor(props) {
        super(props);
        // models中配置的数据
        // console.log(this.props.cnName);
    }
    componentDidMount() {
        // 请求接口
        // apis.testCnode().then((res)=> {
        //     console.log(res)
        // });
    }
    // 跳转到首页
    toHome = ()=> {
        this.props.history.push('/');
    }
    // 改变models中数据
    changeName = ()=> {
        this.props.dispatch({
            type: 'wzpModels/setCnName',    // type必传，{命名空间/方法名}，这样来传
            cnName: 'Cat'
        });
    }
    // 异步改变models中数据
    changeNameAsync = ()=> {
        this.props.dispatch({
            type: 'wzpModels/setCnNameAsync',
            data: {
                cnName: '000'
            }
        });
    }
    // 调用models中封装的接口
    asyncCnode = ()=> {
        this.props.dispatch({
            type: 'wzpModels/testCnode',
            aaa: 'aaa'
        });
    }
    render() {
        console.log(this.props.cnodeData)   // 取调models中接口后返回的值
        return (
            <div>
                <div style={{border: '1px solid black'}}>
                    <WzpChild/>
                </div>
                <span>wzp页面</span><br/>
                models中名字：<span>{this.props.cnName}</span><br/>
                <button onClick={this.changeName}>改变名字</button><br/>
                <button onClick={this.changeNameAsync}>异步改变名字</button><br/>
                <button onClick={this.asyncCnode}>调用异步Cnode接口</button><br/>
                <button onClick={this.toHome}>跳转到首页(函数方式)</button><br/>
            </div>
        )
    }
}
const mapStateToProps = (models)=> {
    return {
        cnName: models.wzpModels.cnName,
        cnodeData: models.wzpModels.cnodeData
    }
}
export default connect(mapStateToProps)(IndexWzp)