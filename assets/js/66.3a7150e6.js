(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{555:function(_,v,a){"use strict";a.r(v);var t=a(21),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"自适应锚框计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应锚框计算"}},[_._v("#")]),_._v(" 自适应锚框计算")]),_._v(" "),a("h5",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[_._v("#")]),_._v(" 原理：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("一个"),a("strong",[_._v("Anchor Box")]),_._v("相当于一系列预设边框生成规则")])]),_._v(" "),a("li",[a("p",[_._v("根据Anchor Box 可以在图像的任意位置，生成一系列边框")])]),_._v(" "),a("li",[a("p",[a("strong",[_._v("Faster R-CNN")]),_._v("进行"),a("strong",[_._v("Anchor Box")]),_._v("生成的"),a("strong",[_._v("Feature Map")]),_._v("是原图下采样16倍得到的，这样不同的长宽比实际上是将面积为16×16的区域，拉伸为不同的形状，具体做法：将也就是说只是中心点一样，面积一样，形状发生了改变")]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.69st6jt0yvc0.webp",alt:"image"}})])])]),_._v(" "),a("h5",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[_._v("#")]),_._v(" 优点：")]),_._v(" "),a("ul",[a("li",[_._v("框住目标几率变大，大大提高了检测的召回率")])]),_._v(" "),a("h5",{attrs:{id:"边框计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框计算"}},[_._v("#")]),_._v(" 边框计算：")]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.4unj7pre38q0.webp",alt:"image"}})]),_._v(" "),a("h5",{attrs:{id:"yolo算法中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yolo算法中"}},[_._v("#")]),_._v(" Yolo算法中：")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("针对不同的数据集，都会有初始设定长宽的描框。")]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.63q4e6oysd80.webp",alt:"image"}})])]),_._v(" "),a("li",[a("p",[_._v("在网络训练中，网络在初始描框的基础上输出预测框，进而和真实框"),a("strong",[_._v("groundtruth")]),_._v("进行对比，计算误差，再反向更新，"),a("strong",[_._v("迭代网络参数")])])]),_._v(" "),a("li",[a("p",[_._v("yolov3、yolov4中，训练时，计算初始描框值是通过单独的程序运行的")])]),_._v(" "),a("li",[a("p",[_._v("而"),a("strong",[_._v("YOLOv5")]),_._v("中，将此功能嵌入代码中，每次训练中，都会自适应不同训练集中的最佳描框值")])]),_._v(" "),a("li",[a("p",[_._v("如果觉得描框效果不好，也可以在代码中将此功能"),a("strong",[_._v("关闭")])])])]),_._v(" "),a("h5",{attrs:{id:"为什么需要anchor-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要anchor-box"}},[_._v("#")]),_._v(" 为什么需要Anchor Box？")]),_._v(" "),a("h6",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),a("p",[_._v("在了解anchor box之前，需要先了解一些目标识别的方法")]),_._v(" "),a("h6",{attrs:{id:"_1、滑动窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、滑动窗口"}},[_._v("#")]),_._v(" 1、滑动窗口")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("原始目标检测方法")])]),_._v(" "),a("li",[a("p",[_._v("固定尺寸窗口")])]),_._v(" "),a("li",[a("p",[_._v("根据设定步伐，一步一步从左至右从上至下。把每个窗口输入到卷积神经网络中，进行预测和分类")]),_._v(" "),a("h6",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[_._v("#")]),_._v(" 缺点：")]),_._v(" "),a("ol",[a("li",[_._v("由于尺寸固定，不适合形变较大的物体")]),_._v(" "),a("li",[_._v("窗口较多，运算巨大")])])])]),_._v(" "),a("h6",{attrs:{id:"_2、区域建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、区域建议"}},[_._v("#")]),_._v(" 2、区域建议")]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.1prmn1btb8g0.webp",alt:"image"}})]),_._v(" "),a("ol",[a("li",[_._v("以上为R-CNN系列的核心思想")]),_._v(" "),a("li",[_._v("以Faster为例，模型中使用了两个神经网络，"),a("strong",[_._v("一个是CNN。一个是RPN")]),_._v("，区域建议网络"),a("strong",[_._v("不负责")]),_._v("图像的"),a("strong",[_._v("分类")]),_._v("，它只负责选取图像中可能属于数据集其中一类的候选区域也就是检测")]),_._v(" "),a("li",[_._v("接下来就是把RPN产生的候选区域输入到分类网络中进行最终的分类")])]),_._v(" "),a("h6",{attrs:{id:"_3、anchor-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、anchor-box"}},[_._v("#")]),_._v(" 3、anchor box")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("第一次这个提出在 Faster R-CNN论文里面；")])]),_._v(" "),a("li",[a("p",[_._v("要理解它首先得理解一下两个问题：")]),_._v(" "),a("ol",[a("li",[a("h6",{attrs:{id:"为什么要提出anchor-box"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要提出anchor-box"}},[_._v("#")]),_._v(" 为什么要提出anchor box？")]),_._v(" "),a("p",[_._v("主要两个原因：")]),_._v(" "),a("ul",[a("li",[_._v("一个窗口只能检测一个目标")]),_._v(" "),a("li",[_._v("无法解决多尺度问题")])])]),_._v(" "),a("li",[a("h6",{attrs:{id:"为什么使用不同尺寸和不同长宽比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用不同尺寸和不同长宽比"}},[_._v("#")]),_._v(" 为什么使用不同尺寸和不同长宽比？")]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.5irseyk0y840.webp",alt:"image"}})]),_._v(" "),a("p",[a("img",{attrs:{src:"C:/Users/ziyih/Documents/%E7%AC%94%E8%AE%B0/%E5%9B%BE%E7%89%87/image.5o65ntd59o40.webp",alt:"image"}})]),_._v(" "),a("ul",[a("li",[_._v("如上图所示，红色框为feature map映射的anchor box，而黄框分别为，行人和车辆的 "),a("strong",[_._v("真实标签")]),_._v(" 。这样的话通过叫交并比就很难获取feature map中每个单元对应的标签")]),_._v(" "),a("li",[_._v("可以用，Box1与行人的IOU比较大，可用于训练和预测行人")]),_._v(" "),a("li",[_._v("Box2与车辆的IOU比较大，可以用于训练和预测汽车")]),_._v(" "),a("li",[_._v("使用不同长宽比和尺寸的anchor box "),a("strong",[_._v("这样更加有针对性！")])])])]),_._v(" "),a("li",[a("h6",{attrs:{id:"anchor-box-的尺寸如何选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anchor-box-的尺寸如何选择"}},[_._v("#")]),_._v(" anchor box 的尺寸如何选择？")]),_._v(" "),a("p",[_._v("目前主要有是3种方式：")]),_._v(" "),a("ul",[a("li",[_._v("人为经验选取")]),_._v(" "),a("li",[_._v("k-means聚类")]),_._v(" "),a("li",[_._v("作为超参数学习")])])])])])]),_._v(" "),a("h5",{attrs:{id:"anchor-box用在哪个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#anchor-box用在哪个阶段"}},[_._v("#")]),_._v(" anchor box用在哪个阶段？")]),_._v(" "),a("ul",[a("li",[_._v("既用于训练也用于预测阶段；")]),_._v(" "),a("li",[_._v("如何使用的：")])]),_._v(" "),a("h6",{attrs:{id:"_1、训练阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、训练阶段"}},[_._v("#")]),_._v(" 1、训练阶段")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("在实际预测会生成多个描框")])]),_._v(" "),a("li",[a("p",[_._v("然后通过迭代将我们的损失降到最小，让预测的框与之前输入的描框尽可能一致")]),_._v(" "),a("h6",{attrs:{id:"标注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标注"}},[_._v("#")]),_._v(" 标注")]),_._v(" "),a("ol",[a("li",[_._v("训练阶段，需要把anchor box作为标注样本")]),_._v(" "),a("li",[_._v("为了训练样本，需要为每个描框标注两类标签：1、类别；2、偏移量（offset）")])]),_._v(" "),a("h6",{attrs:{id:"标注-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标注-2"}},[_._v("#")]),_._v(" 标注")]),_._v(" "),a("ol",[a("li",[_._v("首先生成多个描框")]),_._v(" "),a("li",[_._v("预测每个描框"),a("strong",[_._v("类别")]),_._v("和"),a("strong",[_._v("偏移量")])]),_._v(" "),a("li",[_._v("根据偏移量调整描框位置，从而得到预测边框")]),_._v(" "),a("li",[_._v("最后筛选需要输出的预测边界框")])]),_._v(" "),a("h6",{attrs:{id:"训练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#训练"}},[_._v("#")]),_._v(" 训练")])])]),_._v(" "),a("h6",{attrs:{id:"_2、预测阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、预测阶段"}},[_._v("#")]),_._v(" 2、预测阶段")]),_._v(" "),a("ol",[a("li",[_._v("生成多个anchor box，根据训练模型参数预测这些anchor box的类别和偏移量")]),_._v(" "),a("li",[_._v("得出预测边界框")]),_._v(" "),a("li",[_._v("由于阈值和anchor box数量选择的问题，同一个目标可能会输出多个相似的预测边界框，"),a("strong",[_._v("缺点")]),_._v("：这样不仅不简洁，还会增加计算量。")]),_._v(" "),a("li",[_._v("**解决：**使用非极大值抑制（NMS)\n"),a("ol",[a("li",[_._v("NMS就是一个"),a("strong",[_._v("抑制冗余")]),_._v("的"),a("strong",[_._v("反复迭代")]),_._v("-遍历的过程。")]),_._v(" "),a("li",[_._v("对于预测边界框，模型最终会计算它属于每个类别的概率值")]),_._v(" "),a("li",[_._v("其中最大对应的类别就是预测边框的类别；")]),_._v(" "),a("li",[_._v("同一幅图片---\x3e所有预测边界框"),a("strong",[_._v("降序")]),_._v("排列（不分类别）---\x3e去除最大 "),a("strong",[_._v("概率")]),_._v("的预测边界框（"),a("strong",[_._v("基准")]),_._v("）---\x3e 计算剩余预测边框与基准的"),a("strong",[_._v("IOU")]),_._v("----\x3e如果大于给定某个阈值----\x3e则移除此边界框")]),_._v(" "),a("li",[_._v("以上做法，保留了概率最大的预测边界框，并移除了其他与其相似的边界框")]),_._v(" "),a("li",[_._v("接下来，从剩余中选出概率值最大的预测边界框-----\x3e并计算过程"),a("strong",[_._v("重复上述过程")]),_._v("。")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);