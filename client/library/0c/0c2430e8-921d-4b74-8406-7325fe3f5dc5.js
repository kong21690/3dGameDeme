System.register(["cc", "code-quality:cr", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js", "../../../qfw/components/PlayerCtrl.js", "./UILayout_ModelViewer_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, UIController, UILayer, PlayerCtrl, UILayout_ModelViewer_HUD, _crd, UI_ModelViewer_HUD;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../../../qfw/base/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerCtrl(extras) {
    _reporterNs.report("PlayerCtrl", "../../../qfw/components/PlayerCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayout_ModelViewer_HUD(extras) {
    _reporterNs.report("UILayout_ModelViewer_HUD", "./UILayout_ModelViewer_HUD", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }, function (_qfwComponentsPlayerCtrlJs) {
      PlayerCtrl = _qfwComponentsPlayerCtrlJs.PlayerCtrl;
    }, function (_UILayout_ModelViewer_HUDJs) {
      UILayout_ModelViewer_HUD = _UILayout_ModelViewer_HUDJs.UILayout_ModelViewer_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "0c243Dokh1LdIQGcyX+P13F", "UI_ModelViewer_HUD", _context.meta);

      _crd = true;

      _export("UI_ModelViewer_HUD", UI_ModelViewer_HUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_ModelViewer_HUD, _ref);

        function UI_ModelViewer_HUD() {
          _classCallCheck(this, UI_ModelViewer_HUD);

          return _possibleConstructorReturn(this, _getPrototypeOf(UI_ModelViewer_HUD).call(this, 'scenes/model_viewer/hud/ui_hud_panel', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
        }

        _createClass(UI_ModelViewer_HUD, [{
          key: "onCreated",
          value: function onCreated() {
            var _this = this;

            this.onButtonEvent(this.layout.btnPrev, function () {
              (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.playPrev();
              _this.layout.txtCurAnim.string = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.curAnimName;
            });
            this.onButtonEvent(this.layout.btnNext, function () {
              (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.playNext();
              _this.layout.txtCurAnim.string = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.curAnimName;
            });
            this.onToggleEvent(this.layout.animLoop, function (toggle) {
              (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
                error: Error()
              }), PlayerCtrl) : PlayerCtrl).inst.isLoop = toggle.isChecked;
            });
            this.layout.animLoop.isChecked = (_crd && PlayerCtrl === void 0 ? (_reportPossibleCrUseOfPlayerCtrl({
              error: Error()
            }), PlayerCtrl) : PlayerCtrl).inst.isLoop;
          }
        }, {
          key: "layout",
          get: function get() {
            return this.node.getComponent(_crd && UILayout_ModelViewer_HUD === void 0 ? (_reportPossibleCrUseOfUILayout_ModelViewer_HUD({
              error: Error()
            }), UILayout_ModelViewer_HUD) : UILayout_ModelViewer_HUD);
          }
        }]);

        return UI_ModelViewer_HUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9tb2RlbF92aWV3ZXIvaHVkL1VJX01vZGVsVmlld2VyX0hVRC50cyJdLCJuYW1lcyI6WyJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiUGxheWVyQ3RybCIsIlVJTGF5b3V0X01vZGVsVmlld2VyX0hVRCIsIlVJX01vZGVsVmlld2VyX0hVRCIsIkhVRCIsIm9uQnV0dG9uRXZlbnQiLCJsYXlvdXQiLCJidG5QcmV2IiwiaW5zdCIsInBsYXlQcmV2IiwidHh0Q3VyQW5pbSIsInN0cmluZyIsImN1ckFuaW1OYW1lIiwiYnRuTmV4dCIsInBsYXlOZXh0Iiwib25Ub2dnbGVFdmVudCIsImFuaW1Mb29wIiwidG9nZ2xlIiwiaXNMb29wIiwiaXNDaGVja2VkIiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87O0FBQ0FDLE1BQUFBLFUsOEJBQUFBLFU7O0FBQ0FDLE1BQUFBLHdCLCtCQUFBQSx3Qjs7Ozs7OztvQ0FHSUMsa0I7OztBQUVULHNDQUFjO0FBQUE7O0FBQUEsaUdBQ0osc0NBREksRUFDb0M7QUFBQTtBQUFBLGtDQUFRQyxHQUQ1QztBQUViOzs7O3NDQU1xQjtBQUFBOztBQUNsQixpQkFBS0MsYUFBTCxDQUFtQixLQUFLQyxNQUFMLENBQVlDLE9BQS9CLEVBQXdDLFlBQU07QUFDMUM7QUFBQTtBQUFBLDRDQUFXQyxJQUFYLENBQWdCQyxRQUFoQjtBQUNBLGNBQUEsS0FBSSxDQUFDSCxNQUFMLENBQVlJLFVBQVosQ0FBdUJDLE1BQXZCLEdBQWdDO0FBQUE7QUFBQSw0Q0FBV0gsSUFBWCxDQUFnQkksV0FBaEQ7QUFDSCxhQUhEO0FBS0EsaUJBQUtQLGFBQUwsQ0FBbUIsS0FBS0MsTUFBTCxDQUFZTyxPQUEvQixFQUF3QyxZQUFNO0FBQzFDO0FBQUE7QUFBQSw0Q0FBV0wsSUFBWCxDQUFnQk0sUUFBaEI7QUFDQSxjQUFBLEtBQUksQ0FBQ1IsTUFBTCxDQUFZSSxVQUFaLENBQXVCQyxNQUF2QixHQUFnQztBQUFBO0FBQUEsNENBQVdILElBQVgsQ0FBZ0JJLFdBQWhEO0FBQ0gsYUFIRDtBQUtBLGlCQUFLRyxhQUFMLENBQW1CLEtBQUtULE1BQUwsQ0FBWVUsUUFBL0IsRUFBeUMsVUFBQ0MsTUFBRCxFQUE2QjtBQUNsRTtBQUFBO0FBQUEsNENBQVdULElBQVgsQ0FBZ0JVLE1BQWhCLEdBQXlCRCxNQUFNLENBQUNFLFNBQWhDO0FBQ0gsYUFGRDtBQUlBLGlCQUFLYixNQUFMLENBQVlVLFFBQVosQ0FBcUJHLFNBQXJCLEdBQWlDO0FBQUE7QUFBQSwwQ0FBV1gsSUFBWCxDQUFnQlUsTUFBakQ7QUFDSDs7OzhCQXBCOEM7QUFDM0MsbUJBQU8sS0FBS0UsSUFBTCxDQUFVQyxZQUFWO0FBQUE7QUFBQSxxRUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgRXZlbnRUb3VjaCwgQnV0dG9uQ29tcG9uZW50LCBkaXJlY3RvciwgdmlldywgbG9hZGVyLCBUZXh0dXJlQ3ViZSwgVG9nZ2xlQ29tcG9uZW50LCBmaW5kLCBUZXJyYWluLCBpbnN0YW50aWF0ZSwgZ2VvbWV0cnksIFBoeXNpY3NTeXN0ZW0gfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlMYXllciwgVUlNZ3IgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSU1ncic7XG5pbXBvcnQgeyBQbGF5ZXJDdHJsIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2NvbXBvbmVudHMvUGxheWVyQ3RybCc7XG5pbXBvcnQgeyBVSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQgfSBmcm9tICcuL1VJTGF5b3V0X01vZGVsVmlld2VyX0hVRCc7XG5cblxuZXhwb3J0IGNsYXNzIFVJX01vZGVsVmlld2VyX0hVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9tb2RlbF92aWV3ZXIvaHVkL3VpX2h1ZF9wYW5lbCcsIFVJTGF5ZXIuSFVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQodGhpcy5sYXlvdXQuYnRuUHJldiwgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVyQ3RybC5pbnN0LnBsYXlQcmV2KCk7XG4gICAgICAgICAgICB0aGlzLmxheW91dC50eHRDdXJBbmltLnN0cmluZyA9IFBsYXllckN0cmwuaW5zdC5jdXJBbmltTmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KHRoaXMubGF5b3V0LmJ0bk5leHQsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckN0cmwuaW5zdC5wbGF5TmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQudHh0Q3VyQW5pbS5zdHJpbmcgPSBQbGF5ZXJDdHJsLmluc3QuY3VyQW5pbU5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25Ub2dnbGVFdmVudCh0aGlzLmxheW91dC5hbmltTG9vcCwgKHRvZ2dsZTogVG9nZ2xlQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBQbGF5ZXJDdHJsLmluc3QuaXNMb29wID0gdG9nZ2xlLmlzQ2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxheW91dC5hbmltTG9vcC5pc0NoZWNrZWQgPSBQbGF5ZXJDdHJsLmluc3QuaXNMb29wO1xuICAgIH1cbn0iXX0=