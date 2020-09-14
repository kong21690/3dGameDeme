System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ToggleComponent, ButtonComponent, LabelComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, UILayout_ModelViewer_HUD;

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
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
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
      _cclegacy._RF.push({}, "40e5c1bbzxGPKijWxUoObvG", "UILayout_ModelViewer_HUD", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UILayout_ModelViewer_HUD", UILayout_ModelViewer_HUD = (_dec = ccclass('UILayout_ModelViewer_HUD'), _dec2 = property({
        type: ToggleComponent
      }), _dec3 = property({
        type: ButtonComponent
      }), _dec4 = property({
        type: ButtonComponent
      }), _dec5 = property({
        type: LabelComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UILayout_ModelViewer_HUD, _Component);

        function UILayout_ModelViewer_HUD() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UILayout_ModelViewer_HUD);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UILayout_ModelViewer_HUD)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "animLoop", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnPrev", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "btnNext", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "txtCurAnim", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        return UILayout_ModelViewer_HUD;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animLoop", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnPrev", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnNext", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtCurAnim", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvbW9kZWxfdmlld2VyL2h1ZC9VSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlRvZ2dsZUNvbXBvbmVudCIsIkJ1dHRvbkNvbXBvbmVudCIsIkxhYmVsQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsYyxPQUFBQSxjOzs7Ozs7QUFDaEVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzBDQUdKQyx3QixXQURaRixPQUFPLENBQUMsMEJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDSjtBQUFOLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVhpQ0gsUzs7Ozs7aUJBR2YsSTs7Ozs7OztpQkFHRCxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVG9nZ2xlQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnQsIExhYmVsQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1VJTGF5b3V0X01vZGVsVmlld2VyX0hVRCcpXG5leHBvcnQgY2xhc3MgVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBAcHJvcGVydHkoe3R5cGU6VG9nZ2xlQ29tcG9uZW50fSlcbiAgICBhbmltTG9vcDpUb2dnbGVDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkJ1dHRvbkNvbXBvbmVudH0pXG4gICAgYnRuUHJldjpCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkJ1dHRvbkNvbXBvbmVudH0pXG4gICAgYnRuTmV4dDpCdXR0b25Db21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICB0eHRDdXJBbmltOkxhYmVsQ29tcG9uZW50ID0gbnVsbDtcbn1cbiJdfQ==