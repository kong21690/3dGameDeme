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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc3RhcnQvaHVkL1VJTGF5b3V0X0NvbW1vbl9IVUQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlRvZ2dsZUNvbXBvbmVudCIsIkJ1dHRvbkNvbXBvbmVudCIsIkxhYmVsQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVUlMYXlvdXRfQ29tbW9uSFVEIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsZSxPQUFBQSxlO0FBQWlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYzs7Ozs7O0FBQ2hFQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztvQ0FHSkMsa0IsV0FEWkYsT0FBTyxDQUFDLG9CQUFELEMsVUFHSEMsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ047QUFBTixPQUFELEMsVUFHUkksUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ047QUFBTixPQUFELEMsVUFHUkksUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ0w7QUFBTixPQUFELEMsVUFHUkcsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ0w7QUFBTixPQUFELEMsVUFHUkcsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ0w7QUFBTixPQUFELEMsVUFHUkcsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ0o7QUFBTixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBakIyQkgsUzs7Ozs7aUJBR1IsSTs7Ozs7OztpQkFHSCxJOzs7Ozs7O2lCQUdVLEk7Ozs7Ozs7aUJBR1QsSTs7Ozs7OztpQkFHQSxJOzs7Ozs7O2lCQUdILEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFRvZ2dsZUNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdVSUxheW91dF9Db21tb25IVUQnKVxuZXhwb3J0IGNsYXNzIFVJTGF5b3V0X0NvbW1vbkhVRCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KHt0eXBlOlRvZ2dsZUNvbXBvbmVudH0pXG4gICAgdXNlU2t5Ym94OlRvZ2dsZUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6VG9nZ2xlQ29tcG9uZW50fSlcbiAgICB1c2VJQkw6VG9nZ2xlQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpCdXR0b25Db21wb25lbnR9KVxuICAgIGJ0blNreWJveFNldHRpbmc6QnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpCdXR0b25Db21wb25lbnR9KVxuICAgIGJ0bkluZm86QnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpCdXR0b25Db21wb25lbnR9KVxuICAgIGJ0bkhvbWU6QnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTpMYWJlbENvbXBvbmVudH0pXG4gICAgdGl0bGU6TGFiZWxDb21wb25lbnQgPSBudWxsO1xufVxuIl19