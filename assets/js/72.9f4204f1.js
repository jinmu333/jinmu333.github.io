(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{569:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"run-odoo-in-docker-code-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-odoo-in-docker-code-server"}},[t._v("#")]),t._v(" Run odoo in docker code-server")]),t._v(" "),n("p",[n("img",{attrs:{src:"/imgs/code-server/odoo-code_server-1.jpg",alt:"odoo-code_server-1"}})]),t._v(" "),n("h3",{attrs:{id:"从-ubuntu18-构建镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-ubuntu18-构建镜像"}},[t._v("#")]),t._v(" 从 ubuntu18 构建镜像")]),t._v(" "),n("p",[n("a",{attrs:{href:"http://jcstaff.club/2019/run-code-server-in-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("run-code-server-in-docker"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker-compose")]),t._v(" "),n("p",[n("code",[t._v("docker-compose -f docker-compose.yml up")])]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[t._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\nservices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    odoo12_code_test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n        container_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" odoo12_code_test\n        environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" POSTGRES_DB=postgres\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" POSTGRES_USER=odoo\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" POSTGRES_PASSWORD=odoo\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" PGPORT=5433\n        ports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"54333:5433"')]),t._v("\n        volumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker volume create --name code-postgresql-volume -d local")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("postgresql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/postgresql/data\n\n    code_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" code_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.0\n        container_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" code_server\n        command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n        depends_on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" odoo12_code_test\n        environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" HOST=odoo12_code_test\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" POSTGRES_USER=odoo\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" POSTGRES_PASSWORD=odoo\n        ports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4000:4000"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8070:8070"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n        volumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ../"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/opt/odoo\n\nvolumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("postgresql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("volume"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        external"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" true\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);