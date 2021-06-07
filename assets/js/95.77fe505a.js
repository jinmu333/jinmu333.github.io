(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{686:function(s,t,a){"use strict";a.r(t);var n=a(31),o=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"首先肯定是安装linux子系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先肯定是安装linux子系统"}},[s._v("#")]),s._v(" 首先肯定是安装linux子系统")]),s._v(" "),a("blockquote",[a("p",[s._v("首先去程序与功能，打开"),a("code",[s._v("linux")]),s._v("子系统"),a("br"),s._v(" "),a("img",{attrs:{src:"/imgs/wsl/wsl1.png",alt:"wsl1"}})]),s._v(" "),a("p",[s._v("可能会要求重启，之后打开微软商店，搜索"),a("code",[s._v("linux")]),a("br"),s._v("\n安装一个linux发行版，这里我选了"),a("code",[s._v("Ubuntu18")]),s._v(" "),a("img",{attrs:{src:"/imgs/wsl/wsl2.png",alt:"wsl2"}})]),s._v(" "),a("p",[s._v("漫长等待之后，在弹出的终端界面输入用户名密码\n安装完成")])]),s._v(" "),a("h2",{attrs:{id:"ubuntu的系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu的系统配置"}},[s._v("#")]),s._v(" Ubuntu的系统配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 postgresql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"createuser -s '),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" postgres\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" postgresql start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" postgresql stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3-dev python3-pip -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" build-essential libxslt-dev libzip-dev libldap2-dev libsasl2-dev libssl-dev -y\n")])])]),a("h2",{attrs:{id:"下载社区版odoo12源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载社区版odoo12源码"}},[s._v("#")]),s._v(" 下载社区版odoo12源码")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows 磁盘在linux子系统中映射在/mnt/下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里将odoo clone到f盘odoo12下")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mnt/f/odoo12\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/odoo/odoo.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用清华源快速安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r odoo/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" num2words phonenumbers psycopg2-binary watchdog xlwt -i https://pypi.tuna.tsinghua.edu.cn/simple\n")])])]),a("h2",{attrs:{id:"启动odoo12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动odoo12"}},[s._v("#")]),s._v(" 启动odoo12")]),s._v(" "),a("h3",{attrs:{id:"启动测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动测试"}},[s._v("#")]),s._v(" 启动测试")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 就可以启动默认的odoo12")]),s._v("\nodoo/odoo-bin\n")])])]),a("h3",{attrs:{id:"数据库配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[s._v("#")]),s._v(" 数据库配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到数据库超级用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入数据库")]),s._v("\npsql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户")]),s._v("\nCREATE ROLE odoo WITH SUPERUSER LOGIN PASSWORD "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'odoo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"创建conf参数文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建conf参数文件"}},[s._v("#")]),s._v(" 创建conf参数文件")]),s._v(" "),a("blockquote",[a("p",[s._v("在"),a("code",[s._v("odoo12")]),s._v("目录下创建"),a("code",[s._v("odoo.conf")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nadmin_passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" admin\ndb_host "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" localhost\ndb_port "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\ndb_user "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" odoo\ndb_password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" odoo\naddons_path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /mnt/f/odoo12/odoo/addons\n")])])]),a("h3",{attrs:{id:"带参数启动odoo-bin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带参数启动odoo-bin"}},[s._v("#")]),s._v(" 带参数启动odoo-bin")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -c xxx 配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d xxx 新建数据库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 安装模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -–stop-after-init 在执行结束后停止服务")]),s._v("\nodoo/odoo-bin -c odoo.conf -d demo -i base -–stop-after-init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件启动")]),s._v("\nodoo/odoo-bin -c odoo.conf\n")])])]),a("h2",{attrs:{id:"在pycharm中调试代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在pycharm中调试代码"}},[s._v("#")]),s._v(" 在pycharm中调试代码")]),s._v(" "),a("blockquote",[a("p",[s._v("之前的"),a("code",[s._v("odoo12")]),s._v("文件夹就是我们的工程目录\n使用pycharm专业版打开，添加如下的解释器\n"),a("img",{attrs:{src:"/imgs/wsl/wsl3.png",alt:"wsl3"}}),s._v("\n会自动把工程路径按照 "),a("code",[s._v("F:/ to /mnt/f/")]),s._v(" 这种关系映射\n然后配置odoo-bin的启动参数\n"),a("img",{attrs:{src:"/imgs/wsl/wsl4.png",alt:"wsl4"}})])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若此前跑过odoo-bin命令 需要终止")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到需要终止的任务的PID，比如2333")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2333")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死所有python3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" python3\n")])])]),a("blockquote",[a("p",[s._v("然后就可以本机调试了\n子系统的网络地址就是本机，不用像"),a("code",[s._v("docker")]),s._v("一样配置")])])])}),[],!1,null,null,null);t.default=o.exports}}]);