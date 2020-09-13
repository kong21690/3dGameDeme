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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9zdGFydC9odWQvVUlfTWFpbk1lbnVfSFVELnRzIl0sIm5hbWVzIjpbImluc3RhbnRpYXRlIiwiTGFiZWxDb21wb25lbnQiLCJsb2FkZXIiLCJJbWFnZUFzc2V0IiwiU3ByaXRlRnJhbWUiLCJTcHJpdGVDb21wb25lbnQiLCJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiRGVtb01nciIsIlVJTGF5b3V0X01haW5NZW51X0hVRCIsIlVJX01haW5NZW51X0hVRCIsIkhVRCIsImRlbW9zIiwiaW5zdCIsInByZWZhYiIsImxheW91dCIsImRlbW9MaXN0IiwiY2hpbGRyZW4iLCJyZW1vdmVGcm9tUGFyZW50IiwiaSIsImRlbW8iLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInN0cmluZyIsInRpdGxlIiwiZm9sZGVyIiwiaWNvbiIsImxvYWRSZXMiLCJlcnIiLCJpbWdBc3NldCIsInNwcml0ZUZyYW1lIiwiY3JlYXRlV2l0aEltYWdlIiwib25CdXR0b25FdmVudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCQSxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxlLE9BQUFBLGU7Ozs7QUFDcEZDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87O0FBRUFDLE1BQUFBLE8sY0FBQUEsTzs7QUFDQUMsTUFBQUEscUIsNEJBQUFBLHFCOzs7Ozs7O2lDQUVJQyxlOzs7QUFFVCxtQ0FBYztBQUFBOztBQUFBLDhGQUNKLHlDQURJLEVBQ3VDO0FBQUE7QUFBQSxrQ0FBUUMsR0FEL0M7QUFFYjs7OztzQ0FNcUI7QUFBQTs7QUFDbEIsZ0JBQUlDLEtBQUssR0FBRztBQUFBO0FBQUEsb0NBQVFDLElBQVIsQ0FBYUQsS0FBekI7QUFDQSxnQkFBSUUsTUFBTSxHQUFHLEtBQUtDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEIsQ0FBOUIsQ0FBYjtBQUNBSCxZQUFBQSxNQUFNLENBQUNJLGdCQUFQOztBQUhrQix1Q0FJVEMsQ0FKUztBQUtkLGtCQUFJQyxJQUFJLEdBQUdSLEtBQUssQ0FBQ08sQ0FBRCxDQUFoQjtBQUNBLGtCQUFJRSxJQUFJLEdBQUdyQixXQUFXLENBQUNjLE1BQUQsQ0FBdEI7O0FBQ0EsY0FBQSxLQUFJLENBQUNDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQk0sUUFBckIsQ0FBOEJELElBQTlCOztBQUNBQSxjQUFBQSxJQUFJLENBQUNFLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkJDLFlBQTdCLENBQTBDdkIsY0FBMUMsRUFBMER3QixNQUExRCxHQUFtRUwsSUFBSSxDQUFDTSxLQUF4RTs7QUFDQSxrQkFBSU4sSUFBSSxDQUFDTyxNQUFMLElBQWVQLElBQUksQ0FBQ1EsSUFBeEIsRUFBOEI7QUFDMUIxQixnQkFBQUEsTUFBTSxDQUFDMkIsT0FBUCxDQUFlVCxJQUFJLENBQUNPLE1BQUwsR0FBYyxHQUFkLEdBQW9CUCxJQUFJLENBQUNRLElBQXhDLEVBQThDekIsVUFBOUMsRUFBMEQsVUFBQzJCLEdBQUQsRUFBTUMsUUFBTixFQUErQjtBQUNyRixzQkFBR0EsUUFBSCxFQUFZO0FBQ1JWLG9CQUFBQSxJQUFJLENBQUNFLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JDLFlBQS9CLENBQTRDbkIsZUFBNUMsRUFBNkQyQixXQUE3RCxHQUEyRTVCLFdBQVcsQ0FBQzZCLGVBQVosQ0FBNEJGLFFBQTVCLENBQTNFO0FBQ0g7QUFDSixpQkFKRDtBQUtIOztBQUVELGNBQUEsS0FBSSxDQUFDRyxhQUFMLENBQW1CYixJQUFuQixFQUF5QixZQUFNO0FBQzNCO0FBQUE7QUFBQSx3Q0FBUVIsSUFBUixTQUFrQk0sQ0FBbEI7QUFDSCxlQUZEO0FBakJjOztBQUlsQixpQkFBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUCxLQUFLLENBQUN1QixNQUExQixFQUFrQyxFQUFFaEIsQ0FBcEMsRUFBdUM7QUFBQSxvQkFBOUJBLENBQThCO0FBZ0J0QztBQUNKOzs7OEJBekIyQztBQUN4QyxtQkFBTyxLQUFLRSxJQUFMLENBQVVHLFlBQVY7QUFBQTtBQUFBLCtEQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBkaXJlY3RvciwgaW5zdGFudGlhdGUsIExhYmVsQ29tcG9uZW50LCBsb2FkZXIsIEltYWdlQXNzZXQsIFNwcml0ZUZyYW1lLCBTcHJpdGVDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlMYXllciB9IGZyb20gJy4uLy4uLy4uL3Fmdy9iYXNlL1VJTWdyJztcblxuaW1wb3J0IHsgRGVtb01nciB9IGZyb20gJy4uL0RlbW9NZ3InO1xuaW1wb3J0IHsgVUlMYXlvdXRfTWFpbk1lbnVfSFVEIH0gZnJvbSAnLi9VSUxheW91dF9NYWluTWVudV9IVUQnO1xuXG5leHBvcnQgY2xhc3MgVUlfTWFpbk1lbnVfSFVEIGV4dGVuZHMgVUlDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2NlbmVzL3N0YXJ0L2h1ZC91aV9tYWluX21lbnVfaHVkX3BhbmVsJywgVUlMYXllci5IVUQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGxheW91dCgpOiBVSUxheW91dF9NYWluTWVudV9IVUQge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbXBvbmVudChVSUxheW91dF9NYWluTWVudV9IVUQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNyZWF0ZWQoKSB7XG4gICAgICAgIGxldCBkZW1vcyA9IERlbW9NZ3IuaW5zdC5kZW1vcztcbiAgICAgICAgbGV0IHByZWZhYiA9IHRoaXMubGF5b3V0LmRlbW9MaXN0LmNoaWxkcmVuWzBdO1xuICAgICAgICBwcmVmYWIucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGRlbW9zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgZGVtbyA9IGRlbW9zW2ldIGFzIHsgdGl0bGU6IHN0cmluZywgc2NlbmU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBmb2xkZXI6IHN0cmluZyB9O1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQuZGVtb0xpc3QuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKCd0aXRsZScpLmdldENvbXBvbmVudChMYWJlbENvbXBvbmVudCkuc3RyaW5nID0gZGVtby50aXRsZTtcbiAgICAgICAgICAgIGlmIChkZW1vLmZvbGRlciAmJiBkZW1vLmljb24pIHtcbiAgICAgICAgICAgICAgICBsb2FkZXIubG9hZFJlcyhkZW1vLmZvbGRlciArICcvJyArIGRlbW8uaWNvbiwgSW1hZ2VBc3NldCwgKGVyciwgaW1nQXNzZXQ6IEltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaW1nQXNzZXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZSgncHJldmlldycpLmdldENvbXBvbmVudChTcHJpdGVDb21wb25lbnQpLnNwcml0ZUZyYW1lID0gU3ByaXRlRnJhbWUuY3JlYXRlV2l0aEltYWdlKGltZ0Fzc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQobm9kZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIERlbW9NZ3IuaW5zdC5nb3RvKGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19