System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ToggleComponent, SliderComponent, LabelComponent, SpriteComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp, _crd, ccclass, property, UILayoutRimLightHUD;

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
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _dec11: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _descriptor10: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ToggleComponent = _cc.ToggleComponent;
      SliderComponent = _cc.SliderComponent;
      LabelComponent = _cc.LabelComponent;
      SpriteComponent = _cc.SpriteComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "700e0N9KdNLR4ca9rhmNGl5", "UILayout_RimLight_HUD", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UILayoutRimLightHUD", UILayoutRimLightHUD = (_dec = ccclass('UILayoutRimLightHUD'), _dec2 = property({
        type: ToggleComponent
      }), _dec3 = property({
        type: SliderComponent
      }), _dec4 = property({
        type: SliderComponent
      }), _dec5 = property({
        type: SliderComponent
      }), _dec6 = property({
        type: SliderComponent
      }), _dec7 = property({
        type: LabelComponent
      }), _dec8 = property({
        type: LabelComponent
      }), _dec9 = property({
        type: LabelComponent
      }), _dec10 = property({
        type: LabelComponent
      }), _dec11 = property({
        type: SpriteComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(UILayoutRimLightHUD, _Component);

        function UILayoutRimLightHUD() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, UILayoutRimLightHUD);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UILayoutRimLightHUD)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "chkEnabled", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "R", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "G", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "B", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "A", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ValueR", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ValueG", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ValueB", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "ValueA", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "colorDisplay", _descriptor10, _assertThisInitialized(_this));

          return _this;
        }

        return UILayoutRimLightHUD;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chkEnabled", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "R", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "G", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "B", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "A", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ValueR", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "ValueG", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ValueB", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ValueA", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "colorDisplay", [_dec11], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvcmltX2xpZ2h0L2h1ZC9VSUxheW91dF9SaW1MaWdodF9IVUQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlRvZ2dsZUNvbXBvbmVudCIsIlNsaWRlckNvbXBvbmVudCIsIkxhYmVsQ29tcG9uZW50IiwiU3ByaXRlQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlMYXlvdXRSaW1MaWdodEhVRCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsZSxPQUFBQSxlOzs7Ozs7QUFDaEZDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O3FDQUdKQyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDUDtBQUFOLE9BQUQsQyxVQUdSSyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTjtBQUFOLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxXQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDTDtBQUFOLE9BQUQsQyxXQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFDSjtBQUFOLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQTdCNEJKLFM7Ozs7O2lCQUdSLEk7Ozs7Ozs7aUJBR1QsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHSSxJOzs7Ozs7O2lCQUdBLEk7Ozs7Ozs7aUJBR0EsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdPLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFRvZ2dsZUNvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1VJTGF5b3V0UmltTGlnaHRIVUQnKVxuZXhwb3J0IGNsYXNzIFVJTGF5b3V0UmltTGlnaHRIVUQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlRvZ2dsZUNvbXBvbmVudH0pXG4gICAgY2hrRW5hYmxlZDpUb2dnbGVDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlNsaWRlckNvbXBvbmVudH0pXG4gICAgUjpTbGlkZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlNsaWRlckNvbXBvbmVudH0pXG4gICAgRzpTbGlkZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlNsaWRlckNvbXBvbmVudH0pXG4gICAgQjpTbGlkZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlNsaWRlckNvbXBvbmVudH0pXG4gICAgQTpTbGlkZXJDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICBWYWx1ZVI6TGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICBWYWx1ZUc6TGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICBWYWx1ZUI6TGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOkxhYmVsQ29tcG9uZW50fSlcbiAgICBWYWx1ZUE6TGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOlNwcml0ZUNvbXBvbmVudH0pXG4gICAgY29sb3JEaXNwbGF5OlNwcml0ZUNvbXBvbmVudCA9IG51bGw7XG59XG4iXX0=