System.register(["cc", "code-quality:cr", "./hud/UI_Skybox_HUD.js", "../../qfw/base/UIMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UI_SkyboxHUD, UIMgr, UILayer, _dec, _class, _crd, ccclass, property, AppStart_Skybox;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUI_SkyboxHUD(extras) {
    _reporterNs.report("UI_SkyboxHUD", "./hud/UI_Skybox_HUD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../qfw/base/UIMgr", _context.meta, extras);
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
    }, function (_hudUI_Skybox_HUDJs) {
      UI_SkyboxHUD = _hudUI_Skybox_HUDJs.UI_SkyboxHUD;
    }, function (_qfwBaseUIMgrJs) {
      UIMgr = _qfwBaseUIMgrJs.UIMgr;
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "88b0dhxjXhFKbl9VSWYWyMW", "AppStart_Skybox", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AppStart_Skybox", AppStart_Skybox = (_dec = ccclass('AppStart_Skybox'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AppStart_Skybox, _Component);

        function AppStart_Skybox() {
          _classCallCheck(this, AppStart_Skybox);

          return _possibleConstructorReturn(this, _getPrototypeOf(AppStart_Skybox).apply(this, arguments));
        }

        _createClass(AppStart_Skybox, [{
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
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_SkyboxHUD === void 0 ? (_reportPossibleCrUseOfUI_SkyboxHUD({
              error: Error()
            }), UI_SkyboxHUD) : UI_SkyboxHUD);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AppStart_Skybox;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9za3lib3gvQXBwU3RhcnRfU2t5Ym94LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJVSV9Ta3lib3hIVUQiLCJVSU1nciIsIlVJTGF5ZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBcHBTdGFydF9Ta3lib3giLCJpbnN0Iiwic2V0dXAiLCJOVU0iLCJzaG93VUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNaQyxNQUFBQSxZLHVCQUFBQSxZOztBQUNBQyxNQUFBQSxLLG1CQUFBQSxLO0FBQU9DLE1BQUFBLE8sbUJBQUFBLE87Ozs7OztBQUNSQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQzs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVM7QUFDTDtBQUNBO0FBQUE7QUFBQSxnQ0FBTUcsSUFBTixDQUFXQyxLQUFYLENBQWlCO0FBQUE7QUFBQSxvQ0FBUUMsR0FBekI7QUFDQTtBQUFBO0FBQUEsZ0NBQU1GLElBQU4sQ0FBV0csTUFBWDtBQUFBO0FBQUE7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWhCaUNWLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSV9Ta3lib3hIVUQgfSBmcm9tICcuL2h1ZC9VSV9Ta3lib3hfSFVEJztcbmltcG9ydCB7IFVJTWdyLCBVSUxheWVyIH0gZnJvbSAnLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0FwcFN0YXJ0X1NreWJveCcpXG5leHBvcnQgY2xhc3MgQXBwU3RhcnRfU2t5Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIFVJTWdyLmluc3Quc2V0dXAoVUlMYXllci5OVU0pO1xuICAgICAgICBVSU1nci5pbnN0LnNob3dVSShVSV9Ta3lib3hIVUQpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==