/**
 * @description：
 * @author: manble@live.com
 */
'use strict';

import login from 'common/tasks/login';
import signUp from 'common/tasks/signUp';
import setData from 'common/tasks/setData';
import updateBrowser from 'common/tasks/updateBrowser';

const commonTasks = [
    ['updateBrowser', updateBrowser],
    ['login', login],
    ['signUp', signUp],
    ['setData', setData]
];
export default commonTasks;