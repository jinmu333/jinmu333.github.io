(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{691:function(t,s,n){"use strict";n.r(s);var a=n(31),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"asyncio-run-in-executor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asyncio-run-in-executor"}},[t._v("#")]),t._v(" asyncio run in executor")]),t._v(" "),n("p",[t._v("demo 如下，运行需要 2s\n将 asyncio.sleep(2) 改成  time.sleep(2) 再次运行，异步的程序需要4s了，这是异步嘛？\nsleep会阻塞线程，所以协程就不会异步")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n \n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("long_blocking_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# time.sleep(2)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("long_blocking_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" long_blocking_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gather"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    now "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("修改代码如下，再次运行，程序运行结束再次只需要 2s了")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" concurrent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ThreadPoolExecutor\n \n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("long_blocking_function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n \n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建线程池")]),t._v("\n    pool "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ThreadPoolExecutor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 任务列表")]),t._v("\n    tasks "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_in_executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" long_blocking_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_in_executor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pool"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" long_blocking_function"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等待所有任务结束并返回")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gather"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("tasks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"__main__"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    loop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    now "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("run"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);