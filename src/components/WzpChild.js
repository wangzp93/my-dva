import React, { Fragment } from 'react';
import { withRouter } from 'dva/router';

class WzpChild extends React.Component {
    // 跳转到首页
    toHome = ()=> {
        this.props.history.push('/');
    }
    render() {
        return (
            <Fragment>
                <span>wzp child</span><br/>
                <button onClick={this.toHome}>没注册到路由的子组件跳转</button><br/>
            </Fragment>
        )
    }
}
export default withRouter(WzpChild)