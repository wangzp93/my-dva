import React, { Fragment } from 'react';

export default class RouterChild4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ''
        }
    }
    componentDidMount() {
        // 路由中写死，browserHistory时页面刷新会报错
        let params = this.props.match.params || {};
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
                <h1>测试路由传参 路由中写死</h1>
                <p>userId：{this.state.userId}</p>
                <p><button onClick={this.goBack}>返回</button></p>
            </Fragment>
        )
    }
}