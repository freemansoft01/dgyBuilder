<template> 
  <view class="color-container"> 
    <view class="red"></view> 
    <view class="green"></view> 
    <view class="blue"></view> 
  </view> 
</template> 
 
<style scoped> 
.color-container { 
  display: flex; 
  width: 100vw; /* 占满屏幕宽度 */ 
  height: 50vmin; /* 最高色块高度 */ 
  border: 10px solid #000; /* 可选：容器边框，便于观察 */ 
  
} 

 
.red { 
  height: 750upx; /*浏览器会忽略无法解析的单位声明,问题：这里是被什么规则限制了，长度只能是父窗口的最大高度*/
  width: 20%;
  background-color: red; 
} 
 
.green { 
  height: 20%;
  width: 20%;
  background-color: green; 
} 
 
.blue { 
  height: 75%;
  width: 50%;
  background-color: blue; 
} 
</style> 