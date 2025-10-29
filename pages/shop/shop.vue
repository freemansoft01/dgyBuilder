<template>
  <view class="shop-container">
    <!-- 顶部导航栏 -->
    <view class="navbar">
      <view class="logo">潮玩商城</view>
      <view class="search-box">
        <input 
          type="text" 
          placeholder="搜索潮玩手办、周边..." 
          class="search-input"
        />
        <button class="search-btn">🔍</button>
      </view>
      <view class="nav-icons">
        <view class="icon-item" @click="showCart = true">
          <text>🛒</text>
          <view class="cart-badge" v-if="cartCount > 0">{{ cartCount }}</view>
        </view>
        <view class="icon-item">👤</view>
      </view>
    </view>

    <!-- 主内容区 -->
    <view class="main-content">
      <!-- 分类筛选侧边栏 -->
      <view class="sidebar" :class="{ 'sidebar-hidden': !showSidebar }">
        <view class="sidebar-header">
          <text class="sidebar-title">商品分类</text>
          <text class="close-btn" @click="showSidebar = false">✕</text>
        </view>
        
        <view class="category-list">
          <view 
            class="category-item" 
            :class="{ active: activeCategory === 'all' }"
            @click="setCategory('all')"
          >
            全部商品
          </view>
          <view 
            class="category-item" 
            :class="{ active: activeCategory === 'doll' }"
            @click="setCategory('doll')"
          >
            潮玩手办
          </view>
          <view 
            class="category-item" 
            :class="{ active: activeCategory === 'peripheral' }"
            @click="setCategory('peripheral')"
          >
            趣味周边
          </view>
          <view 
            class="category-item" 
            :class="{ active: activeCategory === 'limited' }"
            @click="setCategory('limited')"
          >
            限定款
          </view>
        </view>

        <view class="filter-section">
          <text class="filter-title">价格区间</text>
          <view class="price-range">
            <slider 
              min="0" 
              max="500" 
              step="10" 
              :value="maxPrice" 
              @change="onPriceChange"
            />
            <view class="price-text">¥0 - ¥{{ maxPrice }}</view>
          </view>
        </view>

        <button class="reset-btn" @click="resetFilters">重置筛选</button>
      </view>

      <!-- 商品展示区 -->
      <view class="goods-area">
        <!-- 移动端筛选按钮 -->
        <view class="mobile-filter-btn" @click="showSidebar = true">
          🔍 筛选
        </view>

        <!-- 排序选项 -->
        <view class="sort-bar">
          <view class="sort-item" :class="{ active: sortType === 'default' }" @click="sortType = 'default'">
            默认排序
          </view>
          <view class="sort-item" :class="{ active: sortType === 'priceAsc' }" @click="sortType = 'priceAsc'">
            价格从低到高
          </view>
          <view class="sort-item" :class="{ active: sortType === 'priceDesc' }" @click="sortType = 'priceDesc'">
            价格从高到低
          </view>
        </view>

        <!-- 商品列表 -->
        <view class="goods-list">
          <view class="goods-item" v-for="item in filteredGoods" :key="item.id">
            <!-- 商品图片 -->
            <view class="goods-img-container">
              <image 
                :src="getImageUrl(item.imgId)" 
                mode="aspectFill"
                class="goods-img"
                @error="handleImgError($event, item.imgId)"
              />
              <view class="tag" v-if="item.isNew">新品</view>
              <view class="tag discount" v-if="item.isDiscount">折扣</view>
            </view>

            <!-- 商品信息 -->
            <view class="goods-info">
              <text class="goods-title">{{ item.name }}</text>
              <text class="goods-desc">{{ item.desc }}</text>
              <!-- 修复：将文字按钮改为正方形图标按钮 -->
              <view class="goods-footer">
                <text class="goods-price">¥{{ item.price.toFixed(2) }}</text>
                <!-- 正方形购物车图标按钮 -->
                <button 
                  class="add-cart-icon-btn" 
                  @click="addToCart(item)"
                  :aria-label="`加入购物车：${item.name}`"
                >
                  <image 
                    src="/static/icons/shoppingCart.png" 
                    mode="aspectFill"
                    class="cart-icon"
                  />
                </button>
              </view>
            </view>
          </view>
        </view>

        <!-- 无商品提示 -->
        <view class="empty-tip" v-if="filteredGoods.length === 0">
          <text>暂无符合条件的商品~</text>
        </view>

        <!-- 加载更多 -->
        <button class="load-more-btn" @click="loadMore" v-if="hasMore">
          加载更多
        </button>
      </view>
    </view>

    <!-- 购物车侧边栏 -->
    <view class="cart-sidebar" :class="{ 'cart-show': showCart }">
      <view class="cart-header">
        <text class="cart-title">我的购物车</text>
        <text class="close-cart" @click="showCart = false">✕</text>
      </view>

      <view class="cart-list" v-if="cartList.length > 0">
        <view class="cart-item" v-for="item in cartList" :key="item.id">
          <image 
            :src="getImageUrl(item.imgId)" 
            mode="aspectFill"
            class="cart-item-img"
          />
          <view class="cart-item-info">
            <text class="cart-item-name">{{ item.name }}</text>
            <text class="cart-item-price">¥{{ item.price.toFixed(2) }}</text>
            <view class="count-control">
              <button 
                class="count-btn" 
                @click="decreaseCount(item)"
                :disabled="item.count <= 1"
              >
                -
              </button>
              <text class="count">{{ item.count }}</text>
              <button class="count-btn" @click="increaseCount(item)">+</button>
            </view>
          </view>
          <button class="remove-item" @click="removeFromCart(item)">✕</button>
        </view>
      </view>

      <view class="empty-cart" v-else>
        <text>购物车还是空的哦~</text>
        <button class="go-shopping" @click="showCart = false">去逛逛</button>
      </view>

      <view class="cart-footer" v-if="cartList.length > 0">
        <view class="total-price">
          合计: <text class="price">¥{{ totalPrice.toFixed(2) }}</text>
        </view>
        <button class="checkout-btn">结算</button>
      </view>
    </view>

    <!-- 遮罩层 -->
    <view 
      class="mask" 
      v-if="showSidebar || showCart"
      @click="showSidebar = false; showCart = false"
    ></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 商品数据
      goodsData: [
        {
          id: 1,
          name: "机械战甲限量手办",
          desc: "全关节可动 | 精细涂装 | 收藏级",
          price: 199.9,
          category: "doll",
          imgId: 1,
          isNew: false,
          isDiscount: true
        },
        {
          id: 2,
          name: "萌宠盲盒全套",
          desc: "6款基础款 | 1款隐藏款",
          price: 69.9,
          category: "doll",
          imgId: 2,
          isNew: true,
          isDiscount: false
        },
        {
          id: 3,
          name: "解压神器套装",
          desc: "3款不同造型 | 缓解压力",
          price: 39.9,
          category: "peripheral",
          imgId: 3,
          isNew: false,
          isDiscount: false
        },
        {
          id: 4,
          name: "动漫主题钥匙扣",
          desc: "金属材质 | 3cm迷你尺寸",
          price: 25.5,
          category: "peripheral",
          imgId: 4,
          isNew: false,
          isDiscount: true
        },
        {
          id: 5,
          name: "典藏版限量手办",
          desc: "全球限量500套 | 带编号",
          price: 299.9,
          category: "limited",
          imgId: 5,
          isNew: false,
          isDiscount: false
        },
        {
          id: 6,
          name: "潮玩主题马克杯",
          desc: "耐高温 | 304不锈钢内胆",
          price: 45.9,
          category: "peripheral",
          imgId: 6,
          isNew: true,
          isDiscount: true
        },
        {
          id: 7,
          name: "科幻机械兽手办",
          desc: "未来科技风 | 灯光特效",
          price: 159.9,
          category: "doll",
          imgId: 7,
          isNew: true,
          isDiscount: false
        },
        {
          id: 8,
          name: "创意桌面摆件",
          desc: "树脂材质 | 家居装饰",
          price: 59.9,
          category: "peripheral",
          imgId: 8,
          isNew: false,
          isDiscount: false
        }
      ],
      
      // 筛选条件
      activeCategory: "all",
      maxPrice: 500,
      sortType: "default",
      loadedCount: 4,
      
      // 购物车数据
      cartList: [],
      showCart: false,
      
      // 侧边栏控制
      showSidebar: false,

      // 设备信息缓存
      deviceInfo: null
    };
  },

  onLoad() {
    // 初始化设备信息
    try {
      this.deviceInfo = uni.getSystemInfoSync();
    } catch (e) {
      console.error("获取设备信息失败：", e);
      this.deviceInfo = { windowWidth: 375 }; // 默认值
    }
  },
  
  computed: {
    // 筛选后的商品列表
    filteredGoods() {
      let result = [...this.goodsData.slice(0, this.loadedCount)];
      
      // 分类筛选
      if (this.activeCategory !== "all") {
        result = result.filter(item => item.category === this.activeCategory);
      }
      
      // 价格筛选
      result = result.filter(item => item.price <= this.maxPrice);
      
      // 排序处理
      if (this.sortType === "priceAsc") {
        result.sort((a, b) => a.price - b.price);
      } else if (this.sortType === "priceDesc") {
        result.sort((a, b) => b.price - a.price);
      }
      
      return result;
    },
    
    // 购物车商品总数
    cartCount() {
      return this.cartList.reduce((total, item) => total + item.count, 0);
    },
    
    // 购物车总价
    totalPrice() {
      return this.cartList.reduce((total, item) => total + (item.price * item.count), 0);
    },
    
    // 是否还有更多商品可加载
    hasMore() {
      return this.loadedCount < this.goodsData.length;
    }
  },
  
  methods: {
    // 生成图片路径
    getImageUrl(imgId) {
      return `/static/images/products/product (${imgId}).jpg`;
    },

    // 设置分类
    setCategory(category) {
      this.activeCategory = category;
      if (this.deviceInfo.windowWidth <= 768) {
        this.showSidebar = false;
      }
    },
    
    // 价格范围变化
    onPriceChange(e) {
      this.maxPrice = e.detail.value;
    },
    
    // 重置筛选条件
    resetFilters() {
      this.activeCategory = "all";
      this.maxPrice = 500;
      this.sortType = "default";
    },
    
    // 加载更多商品
    loadMore() {
      if (this.loadedCount < this.goodsData.length) {
        this.loadedCount += 4;
        if (this.loadedCount > this.goodsData.length) {
          this.loadedCount = this.goodsData.length;
        }
      }
    },
    
    // 加入购物车
    addToCart(item) {
      const existingIndex = this.cartList.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingIndex !== -1) {
        this.$set(this.cartList, existingIndex, {
          ...this.cartList[existingIndex],
          count: this.cartList[existingIndex].count + 1
        });
      } else {
        this.cartList.push({ ...item, count: 1 });
      }
      
      uni.showToast({
        title: "加入购物车成功",
        icon: "none",
        duration: 1500
      });
    },
    
    // 增加购物车商品数量
    increaseCount(item) {
      const index = this.cartList.findIndex(i => i.id === item.id);
      if (index !== -1) {
        this.$set(this.cartList, index, {
          ...this.cartList[index],
          count: this.cartList[index].count + 1
        });
      }
    },
    
    // 减少购物车商品数量
    decreaseCount(item) {
      const index = this.cartList.findIndex(i => i.id === item.id);
      if (index !== -1 && this.cartList[index].count > 1) {
        this.$set(this.cartList, index, {
          ...this.cartList[index],
          count: this.cartList[index].count - 1
        });
      }
    },
    
    // 从购物车移除商品
    removeFromCart(item) {
      const index = this.cartList.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        this.cartList.splice(index, 1);
      }
    },
    
    // 处理图片加载失败
    handleImgError(event, imgId) {
      event.target.src = this.getImageUrl(imgId);
      setTimeout(() => {
        if (event.target.error) {
          event.target.src = "/static/images/products/default.jpg";
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
/* 基础样式 */
.shop-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 导航栏 */
.navbar {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #ff4d4f;
  margin-right: 20px;
}

.search-box {
  flex: 1;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 6px 15px;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
}

.search-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  color: #888;
}

.nav-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
}

.icon-item {
  font-size: 22px;
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background-color: #ff4d4f;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 主内容区 */
.main-content {
  display: flex;
  flex: 1;
}

/* 侧边栏 */
.sidebar {
  width: 240px;
  background-color: white;
  padding: 20px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  z-index: 5;
  transition: transform 0.3s ease;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 15px;
  border-bottom: 1px solid #eee;
}

.sidebar-title {
  font-size: 16px;
  font-weight: bold;
}

.close-btn {
  font-size: 20px;
  color: #888;
}

.category-list {
  padding: 15px 0;
}

.category-item {
  padding: 12px 20px;
  font-size: 14px;
  color: #333;
  transition: all 0.2s;
}

.category-item.active {
  background-color: #fff0f0;
  color: #ff4d4f;
  border-left: 3px solid #ff4d4f;
}

.category-item:hover {
  background-color: #f5f5f5;
}

.filter-section {
  padding: 15px 20px;
  border-top: 1px solid #eee;
}

.filter-title {
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}

.price-range {
  padding: 10px 0;
}

.price-text {
  text-align: right;
  font-size: 14px;
  color: #666;
  margin-top: 5px;
}

.reset-btn {
  width: 80%;
  margin: 20px 10%;
  background-color: white;
  color: #ff4d4f;
  border: 1px solid #ff4d4f;
  border-radius: 4px;
  padding: 8px 0;
}

/* 商品展示区 */
.goods-area {
  flex: 1;
  padding: 15px;
}

.mobile-filter-btn {
  display: none;
  padding: 10px 15px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.sort-bar {
  display: flex;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.sort-item {
  flex: 1;
  text-align: center;
  padding: 12px 0;
  font-size: 14px;
  color: #666;
  border-bottom: 2px solid transparent;
}

.sort-item.active {
  color: #ff4d4f;
  border-bottom-color: #ff4d4f;
}

.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 15px;
}

.goods-item {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.goods-item:hover {
  transform: translateY(-5px);
}

.goods-img-container {
  position: relative;
  width: 100%;
  padding-top: 100%; /* 正方形比例 */
}

.goods-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4d4f;
  color: white;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 4px;
}

.tag.discount {
  background-color: #faad14;
}

.goods-info {
  padding: 12px;
}

.goods-title {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
}

.goods-desc {
  font-size: 12px;
  color: #888;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}

/* 商品底部（价格 + 正方形购物车图标） */
.goods-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-price {
  font-size: 16px;
  color: #ff4d4f;
  font-weight: bold;
}

/* 正方形购物车图标按钮（核心修改） */
.add-cart-icon-btn {
  width: 36px; /* 正方形尺寸，可按需调整 */
  height: 36px;
  padding: 0; /* 清除默认内边距 */
  background: transparent;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  transition: background-color 0.2s ease;
}

.add-cart-icon-btn:hover {
  background-color: #ffebeb; /*  hover 时淡红色背景，呼应主题 */
}

/* 购物车图标样式 */
.cart-icon {
  width: 22px; /* 图标尺寸，与按钮适配 */
  height: 22px;
}

.empty-tip {
  text-align: center;
  padding: 50px 0;
  color: #888;
  font-size: 16px;
}

.load-more-btn {
  width: 100%;
  padding: 10px 0;
  background-color: white;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-top: 20px;
  color: #666;
}

/* 购物车侧边栏 */
.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 20;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.cart-show {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.cart-title {
  font-size: 18px;
  font-weight: bold;
}

.close-cart {
  font-size: 20px;
  color: #888;
}

.cart-list {
  height: calc(100vh - 160px);
  overflow-y: auto;
  padding: 15px;
}

.cart-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.cart-item-img {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 10px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-size: 14px;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 5px;
}

.cart-item-price {
  font-size: 15px;
  color: #ff4d4f;
  margin-bottom: 10px;
  display: block;
}

.count-control {
  display: flex;
  align-items: center;
}

.count-btn {
  width: 25px;
  height: 25px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.count {
  width: 30px;
  text-align: center;
  font-size: 14px;
}

.remove-item {
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  color: #888;
  font-size: 18px;
}

.empty-cart {
  height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888;
}

.go-shopping {
  margin-top: 20px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
}

.cart-footer {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
}

.total-price {
  font-size: 16px;
  margin-bottom: 15px;
  text-align: right;
}

.total-price .price {
  color: #ff4d4f;
  font-weight: bold;
  font-size: 18px;
}

.checkout-btn {
  width: 100%;
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 12px 0;
  border-radius: 4px;
  font-size: 16px;
}

/* 遮罩层 */
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 15;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
  }
  
  .sidebar-hidden {
    transform: translateX(-100%) !important;
  }
  
  .mobile-filter-btn {
    display: block;
  }
  
  .goods-list {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .logo {
    font-size: 18px;
  }
  
  .nav-icons {
    gap: 15px;
  }
  
  /* 移动端适配图标按钮尺寸 */
  .add-cart-icon-btn {
    width: 32px;
    height: 32px;
  }
  
  .cart-icon {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: 769px) {
  .sidebar-hidden {
    transform: translateX(0) !important;
  }
}
</style>