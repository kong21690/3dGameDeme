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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9tb2RlbF92aWV3ZXIvaHVkL1VJTGF5b3V0X01vZGVsVmlld2VyX0hVRC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVG9nZ2xlQ29tcG9uZW50IiwiQnV0dG9uQ29tcG9uZW50IiwiTGFiZWxDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxjLE9BQUFBLGM7Ozs7OztBQUNoRUMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7MENBR0pDLHdCLFdBRFpGLE9BQU8sQ0FBQywwQkFBRCxDLFVBR0hDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNOO0FBQU4sT0FBRCxDLFVBR1JJLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNMO0FBQU4sT0FBRCxDLFVBR1JHLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNMO0FBQU4sT0FBRCxDLFVBR1JHLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUNKO0FBQU4sT0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBWGlDSCxTOzs7OztpQkFHZixJOzs7Ozs7O2lCQUdELEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBUb2dnbGVDb21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCwgTGFiZWxDb21wb25lbnQgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEJylcbmV4cG9ydCBjbGFzcyBVSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIEBwcm9wZXJ0eSh7dHlwZTpUb2dnbGVDb21wb25lbnR9KVxuICAgIGFuaW1Mb29wOlRvZ2dsZUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6QnV0dG9uQ29tcG9uZW50fSlcbiAgICBidG5QcmV2OkJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6QnV0dG9uQ29tcG9uZW50fSlcbiAgICBidG5OZXh0OkJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6TGFiZWxDb21wb25lbnR9KVxuICAgIHR4dEN1ckFuaW06TGFiZWxDb21wb25lbnQgPSBudWxsO1xufVxuIl19