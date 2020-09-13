System.register(["cc", "code-quality:cr", "../../qfw/base/UIMgr.js", "./hud/UI_AvatarHUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, UIMgr, UILayer, UI_AvatarHUD, _dec, _class, _crd, ccclass, property, AppStart_Avatar;

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

  function _reportPossibleCrUseOfUI_AvatarHUD(extras) {
    _reporterNs.report("UI_AvatarHUD", "./hud/UI_AvatarHUD", _context.meta, extras);
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
    }, function (_hudUI_AvatarHUDJs) {
      UI_AvatarHUD = _hudUI_AvatarHUDJs.UI_AvatarHUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "ebe6dVpDBJFSbjJKOqgVA2R", "AppStart_Avatar", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AppStart_Avatar", AppStart_Avatar = (_dec = ccclass('AppStart_Avatar'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(AppStart_Avatar, _Component);

        function AppStart_Avatar() {
          _classCallCheck(this, AppStart_Avatar);

          return _possibleConstructorReturn(this, _getPrototypeOf(AppStart_Avatar).apply(this, arguments));
        }

        _createClass(AppStart_Avatar, [{
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
            }), UIMgr) : UIMgr).inst.showUI(_crd && UI_AvatarHUD === void 0 ? (_reportPossibleCrUseOfUI_AvatarHUD({
              error: Error()
            }), UI_AvatarHUD) : UI_AvatarHUD);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return AppStart_Avatar;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9hdmF0YXIvQXBwU3RhcnRfQXZhdGFyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJVSU1nciIsIlVJTGF5ZXIiLCJVSV9BdmF0YXJIVUQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBcHBTdGFydF9BdmF0YXIiLCJpbnN0Iiwic2V0dXAiLCJOVU0iLCJzaG93VUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUzs7OztBQUNaQyxNQUFBQSxLLG1CQUFBQSxLO0FBQU9DLE1BQUFBLE8sbUJBQUFBLE87O0FBQ1BDLE1BQUFBLFksc0JBQUFBLFk7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQ0FHSkMsZSxXQURaRixPQUFPLENBQUMsaUJBQUQsQzs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBRVM7QUFDTDtBQUNBO0FBQUE7QUFBQSxnQ0FBTUcsSUFBTixDQUFXQyxLQUFYLENBQWlCO0FBQUE7QUFBQSxvQ0FBUUMsR0FBekI7QUFDQTtBQUFBO0FBQUEsZ0NBQU1GLElBQU4sQ0FBV0csTUFBWDtBQUFBO0FBQUE7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWhCaUNWLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSU1nciwgVUlMYXllciB9IGZyb20gJy4uLy4uL3Fmdy9iYXNlL1VJTWdyJztcbmltcG9ydCB7IFVJX0F2YXRhckhVRCB9IGZyb20gJy4vaHVkL1VJX0F2YXRhckhVRCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQXBwU3RhcnRfQXZhdGFyJylcbmV4cG9ydCBjbGFzcyBBcHBTdGFydF9BdmF0YXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgVUlNZ3IuaW5zdC5zZXR1cChVSUxheWVyLk5VTSk7XG4gICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX0F2YXRhckhVRCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19