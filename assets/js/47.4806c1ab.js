(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{539:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"odoo-api-装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#odoo-api-装饰器"}},[t._v("#")]),t._v(" Odoo @api.* 装饰器")]),t._v(" "),s("h2",{attrs:{id:"api-one"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-one"}},[t._v("#")]),t._v(" @api.one")]),t._v(" "),s("blockquote",[s("p",[t._v("one的用法主要用于self为单一记录的情况，self仅代表当前正在操作的记录。")])]),t._v(" "),s("h2",{attrs:{id:"api-multi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-multi"}},[t._v("#")]),t._v(" @api.multi")]),t._v(" "),s("blockquote",[s("p",[t._v("multi则指self是多个记录的合集。因此，常使用for—in语句遍历self。\nmulti通常用于：在tree视图中点选多条记录，然后执行某方法，那么那个方法必须用@api.multi修饰，而参数中的self则代表选中的多条记录。\n如果仅仅是在form视图下操作，那么self中通常只有当前正在操作的记录。")])]),t._v(" "),s("h2",{attrs:{id:"api-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-model"}},[t._v("#")]),t._v(" @api.model")]),t._v(" "),s("blockquote",[s("p",[t._v("此时的self仅代表模型本身，不含任何记录信息。")])]),t._v(" "),s("h2",{attrs:{id:"api-contrains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-contrains"}},[t._v("#")]),t._v(" @api.contrains")]),t._v(" "),s("blockquote",[s("p",[t._v("在保存时对字段进行约束。\n抛出异常不能保存")])]),t._v(" "),s("h2",{attrs:{id:"api-depends-xxx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-depends-xxx"}},[t._v("#")]),t._v(" @api.depends('xxx')")]),t._v(" "),s("blockquote",[s("p",[t._v("使用compute参数计算字段时。它必须将计算值分配给字段。"),s("br"),t._v("\n如果它使用其他字段的值，则应使用"),s("code",[t._v("@api.depends()")]),t._v("指定这些字段")])]),t._v(" "),s("h2",{attrs:{id:"api-onchange-动态更新ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-onchange-动态更新ui"}},[t._v("#")]),t._v(" @api.onchange：动态更新UI")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@api"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onchange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onchange_demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环多条记录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" rec "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 判断字段是否存在")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" rec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" rec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("demo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 弱提醒")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("当用户更改表单中的字段值（但尚未保存表单）时，根据该值自动更新其他字段可能很有用，\n计算字段会自动检查并重新计算，它们不需要 onchange\n对于非计算字段，onchange()装饰器用于提供新的字段值：")])]),t._v(" "),s("blockquote",[s("p",[t._v('可以通过on_change="0"在视图中添加来禁止来自特定字段的触发器 ：')])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("field")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("on_change")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("警告: one2many或many2manyfield 不可能通过onchange修改自身")])]),t._v(" "),s("h2",{attrs:{id:"api-returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-returns"}},[t._v("#")]),t._v(" @api.returns")]),t._v(" "),s("blockquote",[s("p",[t._v("returns的用法主要是用来指定返回值的格式，它接受三个参数:"),s("br"),t._v("\n第一个为返回值的model"),s("br"),t._v("\n第二个为向下兼容的method"),s("br"),t._v("\n第三个为向上兼容的method")])])])}),[],!1,null,null,null);a.default=e.exports}}]);