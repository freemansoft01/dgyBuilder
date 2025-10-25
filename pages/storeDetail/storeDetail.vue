<template>
  <view class="store-detail">
    <text>门店ID：{{ storeId }}</text>
    <text class="detail-title">门店详情</text>
    <!-- 可根据 storeId 请求接口，展示更多信息（如地址、电话、服务等） -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      storeId: ''
    }
  },
  onLoad(options) {
    // 接收页面跳转时传递的 id 参数
    this.storeId = options.id;
    // 实际开发中，可通过 storeId 调用接口获取详情
    console.log('当前门店ID：', this.storeId);
  }
}
</script>

<style scoped>
.store-detail {
  padding: 20rpx;
}
.detail-title {
  font-size: 32rpx;
  margin: 10rpx 0;
  display: block;
}
</style>