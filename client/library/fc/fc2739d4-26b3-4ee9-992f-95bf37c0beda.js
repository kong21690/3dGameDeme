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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL2NvbW1vbi91aS9teV9pbmZvL1VJX015SW5mby50cyJdLCJuYW1lcyI6WyJMYWJlbENvbXBvbmVudCIsIk15SW5mb01nciIsIk15SW5mb0V2ZW50IiwiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIlVJX015SW5mbyIsIkhVRCIsIm9uQnV0dG9uRXZlbnQiLCJoaWRlIiwib24iLCJJTlRST0RVQ0VfQ0hBTkdFRCIsInJlZnJlc2hJbnRyb2R1Y2UiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJpbnN0IiwiaW50cm9kdWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsYyxPQUFBQSxjOzs7O0FBREFDLE1BQUFBLFMsZ0JBQUFBLFM7QUFBV0MsTUFBQUEsVyxnQkFBQUEsVzs7QUFFWEMsTUFBQUEsWSwwQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxtQkFBQUEsTzs7Ozs7OzsyQkFHSUMsUzs7O0FBQ1QsNkJBQWM7QUFBQTs7QUFBQSx3RkFDSiw4QkFESSxFQUM0QjtBQUFBO0FBQUEsa0NBQVFDLEdBRHBDO0FBRWI7Ozs7c0NBRVc7QUFBQTs7QUFDUixpQkFBS0MsYUFBTCxDQUFtQixXQUFuQixFQUFnQyxZQUFNO0FBQ2xDLGNBQUEsS0FBSSxDQUFDQyxJQUFMO0FBQ0gsYUFGRCxFQURRLENBS1I7O0FBQ0EsaUJBQUtDLEVBQUwsQ0FBUTtBQUFBO0FBQUEsNENBQVlDLGlCQUFwQixFQUFzQyxZQUFJO0FBQ3RDLGNBQUEsS0FBSSxDQUFDQyxnQkFBTDtBQUNILGFBRkQsRUFOUSxDQVVSOztBQUNBLGlCQUFLQSxnQkFBTDtBQUNIOzs7NkNBRWlCO0FBQ2QsaUJBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixXQUF6QixFQUFzQ0MsWUFBdEMsQ0FBbURkLGNBQW5ELEVBQW1FZSxNQUFuRSxHQUE0RTtBQUFBO0FBQUEsd0NBQVVDLElBQVYsQ0FBZUMsU0FBM0Y7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE15SW5mb01nciwgTXlJbmZvRXZlbnQgfSBmcm9tIFwiLi9NeUluZm9NZ3JcIjtcbmltcG9ydCB7IExhYmVsQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBVSUxheWVyIH0gZnJvbSBcIi4uLy4uLy4uL3Fmdy9iYXNlL1VJTWdyXCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJX015SW5mbyBleHRlbmRzIFVJQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjb21tb24vdWkvbXlfaW5mby91aV9teV9pbmZvJywgVUlMYXllci5IVUQpO1xuICAgIH1cblxuICAgIG9uQ3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KCdidG5fY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/lk43lupTmlbDmja7lj5jljJZcbiAgICAgICAgdGhpcy5vbihNeUluZm9FdmVudC5JTlRST0RVQ0VfQ0hBTkdFRCwoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSW50cm9kdWNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v5Yid5qyh5Yqg6L295pi+56S6XG4gICAgICAgIHRoaXMucmVmcmVzaEludHJvZHVjZSgpO1xuICAgIH1cblxuICAgIHJlZnJlc2hJbnRyb2R1Y2UoKXtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdpbnRyb2R1Y2UnKS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpLnN0cmluZyA9IE15SW5mb01nci5pbnN0LmludHJvZHVjZTtcbiAgICB9XG59Il19