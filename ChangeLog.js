2016.08.27 | 04:40:28
1.已经完成了 userstyles.org 选项鼠标悬停显示使用说明的雏形，cool
2.加入了只替换中文而不替换英文的选项，正在完善
3.修正了中日文假名的逻辑关系
2016.06.24 | 07:35:28
1.chrome 新的 @font-face 构架有些不完善的地方，要重新写
2.新版的 crx 已经采用新的阿里类网站分离方式，并改善了雅黑标点符号不清楚的问题
2016.05.26 | 00:18:33
1.开始对以 @font-face 方式为主的 css 代码进行第二次架构调整和优化
2016.04.10 | 17:12:11
1.分离 淘宝/天猫/支付宝 代码，以保证不乱码
2016.03.09 | 11:55:22
1.chrome 调用粗体的方式与 firefox 不同
firefox : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata Bold")
chrome : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata")
合并写法 : /* main(Latin) *//* 700:Bold */@font-face {font-family: "SDF.Latin";font-weight:700;src: local("Inconsolata Bold"),local("Inconsolata")
2016.03.08 | 18:06:24
1.为了调用，提取，测试几个字体，不断的折腾我的机子，安装了win10会员版和win8.1，累累累累累
2016.02.28 | 08:32:03
1.@font-face方式替换字体方法为什么那么久还没制作好，A：chrome和firefox处理方式不同，B：每个字体的粗细调用方式不同，C：每个国家字体显示效果不同
  每次写好一个字体就需要调试一次，调试好的字体还要在不同网站下再次调试，所以耗时是非常长的
  网上有很多写好的@font-face方式替换字体，其实只是替换了很少一部分，显示效果并不理想
2016.02.25 | 15:15:32
1.完成了swf的反编译后，终于有时间继续css字体的工作了，貌似思路也清晰了不少
2.解决了 Adobe Flash Player 设置无法点击的问题，主要原因在于DPI变化以后，透明的CSS块错误缩放，导致无法点击
  这个问题从2011年开始有人提起，在网上一直没有理想解决的方案
2015.08.17 | 05:05:32
1.终于解决了 几个等宽字符在特定情况下错位的技术难点，折腾了一个多月，自制了字体调用来解决
2.期间发现 WIN10 以及 FireFox 高版本貌似也在改善这个问题，老外也遇到相同的问题？神同步。。。
