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
  const _imports_1$1 = "/static/images/top_02.jpg";
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
    data() {
      return {
        currentTab: 0
        // 记录当前选中的导航项索引，默认选中首页
      };
    },
    methods: {
      // 切换导航项并跳转到对应页面
      switchTab(index) {
        this.currentTab = index;
        const pages = [
          "/pages/index/index",
          "/pages/mall/mall",
          "/pages/hotel/hotel",
          "/pages/store/store",
          "/pages/mine/mine"
        ];
        uni.switchTab({
          url: pages[index]
        });
      }
    },
    onShow() {
      const pages = getCurrentPages();
      if (pages.length > 0) {
        const currentPage = pages[pages.length - 1];
        const currentPath = currentPage.route;
        const pagePaths = [
          "pages/index/index",
          "pages/mall/mall",
          "pages/hotel/hotel",
          "pages/store/store",
          "pages/mine/mine"
        ];
        const index = pagePaths.findIndex((path) => currentPath === path);
        if (index !== -1) {
          this.currentTab = index;
        }
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 状态栏占位 "),
      vue.createElementVNode("view", { class: "status-bar" }),
      vue.createCommentVNode(" 顶部图片区域 "),
      vue.createElementVNode("image", {
        class: "top-img",
        src: _imports_1$1,
        mode: "widthFix"
      }),
      vue.createCommentVNode(" 功能按钮区域 "),
      vue.createElementVNode("view", { class: "btn-group" }, [
        vue.createElementVNode("navigator", {
          url: "/pages/booking/booking",
          class: "btn-item"
        }, [
          vue.createElementVNode("image", {
            src: _imports_1,
            mode: "widthFix",
            class: "btn-image",
            alt: "在线预约图片"
          })
        ]),
        vue.createElementVNode("navigator", {
          url: "/pages/cooperation/cooperation",
          class: "btn-item"
        }, [
          vue.createElementVNode("image", {
            src: _imports_2,
            mode: "widthFix",
            class: "btn-image",
            alt: "合作了解图片"
          })
        ])
      ]),
      vue.createCommentVNode(" 底部导航栏 "),
      vue.createElementVNode("view", { class: "bottom-nav" }, [
        vue.createElementVNode("view", {
          onClick: _cache[0] || (_cache[0] = ($event) => $options.switchTab(0)),
          class: "nav-item"
        }, [
          vue.createElementVNode("image", {
            src: $data.currentTab === 0 ? "/static/icons/home-active.png" : "/static/icons/home.png",
            class: "nav-icon",
            mode: "widthFix",
            alt: "首页图标"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($data.currentTab === 0 ? "nav-text active" : "nav-text")
            },
            "首页",
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[1] || (_cache[1] = ($event) => $options.switchTab(1)),
          class: "nav-item"
        }, [
          vue.createElementVNode("image", {
            src: $data.currentTab === 1 ? "/static/icons/mall-active.png" : "/static/icons/mall.png",
            class: "nav-icon",
            mode: "widthFix",
            alt: "商城图标"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($data.currentTab === 1 ? "nav-text active" : "nav-text")
            },
            "商城",
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[2] || (_cache[2] = ($event) => $options.switchTab(2)),
          class: "nav-item"
        }, [
          vue.createElementVNode("image", {
            src: $data.currentTab === 2 ? "/static/icons/hotel-active.png" : "/static/icons/hotel.png",
            class: "nav-icon",
            mode: "widthFix",
            alt: "酒店柜图标"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($data.currentTab === 2 ? "nav-text active" : "nav-text")
            },
            "酒店柜",
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[3] || (_cache[3] = ($event) => $options.switchTab(3)),
          class: "nav-item"
        }, [
          vue.createElementVNode("image", {
            src: $data.currentTab === 3 ? "/static/icons/store-active.png" : "/static/icons/store.png",
            class: "nav-icon",
            mode: "widthFix",
            alt: "体验店图标"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($data.currentTab === 3 ? "nav-text active" : "nav-text")
            },
            "体验店",
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[4] || (_cache[4] = ($event) => $options.switchTab(4)),
          class: "nav-item"
        }, [
          vue.createElementVNode("image", {
            src: $data.currentTab === 4 ? "/static/icons/mine-active.png" : "/static/icons/mine.png",
            class: "nav-icon",
            mode: "widthFix",
            alt: "我的图标"
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass($data.currentTab === 4 ? "nav-text active" : "nav-text")
            },
            "我的",
            2
            /* CLASS */
          )
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
  const _imports_0 = "/static/images/banner1.jpg";
  const _sfc_main$4 = {
    methods: {
      handleImageError(e) {
        if (!e || !e.target) {
          formatAppLog("error", "at pages/doll/doll.vue:27", "事件对象不完整，无法处理图片错误");
          return;
        }
        const errMsg = `图片加载失败，路径：${e.target.src}`;
        formatAppLog("error", "at pages/doll/doll.vue:33", errMsg);
        uni.showToast({ title: errMsg, icon: "none", duration: 3e3 });
        e.target.style.border = "2rpx solid #ff0000";
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("text", { class: "page-title" }, "实体娃娃页面"),
      vue.createCommentVNode(" 1. 先使用项目中100%确定存在的图片（比如之前能显示的banner图） "),
      vue.createElementVNode("image", {
        src: _imports_0,
        class: "custom-image"
      }),
      vue.createCommentVNode(" 2. 同时保留原图片作为测试，方便对比 "),
      vue.createElementVNode("image", {
        src: _imports_1$1,
        class: "custom-image test-img"
      })
    ]);
  }
  const PagesDollDoll = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-8ce02019"], ["__file", "E:/dgyBuilder/pages/doll/doll.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesFunFun = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/dgyBuilder/pages/fun/fun.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesCustomCustom = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/dgyBuilder/pages/custom/custom.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesSupportSupport = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/dgyBuilder/pages/support/support.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/booking/booking", PagesBookingBooking);
  __definePage("pages/storeDetail/storeDetail", PagesStoreDetailStoreDetail);
  __definePage("pages/cooperation/cooperation", PagesCooperationCooperation);
  __definePage("pages/doll/doll", PagesDollDoll);
  __definePage("pages/fun/fun", PagesFunFun);
  __definePage("pages/custom/custom", PagesCustomCustom);
  __definePage("pages/support/support", PagesSupportSupport);
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
