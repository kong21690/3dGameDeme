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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvbW9kZWxfdmlld2VyL2h1ZC9VSV9Nb2RlbFZpZXdlcl9IVUQudHMiXSwibmFtZXMiOlsiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIlBsYXllckN0cmwiLCJVSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQiLCJVSV9Nb2RlbFZpZXdlcl9IVUQiLCJIVUQiLCJvbkJ1dHRvbkV2ZW50IiwibGF5b3V0IiwiYnRuUHJldiIsImluc3QiLCJwbGF5UHJldiIsInR4dEN1ckFuaW0iLCJzdHJpbmciLCJjdXJBbmltTmFtZSIsImJ0bk5leHQiLCJwbGF5TmV4dCIsIm9uVG9nZ2xlRXZlbnQiLCJhbmltTG9vcCIsInRvZ2dsZSIsImlzTG9vcCIsImlzQ2hlY2tlZCIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPOztBQUNBQyxNQUFBQSxVLDhCQUFBQSxVOztBQUNBQyxNQUFBQSx3QiwrQkFBQUEsd0I7Ozs7Ozs7b0NBR0lDLGtCOzs7QUFFVCxzQ0FBYztBQUFBOztBQUFBLGlHQUNKLHNDQURJLEVBQ29DO0FBQUE7QUFBQSxrQ0FBUUMsR0FENUM7QUFFYjs7OztzQ0FNcUI7QUFBQTs7QUFDbEIsaUJBQUtDLGFBQUwsQ0FBbUIsS0FBS0MsTUFBTCxDQUFZQyxPQUEvQixFQUF3QyxZQUFNO0FBQzFDO0FBQUE7QUFBQSw0Q0FBV0MsSUFBWCxDQUFnQkMsUUFBaEI7QUFDQSxjQUFBLEtBQUksQ0FBQ0gsTUFBTCxDQUFZSSxVQUFaLENBQXVCQyxNQUF2QixHQUFnQztBQUFBO0FBQUEsNENBQVdILElBQVgsQ0FBZ0JJLFdBQWhEO0FBQ0gsYUFIRDtBQUtBLGlCQUFLUCxhQUFMLENBQW1CLEtBQUtDLE1BQUwsQ0FBWU8sT0FBL0IsRUFBd0MsWUFBTTtBQUMxQztBQUFBO0FBQUEsNENBQVdMLElBQVgsQ0FBZ0JNLFFBQWhCO0FBQ0EsY0FBQSxLQUFJLENBQUNSLE1BQUwsQ0FBWUksVUFBWixDQUF1QkMsTUFBdkIsR0FBZ0M7QUFBQTtBQUFBLDRDQUFXSCxJQUFYLENBQWdCSSxXQUFoRDtBQUNILGFBSEQ7QUFLQSxpQkFBS0csYUFBTCxDQUFtQixLQUFLVCxNQUFMLENBQVlVLFFBQS9CLEVBQXlDLFVBQUNDLE1BQUQsRUFBNkI7QUFDbEU7QUFBQTtBQUFBLDRDQUFXVCxJQUFYLENBQWdCVSxNQUFoQixHQUF5QkQsTUFBTSxDQUFDRSxTQUFoQztBQUNILGFBRkQ7QUFJQSxpQkFBS2IsTUFBTCxDQUFZVSxRQUFaLENBQXFCRyxTQUFyQixHQUFpQztBQUFBO0FBQUEsMENBQVdYLElBQVgsQ0FBZ0JVLE1BQWpEO0FBQ0g7Ozs4QkFwQjhDO0FBQzNDLG1CQUFPLEtBQUtFLElBQUwsQ0FBVUMsWUFBVjtBQUFBO0FBQUEscUVBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgZGlyZWN0b3IsIHZpZXcsIGxvYWRlciwgVGV4dHVyZUN1YmUsIFRvZ2dsZUNvbXBvbmVudCwgZmluZCwgVGVycmFpbiwgaW5zdGFudGlhdGUsIGdlb21ldHJ5LCBQaHlzaWNzU3lzdGVtIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyJztcbmltcG9ydCB7IFVJTGF5ZXIsIFVJTWdyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuaW1wb3J0IHsgUGxheWVyQ3RybCB9IGZyb20gJy4uLy4uLy4uL3Fmdy9jb21wb25lbnRzL1BsYXllckN0cmwnO1xuaW1wb3J0IHsgVUlMYXlvdXRfTW9kZWxWaWV3ZXJfSFVEIH0gZnJvbSAnLi9VSUxheW91dF9Nb2RlbFZpZXdlcl9IVUQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVSV9Nb2RlbFZpZXdlcl9IVUQgZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzY2VuZXMvbW9kZWxfdmlld2VyL2h1ZC91aV9odWRfcGFuZWwnLCBVSUxheWVyLkhVRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0KCk6IFVJTGF5b3V0X01vZGVsVmlld2VyX0hVRCB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFVJTGF5b3V0X01vZGVsVmlld2VyX0hVRCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KHRoaXMubGF5b3V0LmJ0blByZXYsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckN0cmwuaW5zdC5wbGF5UHJldigpO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQudHh0Q3VyQW5pbS5zdHJpbmcgPSBQbGF5ZXJDdHJsLmluc3QuY3VyQW5pbU5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25CdXR0b25FdmVudCh0aGlzLmxheW91dC5idG5OZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBQbGF5ZXJDdHJsLmluc3QucGxheU5leHQoKTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnR4dEN1ckFuaW0uc3RyaW5nID0gUGxheWVyQ3RybC5pbnN0LmN1ckFuaW1OYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uVG9nZ2xlRXZlbnQodGhpcy5sYXlvdXQuYW5pbUxvb3AsICh0b2dnbGU6IFRvZ2dsZUNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgUGxheWVyQ3RybC5pbnN0LmlzTG9vcCA9IHRvZ2dsZS5pc0NoZWNrZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXlvdXQuYW5pbUxvb3AuaXNDaGVja2VkID0gUGxheWVyQ3RybC5pbnN0LmlzTG9vcDtcbiAgICB9XG59Il19