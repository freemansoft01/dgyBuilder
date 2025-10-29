if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$1 = "/static/images/top_02.jpg";
  const _imports_1 = "/static/images/top_03.jpg";
  const _imports_2 = "/static/images/top_04.jpg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    // 移除所有底部导航相关逻辑 
    // 页面不再需要维护导航状态 
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 状态栏占位 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 顶部图片区域 "),
      vue.createElementVNode("image", {
        class: "top-img",
        src: _imports_0$1,
        mode: "widthFix"
      }),
      vue.createCommentVNode(" 功能按钮区域 "),
      vue.createElementVNode("view", { class: "btn-group" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/booking/booking",
          class: "btn-item",
          "hover-class": "btn-hover"
        }, [
          vue.createElementVNode("image", {
            src: _imports_1,
            mode: "widthFix",
            class: "btn-image",
            alt: "在线预约"
          })
        ]),
        vue.createElementVNode("navigator", {
          url: "/pages/cooperation/cooperation",
          class: "btn-item",
          "hover-class": "btn-hover"
        }, [
          vue.createElementVNode("image", {
            src: _imports_2,
            mode: "widthFix",
            class: "btn-image",
            alt: "合作了解"
          })
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/dgyBuilder/pages/index/index.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        // 1. 轮播图数据（可扩展更多图片）
        swiperImages: [
          "/static/images/banner1.jpg",
          "/static/images/banner2.jpg",
          "/static/images/banner3.jpg"
        ],
        // 2. 商品按钮数据（图标+跳转路径）
        goodsButtons: [
          { name: "实体娃娃", icon: "/static/icons/doll.png", url: "/pages/doll/doll" },
          { name: "情趣用品", icon: "/static/icons/fun.png", url: "/pages/fun/fun" },
          { name: "定制产品", icon: "/static/icons/custom.png", url: "/pages/custom/custom" },
          { name: "产品支持", icon: "/static/icons/support.png", url: "/pages/support/support" }
        ],
        // 3. 附近门店数据（带门店id，用于跳转详情）
        nearbyStores: [
          { id: 1, name: "魅力体验店A", image: "/static/images/store1.jpg", price: "399" },
          { id: 2, name: "时尚体验店B", image: "/static/images/store2.jpg", price: "299" },
          { id: 3, name: "轻奢体验店C", image: "/static/images/store3.jpg", price: "499" },
          { id: 4, name: "温馨体验店D", image: "/static/images/store4.jpg", price: "359" }
        ]
      };
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "booking-page" }, [
      vue.createCommentVNode(" 1. 轮播图区域（自动切换+指示点+循环） "),
      vue.createElementVNode("swiper", {
        class: "swiper",
        autoplay: "",
        interval: "3000",
        "indicator-dots": "",
        circular: "",
        duration: "500"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.swiperImages, (img, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("image", {
                src: img,
                class: "swiper-img",
                mode: "aspectFill"
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 2. 商品按钮区域（4个功能入口） "),
      vue.createElementVNode("view", { class: "goods-btns" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.goodsButtons, (btn, index) => {
            return vue.openBlock(), vue.createElementBlock("navigator", {
              key: index,
              url: btn.url,
              class: "goods-btn"
            }, [
              vue.createElementVNode("image", {
                src: btn.icon,
                class: "btn-icon",
                mode: "widthFix"
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "text",
                { class: "btn-text" },
                vue.toDisplayString(btn.name),
                1
                /* TEXT */
              )
            ], 8, ["url"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 3. 附近门店区域（每行2个卡片，带跳转） "),
      vue.createElementVNode("view", { class: "nearby-section" }, [
        vue.createElementVNode("text", { class: "nearby-title" }, "附近门店"),
        vue.createElementVNode("view", { class: "stores-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.nearbyStores, (store, index) => {
              return vue.openBlock(), vue.createElementBlock("navigator", {
                key: index,
                url: `/pages/storeDetail/storeDetail?id=${store.id}`,
                class: "store-card"
              }, [
                vue.createElementVNode("image", {
                  src: store.image,
                  class: "store-img",
                  mode: "aspectFill"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "store-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "store-name" },
                    vue.toDisplayString(store.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "store-price" },
                    "活动价 " + vue.toDisplayString(store.price),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["url"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesBookingBooking = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-d331dabb"], ["__file", "E:/dgyBuilder/pages/booking/booking.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$6 = {
    data() {
      return {
        storeId: ""
      };
    },
    onLoad(options) {
      this.storeId = options.id;
      formatAppLog("log", "at pages/storeDetail/storeDetail.vue:20", "当前门店ID：", this.storeId);
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "store-detail" }, [
      vue.createElementVNode(
        "text",
        null,
        "门店ID：" + vue.toDisplayString($data.storeId),
        1
        /* TEXT */
      ),
      vue.createElementVNode("text", { class: "detail-title" }, "门店详情"),
      vue.createCommentVNode(" 可根据 storeId 请求接口，展示更多信息（如地址、电话、服务等） ")
    ]);
  }
  const PagesStoreDetailStoreDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-d518e36c"], ["__file", "E:/dgyBuilder/pages/storeDetail/storeDetail.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "cooperation-container" }, [
      vue.createElementVNode("text", null, "合作了解界面")
    ]);
  }
  const PagesCooperationCooperation = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-8d7c12ff"], ["__file", "E:/dgyBuilder/pages/cooperation/cooperation.vue"]]);
  const _imports_0 = "/static/icons/shoppingCart.png";
  const _sfc_main$4 = {
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
      try {
        this.deviceInfo = uni.getSystemInfoSync();
      } catch (e) {
        formatAppLog("error", "at pages/shop/shop.vue:317", "获取设备信息失败：", e);
        this.deviceInfo = { windowWidth: 375 };
      }
    },
    computed: {
      // 筛选后的商品列表
      filteredGoods() {
        let result = [...this.goodsData.slice(0, this.loadedCount)];
        if (this.activeCategory !== "all") {
          result = result.filter((item) => item.category === this.activeCategory);
        }
        result = result.filter((item) => item.price <= this.maxPrice);
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
        return this.cartList.reduce((total, item) => total + item.price * item.count, 0);
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
        const existingIndex = this.cartList.findIndex((cartItem) => cartItem.id === item.id);
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
        const index = this.cartList.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          this.$set(this.cartList, index, {
            ...this.cartList[index],
            count: this.cartList[index].count + 1
          });
        }
      },
      // 减少购物车商品数量
      decreaseCount(item) {
        const index = this.cartList.findIndex((i) => i.id === item.id);
        if (index !== -1 && this.cartList[index].count > 1) {
          this.$set(this.cartList, index, {
            ...this.cartList[index],
            count: this.cartList[index].count - 1
          });
        }
      },
      // 从购物车移除商品
      removeFromCart(item) {
        const index = this.cartList.findIndex((cartItem) => cartItem.id === item.id);
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
        }, 1e3);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "shop-container" }, [
      vue.createCommentVNode(" 顶部导航栏 "),
      vue.createElementVNode("view", { class: "navbar" }, [
        vue.createElementVNode("view", { class: "logo" }, "潮玩商城"),
        vue.createElementVNode("view", { class: "search-box" }, [
          vue.createElementVNode("input", {
            type: "text",
            placeholder: "搜索潮玩手办、周边...",
            class: "search-input"
          }),
          vue.createElementVNode("button", { class: "search-btn" }, "🔍")
        ]),
        vue.createElementVNode("view", { class: "nav-icons" }, [
          vue.createElementVNode("view", {
            class: "icon-item",
            onClick: _cache[0] || (_cache[0] = ($event) => $data.showCart = true)
          }, [
            vue.createElementVNode("text", null, "🛒"),
            $options.cartCount > 0 ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "cart-badge"
              },
              vue.toDisplayString($options.cartCount),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("view", { class: "icon-item" }, "👤")
        ])
      ]),
      vue.createCommentVNode(" 主内容区 "),
      vue.createElementVNode("view", { class: "main-content" }, [
        vue.createCommentVNode(" 分类筛选侧边栏 "),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["sidebar", { "sidebar-hidden": !$data.showSidebar }])
          },
          [
            vue.createElementVNode("view", { class: "sidebar-header" }, [
              vue.createElementVNode("text", { class: "sidebar-title" }, "商品分类"),
              vue.createElementVNode("text", {
                class: "close-btn",
                onClick: _cache[1] || (_cache[1] = ($event) => $data.showSidebar = false)
              }, "✕")
            ]),
            vue.createElementVNode("view", { class: "category-list" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["category-item", { active: $data.activeCategory === "all" }]),
                  onClick: _cache[2] || (_cache[2] = ($event) => $options.setCategory("all"))
                },
                " 全部商品 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["category-item", { active: $data.activeCategory === "doll" }]),
                  onClick: _cache[3] || (_cache[3] = ($event) => $options.setCategory("doll"))
                },
                " 潮玩手办 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["category-item", { active: $data.activeCategory === "peripheral" }]),
                  onClick: _cache[4] || (_cache[4] = ($event) => $options.setCategory("peripheral"))
                },
                " 趣味周边 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["category-item", { active: $data.activeCategory === "limited" }]),
                  onClick: _cache[5] || (_cache[5] = ($event) => $options.setCategory("limited"))
                },
                " 限定款 ",
                2
                /* CLASS */
              )
            ]),
            vue.createElementVNode("view", { class: "filter-section" }, [
              vue.createElementVNode("text", { class: "filter-title" }, "价格区间"),
              vue.createElementVNode("view", { class: "price-range" }, [
                vue.createElementVNode("slider", {
                  min: "0",
                  max: "500",
                  step: "10",
                  value: $data.maxPrice,
                  onChange: _cache[6] || (_cache[6] = (...args) => $options.onPriceChange && $options.onPriceChange(...args))
                }, null, 40, ["value"]),
                vue.createElementVNode(
                  "view",
                  { class: "price-text" },
                  "¥0 - ¥" + vue.toDisplayString($data.maxPrice),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("button", {
              class: "reset-btn",
              onClick: _cache[7] || (_cache[7] = (...args) => $options.resetFilters && $options.resetFilters(...args))
            }, "重置筛选")
          ],
          2
          /* CLASS */
        ),
        vue.createCommentVNode(" 商品展示区 "),
        vue.createElementVNode("view", { class: "goods-area" }, [
          vue.createCommentVNode(" 移动端筛选按钮 "),
          vue.createElementVNode("view", {
            class: "mobile-filter-btn",
            onClick: _cache[8] || (_cache[8] = ($event) => $data.showSidebar = true)
          }, " 🔍 筛选 "),
          vue.createCommentVNode(" 排序选项 "),
          vue.createElementVNode("view", { class: "sort-bar" }, [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["sort-item", { active: $data.sortType === "default" }]),
                onClick: _cache[9] || (_cache[9] = ($event) => $data.sortType = "default")
              },
              " 默认排序 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["sort-item", { active: $data.sortType === "priceAsc" }]),
                onClick: _cache[10] || (_cache[10] = ($event) => $data.sortType = "priceAsc")
              },
              " 价格从低到高 ",
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["sort-item", { active: $data.sortType === "priceDesc" }]),
                onClick: _cache[11] || (_cache[11] = ($event) => $data.sortType = "priceDesc")
              },
              " 价格从高到低 ",
              2
              /* CLASS */
            )
          ]),
          vue.createCommentVNode(" 商品列表 "),
          vue.createElementVNode("view", { class: "goods-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.filteredGoods, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "goods-item",
                  key: item.id
                }, [
                  vue.createCommentVNode(" 商品图片 "),
                  vue.createElementVNode("view", { class: "goods-img-container" }, [
                    vue.createElementVNode("image", {
                      src: $options.getImageUrl(item.imgId),
                      mode: "aspectFill",
                      class: "goods-img",
                      onError: ($event) => $options.handleImgError($event, item.imgId)
                    }, null, 40, ["src", "onError"]),
                    item.isNew ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "tag"
                    }, "新品")) : vue.createCommentVNode("v-if", true),
                    item.isDiscount ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "tag discount"
                    }, "折扣")) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createCommentVNode(" 商品信息 "),
                  vue.createElementVNode("view", { class: "goods-info" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "goods-title" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "goods-desc" },
                      vue.toDisplayString(item.desc),
                      1
                      /* TEXT */
                    ),
                    vue.createCommentVNode(" 修复：将文字按钮改为正方形图标按钮 "),
                    vue.createElementVNode("view", { class: "goods-footer" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "goods-price" },
                        "¥" + vue.toDisplayString(item.price.toFixed(2)),
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode(" 正方形购物车图标按钮 "),
                      vue.createElementVNode("button", {
                        class: "add-cart-icon-btn",
                        onClick: ($event) => $options.addToCart(item),
                        "aria-label": `加入购物车：${item.name}`
                      }, [
                        vue.createElementVNode("image", {
                          src: _imports_0,
                          mode: "aspectFill",
                          class: "cart-icon"
                        })
                      ], 8, ["onClick", "aria-label"])
                    ])
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 无商品提示 "),
          $options.filteredGoods.length === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "empty-tip"
          }, [
            vue.createElementVNode("text", null, "暂无符合条件的商品~")
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 加载更多 "),
          $options.hasMore ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 1,
            class: "load-more-btn",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.loadMore && $options.loadMore(...args))
          }, " 加载更多 ")) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      vue.createCommentVNode(" 购物车侧边栏 "),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["cart-sidebar", { "cart-show": $data.showCart }])
        },
        [
          vue.createElementVNode("view", { class: "cart-header" }, [
            vue.createElementVNode("text", { class: "cart-title" }, "我的购物车"),
            vue.createElementVNode("text", {
              class: "close-cart",
              onClick: _cache[13] || (_cache[13] = ($event) => $data.showCart = false)
            }, "✕")
          ]),
          $data.cartList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "cart-list"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.cartList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "cart-item",
                  key: item.id
                }, [
                  vue.createElementVNode("image", {
                    src: $options.getImageUrl(item.imgId),
                    mode: "aspectFill",
                    class: "cart-item-img"
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "cart-item-info" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "cart-item-name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "cart-item-price" },
                      "¥" + vue.toDisplayString(item.price.toFixed(2)),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "count-control" }, [
                      vue.createElementVNode("button", {
                        class: "count-btn",
                        onClick: ($event) => $options.decreaseCount(item),
                        disabled: item.count <= 1
                      }, " - ", 8, ["onClick", "disabled"]),
                      vue.createElementVNode(
                        "text",
                        { class: "count" },
                        vue.toDisplayString(item.count),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("button", {
                        class: "count-btn",
                        onClick: ($event) => $options.increaseCount(item)
                      }, "+", 8, ["onClick"])
                    ])
                  ]),
                  vue.createElementVNode("button", {
                    class: "remove-item",
                    onClick: ($event) => $options.removeFromCart(item)
                  }, "✕", 8, ["onClick"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "empty-cart"
          }, [
            vue.createElementVNode("text", null, "购物车还是空的哦~"),
            vue.createElementVNode("button", {
              class: "go-shopping",
              onClick: _cache[14] || (_cache[14] = ($event) => $data.showCart = false)
            }, "去逛逛")
          ])),
          $data.cartList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "cart-footer"
          }, [
            vue.createElementVNode("view", { class: "total-price" }, [
              vue.createTextVNode(" 合计: "),
              vue.createElementVNode(
                "text",
                { class: "price" },
                "¥" + vue.toDisplayString($options.totalPrice.toFixed(2)),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("button", { class: "checkout-btn" }, "结算")
          ])) : vue.createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      ),
      vue.createCommentVNode(" 遮罩层 "),
      $data.showSidebar || $data.showCart ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "mask",
        onClick: _cache[15] || (_cache[15] = ($event) => {
          $data.showSidebar = false;
          $data.showCart = false;
        })
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesShopShop = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-2a6aaf81"], ["__file", "E:/dgyBuilder/pages/shop/shop.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesHotelHotel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/dgyBuilder/pages/hotel/hotel.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 体验店 ");
  }
  const PagesStoreStore = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/dgyBuilder/pages/store/store.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 我的 ");
  }
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/dgyBuilder/pages/mine/mine.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/booking/booking", PagesBookingBooking);
  __definePage("pages/storeDetail/storeDetail", PagesStoreDetailStoreDetail);
  __definePage("pages/cooperation/cooperation", PagesCooperationCooperation);
  __definePage("pages/shop/shop", PagesShopShop);
  __definePage("pages/hotel/hotel", PagesHotelHotel);
  __definePage("pages/store/store", PagesStoreStore);
  __definePage("pages/mine/mine", PagesMineMine);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/dgyBuilder/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
