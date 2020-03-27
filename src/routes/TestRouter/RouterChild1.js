import React, { Fragment } from 'react';

export default class RouterChild1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ''
        }
    }
    componentDidMount() {
         // 直接push，地址栏不显示，刷新还在
        let paramsStr = this.props.location.search || "";
        let list = paramsStr.replace("?", "").split("&");
        let params = {};
        list.map((param)=> {
            let arr = param.split("=");
            params[arr[0]] = arr[1];
        });
        this.setState({
            userId: params.userId
        });
    }
    // 返回
    goBack = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <Fragment>
                <h1>测试路由传参 直接push</h1>
                <p>userId：{this.state.userId}</p>
                <p><button onClick={this.goBack}>返回</button></p>
            </Fragment>
        )
    }
}