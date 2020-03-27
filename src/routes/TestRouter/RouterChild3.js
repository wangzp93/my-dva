import React, { Fragment } from 'react';

export default class RouterChild3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ''
        }
    }
    componentDidMount() {
        // query方式，地址栏不显示，刷新就没了
        let params = this.props.location.query || {};
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
                <h1>测试路由传参 query方式</h1>
                <p>userId：{this.state.userId}</p>
                <p><button onClick={this.goBack}>返回</button></p>
            </Fragment>
        )
    }
}