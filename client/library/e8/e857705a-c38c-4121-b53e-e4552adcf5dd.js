System.register(["cc", "code-quality:cr", "../../qfw/base/UIMgr.js", "./hud/UI_RimLight_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UIMgr, UILayer, UI_RimLight_HUD, _dec, _class, _crd, ccclass, property, AppStartRimLight;

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

  function _reportPossibleCrUseOfUI_RimLight_HUD(extras) {
    _reporterNs.report("UI_RimLight_HUD", "./hud/UI_RimLight_HUD", _context.meta, extras);
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
    }, function (_hudUI_RimLight_HUDJs) {
      UI_RimLight_HUD = _hudUI_RimLight_HUDJs.UI_RimLight_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e8577Baw4xBIbU+5FUq3PXd", "AppStart_RimLight", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AppStartRimLight", AppStartRimLight = (_dec = ccclass('AppStartRimLight'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AppStartRimLight, _Component);

        function AppStartRimLight() {
          _classCallCheck(this, AppStartRimLight);

          return _possibleConstructorReturn(this, _getPrototypeOf(AppStartRimLight).apply(this, arguments));
        }

        _createClass(AppStartRimLight, [{
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
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_RimLight_HUD === void 0 ? (_reportPossibleCrUseOfUI_RimLight_HUD({
              error: Error()
            }), UI_RimLight_HUD) : UI_RimLight_HUD);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AppStartRimLight;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvcmltX2xpZ2h0L0FwcFN0YXJ0X1JpbUxpZ2h0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJVSU1nciIsIlVJTGF5ZXIiLCJVSV9SaW1MaWdodF9IVUQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBcHBTdGFydFJpbUxpZ2h0IiwiaW5zdCIsInNldHVwIiwiTlVNIiwic2hvd1VJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7Ozs7QUFDWkMsTUFBQUEsSyxtQkFBQUEsSztBQUFPQyxNQUFBQSxPLG1CQUFBQSxPOztBQUNQQyxNQUFBQSxlLHlCQUFBQSxlOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDOzs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0E7QUFBQTtBQUFBLGdDQUFNRyxJQUFOLENBQVdDLEtBQVgsQ0FBaUI7QUFBQTtBQUFBLG9DQUFRQyxHQUF6QjtBQUNBO0FBQUE7QUFBQSxnQ0FBTUYsSUFBTixDQUFXRyxNQUFYO0FBQUE7QUFBQTtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBaEJrQ1YsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJTWdyLCBVSUxheWVyIH0gZnJvbSAnLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuaW1wb3J0IHsgVUlfUmltTGlnaHRfSFVEIH0gZnJvbSAnLi9odWQvVUlfUmltTGlnaHRfSFVEJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBcHBTdGFydFJpbUxpZ2h0JylcbmV4cG9ydCBjbGFzcyBBcHBTdGFydFJpbUxpZ2h0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIFVJTWdyLmluc3Quc2V0dXAoVUlMYXllci5OVU0pO1xuICAgICAgICBVSU1nci5pbnN0LnNob3dVSShVSV9SaW1MaWdodF9IVUQpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn0iXX0=