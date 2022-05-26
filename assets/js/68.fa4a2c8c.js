(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{557:function(a,n,s){"use strict";s.r(n);var e=s(21),t=Object(e.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-conda基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-conda基本命令"}},[a._v("#")]),a._v(" "),s("strong",[a._v("1. conda基本命令")])]),a._v(" "),s("p",[s("strong",[a._v("检查Anaconda是否成功安装")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda --version \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("检测目前安装了哪些环境")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda info --envs \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("检查目前有哪些版本的python可以安装：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda search --full-name python \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("安装不同版本的python")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("对于GPU版本：conda create --name tensorflow-gpu python=3.6 \n\n对于CPU版本：conda create --name tensorflow python=3.6 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("按照提示，激活")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("activate tensorflow\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("确保名叫tensorflow的环境已经被成功添加：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda info --envs\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("检查新环境中的python版本")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("python --version \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("升级")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda update conda\nconda update anaconda\nconda update anaconda-navigator    //update最新版本的anaconda-navigator  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("卸载")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("计算机控制面板->程序与应用->卸载        //windows\nrm -rf anaconda    //ubuntu\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[s("strong",[a._v("最后，建议清理下.bashrc中的Anaconda路径。")])]),a._v(" "),s("p",[s("strong",[a._v("conda环境使用基本命令：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda update -n base conda        //update最新版本的conda\nconda create -n xxxx python=3.5   //创建python3.5的xxxx虚拟环境\nconda activate xxxx               //开启xxxx环境\nconda deactivate                  //关闭环境\nconda env list                    //显示所有的虚拟环境\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("strong",[a._v("anaconda安装最新的TensorFlow版本")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("打开anaconda-prompt")])]),a._v(" "),s("li",[s("p",[a._v("查看tensorflow各个版本：（查看会发现有一大堆TensorFlow源，但是不能随便选，选择可以用查找命令定位）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("anaconda search -t conda tensorflow\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("找到自己安装环境对应的最新TensorFlow后（可以在终端搜索anaconda，定位到那一行），然后查看指定包")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("anaconda show <USER/PACKAGE>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("查看tensorflow版本信息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("anaconda show anaconda/tensorflow\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("第4步会提供一个下载地址，使用下面命令就可安装1.8.0版本tensorflow")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda install --channel https://conda.anaconda.org/anaconda tensorflow=1.8.0 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("p",[s("strong",[a._v("更新、卸载安装包")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda list         #查看已经安装的文件包\nconda update xxx   #更新xxx文件包\nconda uninstall xxx   #卸载xxx文件包\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("strong",[a._v("删除虚拟环境")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda remove -n xxxx --all //创建xxxx虚拟环境\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("清理（conda瘦身）")])]),a._v(" "),s("p",[s("code",[a._v("conda clean")]),a._v("就可以轻松搞定！")]),a._v(" "),s("p",[a._v("第一步：通过"),s("code",[a._v("conda clean -p")]),a._v("来删除一些没用的包，这个命令会检查哪些包没有在包缓存中被硬依赖到其他地方，并删除它们。")]),a._v(" "),s("p",[a._v("第二步：通过"),s("code",[a._v("conda clean -t")]),a._v("可以将conda保存下来的tar包。")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda clean -p      //删除没有用的包\nconda clean -t      //tar打包\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h2",{attrs:{id:"_2-jupyter-notebook默认工作目录设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-jupyter-notebook默认工作目录设置"}},[a._v("#")]),a._v(" "),s("strong",[a._v("2. jupyter notebook默认工作目录设置")])]),a._v(" "),s("p",[a._v("参考：https://blog.csdn.net/liwei1205/article/details/78818568\n1）在Anaconda Prompt终端中输入下面命令，查看你的notebook配置文件在哪里：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jupyter notebook --generate-config\n//会生成文件C:Users用户.jupyterjupyter_notebook_config.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("2）打开jupyter_notebook_config.py文件通过搜索关键词：c.NotebookApp.notebook_dir，修改如下")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("c.NotebookApp.notebook_dir = 'E:\\tf_models'     //修改到自定义文件夹\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("3）然后重启notebook服务器就可以了\n注：其它方法直接命令到指定目录，Anaconda Prompt终端中输：jupyter notebook 目录地址")]),a._v(" "),s("p",[s("strong",[a._v("参考文献：")])]),a._v(" "),s("p",[a._v("【1】"),s("a",{attrs:{href:"https://www.jianshu.com/p/7ebe1df808ba",target:"_blank",rel:"noopener noreferrer"}},[a._v("conda常用命令"),s("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);