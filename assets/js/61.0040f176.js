(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{652:function(t,e,a){"use strict";a.r(e);var u=a(31),r=Object(u.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("先看看顺序会错乱的俩场景：")]),t._v(" "),a("ul",[a("li",[t._v("RabbitMQ：一个 queue，多个 consumer")]),t._v(" "),a("li",[t._v("Kafka：一个 topic，有三个 partition, 多个线程来并发处理消息")])]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ul",[a("li",[t._v("RabbitMQ：拆分多个 queue，每个 queue 一个 consumer")]),t._v(" "),a("li",[t._v("Kafka：写 N 个内存 queue，具有相同 key 的数据都到同一个内存 queue；N 个线程，每个线程分别消费一个内存 queue")])])])}),[],!1,null,null,null);e.default=r.exports}}]);