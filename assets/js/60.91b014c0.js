(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{651:function(t,v,_){"use strict";_.r(v);var e=_(31),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"大量消息在-mq-里积压"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大量消息在-mq-里积压"}},[t._v("#")]),t._v(" 大量消息在 mq 里积压")]),t._v(" "),_("p",[t._v("临时紧急扩容：")]),t._v(" "),_("ul",[_("li",[t._v("先修复 consumer 的问题，确保其恢复消费速度，然后将现有 consumer 都停掉。")]),t._v(" "),_("li",[t._v("新建一个 topic，partition 是原来的 10 倍，临时建立好原先 10 倍的 queue 数量。")]),t._v(" "),_("li",[t._v("然后写一个临时的分发数据的 consumer 程序，这个程序部署上去消费积压的数据，消费之后不做耗时的处理，直接均匀轮询写入临时建立好的 10 倍数量的 queue。")]),t._v(" "),_("li",[t._v("接着临时征用 10 倍的机器来部署 consumer，每一批 consumer 消费一个临时 queue 的数据。这种做法相当于是临时将 queue 资源和 consumer 资源扩大 10 倍，以正常的 10 倍速度来消费数据。\n等快速消费完积压数据之后，得恢复原先部署的架构，重新用原先的 consumer 机器来消费消息。")])]),t._v(" "),_("h2",{attrs:{id:"mq-中的消息过期失效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mq-中的消息过期失效"}},[t._v("#")]),t._v(" mq 中的消息过期失效")]),t._v(" "),_("p",[t._v("批量重导，手写脚本恢复数据")]),t._v(" "),_("h2",{attrs:{id:"mq-快写满了"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mq-快写满了"}},[t._v("#")]),t._v(" mq 快写满了")]),t._v(" "),_("p",[t._v("消费一个丢弃一个，快速消费掉所有的消息，手写脚本恢复数据")]),t._v(" "),_("p",[t._v("RocketMQ 的方案")]),t._v(" "),_("ul",[_("li",[t._v("提高消费并行度")]),t._v(" "),_("li",[t._v("批量方式消费")]),t._v(" "),_("li",[t._v("跳过非重要消息")]),t._v(" "),_("li",[t._v("优化每条消息消费过程")])]),t._v(" "),_("h2",{attrs:{id:"如何设计一个消息队列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个消息队列"}},[t._v("#")]),t._v(" 如何设计一个消息队列")]),t._v(" "),_("ul",[_("li",[t._v("分布式 可伸缩性")]),t._v(" "),_("li",[t._v("持久化")]),t._v(" "),_("li",[t._v("可用性")]),t._v(" "),_("li",[t._v("数据零丢失")])])])}),[],!1,null,null,null);v.default=r.exports}}]);