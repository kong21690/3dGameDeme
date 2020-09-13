System.register(["cc", "code-quality:cr", "../../qfw/base/UIMgr.js", "./hud/UI_ModelViewer_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UIMgr, UILayer, UI_ModelViewer_HUD, _dec, _class, _crd, ccclass, property, AppStart_ModelViewer;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_ModelViewer_HUD(extras) {
    _reporterNs.report("UI_ModelViewer_HUD", "./hud/UI_ModelViewer_HUD", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIMgrJs) {
      UIMgr = _qfwBaseUIMgrJs.UIMgr;
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }, function (_hudUI_ModelViewer_HUDJs) {
      UI_ModelViewer_HUD = _hudUI_ModelViewer_HUDJs.UI_ModelViewer_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f1a5c170QZOZ4gwg/Ekl3X9", "AppStart_ModelViewer", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AppStart_ModelViewer", AppStart_ModelViewer = (_dec = ccclass('AppStart_ModelViewer'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AppStart_ModelViewer, _Component);

        function AppStart_ModelViewer() {
          _classCallCheck(this, AppStart_ModelViewer);

          return _possibleConstructorReturn(this, _getPrototypeOf(AppStart_ModelViewer).apply(this, arguments));
        }

        _createClass(AppStart_ModelViewer, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).inst.setup((_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
              error: Error()
            }), UILayer) : UILayer).NUM);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_ModelViewer_HUD === void 0 ? (_reportPossibleCrUseOfUI_ModelViewer_HUD({
              error: Error()
            }), UI_ModelViewer_HUD) : UI_ModelViewer_HUD);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AppStart_ModelViewer;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9tb2RlbF92aWV3ZXIvQXBwU3RhcnRfTW9kZWxWaWV3ZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlVJTWdyIiwiVUlMYXllciIsIlVJX01vZGVsVmlld2VyX0hVRCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkFwcFN0YXJ0X01vZGVsVmlld2VyIiwiaW5zdCIsInNldHVwIiwiTlVNIiwic2hvd1VJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7Ozs7QUFDWkMsTUFBQUEsSyxtQkFBQUEsSztBQUFPQyxNQUFBQSxPLG1CQUFBQSxPOztBQUNQQyxNQUFBQSxrQiw0QkFBQUEsa0I7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztzQ0FHSkMsb0IsV0FEWkYsT0FBTyxDQUFDLHNCQUFELEM7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTO0FBQ0w7QUFDQTtBQUFBO0FBQUEsZ0NBQU1HLElBQU4sQ0FBV0MsS0FBWCxDQUFpQjtBQUFBO0FBQUEsb0NBQVFDLEdBQXpCO0FBQ0E7QUFBQTtBQUFBLGdDQUFNRixJQUFOLENBQVdHLE1BQVg7QUFBQTtBQUFBO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFoQnNDVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlNZ3IsIFVJTGF5ZXIgfSBmcm9tICcuLi8uLi9xZncvYmFzZS9VSU1ncic7XG5pbXBvcnQgeyBVSV9Nb2RlbFZpZXdlcl9IVUQgfSBmcm9tICcuL2h1ZC9VSV9Nb2RlbFZpZXdlcl9IVUQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0FwcFN0YXJ0X01vZGVsVmlld2VyJylcbmV4cG9ydCBjbGFzcyBBcHBTdGFydF9Nb2RlbFZpZXdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICBVSU1nci5pbnN0LnNldHVwKFVJTGF5ZXIuTlVNKTtcbiAgICAgICAgVUlNZ3IuaW5zdC5zaG93VUkoVUlfTW9kZWxWaWV3ZXJfSFVEKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=