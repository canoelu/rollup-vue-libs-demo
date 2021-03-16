(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rollupDatav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  var script$4 = {
    name: "TestComponent",
    setup: function setup() {
      var message = "hello world";
      var count = vue.ref(1);
      var doubleCount = vue.computed(function () {
        return count.value * 2;
      });

      var add = function add() {
        count.value++;
      };

      return {
        message: message,
        doubleCount: doubleCount,
        add: add
      };
    }
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-7cc4288f");

  vue.pushScopeId("data-v-7cc4288f");

  var _hoisted_1$3 = {
    "class": "test"
  };

  var _hoisted_2$2 = /*#__PURE__*/vue.createVNode("svg", {
    width: "400",
    height: "300",
    viewBox: "0,0,40,30",
    style: {
      "border": "1px solid #cd0000"
    }
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "10",
    y: "5",
    width: "20",
    height: "15",
    fill: "#cd0000"
  })], -1
  /* HOISTED */
  );

  var _hoisted_3$1 = /*#__PURE__*/vue.createVNode("svg", {
    width: "500",
    height: "200",
    viewBox: "0 0 50 20",
    style: {
      "border": "1px solid red"
    }
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "20",
    y: "10",
    width: "10",
    height: "5",
    stroke: "#000",
    fill: "none"
  })], -1
  /* HOISTED */
  );

  var _hoisted_4 = /*#__PURE__*/vue.createVNode("svg", {
    width: "500",
    height: "200",
    style: {
      "border": "1px solid red"
    }
  }, [/*#__PURE__*/vue.createVNode("line", {
    x1: "10",
    y1: "10",
    x2: "80",
    y2: "120",
    stroke: "red",
    "stroke-width": "2"
  }), /*#__PURE__*/vue.createVNode("rect", {
    x: "20",
    y: "10",
    width: "10",
    height: "5",
    stroke: "#000",
    fill: "none"
  })], -1
  /* HOISTED */
  );

  var _hoisted_5 = /*#__PURE__*/vue.createVNode("svg", {
    width: "400",
    height: "200",
    viewBox: "0 0 200 200",
    style: {
      "border": "1px solid #cd0000"
    },
    preserveAspectRatio: "xMinYMin meet"
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "10",
    y: "10",
    width: "150",
    height: "150",
    fill: "#cd0000"
  })], -1
  /* HOISTED */
  );

  var _hoisted_6 = /*#__PURE__*/vue.createVNode("div", null, "preserveAspectRatio:xMinYMin meet-保持缩放比例", -1
  /* HOISTED */
  );

  var _hoisted_7 = /*#__PURE__*/vue.createVNode("svg", {
    width: "400",
    height: "200",
    viewBox: "0 0 200 300",
    preserveAspectRatio: "xMinYMin meet",
    style: {
      "border": "1px solid #cd0000"
    }
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "10",
    y: "10",
    width: "150",
    height: "150",
    fill: "#cd0000"
  })], -1
  /* HOISTED */
  );

  var _hoisted_8 = /*#__PURE__*/vue.createVNode("div", null, "preserveAspectRatio:xMinYMin slice-裁剪", -1
  /* HOISTED */
  );

  var _hoisted_9 = /*#__PURE__*/vue.createVNode("svg", {
    width: "400",
    height: "200",
    viewBox: "0 0 200 200",
    preserveAspectRatio: "xMinYMin slice",
    style: {
      "border": "1px solid #cd0000"
    }
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "10",
    y: "10",
    width: "150",
    height: "150",
    fill: "#cd0000"
  })], -1
  /* HOISTED */
  );

  var _hoisted_10 = /*#__PURE__*/vue.createVNode("div", null, "preserveAspectRatio:none-铺满", -1
  /* HOISTED */
  );

  var _hoisted_11 = /*#__PURE__*/vue.createVNode("svg", {
    width: "400",
    height: "200",
    viewBox: "0 0 200 200",
    preserveAspectRatio: "none",
    style: {
      "border": "1px solid #cd0000"
    }
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "10",
    y: "10",
    width: "150",
    height: "150",
    fill: "#cd0000"
  })], -1
  /* HOISTED */
  );

  vue.popScopeId();

  var render$4 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [_hoisted_2$2, _hoisted_3$1, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, _hoisted_9, _hoisted_10, _hoisted_11]);
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$2 = ".test[data-v-7cc4288f] {\n  color: red;\n}";
  styleInject(css_248z$2);

  script$4.render = render$4;
  script$4.__scopeId = "data-v-7cc4288f";
  script$4.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script$4.name, script$4);
  }

  var script$3 = {
    name: 'TestComponent2'
  };

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, "Test2");
  }

  var css_248z$1 = "\r\n\r\n";
  styleInject(css_248z$1);

  script$3.render = render$3;
  script$3.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$3.name, script$3);
  }

  var script$2 = {
    name: "ImoocLoading",
    props: {
      width: {
        type: Number,
        "default": 300
      },
      height: {
        type: Number,
        "default": 300
      },
      outSideColor: {
        type: String,
        "default": "#3be6cb"
      },
      innerColor: {
        type: String,
        "default": "#02bcfe"
      },
      duration: {
        type: Number,
        "default": 2
      }
    },
    setup: function setup(ctx) {
      var outsideAnimate = vue.computed(function () {
        return "".concat(ctx.outSideColor, ";").concat(ctx.innerColor, ";").concat(ctx.outSideColor);
      });
      var innerAnimate = vue.computed(function () {
        return "".concat(ctx.innerColor, ";").concat(ctx.outSideColor, ";").concat(ctx.innerColor);
      });
      return {
        outsideAnimate: outsideAnimate,
        innerAnimate: innerAnimate
      };
    }
  };

  var _hoisted_1$2 = {
    "class": "imooc-loading"
  };
  var _hoisted_2$1 = {
    "class": "loading-content"
  };
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [(vue.openBlock(), vue.createBlock("svg", {
      width: $props.width,
      height: $props.height,
      viewBox: "0 0 50 50",
      preset: ""
    }, [vue.createVNode("circle", {
      cx: "25",
      cy: "25",
      r: "22",
      fill: "none",
      stroke: $props.outSideColor,
      "stroke-width": "3",
      "stroke-dasharray": "34",
      "stroke-linecap": "round"
    }, [vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      repeatCount: "indefinite",
      begin: "0s",
      dur: "".concat($props.duration, "s"),
      from: "0 25 25 ",
      to: "360 25 25"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createVNode("animate", {
      attributeName: "stroke",
      values: $setup.outsideAnimate,
      dur: "4s",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["values"])], 8
    /* PROPS */
    , ["stroke"]), vue.createVNode("circle", {
      cx: "25",
      cy: "25",
      r: "12",
      fill: "none",
      stroke: $props.innerColor,
      "stroke-dasharray": "19",
      "stroke-width": "3",
      "stroke-linecap": "round"
    }, [vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      repeatCount: "indefinite",
      begin: "0s",
      dur: "".concat($props.duration, "s"),
      values: "360 25 25;0 25 25"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createVNode("animate", {
      attributeName: "stroke",
      values: $setup.innerAnimate,
      dur: "4s",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["values"])], 8
    /* PROPS */
    , ["stroke"])], 8
    /* PROPS */
    , ["width", "height"])), vue.createVNode("div", _hoisted_2$1, [vue.renderSlot(_ctx.$slots, "default")])]);
  }

  script$2.render = render$2;
  script$2.__file = "src/components/ImoocLoading/ImoocLoading.vue";

  function ImoocLoading (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$1 = {
    name: "ImoocFlybox",
    props: {
      lineColor: {
        type: String,
        "default": "#235fa7"
      },
      starColor: {
        type: String,
        "default": "#4fd2dd"
      },
      starLength: {
        type: Number,
        "default": 50
      },
      duration: {
        type: Number,
        "default": 3
      }
    },
    setup: function setup(ctx) {
      var uuid = "uuid" + Date.now();
      var width = vue.ref(0);
      var height = vue.ref(0);
      var refName = "imoocFlyRef";
      var pathId = "".concat(refName, "-path-").concat(uuid);
      var gradientId = "".concat(refName, "-gradient-").concat(uuid);
      var maskId = "".concat(refName, "-mask-").concat(uuid);
      vue.onMounted(function () {
        var instance = vue.getCurrentInstance();
        var dom = instance.ctx.$refs[refName];
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      });
      var path = vue.computed(function () {
        return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, "  L5 ").concat(height.value - 5, " Z");
      });
      return {
        width: width,
        height: height,
        refName: refName,
        path: path,
        pathId: pathId,
        gradientId: gradientId,
        maskId: maskId
      };
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-3cbc9c9f");

  vue.pushScopeId("data-v-3cbc9c9f");

  var _hoisted_1$1 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_2 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_3 = {
    "class": "fly-box-content"
  };

  vue.popScopeId();

  var render$1 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", {
      "class": "fly-box",
      ref: $setup.refName
    }, [(vue.openBlock(), vue.createBlock("svg", {
      "class": "fly-box-svg",
      width: $setup.width,
      height: $setup.height
    }, [vue.createVNode("defs", null, [vue.createVNode("path", {
      id: $setup.pathId,
      d: $setup.path
    }, null, 8
    /* PROPS */
    , ["id", "d"]), vue.createCommentVNode("高光"), vue.createVNode("radialGradient", {
      cx: "50%",
      cy: "50%",
      fx: "100%",
      fy: "50%",
      r: "50%",
      id: $setup.gradientId
    }, [_hoisted_1$1, _hoisted_2], 8
    /* PROPS */
    , ["id"]), vue.createVNode("mask", {
      id: $setup.maskId
    }, [vue.createCommentVNode("流星的长度"), vue.createVNode("circle", {
      cx: "0",
      cy: "0",
      r: $props.starLength,
      fill: "url(#".concat($setup.gradientId, ")")
    }, [vue.createVNode("animateMotion", {
      dur: "".concat($props.duration, "s"),
      path: $setup.path,
      rotate: "auto",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur", "path"])], 8
    /* PROPS */
    , ["r", "fill"])], 8
    /* PROPS */
    , ["id"])]), vue.createCommentVNode("边框"), vue.createVNode("use", {
      href: "#".concat($setup.pathId),
      "stroke-width": "1",
      stroke: $props.lineColor,
      fill: "transparent"
    }, null, 8
    /* PROPS */
    , ["href", "stroke"]), vue.createCommentVNode("通过蒙版来实现流星color"), vue.createVNode("use", {
      href: "#".concat($setup.pathId),
      "stroke-width": "2",
      stroke: $props.starColor,
      fill: "transparent",
      mask: "url(#".concat($setup.maskId, ")")
    }, null, 8
    /* PROPS */
    , ["href", "stroke", "mask"])], 8
    /* PROPS */
    , ["width", "height"])), vue.createVNode("div", _hoisted_3, [vue.renderSlot(_ctx.$slots, "default")])], 512
    /* NEED_PATCH */
    );
  });

  var css_248z = ".fly-box[data-v-3cbc9c9f] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-3cbc9c9f] svg[data-v-3cbc9c9f] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-3cbc9c9f] .fly-box-content[data-v-3cbc9c9f] {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
  styleInject(css_248z);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-3cbc9c9f";
  script$1.__file = "src/components/ImoocFlyBox/ImoocFlybox.vue";

  function ImoocFlybox (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var script = {
    name: "ImoocContainer",
    props: {},
    setup: function setup(ctx) {}
  };

  var _hoisted_1 = {
    id: "imoocContainer"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default")]);
  }

  script.render = render;
  script.__file = "src/components/Container/container.vue";

  function Container (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Container);
    Vue.use(ImoocLoading);
    Vue.use(ImoocFlybox);
  }

  return index;

})));
