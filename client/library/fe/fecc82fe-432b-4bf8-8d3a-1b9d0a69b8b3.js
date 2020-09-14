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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc3RhcnQvaHVkL1VJX0NvbW1vbl9IVUQudHMiXSwibmFtZXMiOlsiZGlyZWN0b3IiLCJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiVUlNZ3IiLCJVSV9Ta3lib3hTZXR0aW5nIiwiVUlMYXlvdXRfQ29tbW9uSFVEIiwiVUlfTXlJbmZvIiwiRGVtb01nciIsIlVJX0NvbW1vbl9IVUQiLCJIVUQiLCJvbkJ1dHRvbkV2ZW50IiwibGF5b3V0IiwiYnRuSW5mbyIsImluc3QiLCJzaG93VUkiLCJidG5Ta3lib3hTZXR0aW5nIiwiYnRuSG9tZSIsIm9uVG9nZ2xlRXZlbnQiLCJ1c2VTa3lib3giLCJ0b2dnbGUiLCJnZXRTY2VuZSIsImdsb2JhbHMiLCJza3lib3giLCJlbmFibGVkIiwiaXNDaGVja2VkIiwidXNlSUJMIiwidGl0bGUiLCJzdHJpbmciLCJjdXJyZW50Iiwibm9kZSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCQSxNQUFBQSxRLE9BQUFBLFE7Ozs7QUFDWkMsTUFBQUEsWSwwQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxtQkFBQUEsTztBQUFTQyxNQUFBQSxLLG1CQUFBQSxLOztBQUNUQyxNQUFBQSxnQixtQ0FBQUEsZ0I7O0FBQ0FDLE1BQUFBLGtCLDBCQUFBQSxrQjs7QUFDQUMsTUFBQUEsUywrQkFBQUEsUzs7QUFDQUMsTUFBQUEsTyxjQUFBQSxPOzs7Ozs7OytCQUVJQyxhOzs7QUFFVCxpQ0FBYztBQUFBOztBQUFBLDRGQUNKLGdDQURJLEVBQzhCO0FBQUE7QUFBQSxrQ0FBUUMsR0FEdEM7QUFFYjs7OztzQ0FNcUI7QUFDbEIsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBS0MsTUFBTCxDQUFZQyxPQUEvQixFQUF3QyxZQUFNO0FBQzFDO0FBQUE7QUFBQSxrQ0FBTUMsSUFBTixDQUFXQyxNQUFYO0FBQUE7QUFBQTtBQUNILGFBRkQ7QUFJQSxpQkFBS0osYUFBTCxDQUFtQixLQUFLQyxNQUFMLENBQVlJLGdCQUEvQixFQUFpRCxZQUFNO0FBQ25EO0FBQUE7QUFBQSxrQ0FBTUYsSUFBTixDQUFXQyxNQUFYO0FBQUE7QUFBQTtBQUNILGFBRkQ7QUFJQSxpQkFBS0osYUFBTCxDQUFtQixLQUFLQyxNQUFMLENBQVlLLE9BQS9CLEVBQXdDLFlBQU07QUFDMUM7QUFBQTtBQUFBLHNDQUFRSCxJQUFSLFNBQWtCLENBQWxCO0FBQ0gsYUFGRDtBQUlBLGlCQUFLSSxhQUFMLENBQW1CLEtBQUtOLE1BQUwsQ0FBWU8sU0FBL0IsRUFBMEMsVUFBQ0MsTUFBRCxFQUE2QjtBQUNuRW5CLGNBQUFBLFFBQVEsQ0FBQ29CLFFBQVQsR0FBb0JDLE9BQXBCLENBQTRCQyxNQUE1QixDQUFtQ0MsT0FBbkMsR0FBNkNKLE1BQU0sQ0FBQ0ssU0FBcEQ7QUFDSCxhQUZEO0FBSUEsaUJBQUtQLGFBQUwsQ0FBbUIsS0FBS04sTUFBTCxDQUFZYyxNQUEvQixFQUF1QyxVQUFDTixNQUFELEVBQTZCO0FBQ2hFbkIsY0FBQUEsUUFBUSxDQUFDb0IsUUFBVCxHQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQTVCLENBQW1DRyxNQUFuQyxHQUE0Q04sTUFBTSxDQUFDSyxTQUFuRDtBQUNILGFBRkQ7QUFJQSxpQkFBS2IsTUFBTCxDQUFZYyxNQUFaLENBQW1CRCxTQUFuQixHQUErQnhCLFFBQVEsQ0FBQ29CLFFBQVQsR0FBb0JDLE9BQXBCLENBQTRCQyxNQUE1QixDQUFtQ0csTUFBbEU7QUFDQSxpQkFBS2QsTUFBTCxDQUFZTyxTQUFaLENBQXNCTSxTQUF0QixHQUFrQ3hCLFFBQVEsQ0FBQ29CLFFBQVQsR0FBb0JDLE9BQXBCLENBQTRCQyxNQUE1QixDQUFtQ0MsT0FBckU7QUFDQSxpQkFBS1osTUFBTCxDQUFZZSxLQUFaLENBQWtCQyxNQUFsQixHQUEyQjtBQUFBO0FBQUEsb0NBQVFkLElBQVIsQ0FBYWUsT0FBYixDQUFxQkYsS0FBaEQ7QUFDSDs7OzhCQTVCd0M7QUFDckMsbUJBQU8sS0FBS0csSUFBTCxDQUFVQyxZQUFWO0FBQUE7QUFBQSx5REFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgZGlyZWN0b3IsIGluc3RhbnRpYXRlLCBMYWJlbENvbXBvbmVudCwgVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyJztcbmltcG9ydCB7IFVJTGF5ZXIsIFVJTWdyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuaW1wb3J0IHsgVUlfU2t5Ym94U2V0dGluZyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9za3lib3gvVUlfU2t5Ym94U2V0dGluZyc7XG5pbXBvcnQgeyBVSUxheW91dF9Db21tb25IVUQgfSBmcm9tICcuL1VJTGF5b3V0X0NvbW1vbl9IVUQnO1xuaW1wb3J0IHsgVUlfTXlJbmZvIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3VpL215X2luZm8vVUlfTXlJbmZvJztcbmltcG9ydCB7IERlbW9NZ3IgfSBmcm9tICcuLi9EZW1vTWdyJztcblxuZXhwb3J0IGNsYXNzIFVJX0NvbW1vbl9IVUQgZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzY2VuZXMvc3RhcnQvaHVkL3VpX2h1ZF9jb21tb24nLCBVSUxheWVyLkhVRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0KCk6IFVJTGF5b3V0X0NvbW1vbkhVRCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJTGF5b3V0X0NvbW1vbkhVRCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KHRoaXMubGF5b3V0LmJ0bkluZm8sICgpID0+IHtcbiAgICAgICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX015SW5mbyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25CdXR0b25FdmVudCh0aGlzLmxheW91dC5idG5Ta3lib3hTZXR0aW5nLCAoKSA9PiB7XG4gICAgICAgICAgICBVSU1nci5pbnN0LnNob3dVSShVSV9Ta3lib3hTZXR0aW5nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KHRoaXMubGF5b3V0LmJ0bkhvbWUsICgpID0+IHtcbiAgICAgICAgICAgIERlbW9NZ3IuaW5zdC5nb3RvKDApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uVG9nZ2xlRXZlbnQodGhpcy5sYXlvdXQudXNlU2t5Ym94LCAodG9nZ2xlOiBUb2dnbGVDb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGRpcmVjdG9yLmdldFNjZW5lKCkuZ2xvYmFscy5za3lib3guZW5hYmxlZCA9IHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25Ub2dnbGVFdmVudCh0aGlzLmxheW91dC51c2VJQkwsICh0b2dnbGU6IFRvZ2dsZUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgZGlyZWN0b3IuZ2V0U2NlbmUoKS5nbG9iYWxzLnNreWJveC51c2VJQkwgPSB0b2dnbGUuaXNDaGVja2VkO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxheW91dC51c2VJQkwuaXNDaGVja2VkID0gZGlyZWN0b3IuZ2V0U2NlbmUoKS5nbG9iYWxzLnNreWJveC51c2VJQkw7XG4gICAgICAgIHRoaXMubGF5b3V0LnVzZVNreWJveC5pc0NoZWNrZWQgPSBkaXJlY3Rvci5nZXRTY2VuZSgpLmdsb2JhbHMuc2t5Ym94LmVuYWJsZWQ7XG4gICAgICAgIHRoaXMubGF5b3V0LnRpdGxlLnN0cmluZyA9IERlbW9NZ3IuaW5zdC5jdXJyZW50LnRpdGxlO1xuICAgIH1cbn0iXX0=