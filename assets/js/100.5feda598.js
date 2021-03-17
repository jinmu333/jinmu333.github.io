(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{691:function(t,e,s){"use strict";s.r(e);var r=s(31),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"fast-redis-zset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-redis-zset"}},[t._v("#")]),t._v(" fast redis zset")]),t._v(" "),s("p",[t._v("redis支持一个数据结构，叫做 zset，也就是有序的列表。")]),t._v(" "),s("p",[t._v("通过它，可以实现游戏排行榜一类的功能，或者实现Topx这样的需求，也能精准的让用户在海量数据中找到自己的位置。")]),t._v(" "),s("p",[t._v("zset的底层结构是跳跃表，而与之类似的Java中的有序Set是TreeSet，使用红黑树实现的。")]),t._v(" "),s("p",[t._v("我们的问题是：zset中能存放多少条记录？线上有没有有说服力的数据？")]),t._v(" "),s("p",[t._v("先笼统的回答一下，zset理论上支持的元素最多是2^32-1个，约42亿，如果你的内存够大，放下国人绰绰有余。")]),t._v(" "),s("p",[t._v("在测试的zset里，存放了接近6千万的数据，我们就要算在这6千万内任何的排行。zcard、zrank等一系列操作，easy实现。")]),t._v(" "),s("p",[t._v("运行一段时间后，内存直接飙升到了8G左右。这是由于跳表的特殊结构所引起的，额外的辅助信息会占用更多的内存。")]),t._v(" "),s("p",[t._v("以下是经验值：")]),t._v(" "),s("p",[t._v("最高TPS写入量1k/秒。\n同时最高QPS查询量5k/秒。\n平均耗时5ms左右。\n百分之95的请求都在10ms以内返回。\n长尾请求超过100ms的不超过100条。\n也就是说，在保持高写入和高查询的同时，zset能够保证较低的响应耗时。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/153047528?utm_source=wechat_session",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考链接"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);