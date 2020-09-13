System.register(["cc", "code-quality:cr", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js", "../../../common/skybox/UI_SkyboxSetting.js", "./UILayout_Common_HUD.js", "../../../common/ui/my_info/UI_MyInfo.js", "../DemoMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, director, UIController, UILayer, UIMgr, UI_SkyboxSetting, UILayout_CommonHUD, UI_MyInfo, DemoMgr, _crd, UI_Common_HUD;

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

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_SkyboxSetting(extras) {
    _reporterNs.report("UI_SkyboxSetting", "../../../common/skybox/UI_SkyboxSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayout_CommonHUD(extras) {
    _reporterNs.report("UILayout_CommonHUD", "./UILayout_Common_HUD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_MyInfo(extras) {
    _reporterNs.report("UI_MyInfo", "../../../common/ui/my_info/UI_MyInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDemoMgr(extras) {
    _reporterNs.report("DemoMgr", "../DemoMgr", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
      UIMgr = _qfwBaseUIMgrJs.UIMgr;
    }, function (_commonSkyboxUI_SkyboxSettingJs) {
      UI_SkyboxSetting = _commonSkyboxUI_SkyboxSettingJs.UI_SkyboxSetting;
    }, function (_UILayout_Common_HUDJs) {
      UILayout_CommonHUD = _UILayout_Common_HUDJs.UILayout_CommonHUD;
    }, function (_commonUiMy_infoUI_MyInfoJs) {
      UI_MyInfo = _commonUiMy_infoUI_MyInfoJs.UI_MyInfo;
    }, function (_DemoMgrJs) {
      DemoMgr = _DemoMgrJs.DemoMgr;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fecc8L+QytL+I06G50Kabiz", "UI_Common_HUD", _context.meta);

      _crd = true;

      _export("UI_Common_HUD", UI_Common_HUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_Common_HUD, _ref);

        function UI_Common_HUD() {
          _classCallCheck(this, UI_Common_HUD);

          return _possibleConstructorReturn(this, _getPrototypeOf(UI_Common_HUD).call(this, 'scenes/start/hud/ui_hud_common', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
        }

        _createClass(UI_Common_HUD, [{
          key: "onCreated",
          value: function onCreated() {
            this.onButtonEvent(this.layout.btnInfo, function () {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).inst.showUI(_crd && UI_MyInfo === void 0 ? (_reportPossibleCrUseOfUI_MyInfo({
                error: Error()
              }), UI_MyInfo) : UI_MyInfo);
            });
            this.onButtonEvent(this.layout.btnSkyboxSetting, function () {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).inst.showUI(_crd && UI_SkyboxSetting === void 0 ? (_reportPossibleCrUseOfUI_SkyboxSetting({
                error: Error()
              }), UI_SkyboxSetting) : UI_SkyboxSetting);
            });
            this.onButtonEvent(this.layout.btnHome, function () {
              (_crd && DemoMgr === void 0 ? (_reportPossibleCrUseOfDemoMgr({
                error: Error()
              }), DemoMgr) : DemoMgr).inst["goto"](0);
            });
            this.onToggleEvent(this.layout.useSkybox, function (toggle) {
              director.getScene().globals.skybox.enabled = toggle.isChecked;
            });
            this.onToggleEvent(this.layout.useIBL, function (toggle) {
              director.getScene().globals.skybox.useIBL = toggle.isChecked;
            });
            this.layout.useIBL.isChecked = director.getScene().globals.skybox.useIBL;
            this.layout.useSkybox.isChecked = director.getScene().globals.skybox.enabled;
            this.layout.title.string = (_crd && DemoMgr === void 0 ? (_reportPossibleCrUseOfDemoMgr({
              error: Error()
            }), DemoMgr) : DemoMgr).inst.current.title;
          }
        }, {
          key: "layout",
          get: function get() {
            return this.node.getComponent(_crd && UILayout_CommonHUD === void 0 ? (_reportPossibleCrUseOfUILayout_CommonHUD({
              error: Error()
            }), UILayout_CommonHUD) : UILayout_CommonHUD);
          }
        }]);

        return UI_Common_HUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9zdGFydC9odWQvVUlfQ29tbW9uX0hVRC50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsIlVJQ29udHJvbGxlciIsIlVJTGF5ZXIiLCJVSU1nciIsIlVJX1NreWJveFNldHRpbmciLCJVSUxheW91dF9Db21tb25IVUQiLCJVSV9NeUluZm8iLCJEZW1vTWdyIiwiVUlfQ29tbW9uX0hVRCIsIkhVRCIsIm9uQnV0dG9uRXZlbnQiLCJsYXlvdXQiLCJidG5JbmZvIiwiaW5zdCIsInNob3dVSSIsImJ0blNreWJveFNldHRpbmciLCJidG5Ib21lIiwib25Ub2dnbGVFdmVudCIsInVzZVNreWJveCIsInRvZ2dsZSIsImdldFNjZW5lIiwiZ2xvYmFscyIsInNreWJveCIsImVuYWJsZWQiLCJpc0NoZWNrZWQiLCJ1c2VJQkwiLCJ0aXRsZSIsInN0cmluZyIsImN1cnJlbnQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUJBLE1BQUFBLFEsT0FBQUEsUTs7OztBQUNaQyxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPO0FBQVNDLE1BQUFBLEssbUJBQUFBLEs7O0FBQ1RDLE1BQUFBLGdCLG1DQUFBQSxnQjs7QUFDQUMsTUFBQUEsa0IsMEJBQUFBLGtCOztBQUNBQyxNQUFBQSxTLCtCQUFBQSxTOztBQUNBQyxNQUFBQSxPLGNBQUFBLE87Ozs7Ozs7K0JBRUlDLGE7OztBQUVULGlDQUFjO0FBQUE7O0FBQUEsNEZBQ0osZ0NBREksRUFDOEI7QUFBQTtBQUFBLGtDQUFRQyxHQUR0QztBQUViOzs7O3NDQU1xQjtBQUNsQixpQkFBS0MsYUFBTCxDQUFtQixLQUFLQyxNQUFMLENBQVlDLE9BQS9CLEVBQXdDLFlBQU07QUFDMUM7QUFBQTtBQUFBLGtDQUFNQyxJQUFOLENBQVdDLE1BQVg7QUFBQTtBQUFBO0FBQ0gsYUFGRDtBQUlBLGlCQUFLSixhQUFMLENBQW1CLEtBQUtDLE1BQUwsQ0FBWUksZ0JBQS9CLEVBQWlELFlBQU07QUFDbkQ7QUFBQTtBQUFBLGtDQUFNRixJQUFOLENBQVdDLE1BQVg7QUFBQTtBQUFBO0FBQ0gsYUFGRDtBQUlBLGlCQUFLSixhQUFMLENBQW1CLEtBQUtDLE1BQUwsQ0FBWUssT0FBL0IsRUFBd0MsWUFBTTtBQUMxQztBQUFBO0FBQUEsc0NBQVFILElBQVIsU0FBa0IsQ0FBbEI7QUFDSCxhQUZEO0FBSUEsaUJBQUtJLGFBQUwsQ0FBbUIsS0FBS04sTUFBTCxDQUFZTyxTQUEvQixFQUEwQyxVQUFDQyxNQUFELEVBQTZCO0FBQ25FbkIsY0FBQUEsUUFBUSxDQUFDb0IsUUFBVCxHQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQTVCLENBQW1DQyxPQUFuQyxHQUE2Q0osTUFBTSxDQUFDSyxTQUFwRDtBQUNILGFBRkQ7QUFJQSxpQkFBS1AsYUFBTCxDQUFtQixLQUFLTixNQUFMLENBQVljLE1BQS9CLEVBQXVDLFVBQUNOLE1BQUQsRUFBNkI7QUFDaEVuQixjQUFBQSxRQUFRLENBQUNvQixRQUFULEdBQW9CQyxPQUFwQixDQUE0QkMsTUFBNUIsQ0FBbUNHLE1BQW5DLEdBQTRDTixNQUFNLENBQUNLLFNBQW5EO0FBQ0gsYUFGRDtBQUlBLGlCQUFLYixNQUFMLENBQVljLE1BQVosQ0FBbUJELFNBQW5CLEdBQStCeEIsUUFBUSxDQUFDb0IsUUFBVCxHQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQTVCLENBQW1DRyxNQUFsRTtBQUNBLGlCQUFLZCxNQUFMLENBQVlPLFNBQVosQ0FBc0JNLFNBQXRCLEdBQWtDeEIsUUFBUSxDQUFDb0IsUUFBVCxHQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQTVCLENBQW1DQyxPQUFyRTtBQUNBLGlCQUFLWixNQUFMLENBQVllLEtBQVosQ0FBa0JDLE1BQWxCLEdBQTJCO0FBQUE7QUFBQSxvQ0FBUWQsSUFBUixDQUFhZSxPQUFiLENBQXFCRixLQUFoRDtBQUNIOzs7OEJBNUJ3QztBQUNyQyxtQkFBTyxLQUFLRyxJQUFMLENBQVVDLFlBQVY7QUFBQTtBQUFBLHlEQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBkaXJlY3RvciwgaW5zdGFudGlhdGUsIExhYmVsQ29tcG9uZW50LCBUb2dnbGVDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlMYXllciwgVUlNZ3IgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSU1ncic7XG5pbXBvcnQgeyBVSV9Ta3lib3hTZXR0aW5nIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NreWJveC9VSV9Ta3lib3hTZXR0aW5nJztcbmltcG9ydCB7IFVJTGF5b3V0X0NvbW1vbkhVRCB9IGZyb20gJy4vVUlMYXlvdXRfQ29tbW9uX0hVRCc7XG5pbXBvcnQgeyBVSV9NeUluZm8gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vdWkvbXlfaW5mby9VSV9NeUluZm8nO1xuaW1wb3J0IHsgRGVtb01nciB9IGZyb20gJy4uL0RlbW9NZ3InO1xuXG5leHBvcnQgY2xhc3MgVUlfQ29tbW9uX0hVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9zdGFydC9odWQvdWlfaHVkX2NvbW1vbicsIFVJTGF5ZXIuSFVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlMYXlvdXRfQ29tbW9uSFVEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlMYXlvdXRfQ29tbW9uSFVEKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQodGhpcy5sYXlvdXQuYnRuSW5mbywgKCkgPT4ge1xuICAgICAgICAgICAgVUlNZ3IuaW5zdC5zaG93VUkoVUlfTXlJbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KHRoaXMubGF5b3V0LmJ0blNreWJveFNldHRpbmcsICgpID0+IHtcbiAgICAgICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX1NreWJveFNldHRpbmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQodGhpcy5sYXlvdXQuYnRuSG9tZSwgKCkgPT4ge1xuICAgICAgICAgICAgRGVtb01nci5pbnN0LmdvdG8oMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25Ub2dnbGVFdmVudCh0aGlzLmxheW91dC51c2VTa3lib3gsICh0b2dnbGU6IFRvZ2dsZUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgZGlyZWN0b3IuZ2V0U2NlbmUoKS5nbG9iYWxzLnNreWJveC5lbmFibGVkID0gdG9nZ2xlLmlzQ2hlY2tlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vblRvZ2dsZUV2ZW50KHRoaXMubGF5b3V0LnVzZUlCTCwgKHRvZ2dsZTogVG9nZ2xlQ29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBkaXJlY3Rvci5nZXRTY2VuZSgpLmdsb2JhbHMuc2t5Ym94LnVzZUlCTCA9IHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGF5b3V0LnVzZUlCTC5pc0NoZWNrZWQgPSBkaXJlY3Rvci5nZXRTY2VuZSgpLmdsb2JhbHMuc2t5Ym94LnVzZUlCTDtcbiAgICAgICAgdGhpcy5sYXlvdXQudXNlU2t5Ym94LmlzQ2hlY2tlZCA9IGRpcmVjdG9yLmdldFNjZW5lKCkuZ2xvYmFscy5za3lib3guZW5hYmxlZDtcbiAgICAgICAgdGhpcy5sYXlvdXQudGl0bGUuc3RyaW5nID0gRGVtb01nci5pbnN0LmN1cnJlbnQudGl0bGU7XG4gICAgfVxufSJdfQ==