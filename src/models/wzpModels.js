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
        setCnName(state, {payload}) {
            return {
                ...state,
                cnName: payload.cnName
            };
        },
        setCnodeData(state, {payload}) {
            return {
                ...state,
                cnodeData: payload.cnodeData
            };
        },
        subPath(state, {payload}) {
            console.log('subs中的订阅数据：', payload.data);
            return state;
        }
    },
    // 异步操作，操作I/O，数据库，请求接口
    effects: {
        // 使用es6的Generator语法
        * setCnNameAsync({payload}, {put, call}) {
            // put触发redecers中方法，类似commit触发mutations
            yield put({
                type: 'setCnName',  // 这里就不需要命名空间了
                payload: {
                    cnName: '异步改变的名字'
                }
            });
        },
        // 这里调接口
        * testCnode({payload}, {put, call}) {
            let res = yield call(apis.testCnode, payload);
            if (res.data) {
                yield put({
                    type: 'setCnodeData',
                    payload: {
                        cnodeData: res.data.data
                    }
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
                        payload: {
                            data: "订阅中的数据"
                        }
                    });
                }
            });
        }
    }
}
