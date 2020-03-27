import React, { Fragment } from 'react';

export default class RouterChild2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ''
        }
    }
    componentDidMount() {
        // state方式，地址栏不显示，刷新还在
        let params = this.props.location.state || {};
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
                <h1>测试路由传参 state方式</h1>
                <p>userId：{this.state.userId}</p>
                <p><button onClick={this.goBack}>返回</button></p>
            </Fragment>
        )
    }
}