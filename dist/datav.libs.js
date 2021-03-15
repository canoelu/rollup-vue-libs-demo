(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.rollupDatav = factory(global.Vue));
}(this, (function (vue) { 'use strict';

  var script$2 = {
    name: 'TestComponent',
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

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-7cc4288f");

  vue.pushScopeId("data-v-7cc4288f");

  var _hoisted_1 = {
    "class": "test"
  };

  var _hoisted_2 = /*#__PURE__*/vue.createVNode("br", null, null, -1
  /* HOISTED */
  );

  var _hoisted_3 = /*#__PURE__*/vue.createVNode("br", null, null, -1
  /* HOISTED */
  );

  vue.popScopeId();

  var render$2 = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createTextVNode("test " + vue.toDisplayString($setup.message) + " ", 1
    /* TEXT */
    ), _hoisted_2, vue.createTextVNode(" doubleCount:" + vue.toDisplayString($setup.doubleCount) + " ", 1
    /* TEXT */
    ), _hoisted_3, vue.createVNode("button", {
      onClick: _cache[1] || (_cache[1] = function () {
        return $setup.add && $setup.add.apply($setup, arguments);
      })
    }, "Add count")]);
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

  script$2.render = render$2;
  script$2.__scopeId = "data-v-7cc4288f";
  script$2.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$1 = {
    name: 'TestComponent2'
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, "Test2");
  }

  var css_248z$1 = "\r\n\r\n";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var script = {
    name: 'TestComponent3'
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, "Test3");
  }

  var css_248z = "\r\n\r\n";
  styleInject(css_248z);

  script.render = render;
  script.__file = "src/components/Test3/Test3.vue";

  function Test3 (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Test3);
  }

  return index;

})));
