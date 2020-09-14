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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvbW9kZWxfdmlld2VyL0FwcFN0YXJ0X01vZGVsVmlld2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJVSU1nciIsIlVJTGF5ZXIiLCJVSV9Nb2RlbFZpZXdlcl9IVUQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBcHBTdGFydF9Nb2RlbFZpZXdlciIsImluc3QiLCJzZXR1cCIsIk5VTSIsInNob3dVSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBQ1pDLE1BQUFBLEssbUJBQUFBLEs7QUFBT0MsTUFBQUEsTyxtQkFBQUEsTzs7QUFDUEMsTUFBQUEsa0IsNEJBQUFBLGtCOzs7Ozs7QUFDREMsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7c0NBR0pDLG9CLFdBRFpGLE9BQU8sQ0FBQyxzQkFBRCxDOzs7Ozs7Ozs7Ozs7QUFFSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtrQ0FFUztBQUNMO0FBQ0E7QUFBQTtBQUFBLGdDQUFNRyxJQUFOLENBQVdDLEtBQVgsQ0FBaUI7QUFBQTtBQUFBLG9DQUFRQyxHQUF6QjtBQUNBO0FBQUE7QUFBQSxnQ0FBTUYsSUFBTixDQUFXRyxNQUFYO0FBQUE7QUFBQTtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBaEJzQ1YsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJTWdyLCBVSUxheWVyIH0gZnJvbSAnLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuaW1wb3J0IHsgVUlfTW9kZWxWaWV3ZXJfSFVEIH0gZnJvbSAnLi9odWQvVUlfTW9kZWxWaWV3ZXJfSFVEJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBcHBTdGFydF9Nb2RlbFZpZXdlcicpXG5leHBvcnQgY2xhc3MgQXBwU3RhcnRfTW9kZWxWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgVUlNZ3IuaW5zdC5zZXR1cChVSUxheWVyLk5VTSk7XG4gICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX01vZGVsVmlld2VyX0hVRCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19