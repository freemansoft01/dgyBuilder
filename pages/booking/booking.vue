<template>
  <view class="booking-page">
    <!-- 1. 轮播图区域（自动切换+指示点+循环） -->
    <swiper 
      class="swiper" 
      autoplay 
      interval="3000" 
      indicator-dots 
      circular 
      duration="500"
    >
      <swiper-item v-for="(img, index) in swiperImages" :key="index">
        <image :src="img" class="swiper-img" mode="aspectFill"></image>
      </swiper-item>
    </swiper>

    <!-- 2. 商品按钮区域（4个功能入口） -->
    <view class="goods-btns">
      <navigator 
        v-for="(btn, index) in goodsButtons" 
        :key="index" 
        :url="btn.url" 
        class="goods-btn"
      >
        <image :src="btn.icon" class="btn-icon" mode="widthFix"></image>
        <text class="btn-text">{{ btn.name }}</text>
      </navigator>
    </view>

    <!-- 3. 附近门店区域（每行2个卡片，带跳转） -->
    <view class="nearby-section">
      <text class="nearby-title">附近门店</text>
      <view class="stores-list">
        <navigator 
          v-for="(store, index) in nearbyStores" 
          :key="index" 
          :url="`/pages/storeDetail/storeDetail?id=${store.id}`" 
          class="store-card"
        >
          <image :src="store.image" class="store-img" mode="aspectFill"></image>
          <view class="store-info">
            <text class="store-name">{{ store.name }}</text>
            <text class="store-price">活动价 {{ store.price }}</text>
          </view>
        </navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 1. 轮播图数据（可扩展更多图片）
      swiperImages: [
        '/static/images/banner1.jpg',
        '/static/images/banner2.jpg',
        '/static/images/banner3.jpg'
      ],
      // 2. 商品按钮数据（图标+跳转路径）
      goodsButtons: [
        { name: '实体娃娃', icon: '/static/icons/doll.png', url: '/pages/doll/doll' },
        { name: '情趣用品', icon: '/static/icons/fun.png', url: '/pages/fun/fun' },
        { name: '定制产品', icon: '/static/icons/custom.png', url: '/pages/custom/custom' },
        { name: '产品支持', icon: '/static/icons/support.png', url: '/pages/support/support' }
      ],
      // 3. 附近门店数据（带门店id，用于跳转详情）
      nearbyStores: [
        { id: 1, name: '魅力体验店A', image: '/static/images/store1.jpg', price: '399' },
        { id: 2, name: '时尚体验店B', image: '/static/images/store2.jpg', price: '299' },
        { id: 3, name: '轻奢体验店C', image: '/static/images/store3.jpg', price: '499' },
        { id: 4, name: '温馨体验店D', image: '/static/images/store4.jpg', price: '359' }
      ]
    };
  }
}
</script>

<style scoped>
/* 页面整体布局 */
.booking-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 120rpx; /* 给底部导航留空间（若有） */
  box-sizing: border-box;
}

/* 1. 轮播图样式 */
.swiper {
  width: 100%;
  height: 300rpx; /* 按需求调整高度 */
  overflow: hidden;
}
.swiper-img {
  width: 100%;
  height: 100%;
}

/* 2. 商品按钮样式 */
.goods-btns {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20rpx 0;
  margin: 10rpx 0;
  background-color: #fff;
}
.goods-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-icon {
  width: 80rpx;
  height: 80rpx;
}
.btn-text {
  font-size: 24rpx;
  color: #333;
  margin-top: 10rpx;
}

/* 3. 附近门店样式 */
.nearby-section {
  width: 90%;
  margin-top: 20rpx;
}
.nearby-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 15rpx;
}
.stores-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15rpx; /* 门店卡片间距 */
}
.store-card {
  width: 48%; /* 每行2个卡片，留间隙 */
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden; /* 裁剪圆角外内容 */
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.05); /* 轻微阴影，更美观 */
}
.store-img {
  width: 100%;
  height: 200rpx; /* 门店图片高度 */
}
.store-info {
  padding: 15rpx;
}
.store-name {
  font-size: 28rpx;
  color: #333;
  margin-bottom: 8rpx;
}
.store-price {
  font-size: 26rpx;
  color: #ff4444; /* 活动价红色突出 */
}
</style>