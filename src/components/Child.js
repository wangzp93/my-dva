import React from 'react';
import { withRouter } from 'dva/router';

class Child extends React.Component {
    // 跳转到首页
    toHome = ()=> {
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{width: 300, marginTop: 5, padding: '5px 0', border: '1px solid #000', textAlign: 'center'}}>
                <h3>我是没注册到路由的子组件</h3>
                <button onClick={this.toHome}>跳转</button><br/>
            </div>
        )
    }
}
export default withRouter(Child)