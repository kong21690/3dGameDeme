System.register(["cc", "code-quality:cr", "./MyInfoMgr.js", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, MyInfoMgr, MyInfoEvent, LabelComponent, UIController, UILayer, _crd, UI_MyInfo;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfMyInfoMgr(extras) {
    _reporterNs.report("MyInfoMgr", "./MyInfoMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyInfoEvent(extras) {
    _reporterNs.report("MyInfoEvent", "./MyInfoMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../../../qfw/base/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../../qfw/base/UIMgr", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      LabelComponent = _cc.LabelComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_MyInfoMgrJs) {
      MyInfoMgr = _MyInfoMgrJs.MyInfoMgr;
      MyInfoEvent = _MyInfoMgrJs.MyInfoEvent;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fc273nUJrNO6Zkvlb83wL7a", "UI_MyInfo", _context.meta);

      _crd = true;

      _export("UI_MyInfo", UI_MyInfo = /*#__PURE__*/function (_ref) {
        _inherits(UI_MyInfo, _ref);

        function UI_MyInfo() {
          _classCallCheck(this, UI_MyInfo);

          return _possibleConstructorReturn(this, _getPrototypeOf(UI_MyInfo).call(this, 'common/ui/my_info/ui_my_info', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
        }

        _createClass(UI_MyInfo, [{
          key: "onCreated",
          value: function onCreated() {
            var _this = this;

            this.onButtonEvent('btn_close', function () {
              _this.hide();
            }); //响应数据变化

            this.on((_crd && MyInfoEvent === void 0 ? (_reportPossibleCrUseOfMyInfoEvent({
              error: Error()
            }), MyInfoEvent) : MyInfoEvent).INTRODUCE_CHANGED, function () {
              _this.refreshIntroduce();
            }); //初次加载显示

            this.refreshIntroduce();
          }
        }, {
          key: "refreshIntroduce",
          value: function refreshIntroduce() {
            this.node.getChildByName('introduce').getComponent(LabelComponent).string = (_crd && MyInfoMgr === void 0 ? (_reportPossibleCrUseOfMyInfoMgr({
              error: Error()
            }), MyInfoMgr) : MyInfoMgr).inst.introduce;
          }
        }]);

        return UI_MyInfo;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9jb21tb24vdWkvbXlfaW5mby9VSV9NeUluZm8udHMiXSwibmFtZXMiOlsiTGFiZWxDb21wb25lbnQiLCJNeUluZm9NZ3IiLCJNeUluZm9FdmVudCIsIlVJQ29udHJvbGxlciIsIlVJTGF5ZXIiLCJVSV9NeUluZm8iLCJIVUQiLCJvbkJ1dHRvbkV2ZW50IiwiaGlkZSIsIm9uIiwiSU5UUk9EVUNFX0NIQU5HRUQiLCJyZWZyZXNoSW50cm9kdWNlIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiaW5zdCIsImludHJvZHVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLGMsT0FBQUEsYzs7OztBQURBQyxNQUFBQSxTLGdCQUFBQSxTO0FBQVdDLE1BQUFBLFcsZ0JBQUFBLFc7O0FBRVhDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87Ozs7Ozs7MkJBR0lDLFM7OztBQUNULDZCQUFjO0FBQUE7O0FBQUEsd0ZBQ0osOEJBREksRUFDNEI7QUFBQTtBQUFBLGtDQUFRQyxHQURwQztBQUViOzs7O3NDQUVXO0FBQUE7O0FBQ1IsaUJBQUtDLGFBQUwsQ0FBbUIsV0FBbkIsRUFBZ0MsWUFBTTtBQUNsQyxjQUFBLEtBQUksQ0FBQ0MsSUFBTDtBQUNILGFBRkQsRUFEUSxDQUtSOztBQUNBLGlCQUFLQyxFQUFMLENBQVE7QUFBQTtBQUFBLDRDQUFZQyxpQkFBcEIsRUFBc0MsWUFBSTtBQUN0QyxjQUFBLEtBQUksQ0FBQ0MsZ0JBQUw7QUFDSCxhQUZELEVBTlEsQ0FVUjs7QUFDQSxpQkFBS0EsZ0JBQUw7QUFDSDs7OzZDQUVpQjtBQUNkLGlCQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsV0FBekIsRUFBc0NDLFlBQXRDLENBQW1EZCxjQUFuRCxFQUFtRWUsTUFBbkUsR0FBNEU7QUFBQTtBQUFBLHdDQUFVQyxJQUFWLENBQWVDLFNBQTNGO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNeUluZm9NZ3IsIE15SW5mb0V2ZW50IH0gZnJvbSBcIi4vTXlJbmZvTWdyXCI7XG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgVUlMYXllciB9IGZyb20gXCIuLi8uLi8uLi9xZncvYmFzZS9VSU1nclwiO1xuXG5cbmV4cG9ydCBjbGFzcyBVSV9NeUluZm8gZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY29tbW9uL3VpL215X2luZm8vdWlfbXlfaW5mbycsIFVJTGF5ZXIuSFVEKTtcbiAgICB9XG5cbiAgICBvbkNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMub25CdXR0b25FdmVudCgnYnRuX2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v5ZON5bqU5pWw5o2u5Y+Y5YyWXG4gICAgICAgIHRoaXMub24oTXlJbmZvRXZlbnQuSU5UUk9EVUNFX0NIQU5HRUQsKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEludHJvZHVjZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WIneasoeWKoOi9veaYvuekulxuICAgICAgICB0aGlzLnJlZnJlc2hJbnRyb2R1Y2UoKTtcbiAgICB9XG5cbiAgICByZWZyZXNoSW50cm9kdWNlKCl7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnaW50cm9kdWNlJykuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KS5zdHJpbmcgPSBNeUluZm9NZ3IuaW5zdC5pbnRyb2R1Y2U7XG4gICAgfVxufSJdfQ==