System.register(["cc", "code-quality:cr", "../../qfw/base/UIMgr.js", "./hud/UI_MainMenu_HUD.js", "./hud/UI_Common_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UIMgr, UILayer, UI_MainMenu_HUD, UI_Common_HUD, _dec, _class, _crd, ccclass, property, AppStart;

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

  function _reportPossibleCrUseOfUI_MainMenu_HUD(extras) {
    _reporterNs.report("UI_MainMenu_HUD", "./hud/UI_MainMenu_HUD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_Common_HUD(extras) {
    _reporterNs.report("UI_Common_HUD", "./hud/UI_Common_HUD", _context.meta, extras);
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
    }, function (_hudUI_MainMenu_HUDJs) {
      UI_MainMenu_HUD = _hudUI_MainMenu_HUDJs.UI_MainMenu_HUD;
    }, function (_hudUI_Common_HUDJs) {
      UI_Common_HUD = _hudUI_Common_HUDJs.UI_Common_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "938dfxT2vlOF6chFLfFxXfe", "AppStart", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AppStart", AppStart = (_dec = ccclass('AppStart'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AppStart, _Component);

        function AppStart() {
          _classCallCheck(this, AppStart);

          return _possibleConstructorReturn(this, _getPrototypeOf(AppStart).apply(this, arguments));
        }

        _createClass(AppStart, [{
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
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_Common_HUD === void 0 ? (_reportPossibleCrUseOfUI_Common_HUD({
              error: Error()
            }), UI_Common_HUD) : UI_Common_HUD);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_MainMenu_HUD === void 0 ? (_reportPossibleCrUseOfUI_MainMenu_HUD({
              error: Error()
            }), UI_MainMenu_HUD) : UI_MainMenu_HUD);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AppStart;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9zdGFydC9BcHBTdGFydC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiVUlNZ3IiLCJVSUxheWVyIiwiVUlfTWFpbk1lbnVfSFVEIiwiVUlfQ29tbW9uX0hVRCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkFwcFN0YXJ0IiwiaW5zdCIsInNldHVwIiwiTlVNIiwic2hvd1VJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ1pDLE1BQUFBLEssbUJBQUFBLEs7QUFBT0MsTUFBQUEsTyxtQkFBQUEsTzs7QUFDUEMsTUFBQUEsZSx5QkFBQUEsZTs7QUFDQUMsTUFBQUEsYSx1QkFBQUEsYTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEM7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTO0FBQ0w7QUFDQTtBQUFBO0FBQUEsZ0NBQU1HLElBQU4sQ0FBV0MsS0FBWCxDQUFpQjtBQUFBO0FBQUEsb0NBQVFDLEdBQXpCO0FBQ0E7QUFBQTtBQUFBLGdDQUFNRixJQUFOLENBQVdHLE1BQVg7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGdDQUFNSCxJQUFOLENBQVdHLE1BQVg7QUFBQTtBQUFBO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFqQjBCWCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlNZ3IsIFVJTGF5ZXIgfSBmcm9tICcuLi8uLi9xZncvYmFzZS9VSU1ncic7XG5pbXBvcnQgeyBVSV9NYWluTWVudV9IVUQgfSBmcm9tICcuL2h1ZC9VSV9NYWluTWVudV9IVUQnO1xuaW1wb3J0IHsgVUlfQ29tbW9uX0hVRCB9IGZyb20gJy4vaHVkL1VJX0NvbW1vbl9IVUQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0FwcFN0YXJ0JylcbmV4cG9ydCBjbGFzcyBBcHBTdGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICBVSU1nci5pbnN0LnNldHVwKFVJTGF5ZXIuTlVNKTtcbiAgICAgICAgVUlNZ3IuaW5zdC5zaG93VUkoVUlfQ29tbW9uX0hVRCk7XG4gICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX01haW5NZW51X0hVRCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufSJdfQ==