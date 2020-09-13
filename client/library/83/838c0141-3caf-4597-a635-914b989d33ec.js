System.register(["cc", "code-quality:cr", "./UILayout_RimLight_HUD.js", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js", "../../../qfw/components/PlayerCtrl.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Color, UILayoutRimLightHUD, UIController, UILayer, PlayerCtrl, _crd, UI_RimLight_HUD;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUILayoutRimLightHUD(extras) {
    _reporterNs.report("UILayoutRimLightHUD", "./UILayout_RimLight_HUD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../../../qfw/base/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerCtrl(extras) {
    _reporterNs.report("PlayerCtrl", "../../../qfw/components/PlayerCtrl", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Color = _cc.Color;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_UILayout_RimLight_HUDJs) {
      UILayoutRimLightHUD = _UILayout_RimLight_HUDJs.UILayoutRimLightHUD;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }, function (_qfwComponentsPlayerCtrlJs) {
      PlayerCtrl = _qfwComponentsPlayerCtrlJs.PlayerCtrl;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "838c0FBPK9Fl6Y1kUuYnTPs", "UI_RimLight_HUD", _context.meta);

      _crd = true;

      _export("UI_RimLight_HUD", UI_RimLight_HUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_RimLight_HUD, _ref);

        function UI_RimLight_HUD() {
          var _this;

          _classCallCheck(this, UI_RimLight_HUD);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(UI_RimLight_HUD).call(this, 'scenes/rim_light/hud/ui_rim_light_hud', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
          _this._color = new Color();
          return _this;
        }

        _createClass(UI_RimLight_HUD, [{
          key: "onCreated",
          value: function onCreated() {
            this.layout.chkEnabled.isChecked = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
              error: Error()
            }), PlayerCtrl) : PlayerCtrl).inst.rimLightEnabled;
            var rimColor = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
              error: Error()
            }), PlayerCtrl) : PlayerCtrl).inst.rimLightColor;
            this.layout.R.progress = rimColor.x;
            this.layout.G.progress = rimColor.y;
            this.layout.B.progress = rimColor.z;
            this.layout.A.progress = rimColor.w;
            this.refreshSliderValueShow();
            this.onSlideEvent(this.layout.R, this.onRimLightChanged, this);
            this.onSlideEvent(this.layout.G, this.onRimLightChanged, this);
            this.onSlideEvent(this.layout.B, this.onRimLightChanged, this);
            this.onSlideEvent(this.layout.A, this.onRimLightChanged, this);
            this.onToggleEvent(this.layout.chkEnabled, function (toggle) {
              (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.rimLightEnabled = toggle.isChecked;
            });
          }
        }, {
          key: "onRimLightChanged",
          value: function onRimLightChanged(slider) {
            var rimColor = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
              error: Error()
            }), PlayerCtrl) : PlayerCtrl).inst.rimLightColor;
            rimColor.x = this.layout.R.progress;
            rimColor.y = this.layout.G.progress;
            rimColor.z = this.layout.B.progress;
            rimColor.w = this.layout.A.progress;
            (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
              error: Error()
            }), PlayerCtrl) : PlayerCtrl).inst.rimLightColor = rimColor;
            this.refreshSliderValueShow();
          }
        }, {
          key: "refreshSliderValueShow",
          value: function refreshSliderValueShow() {
            this.layout.ValueR.string = '' + ~~(this.layout.R.progress * 255);
            this.layout.ValueG.string = '' + ~~(this.layout.G.progress * 255);
            this.layout.ValueB.string = '' + ~~(this.layout.B.progress * 255);
            this.layout.ValueA.string = '' + ~~(this.layout.A.progress * 255);
            this._color.x = this.layout.R.progress;
            this._color.y = this.layout.G.progress;
            this._color.z = this.layout.B.progress;
            this._color.w = this.layout.A.progress;
            this.layout.colorDisplay.color = this._color;
          }
        }, {
          key: "layout",
          get: function get() {
            return this.node.getComponent(_crd && UILayoutRimLightHUD === void 0 ? (_reportPossibleCrUseOfUILayoutRimLightHUD({
              error: Error()
            }), UILayoutRimLightHUD) : UILayoutRimLightHUD);
          }
        }]);

        return UI_RimLight_HUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9yaW1fbGlnaHQvaHVkL1VJX1JpbUxpZ2h0X0hVRC50cyJdLCJuYW1lcyI6WyJDb2xvciIsIlVJTGF5b3V0UmltTGlnaHRIVUQiLCJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiUGxheWVyQ3RybCIsIlVJX1JpbUxpZ2h0X0hVRCIsIkhVRCIsIl9jb2xvciIsImxheW91dCIsImNoa0VuYWJsZWQiLCJpc0NoZWNrZWQiLCJpbnN0IiwicmltTGlnaHRFbmFibGVkIiwicmltQ29sb3IiLCJyaW1MaWdodENvbG9yIiwiUiIsInByb2dyZXNzIiwieCIsIkciLCJ5IiwiQiIsInoiLCJBIiwidyIsInJlZnJlc2hTbGlkZXJWYWx1ZVNob3ciLCJvblNsaWRlRXZlbnQiLCJvblJpbUxpZ2h0Q2hhbmdlZCIsIm9uVG9nZ2xlRXZlbnQiLCJ0b2dnbGUiLCJzbGlkZXIiLCJWYWx1ZVIiLCJzdHJpbmciLCJWYWx1ZUciLCJWYWx1ZUIiLCJWYWx1ZUEiLCJjb2xvckRpc3BsYXkiLCJjb2xvciIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxR0EsTUFBQUEsSyxPQUFBQSxLOzs7O0FBQzVGQyxNQUFBQSxtQiw0QkFBQUEsbUI7O0FBQ0FDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87O0FBQ0FDLE1BQUFBLFUsOEJBQUFBLFU7Ozs7Ozs7aUNBRUlDLGU7OztBQUVULG1DQUFjO0FBQUE7O0FBQUE7O0FBQ1YsK0ZBQU0sdUNBQU4sRUFBK0M7QUFBQTtBQUFBLGtDQUFRQyxHQUF2RDtBQURVLGdCQXVDTkMsTUF2Q00sR0F1Q0csSUFBSVAsS0FBSixFQXZDSDtBQUFBO0FBRWI7Ozs7c0NBTXFCO0FBRWxCLGlCQUFLUSxNQUFMLENBQVlDLFVBQVosQ0FBdUJDLFNBQXZCLEdB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QUFLVCxNQUFMLENBQVlZLENBQVosR0FBZ0IsS0FBS1gsTUFBTCxDQUFZVSxDQUFaLENBQWNGLFFBQTlCO0FBQ0EsaUJBQUtULE1BQUwsQ0FBWWMsQ0FBWixHQUFnQixLQUFLYixNQUFMLENBQVlZLENBQVosQ0FBY0osUUFBOUI7QUFDQSxpQkFBS1QsTUFBTCxDQUFZZ0IsQ0FBWixHQUFnQixLQUFLZixNQUFMLENBQVljLENBQVosQ0FBY04sUUFBOUI7QUFDQSxpQkFBS1IsTUFBTCxDQUFZMkIsWUFBWixDQUF5QkMsS0FBekIsR0FBaUMsS0FBSzdCLE1BQXRDO0FBQ0g7Ozs4QkE5Q3lDO0FBQ3RDLG1CQUFPLEtBQUs4QixJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBLDJEQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBkaXJlY3RvciwgaW5zdGFudGlhdGUsIExhYmVsQ29tcG9uZW50LCBUb2dnbGVDb21wb25lbnQsIFNsaWRlckNvbXBvbmVudCwgY29sb3IsIENvbG9yIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlMYXlvdXRSaW1MaWdodEhVRCB9IGZyb20gJy4vVUlMYXlvdXRfUmltTGlnaHRfSFVEJztcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uLy4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlcic7XG5pbXBvcnQgeyBVSUxheWVyLCBVSU1nciB9IGZyb20gJy4uLy4uLy4uL3Fmdy9iYXNlL1VJTWdyJztcbmltcG9ydCB7IFBsYXllckN0cmwgfSBmcm9tICcuLi8uLi8uLi9xZncvY29tcG9uZW50cy9QbGF5ZXJDdHJsJztcblxuZXhwb3J0IGNsYXNzIFVJX1JpbUxpZ2h0X0hVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9yaW1fbGlnaHQvaHVkL3VpX3JpbV9saWdodF9odWQnLCBVSUxheWVyLkhVRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0KCk6IFVJTGF5b3V0UmltTGlnaHRIVUQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUxheW91dFJpbUxpZ2h0SFVEKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuXG4gICAgICAgIHRoaXMubGF5b3V0LmNoa0VuYWJsZWQuaXNDaGVja2VkID0gUGxheWVyQ3RybC5pbnN0LnJpbUxpZ2h0RW5hYmxlZDtcblxuICAgICAgICBsZXQgcmltQ29sb3IgPSBQbGF5ZXJDdHJsLmluc3QucmltTGlnaHRDb2xvcjtcbiAgICAgICAgdGhpcy5sYXlvdXQuUi5wcm9ncmVzcyA9IHJpbUNvbG9yLng7XG4gICAgICAgIHRoaXMubGF5b3V0LkcucHJvZ3Jlc3MgPSByaW1Db2xvci55O1xuICAgICAgICB0aGlzLmxheW91dC5CLnByb2dyZXNzID0gcmltQ29sb3IuejtcbiAgICAgICAgdGhpcy5sYXlvdXQuQS5wcm9ncmVzcyA9IHJpbUNvbG9yLnc7XG4gICAgICAgIHRoaXMucmVmcmVzaFNsaWRlclZhbHVlU2hvdygpO1xuXG4gICAgICAgIHRoaXMub25TbGlkZUV2ZW50KHRoaXMubGF5b3V0LlIsIHRoaXMub25SaW1MaWdodENoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2xpZGVFdmVudCh0aGlzLmxheW91dC5HLCB0aGlzLm9uUmltTGlnaHRDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblNsaWRlRXZlbnQodGhpcy5sYXlvdXQuQiwgdGhpcy5vblJpbUxpZ2h0Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25TbGlkZUV2ZW50KHRoaXMubGF5b3V0LkEsIHRoaXMub25SaW1MaWdodENoYW5nZWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25Ub2dnbGVFdmVudCh0aGlzLmxheW91dC5jaGtFbmFibGVkLCAodG9nZ2xlOiBUb2dnbGVDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIFBsYXllckN0cmwuaW5zdC5yaW1MaWdodEVuYWJsZWQgPSB0b2dnbGUuaXNDaGVja2VkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJpbUxpZ2h0Q2hhbmdlZChzbGlkZXI6IFNsaWRlckNvbXBvbmVudCkge1xuICAgICAgICBsZXQgcmltQ29sb3IgPSBQbGF5ZXJDdHJsLmluc3QucmltTGlnaHRDb2xvcjtcbiAgICAgICAgcmltQ29sb3IueCA9IHRoaXMubGF5b3V0LlIucHJvZ3Jlc3M7XG4gICAgICAgIHJpbUNvbG9yLnkgPSB0aGlzLmxheW91dC5HLnByb2dyZXNzO1xuICAgICAgICByaW1Db2xvci56ID0gdGhpcy5sYXlvdXQuQi5wcm9ncmVzcztcbiAgICAgICAgcmltQ29sb3IudyA9IHRoaXMubGF5b3V0LkEucHJvZ3Jlc3M7XG4gICAgICAgIFBsYXllckN0cmwuaW5zdC5yaW1MaWdodENvbG9yID0gcmltQ29sb3I7XG4gICAgICAgIHRoaXMucmVmcmVzaFNsaWRlclZhbHVlU2hvdygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvbG9yID0gbmV3IENvbG9yKCk7XG4gICAgcmVmcmVzaFNsaWRlclZhbHVlU2hvdygpe1xuICAgICAgICB0aGlzLmxheW91dC5WYWx1ZVIuc3RyaW5nID0gJycgKyB+fih0aGlzLmxheW91dC5SLnByb2dyZXNzICogMjU1KTtcbiAgICAgICAgdGhpcy5sYXlvdXQuVmFsdWVHLnN0cmluZyA9ICcnICsgfn4odGhpcy5sYXlvdXQuRy5wcm9ncmVzcyAqIDI1NSk7XG4gICAgICAgIHRoaXMubGF5b3V0LlZhbHVlQi5zdHJpbmcgPSAnJyArIH5+KHRoaXMubGF5b3V0LkIucHJvZ3Jlc3MgKiAyNTUpO1xuICAgICAgICB0aGlzLmxheW91dC5WYWx1ZUEuc3RyaW5nID0gJycgKyB+fih0aGlzLmxheW91dC5BLnByb2dyZXNzICogMjU1KTtcbiAgICAgICAgdGhpcy5fY29sb3IueCA9IHRoaXMubGF5b3V0LlIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuX2NvbG9yLnkgPSB0aGlzLmxheW91dC5HLnByb2dyZXNzO1xuICAgICAgICB0aGlzLl9jb2xvci56ID0gdGhpcy5sYXlvdXQuQi5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5fY29sb3IudyA9IHRoaXMubGF5b3V0LkEucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMubGF5b3V0LmNvbG9yRGlzcGxheS5jb2xvciA9IHRoaXMuX2NvbG9yO1xuICAgIH1cbn0iXX0=