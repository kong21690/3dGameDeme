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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc3RhcnQvQXBwU3RhcnQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlVJTWdyIiwiVUlMYXllciIsIlVJX01haW5NZW51X0hVRCIsIlVJX0NvbW1vbl9IVUQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBcHBTdGFydCIsImluc3QiLCJzZXR1cCIsIk5VTSIsInNob3dVSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNaQyxNQUFBQSxLLG1CQUFBQSxLO0FBQU9DLE1BQUFBLE8sbUJBQUFBLE87O0FBQ1BDLE1BQUFBLGUseUJBQUFBLGU7O0FBQ0FDLE1BQUFBLGEsdUJBQUFBLGE7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROzswQkFHSkMsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDOzs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0E7QUFBQTtBQUFBLGdDQUFNRyxJQUFOLENBQVdDLEtBQVgsQ0FBaUI7QUFBQTtBQUFBLG9DQUFRQyxHQUF6QjtBQUNBO0FBQUE7QUFBQSxnQ0FBTUYsSUFBTixDQUFXRyxNQUFYO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxnQ0FBTUgsSUFBTixDQUFXRyxNQUFYO0FBQUE7QUFBQTtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBakIwQlgsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJTWdyLCBVSUxheWVyIH0gZnJvbSAnLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuaW1wb3J0IHsgVUlfTWFpbk1lbnVfSFVEIH0gZnJvbSAnLi9odWQvVUlfTWFpbk1lbnVfSFVEJztcbmltcG9ydCB7IFVJX0NvbW1vbl9IVUQgfSBmcm9tICcuL2h1ZC9VSV9Db21tb25fSFVEJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBcHBTdGFydCcpXG5leHBvcnQgY2xhc3MgQXBwU3RhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgVUlNZ3IuaW5zdC5zZXR1cChVSUxheWVyLk5VTSk7XG4gICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX0NvbW1vbl9IVUQpO1xuICAgICAgICBVSU1nci5pbnN0LnNob3dVSShVSV9NYWluTWVudV9IVUQpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn0iXX0=