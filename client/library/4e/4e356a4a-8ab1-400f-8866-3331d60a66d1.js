System.register(["cc", "code-quality:cr", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js", "../DemoMgr.js", "./UILayout_MainMenu_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, instantiate, LabelComponent, loader, ImageAsset, SpriteFrame, SpriteComponent, UIController, UILayer, DemoMgr, UILayout_MainMenu_HUD, _crd, UI_MainMenu_HUD;

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

  function _reportPossibleCrUseOfDemoMgr(extras) {
    _reporterNs.report("DemoMgr", "../DemoMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayout_MainMenu_HUD(extras) {
    _reporterNs.report("UILayout_MainMenu_HUD", "./UILayout_MainMenu_HUD", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      ImageAsset = _cc.ImageAsset;
      SpriteFrame = _cc.SpriteFrame;
      SpriteComponent = _cc.SpriteComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }, function (_DemoMgrJs) {
      DemoMgr = _DemoMgrJs.DemoMgr;
    }, function (_UILayout_MainMenu_HUDJs) {
      UILayout_MainMenu_HUD = _UILayout_MainMenu_HUDJs.UILayout_MainMenu_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "4e356pKirFAD4hmMzHWCmbR", "UI_MainMenu_HUD", _context.meta);

      _crd = true;

      _export("UI_MainMenu_HUD", UI_MainMenu_HUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_MainMenu_HUD, _ref);

        function UI_MainMenu_HUD() {
          _classCallCheck(this, UI_MainMenu_HUD);

          return _possibleConstructorReturn(this, _getPrototypeOf(UI_MainMenu_HUD).call(this, 'scenes/start/hud/ui_main_menu_hud_panel', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
        }

        _createClass(UI_MainMenu_HUD, [{
          key: "onCreated",
          value: function onCreated() {
            var _this = this;

            var demos = (_crd && DemoMgr === void 0 ? (_reportPossibleCrUseOfDemoMgr({
              error: Error()
            }), DemoMgr) : DemoMgr).inst.demos;
            var prefab = this.layout.demoList.children[0];
            prefab.removeFromParent();

            var _loop = function _loop(i) {
              var demo = demos[i];
              var node = instantiate(prefab);

              _this.layout.demoList.addChild(node);

              node.getChildByName('title').getComponent(LabelComponent).string = demo.title;

              if (demo.folder && demo.icon) {
                loader.loadRes(demo.folder + '/' + demo.icon, ImageAsset, function (err, imgAsset) {
                  if (imgAsset) {
                    node.getChildByName('preview').getComponent(SpriteComponent).spriteFrame = SpriteFrame.createWithImage(imgAsset);
                  }
                });
              }

              _this.onButtonEvent(node, function () {
                (_crd && DemoMgr === void 0 ? (_reportPossibleCrUseOfDemoMgr({
                  error: Error()
                }), DemoMgr) : DemoMgr).inst["goto"](i);
              });
            };

            for (var i = 1; i < demos.length; ++i) {
              _loop(i);
            }
          }
        }, {
          key: "layout",
          get: function get() {
            return this.node.getComponent(_crd && UILayout_MainMenu_HUD === void 0 ? (_reportPossibleCrUseOfUILayout_MainMenu_HUD({
              error: Error()
            }), UILayout_MainMenu_HUD) : UILayout_MainMenu_HUD);
          }
        }]);

        return UI_MainMenu_HUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc3RhcnQvaHVkL1VJX01haW5NZW51X0hVRC50cyJdLCJuYW1lcyI6WyJpbnN0YW50aWF0ZSIsIkxhYmVsQ29tcG9uZW50IiwibG9hZGVyIiwiSW1hZ2VBc3NldCIsIlNwcml0ZUZyYW1lIiwiU3ByaXRlQ29tcG9uZW50IiwiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIkRlbW9NZ3IiLCJVSUxheW91dF9NYWluTWVudV9IVUQiLCJVSV9NYWluTWVudV9IVUQiLCJIVUQiLCJkZW1vcyIsImluc3QiLCJwcmVmYWIiLCJsYXlvdXQiLCJkZW1vTGlzdCIsImNoaWxkcmVuIiwicmVtb3ZlRnJvbVBhcmVudCIsImkiLCJkZW1vIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ0aXRsZSIsImZvbGRlciIsImljb24iLCJsb2FkUmVzIiwiZXJyIiwiaW1nQXNzZXQiLCJzcHJpdGVGcmFtZSIsImNyZWF0ZVdpdGhJbWFnZSIsIm9uQnV0dG9uRXZlbnQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQkEsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsZSxPQUFBQSxlOzs7O0FBQ3BGQyxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPOztBQUVBQyxNQUFBQSxPLGNBQUFBLE87O0FBQ0FDLE1BQUFBLHFCLDRCQUFBQSxxQjs7Ozs7OztpQ0FFSUMsZTs7O0FBRVQsbUNBQWM7QUFBQTs7QUFBQSw4RkFDSix5Q0FESSxFQUN1QztBQUFBO0FBQUEsa0NBQVFDLEdBRC9DO0FBRWI7Ozs7c0NBTXFCO0FBQUE7O0FBQ2xCLGdCQUFJQyxLQUFLLEdBQUc7QUFBQTtBQUFBLG9DQUFRQyxJQUFSLENBQWFELEtBQXpCO0FBQ0EsZ0JBQUlFLE1BQU0sR0FBRyxLQUFLQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCLENBQTlCLENBQWI7QUFDQUgsWUFBQUEsTUFBTSxDQUFDSSxnQkFBUDs7QUFIa0IsdUNBSVRDLENBSlM7QUFLZCxrQkFBSUMsSUFBSSxHQUFHUixLQUFLLENBQUNPLENBQUQsQ0FBaEI7QUFDQSxrQkFBSUUsSUFBSSxHQUFHckIsV0FBVyxDQUFDYyxNQUFELENBQXRCOztBQUNBLGNBQUEsS0FBSSxDQUFDQyxNQUFMLENBQVlDLFFBQVosQ0FBcUJNLFFBQXJCLENBQThCRCxJQUE5Qjs7QUFDQUEsY0FBQUEsSUFBSSxDQUFDRSxjQUFMLENBQW9CLE9BQXBCLEVBQTZCQyxZQUE3QixDQUEwQ3ZCLGNBQTFDLEVBQTBEd0IsTUFBMUQsR0FBbUVMLElBQUksQ0FBQ00sS0FBeEU7O0FBQ0Esa0JBQUlOLElBQUksQ0FBQ08sTUFBTCxJQUFlUCxJQUFJLENBQUNRLElBQXhCLEVBQThCO0FBQzFCMUIsZ0JBQUFBLE1BQU0sQ0FBQzJCLE9BQVAsQ0FBZVQsSUFBSSxDQUFDTyxNQUFMLEdBQWMsR0FBZCxHQUFvQlAsSUFBSSxDQUFDUSxJQUF4QyxFQUE4Q3pCLFVBQTlDLEVBQTBELFVBQUMyQixHQUFELEVBQU1DLFFBQU4sRUFBK0I7QUFDckYsc0JBQUdBLFFBQUgsRUFBWTtBQUNSVixvQkFBQUEsSUFBSSxDQUFDRSxjQUFMLENBQW9CLFNBQXBCLEVBQStCQyxZQUEvQixDQUE0Q25CLGVBQTVDLEVBQTZEMkIsV0FBN0QsR0FBMkU1QixXQUFXLENBQUM2QixlQUFaLENBQTRCRixRQUE1QixDQUEzRTtBQUNIO0FBQ0osaUJBSkQ7QUFLSDs7QUFFRCxjQUFBLEtBQUksQ0FBQ0csYUFBTCxDQUFtQmIsSUFBbkIsRUFBeUIsWUFBTTtBQUMzQjtBQUFBO0FBQUEsd0NBQVFSLElBQVIsU0FBa0JNLENBQWxCO0FBQ0gsZUFGRDtBQWpCYzs7QUFJbEIsaUJBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsS0FBSyxDQUFDdUIsTUFBMUIsRUFBa0MsRUFBRWhCLENBQXBDLEVBQXVDO0FBQUEsb0JBQTlCQSxDQUE4QjtBQWdCdEM7QUFDSjs7OzhCQXpCMkM7QUFDeEMsbUJBQU8sS0FBS0UsSUFBTCxDQUFVRyxZQUFWO0FBQUE7QUFBQSwrREFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgZGlyZWN0b3IsIGluc3RhbnRpYXRlLCBMYWJlbENvbXBvbmVudCwgbG9hZGVyLCBJbWFnZUFzc2V0LCBTcHJpdGVGcmFtZSwgU3ByaXRlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyJztcbmltcG9ydCB7IFVJTGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSU1ncic7XG5cbmltcG9ydCB7IERlbW9NZ3IgfSBmcm9tICcuLi9EZW1vTWdyJztcbmltcG9ydCB7IFVJTGF5b3V0X01haW5NZW51X0hVRCB9IGZyb20gJy4vVUlMYXlvdXRfTWFpbk1lbnVfSFVEJztcblxuZXhwb3J0IGNsYXNzIFVJX01haW5NZW51X0hVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9zdGFydC9odWQvdWlfbWFpbl9tZW51X2h1ZF9wYW5lbCcsIFVJTGF5ZXIuSFVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlMYXlvdXRfTWFpbk1lbnVfSFVEIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRDb21wb25lbnQoVUlMYXlvdXRfTWFpbk1lbnVfSFVEKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuICAgICAgICBsZXQgZGVtb3MgPSBEZW1vTWdyLmluc3QuZGVtb3M7XG4gICAgICAgIGxldCBwcmVmYWIgPSB0aGlzLmxheW91dC5kZW1vTGlzdC5jaGlsZHJlblswXTtcbiAgICAgICAgcHJlZmFiLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBkZW1vcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGRlbW8gPSBkZW1vc1tpXSBhcyB7IHRpdGxlOiBzdHJpbmcsIHNjZW5lOiBzdHJpbmcsIGljb246IHN0cmluZywgZm9sZGVyOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LmRlbW9MaXN0LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IGRlbW8udGl0bGU7XG4gICAgICAgICAgICBpZiAoZGVtby5mb2xkZXIgJiYgZGVtby5pY29uKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoZGVtby5mb2xkZXIgKyAnLycgKyBkZW1vLmljb24sIEltYWdlQXNzZXQsIChlcnIsIGltZ0Fzc2V0OiBJbWFnZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGltZ0Fzc2V0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3ByZXZpZXcnKS5nZXRDb21wb25lbnQoU3ByaXRlQ29tcG9uZW50KS5zcHJpdGVGcmFtZSA9IFNwcml0ZUZyYW1lLmNyZWF0ZVdpdGhJbWFnZShpbWdBc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KG5vZGUsICgpID0+IHtcbiAgICAgICAgICAgICAgICBEZW1vTWdyLmluc3QuZ290byhpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==