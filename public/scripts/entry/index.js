/**
* @description：
* @author: manble@live.com
*/
'use strict';

import commonTasks from 'common/tasks/group';
import index from 'pages/index/tasks/index';


import tm from 'common/taskManager';
commonTasks.concat([
    ['index', index]
]).forEach(function(item){
    tm.add.apply(null, item);
});
tm.run();