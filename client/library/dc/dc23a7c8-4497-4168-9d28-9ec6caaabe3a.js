System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ToggleComponent, ButtonComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, _crd, ccclass, property, UILayout_CommonHUD;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ToggleComponent = _cc.ToggleComponent;
      ButtonComponent = _cc.ButtonComponent;
      LabelComponent = _cc.LabelComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dc23afIRJdBaJ0onsbKqr46", "UILayout_Common_HUD", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UILayout_CommonHUD", UILayout_CommonHUD = (_dec = ccclass('UILayout_CommonHUD'), _dec2 = property({
        type: ToggleComponent
      }), _dec3 = property({
        type: ToggleComponent
      }), _dec4 = property({
        type: ButtonComponent
      }), _dec5 = property({
        type: ButtonComponent
      }), _dec6 = property({
        type: ButtonComponent
      }), _dec7 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UILayout_CommonHUD, _Component);

        function UILayout_CommonHUD() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UILayout_CommonHUD);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UILayout_CommonHUD)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "useSkybox", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "useIBL", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnSkyboxSetting", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnInfo", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnHome", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "title", _descriptor6, _assertThisInitialized(_this));

          return _this;
        }

        return UILayout_CommonHUD;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "useSkybox", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "useIBL", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnSkyboxSetting", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnInfo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9zdGFydC9odWQvVUlMYXlvdXRfQ29tbW9uX0hVRC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVG9nZ2xlQ29tcG9uZW50IiwiQnV0dG9uQ29tcG9uZW50IiwiTGFiZWxDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUxheW91dF9Db21tb25IVUQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsYyxPQUFBQSxjOzs7Ozs7QUFDaEVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7O29DQUdKQyxrQixXQURaRixPQUFPLENBQUMsb0JBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDSjtBQUFOLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFqQjJCSCxTOzs7OztpQkFHUixJOzs7Ozs7O2lCQUdILEk7Ozs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHVCxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0gsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVG9nZ2xlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIExhYmVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1VJTGF5b3V0X0NvbW1vbkhVRCcpXG5leHBvcnQgY2xhc3MgVUlMYXlvdXRfQ29tbW9uSFVEIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoe3R5cGU6VG9nZ2xlQ29tcG9uZW50fSlcbiAgICB1c2VTa3lib3g6VG9nZ2xlQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpUb2dnbGVDb21wb25lbnR9KVxuICAgIHVzZUlCTDpUb2dnbGVDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkJ1dHRvbkNvbXBvbmVudH0pXG4gICAgYnRuU2t5Ym94U2V0dGluZzpCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkJ1dHRvbkNvbXBvbmVudH0pXG4gICAgYnRuSW5mbzpCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkJ1dHRvbkNvbXBvbmVudH0pXG4gICAgYnRuSG9tZTpCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICB0aXRsZTpMYWJlbENvbXBvbmVudCA9IG51bGw7XG59XG4iXX0=