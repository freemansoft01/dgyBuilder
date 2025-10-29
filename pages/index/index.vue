<template>
  <view class="container">
    <!-- 状态栏占位 -->
    <view class="status-bar"></view>
    
    <!-- 顶部图片区域 -->
    <image class="top-img" src="/static/images/top_02.jpg"  mode="widthFix"></image>
   
    <!-- 功能按钮区域 -->
    <view class="btn-group">
      <navigator url="/pages/booking/booking" class="btn-item" hover-class="btn-hover">
        <image 
          src="/static/images/top_03.jpg"   
          mode="widthFix" 
          class="btn-image"
          alt="在线预约"
        ></image>
      </navigator>
      
      <navigator url="/pages/cooperation/cooperation" class="btn-item" hover-class="btn-hover">
        <image 
          src="/static/images/top_04.jpg"   
          mode="widthFix" 
          class="btn-image"
          alt="合作了解"
        ></image>
      </navigator>
    </view>
  </view>
</template>
 
<script>
export default {
  // 移除所有底部导航相关逻辑 
  // 页面不再需要维护导航状态 
}
</script>
 
<style scoped>
/* 基础样式 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #637991;
  min-height: 100vh;
  padding-bottom: 0; /* 移除底部预留空间 */
  box-sizing: border-box;
}
 
/* 状态栏占位 */
.status-bar {
  height: var(--status-bar-height);
  width: 100%;
  background-color: #637991;
}
 
/* 顶部图片样式 */
.top-img {
  width: 100%;
  display: block;
}
 
/* 功能按钮区域 */
.btn-group {
  display: flex;
  width: 100%;
  margin-top: 0;
  padding: 0;
}
 
.btn-item {
  flex: 1;
  width: 50%;
  background-color: transparent;
  padding: 0;
  border-radius: 0;
}
 
.btn-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}
 
.btn-hover {
  opacity: 0.9;
  transform: scale(0.98);
}

</style>