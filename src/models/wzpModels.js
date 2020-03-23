import * as apis from '../services/example'

export default {
    // models，相当于redux、vuex
    namespace: 'wzpModels',
    state: {
        cnName: 'WangZhongPeng',
        cnodeData: []
    },
    // 操作state用的，相当于vuex中mutations
    reducers: {
        setCnName(state, payload) {
            const _state = JSON.parse(JSON.stringify(state));
            _state.cnName = payload.cnName;
            return _state;
        },
        setCnodeData(state, payload) {
            const _state = JSON.parse(JSON.stringify(state));
            _state.cnodeData = payload.cnodeData;
            return _state;
        },
        subPath(state, payload) {
            console.log(payload.data);
            return state;
        }
    },
    // 异步
    effects: {
        // 使用es6的Generator语法
        *setCnNameAsync({payload}, {put, call}) {
            // put实际是发一个action，调用reducers中方法
            yield put({
                type: 'setCnName',  // 这里就不需要命名空间了
                cnName: '异步改变的名字'
            });
        },
        // 这里调接口
        *testCnode({payload}, {put, call}) {
            let res = yield call(apis.testCnode);
            if (res.data) {
                yield put({
                    type: 'setCnodeData',
                    cnodeData: res.data.data
                })
            }
        }
    },
    // 订阅
    subscriptions: {
        haha({dispatch, history}) {
            history.listen(({pathname})=> {
                // 可以根据不同路由(比如登录页)，执行不同操作
                if (pathname === "/wzp") {
                    dispatch({
                        type: 'subPath',
                        data: "订阅中的数据"
                    });
                }
            });
        }
    }
}