<template>
  <view class="container">
    <!-- 状态栏占位 -->
    <view class="status-bar"></view>
    
    <!-- 顶部图片区域 -->
    <image class="top-img" src="/static/images/top_02.jpg" mode="widthFix"></image>
   
    <!-- 功能按钮区域 -->
    <view class="btn-group">
      <navigator url="/pages/booking/booking" class="btn-item">
        <image 
          src="/static/images/top_03.jpg" 
          mode="widthFix" 
          class="btn-image"
          alt="在线预约图片"
        ></image>
      </navigator>
      
      <navigator url="/pages/cooperation/cooperation" class="btn-item">
        <image 
          src="/static/images/top_04.jpg" 
          mode="widthFix" 
          class="btn-image"
          alt="合作了解图片"
        ></image>
      </navigator>
    </view>

    <!-- 底部导航栏 -->
    <view class="bottom-nav">
      <view @click="switchTab(0)" class="nav-item">
        <image 
          :src="currentTab === 0 ? '/static/icons/首页-active.png' : '/static/icons/首页.png'" 
          class="nav-icon" 
          mode="widthFix" 
          alt="首页图标"
        ></image>
        <text :class="currentTab === 0 ? 'nav-text active' : 'nav-text'">首页</text>
      </view>
      <view @click="switchTab(1)" class="nav-item">
        <image 
          :src="currentTab === 1 ? '/static/icons/商城-active.png' : '/static/icons/商城.png'" 
          class="nav-icon" 
          mode="widthFix" 
          alt="商城图标"
        ></image>
        <text :class="currentTab === 1 ? 'nav-text active' : 'nav-text'">商城</text>
      </view>
      <view @click="switchTab(2)" class="nav-item">
        <image 
          :src="currentTab === 2 ? '/static/icons/酒店柜-active.png' : '/static/icons/酒店柜.png'" 
          class="nav-icon" 
          mode="widthFix" 
          alt="酒店柜图标"
        ></image>
        <text :class="currentTab === 2 ? 'nav-text active' : 'nav-text'">酒店柜</text>
      </view>
      <view @click="switchTab(3)" class="nav-item">
        <image 
          :src="currentTab === 3 ? '/static/icons/体验店-active.png' : '/static/icons/体验店.png'" 
          class="nav-icon" 
          mode="widthFix" 
          alt="体验店图标"
        ></image>
        <text :class="currentTab === 3 ? 'nav-text active' : 'nav-text'">我的</text>
      </view>
      <view @click="switchTab(4)" class="nav-item">
        <image 
          :src="currentTab === 4 ? '/static/icons/我的-active.png' : '/static/icons/我的.png'" 
          class="nav-icon" 
          mode="widthFix" 
          alt="我的图标"
        ></image>
        <text :class="currentTab === 4 ? 'nav-text active' : 'nav-text'">我的</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0  // 记录当前选中的导航项索引，默认选中首页
    };
  },
  methods: {
    // 切换导航项并跳转到对应页面
    switchTab(index) {
      // 更新当前选中状态
      this.currentTab = index;
      
      // 根据索引跳转到对应页面
      const pages = [
        '/pages/index/index',
        '/pages/mall/mall',
        '/pages/hotel/hotel',
        '/pages/store/store',
        '/pages/mine/mine'
      ];
      
      // 使用uni.switchTab跳转（tabBar页面必须用switchTab）
      uni.switchTab({
        url: pages[index]
      });
    }
  },
  onShow() {
    // 页面显示时，根据当前页面路径设置选中状态
    const pages = getCurrentPages(); // 获取当前页面栈
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1]; // 当前页面是栈的最后一个元素
      const currentPath = currentPage.route; // 获取页面路径（格式："pages/index/index"）
      
      const pagePaths = [
        'pages/index/index',
        'pages/mall/mall',
        'pages/hotel/hotel',
        'pages/store/store',
        'pages/mine/mine'
      ];
      
      // 查找当前页面在导航中的索引
      const index = pagePaths.findIndex(path => currentPath === path);
      if (index !== -1) {
        this.currentTab = index;
      }
    }
  }
};
</script>

<style scoped>
/* 其他样式保持不变 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: #637991;
  min-height: 100vh;
  padding-bottom: 120rpx;
  box-sizing: border-box;
}

/* 状态栏占位 */
.status-bar {
  height: var(--status-bar-height);
  width: 100%;
  background-color: #637991;
}

.top-img {
  width: 100%;
  display: block;
}

.btn-group {
  display: flex;
  width: 100%;
  margin-top: 0;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
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
}

/* 底部导航栏样式 */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #637991;
  border-top: 0px solid #eee;
  padding: 10rpx 0;
  z-index: 999;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 添加点击反馈 */
  touch-action: manipulation;
}

.nav-icon {
  width: 60rpx;
  height: 60rpx;
  margin-bottom: 10rpx;
}

.nav-text {
  font-size: 24rpx;
  color: #255899; /* 默认文字颜色 */
}

/* 选中状态样式 */
.nav-text.active {
  color: #183340; /* 选中时的文字颜色 */
  font-weight: bold;
}
</style>