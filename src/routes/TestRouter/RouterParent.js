import React, { Fragment } from 'react';
import { connect } from 'dva';
import Child from '../../components/Child';
import { Link, routerRedux } from 'dva/router';

class RouterParent extends React.Component {
    constructor(props) {
        super(props);
    }
    // get
    test1 = ()=> {
        this.props.history.push('/routerChild1?userId=2020');
    }
    // state
    test2 = ()=> {
        // 经测试，效果相同
        this.props.history.push({
            pathname: "/routerChild2",
            state: {
                userId: '2020'
            }
        });
        // this.props.dispatch(routerRedux.push({
        //     pathname: '/routerChild2',
        //     state: {
        //         userId: '2020'
        //     }
        // }));
        // 以下两种，仅browserHistory时可用
        // this.props.history.push('/routerChild2', {
        //     userId: '2020'
        // });
        // this.props.dispatch(routerRedux.push('/routerChild2', {
        //     userId: '2020'
        // }));
    }
    // query
    test3 = ()=> {
        // 经测试，二者效果相同
        this.props.history.push({
            pathname: "/routerChild3",
            query: {
                userId: '2020'
            }
        });
        // this.props.dispatch(routerRedux.push({
        //     pathname: '/routerChild3',
        //     query: {
        //         userId: '2020'
        //     }
        // }));
    }
    // 路由中写死
    test4 = ()=> {
        // 效果相同
        this.props.history.push('/routerChild4/2020');
        // this.props.dispatch(routerRedux.push('/routerChild4/2020'));
        // this.props.history.push({
        //     pathname: '/routerChild4/2020'
        // });
        // this.props.dispatch(routerRedux.push({
        //     pathname: '/routerChild4/2020'
        // }));
    }
    render() {
        return (
            <Fragment>
                <h1>测试路由传参 Parent</h1>
                <p>
                    <button onClick={this.test1}>get方式</button>
                </p>
                <p>
                    <button onClick={this.test2}>state方式</button>
                </p>
                <p>
                    <button onClick={this.test3}>query方式</button>
                </p>
                <p>
                    <button onClick={this.test4}>路由中写死</button>
                </p>
                <Child />
                <Link to="/">返回首页</Link><br/>
            </Fragment>
        )
    }
}
const mapStateToProps = (models)=> {
    return {}
}
export default connect(mapStateToProps)(RouterParent)