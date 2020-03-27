import dva from 'dva';
import './index.css';

import { createBrowserHistory } from 'history';

// 1. Initialize
const app = dva();
// 解决地址中#丑的问题，但是browserHistory会导致路由传参有差异，很蛋疼，还是不用了
// const app = dva({
//     history: createBrowserHistory()
// });

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/wzpModels').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
