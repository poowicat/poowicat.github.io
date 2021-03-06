---
title: 浅谈深度学习中Batch_size的大小对模型训练的影响
date: 2022-05-11 14:24:43
permalink: /pages/ac613e/
sidebar: auto
sticky: 1
categories:
  - 随笔
tags:
  - 
author: 
  name: poowicat
  link: https://github.com/poowicat
---

### Batch_size的作用：

1. 决定了下降的方向。

### 在合理范围内增大Batch_size的好处：

- **提高内存利用率**以及大矩阵乘法的并行化效率；
- 跑完一次epoch（全数据集）所需要的**迭代次数减少**，对相同的数据量，<u>处理速度比小的Batch_size要更快</u>；
- 在一定范围内，一般来说Batch_size越大，其确定的下降方向越准，引起的<u>训练震荡越小</u>

### 盲目增大Batch_size，Batch_size过大的坏处：

- 提高了内存利用率，但**内存容量可能撑不住**；
- 跑完一次epoch所需的迭代次数变小，但想要达到相同的精度，~~其所花费的时间大大增加~~，从而对参数的修正也显得更加缓慢。
- Batch_size增大到一定程度，其确定的下降方向已经基本不再变化（~~会影响随机性的引入~~）

### Batch_size的两种极端设置

#### 一、batch_size为全数据集(Full Batch Learning)：

在**数据集比较小**时使用，**好处是**：

由全数据集确定的方向能够更好地代表样本总体，从而更准确地朝向极值所在的方向；
由于不同权重的梯度值差别巨大，因此选择一个全局的学习率很困难。Full Batch Learning可以使用Rprop只基于梯度符号并且针对性单独更新各权值。

在更**大的数据集**上使用的话，好处会变成**坏处**：

随着数据集的海量增长和内存限制，一次性载入所有的数据进来变得越来越不可行；
以Rprop的方式迭代，会由于各个Batch之间的采样差异性，各次梯度修正值相互抵消，无法修正。



#### 二、将Batch_size设置为1：

Batch_size=1，也就是每次只训练一个样本。这就是<u>在线学习</u>(Online Learning)。理论上说batch_size=1是最好的，不过实际上调的时候，会出现batch_size太小导致<u>网络收敛不稳定</u>，<u>最后结果比较差</u>。

这是因为线性神经元在均方<u>误差代价函数的错误面是一个抛物面</u>，横截面是椭圆。对于多层神经元，非线性网络，在局部依然近似是抛物面。使用在线学习，每次修正方向以各自样本的梯度方向修正，难以达到收敛。


### 一些经验之谈：

一般而言，根据GPU显存，<u>设置为最大</u>，而且一般要求是８的倍数（比如16，32，64），GPU内部的并行计算效率最高。
或者选择一部分数据，设置几个８的倍数的Batch_Size，看看loss的下降情况，再选用效果更好的值。
![image](https://cdn.jsdelivr.net/gh/poowicat/pic_store@main/blog/image.4s8e5fgdgc20.webp)

### 总结：

batch_size设的大一些，收敛得快，也就是需要训练的次数少，准确率上升的也很稳定，<u>但是实际使用起来精度不高</u>；
batch_size设的小一些，收敛得慢，可能准确率来回震荡，因此<u>需要把基础学习速率降低一些</u>，但是实际使用起来精度较高。

[参考链接]: https://blog.csdn.net/qq_39056987/article/details/105071150

