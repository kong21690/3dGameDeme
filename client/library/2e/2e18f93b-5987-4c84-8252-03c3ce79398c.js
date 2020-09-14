System.register(["cc", "code-quality:cr", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, ButtonComponent, director, loader, TextureCube, find, UIController, UILayer, _crd, UI_SkyboxHUD;

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

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      ButtonComponent = _cc.ButtonComponent;
      director = _cc.director;
      loader = _cc.loader;
      TextureCube = _cc.TextureCube;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2e18fk7WYdMhIJSA8POeTmM", "UI_Skybox_HUD", _context.meta);

      _crd = true;

      _export("UI_SkyboxHUD", UI_SkyboxHUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_SkyboxHUD, _ref);

        function UI_SkyboxHUD() {
          var _this;

          _classCallCheck(this, UI_SkyboxHUD);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(UI_SkyboxHUD).call(this, 'scenes/skybox/hud/ui_skybox_hud_panel', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
          _this._oldSelected = null;
          _this._isLoadingCubemap = false;
          return _this;
        }

        _createClass(UI_SkyboxHUD, [{
          key: "onCreated",
          value: function onCreated() {
            var _this2 = this;

            for (var i = 0; i < 10; ++i) {
              var index = i + 1;
              var sep = index < 10 ? '0' : '';
              var skyboxName = sep + index;
              var btnName = 'ScrollView/view/content/btn_0' + skyboxName;
              this.onButtonEvent(btnName, function (btn, skyboxName) {
                if (_this2._isLoadingCubemap) {
                  return;
                }

                btn.interactable = false;

                if (_this2._oldSelected) {
                  _this2._oldSelected.interactable = true;
                }

                _this2._oldSelected = btn;
                _this2._isLoadingCubemap = true;
                loader.loadRes('common/skybox/cubemap_sky' + skyboxName, TextureCube, function (err, cubemap) {
                  _this2._isLoadingCubemap = false;
                  director.getScene().globals.skybox.envmap = cubemap;
                });
              }, this, skyboxName);

              if (i == 0) {
                this._oldSelected = find(btnName, this.node).getComponent(ButtonComponent);
                this._oldSelected.interactable = false;
              }
            }
          }
        }]);

        return UI_SkyboxHUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc2t5Ym94L2h1ZC9VSV9Ta3lib3hfSFVELnRzIl0sIm5hbWVzIjpbIkJ1dHRvbkNvbXBvbmVudCIsImRpcmVjdG9yIiwibG9hZGVyIiwiVGV4dHVyZUN1YmUiLCJmaW5kIiwiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIlVJX1NreWJveEhVRCIsIkhVRCIsIl9vbGRTZWxlY3RlZCIsIl9pc0xvYWRpbmdDdWJlbWFwIiwiaSIsImluZGV4Iiwic2VwIiwic2t5Ym94TmFtZSIsImJ0bk5hbWUiLCJvbkJ1dHRvbkV2ZW50IiwiYnRuIiwiaW50ZXJhY3RhYmxlIiwibG9hZFJlcyIsImVyciIsImN1YmVtYXAiLCJnZXRTY2VuZSIsImdsb2JhbHMiLCJza3lib3giLCJlbnZtYXAiLCJub2RlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREQSxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFEsT0FBQUEsUTtBQUFnQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUE4QkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzFIQyxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPOzs7Ozs7OzhCQUVJQyxZOzs7QUFFVCxnQ0FBYztBQUFBOztBQUFBOztBQUNWLDRGQUFNLHVDQUFOLEVBQStDO0FBQUE7QUFBQSxrQ0FBUUMsR0FBdkQ7QUFEVSxnQkFJTkMsWUFKTSxHQUkwQixJQUoxQjtBQUFBLGdCQUtOQyxpQkFMTSxHQUtjLEtBTGQ7QUFBQTtBQUViOzs7O3NDQUtxQjtBQUFBOztBQUNsQixpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUVBLENBQTFCLEVBQTZCO0FBQ3pCLGtCQUFJQyxLQUFLLEdBQUdELENBQUMsR0FBRyxDQUFoQjtBQUNBLGtCQUFJRSxHQUFHLEdBQUdELEtBQUssR0FBRyxFQUFSLEdBQWEsR0FBYixHQUFtQixFQUE3QjtBQUNBLGtCQUFJRSxVQUFVLEdBQUdELEdBQUcsR0FBR0QsS0FBdkI7QUFDQSxrQkFBSUcsT0FBTyxHQUFHLGtDQUFrQ0QsVUFBaEQ7QUFDQSxtQkFBS0UsYUFBTCxDQUFtQkQsT0FBbkIsRUFBNEIsVUFBQ0UsR0FBRCxFQUF1QkgsVUFBdkIsRUFBOEM7QUFDdEUsb0JBQUksTUFBSSxDQUFDSixpQkFBVCxFQUE0QjtBQUN4QjtBQUNIOztBQUVETyxnQkFBQUEsR0FBRyxDQUFDQyxZQUFKLEdBQW1CLEtBQW5COztBQUNBLG9CQUFJLE1BQUksQ0FBQ1QsWUFBVCxFQUF1QjtBQUNuQixrQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0JTLFlBQWxCLEdBQWlDLElBQWpDO0FBQ0g7O0FBQ0QsZ0JBQUEsTUFBSSxDQUFDVCxZQUFMLEdBQW9CUSxHQUFwQjtBQUVBLGdCQUFBLE1BQUksQ0FBQ1AsaUJBQUwsR0FBeUIsSUFBekI7QUFDQVIsZ0JBQUFBLE1BQU0sQ0FBQ2lCLE9BQVAsQ0FBZSw4QkFBOEJMLFVBQTdDLEVBQXlEWCxXQUF6RCxFQUFzRSxVQUFDaUIsR0FBRCxFQUFNQyxPQUFOLEVBQStCO0FBQ2pHLGtCQUFBLE1BQUksQ0FBQ1gsaUJBQUwsR0FBeUIsS0FBekI7QUFDQVQsa0JBQUFBLFFBQVEsQ0FBQ3FCLFFBQVQsR0FBb0JDLE9BQXBCLENBQTRCQyxNQUE1QixDQUFtQ0MsTUFBbkMsR0FBNENKLE9BQTVDO0FBQ0gsaUJBSEQ7QUFLSCxlQWpCRCxFQWlCRyxJQWpCSCxFQWlCU1AsVUFqQlQ7O0FBbUJBLGtCQUFHSCxDQUFDLElBQUksQ0FBUixFQUFVO0FBQ04scUJBQUtGLFlBQUwsR0FBcUJMLElBQUksQ0FBQ1csT0FBRCxFQUFTLEtBQUtXLElBQWQsQ0FBTCxDQUFrQ0MsWUFBbEMsQ0FBK0MzQixlQUEvQyxDQUFwQjtBQUNBLHFCQUFLUyxZQUFMLENBQWtCUyxZQUFsQixHQUFpQyxLQUFqQztBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgZGlyZWN0b3IsIHZpZXcsIGxvYWRlciwgVGV4dHVyZUN1YmUsIFRvZ2dsZUNvbXBvbmVudCwgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uLy4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlcic7XG5pbXBvcnQgeyBVSUxheWVyLCBVSU1nciB9IGZyb20gJy4uLy4uLy4uL3Fmdy9iYXNlL1VJTWdyJztcblxuZXhwb3J0IGNsYXNzIFVJX1NreWJveEhVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9za3lib3gvaHVkL3VpX3NreWJveF9odWRfcGFuZWwnLCBVSUxheWVyLkhVRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb2xkU2VsZWN0ZWQ6IEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nQ3ViZW1hcCA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIGxldCBzZXAgPSBpbmRleCA8IDEwID8gJzAnIDogJyc7XG4gICAgICAgICAgICBsZXQgc2t5Ym94TmFtZSA9IHNlcCArIGluZGV4O1xuICAgICAgICAgICAgbGV0IGJ0bk5hbWUgPSAnU2Nyb2xsVmlldy92aWV3L2NvbnRlbnQvYnRuXzAnICsgc2t5Ym94TmFtZTtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25FdmVudChidG5OYW1lLCAoYnRuOiBCdXR0b25Db21wb25lbnQsIHNreWJveE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmdDdWJlbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29sZFNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkID0gYnRuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nQ3ViZW1hcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoJ2NvbW1vbi9za3lib3gvY3ViZW1hcF9za3knICsgc2t5Ym94TmFtZSwgVGV4dHVyZUN1YmUsIChlcnIsIGN1YmVtYXA6IFRleHR1cmVDdWJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZ0N1YmVtYXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3IuZ2V0U2NlbmUoKS5nbG9iYWxzLnNreWJveC5lbnZtYXAgPSBjdWJlbWFwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCB0aGlzLCBza3lib3hOYW1lKTtcblxuICAgICAgICAgICAgaWYoaSA9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZCA9IChmaW5kKGJ0bk5hbWUsdGhpcy5ub2RlKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=