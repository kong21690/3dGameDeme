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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvcmltX2xpZ2h0L2h1ZC9VSV9SaW1MaWdodF9IVUQudHMiXSwibmFtZXMiOlsiQ29sb3IiLCJVSUxheW91dFJpbUxpZ2h0SFVEIiwiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIlBsYXllckN0cmwiLCJVSV9SaW1MaWdodF9IVUQiLCJIVUQiLCJfY29sb3IiLCJsYXlvdXQiLCJjaGtFbmFibGVkIiwiaXNDaGVja2VkIiwiaW5zdCIsInJpbUxpZ2h0RW5hYmxlZCIsInJpbUNvbG9yIiwicmltTGlnaHRDb2xvciIsIlIiLCJwcm9ncmVzcyIsIngiLCJHIiwieSIsIkIiLCJ6IiwiQSIsInciLCJyZWZyZXNoU2xpZGVyVmFsdWVTaG93Iiwib25TbGlkZUV2ZW50Iiwib25SaW1MaWdodENoYW5nZWQiLCJvblRvZ2dsZUV2ZW50IiwidG9nZ2xlIiwic2xpZGVyIiwiVmFsdWVSIiwic3RyaW5nIiwiVmFsdWVHIiwiVmFsdWVCIiwiVmFsdWVBIiwiY29sb3JEaXNwbGF5IiwiY29sb3IiLCJub2RlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUdBLE1BQUFBLEssT0FBQUEsSzs7OztBQUM1RkMsTUFBQUEsbUIsNEJBQUFBLG1COztBQUNBQyxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPOztBQUNBQyxNQUFBQSxVLDhCQUFBQSxVOzs7Ozs7O2lDQUVJQyxlOzs7QUFFVCxtQ0FBYztBQUFBOztBQUFBOztBQUNWLCtGQUFNLHVDQUFOLEVBQStDO0FBQUE7QUFBQSxrQ0FBUUMsR0FBdkQ7QUFEVSxnQkF1Q05DLE1BdkNNLEdBdUNHLElBQUlQLEtBQUosRUF2Q0g7QUFBQTtBQUViOzs7O3NDQU1xQjtBQUVsQixpQkFBS1EsTUFBTCxD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LENBQVosQ0FBY0MsUUFBOUI7QUFDQSxpQkFBS1QsTUFBTCxDQUFZWSxDQUFaLEdBQWdCLEtBQUtYLE1BQUwsQ0FBWVUsQ0FBWixDQUFjRixRQUE5QjtBQUNBLGlCQUFLVCxNQUFMLENBQVljLENBQVosR0FBZ0IsS0FBS2IsTUFBTCxDQUFZWSxDQUFaLENBQWNKLFFBQTlCO0FBQ0EsaUJBQUtULE1BQUwsQ0FBWWdCLENBQVosR0FBZ0IsS0FBS2YsTUFBTCxDQUFZYyxDQUFaLENBQWNOLFFBQTlCO0FBQ0EsaUJBQUtSLE1BQUwsQ0FBWTJCLFlBQVosQ0FBeUJDLEtBQXpCLEdBQWlDLEtBQUs3QixNQUF0QztBQUNIOzs7OEJBOUN5QztBQUN0QyxtQkFBTyxLQUFLOEIsSUFBTCxDQUFVQyxZQUFWO0FBQUE7QUFBQSwyREFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgZGlyZWN0b3IsIGluc3RhbnRpYXRlLCBMYWJlbENvbXBvbmVudCwgVG9nZ2xlQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQsIGNvbG9yLCBDb2xvciB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJTGF5b3V0UmltTGlnaHRIVUQgfSBmcm9tICcuL1VJTGF5b3V0X1JpbUxpZ2h0X0hVRCc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlMYXllciwgVUlNZ3IgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSU1ncic7XG5pbXBvcnQgeyBQbGF5ZXJDdHJsIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2NvbXBvbmVudHMvUGxheWVyQ3RybCc7XG5cbmV4cG9ydCBjbGFzcyBVSV9SaW1MaWdodF9IVUQgZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzY2VuZXMvcmltX2xpZ2h0L2h1ZC91aV9yaW1fbGlnaHRfaHVkJywgVUlMYXllci5IVUQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGxheW91dCgpOiBVSUxheW91dFJpbUxpZ2h0SFVEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlMYXlvdXRSaW1MaWdodEhVRCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcblxuICAgICAgICB0aGlzLmxheW91dC5jaGtFbmFibGVkLmlzQ2hlY2tlZCA9IFBsYXllckN0cmwuaW5zdC5yaW1MaWdodEVuYWJsZWQ7XG5cbiAgICAgICAgbGV0IHJpbUNvbG9yID0gUGxheWVyQ3RybC5pbnN0LnJpbUxpZ2h0Q29sb3I7XG4gICAgICAgIHRoaXMubGF5b3V0LlIucHJvZ3Jlc3MgPSByaW1Db2xvci54O1xuICAgICAgICB0aGlzLmxheW91dC5HLnByb2dyZXNzID0gcmltQ29sb3IueTtcbiAgICAgICAgdGhpcy5sYXlvdXQuQi5wcm9ncmVzcyA9IHJpbUNvbG9yLno7XG4gICAgICAgIHRoaXMubGF5b3V0LkEucHJvZ3Jlc3MgPSByaW1Db2xvci53O1xuICAgICAgICB0aGlzLnJlZnJlc2hTbGlkZXJWYWx1ZVNob3coKTtcblxuICAgICAgICB0aGlzLm9uU2xpZGVFdmVudCh0aGlzLmxheW91dC5SLCB0aGlzLm9uUmltTGlnaHRDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5vblNsaWRlRXZlbnQodGhpcy5sYXlvdXQuRywgdGhpcy5vblJpbUxpZ2h0Q2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMub25TbGlkZUV2ZW50KHRoaXMubGF5b3V0LkIsIHRoaXMub25SaW1MaWdodENoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2xpZGVFdmVudCh0aGlzLmxheW91dC5BLCB0aGlzLm9uUmltTGlnaHRDaGFuZ2VkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uVG9nZ2xlRXZlbnQodGhpcy5sYXlvdXQuY2hrRW5hYmxlZCwgKHRvZ2dsZTogVG9nZ2xlQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBQbGF5ZXJDdHJsLmluc3QucmltTGlnaHRFbmFibGVkID0gdG9nZ2xlLmlzQ2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SaW1MaWdodENoYW5nZWQoc2xpZGVyOiBTbGlkZXJDb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHJpbUNvbG9yID0gUGxheWVyQ3RybC5pbnN0LnJpbUxpZ2h0Q29sb3I7XG4gICAgICAgIHJpbUNvbG9yLnggPSB0aGlzLmxheW91dC5SLnByb2dyZXNzO1xuICAgICAgICByaW1Db2xvci55ID0gdGhpcy5sYXlvdXQuRy5wcm9ncmVzcztcbiAgICAgICAgcmltQ29sb3IueiA9IHRoaXMubGF5b3V0LkIucHJvZ3Jlc3M7XG4gICAgICAgIHJpbUNvbG9yLncgPSB0aGlzLmxheW91dC5BLnByb2dyZXNzO1xuICAgICAgICBQbGF5ZXJDdHJsLmluc3QucmltTGlnaHRDb2xvciA9IHJpbUNvbG9yO1xuICAgICAgICB0aGlzLnJlZnJlc2hTbGlkZXJWYWx1ZVNob3coKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jb2xvciA9IG5ldyBDb2xvcigpO1xuICAgIHJlZnJlc2hTbGlkZXJWYWx1ZVNob3coKXtcbiAgICAgICAgdGhpcy5sYXlvdXQuVmFsdWVSLnN0cmluZyA9ICcnICsgfn4odGhpcy5sYXlvdXQuUi5wcm9ncmVzcyAqIDI1NSk7XG4gICAgICAgIHRoaXMubGF5b3V0LlZhbHVlRy5zdHJpbmcgPSAnJyArIH5+KHRoaXMubGF5b3V0LkcucHJvZ3Jlc3MgKiAyNTUpO1xuICAgICAgICB0aGlzLmxheW91dC5WYWx1ZUIuc3RyaW5nID0gJycgKyB+fih0aGlzLmxheW91dC5CLnByb2dyZXNzICogMjU1KTtcbiAgICAgICAgdGhpcy5sYXlvdXQuVmFsdWVBLnN0cmluZyA9ICcnICsgfn4odGhpcy5sYXlvdXQuQS5wcm9ncmVzcyAqIDI1NSk7XG4gICAgICAgIHRoaXMuX2NvbG9yLnggPSB0aGlzLmxheW91dC5SLnByb2dyZXNzO1xuICAgICAgICB0aGlzLl9jb2xvci55ID0gdGhpcy5sYXlvdXQuRy5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5fY29sb3IueiA9IHRoaXMubGF5b3V0LkIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuX2NvbG9yLncgPSB0aGlzLmxheW91dC5BLnByb2dyZXNzO1xuICAgICAgICB0aGlzLmxheW91dC5jb2xvckRpc3BsYXkuY29sb3IgPSB0aGlzLl9jb2xvcjtcbiAgICB9XG59Il19