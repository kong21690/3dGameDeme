System.register(["cc", "code-quality:cr", "../../qfw/base/UIController.js", "../../qfw/base/UIMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, ButtonComponent, director, loader, TextureCube, find, UIController, UILayer, _crd, UI_SkyboxSetting;

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
    _reporterNs.report("UIController", "../../qfw/base/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUILayer(extras) {
    _reporterNs.report("UILayer", "../../qfw/base/UIMgr", _context.meta, extras);
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
      _cclegacy._RF.push({}, "4c7c4D8ATJAAIP6KEszSCsG", "UI_SkyboxSetting", _context.meta);

      _crd = true;

      _export("UI_SkyboxSetting", UI_SkyboxSetting = /*#__PURE__*/function (_ref) {
        _inherits(UI_SkyboxSetting, _ref);

        function UI_SkyboxSetting() {
          var _this;

          _classCallCheck(this, UI_SkyboxSetting);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(UI_SkyboxSetting).call(this, 'common/skybox/ui_skybox_setting', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).POPUP));
          _this._oldSelected = null;
          _this._isLoadingCubemap = false;
          return _this;
        }

        _createClass(UI_SkyboxSetting, [{
          key: "onCreated",
          value: function onCreated() {
            var _this2 = this;

            this.onButtonEvent('btn_close', function () {
              _this2.hide();
            });

            for (var i = 0; i < 10; ++i) {
              var index = i + 1;
              var sep = index < 10 ? '0' : '';
              var skyboxName = sep + index;
              var btnName = 'content/btn_0' + skyboxName;
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

        return UI_SkyboxSetting;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL2NvbW1vbi9za3lib3gvVUlfU2t5Ym94U2V0dGluZy50cyJdLCJuYW1lcyI6WyJCdXR0b25Db21wb25lbnQiLCJkaXJlY3RvciIsImxvYWRlciIsIlRleHR1cmVDdWJlIiwiZmluZCIsIlVJQ29udHJvbGxlciIsIlVJTGF5ZXIiLCJVSV9Ta3lib3hTZXR0aW5nIiwiUE9QVVAiLCJfb2xkU2VsZWN0ZWQiLCJfaXNMb2FkaW5nQ3ViZW1hcCIsIm9uQnV0dG9uRXZlbnQiLCJoaWRlIiwiaSIsImluZGV4Iiwic2VwIiwic2t5Ym94TmFtZSIsImJ0bk5hbWUiLCJidG4iLCJpbnRlcmFjdGFibGUiLCJsb2FkUmVzIiwiZXJyIiwiY3ViZW1hcCIsImdldFNjZW5lIiwiZ2xvYmFscyIsInNreWJveCIsImVudm1hcCIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNERBLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsUSxPQUFBQSxRO0FBQWdCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQThCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDMUhDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87Ozs7Ozs7a0NBRUlDLGdCOzs7QUFFVCxvQ0FBYztBQUFBOztBQUFBOztBQUNWLGdHQUFNLGlDQUFOLEVBQXlDO0FBQUE7QUFBQSxrQ0FBUUMsS0FBakQ7QUFEVSxnQkFJTkMsWUFKTSxHQUkwQixJQUoxQjtBQUFBLGdCQUtOQyxpQkFMTSxHQUtjLEtBTGQ7QUFBQTtBQUViOzs7O3NDQUtxQjtBQUFBOztBQUVsQixpQkFBS0MsYUFBTCxDQUFtQixXQUFuQixFQUErQixZQUFJO0FBQy9CLGNBQUEsTUFBSSxDQUFDQyxJQUFMO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCLEVBQUVBLENBQTFCLEVBQTZCO0FBQ3pCLGtCQUFJQyxLQUFLLEdBQUdELENBQUMsR0FBRyxDQUFoQjtBQUNBLGtCQUFJRSxHQUFHLEdBQUdELEtBQUssR0FBRyxFQUFSLEdBQWEsR0FBYixHQUFtQixFQUE3QjtBQUNBLGtCQUFJRSxVQUFVLEdBQUdELEdBQUcsR0FBR0QsS0FBdkI7QUFDQSxrQkFBSUcsT0FBTyxHQUFHLGtCQUFrQkQsVUFBaEM7QUFDQSxtQkFBS0wsYUFBTCxDQUFtQk0sT0FBbkIsRUFBNEIsVUFBQ0MsR0FBRCxFQUF1QkYsVUFBdkIsRUFBOEM7QUFDdEUsb0JBQUksTUFBSSxDQUFDTixpQkFBVCxFQUE0QjtBQUN4QjtBQUNIOztBQUVEUSxnQkFBQUEsR0FBRyxDQUFDQyxZQUFKLEdBQW1CLEtBQW5COztBQUNBLG9CQUFJLE1BQUksQ0FBQ1YsWUFBVCxFQUF1QjtBQUNuQixrQkFBQSxNQUFJLENBQUNBLFlBQUwsQ0FBa0JVLFlBQWxCLEdBQWlDLElBQWpDO0FBQ0g7O0FBQ0QsZ0JBQUEsTUFBSSxDQUFDVixZQUFMLEdBQW9CUyxHQUFwQjtBQUVBLGdCQUFBLE1BQUksQ0FBQ1IsaUJBQUwsR0FBeUIsSUFBekI7QUFDQVIsZ0JBQUFBLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZSw4QkFBOEJKLFVBQTdDLEVBQXlEYixXQUF6RCxFQUFzRSxVQUFDa0IsR0FBRCxFQUFNQyxPQUFOLEVBQStCO0FBQ2pHLGtCQUFBLE1BQUksQ0FBQ1osaUJBQUwsR0FBeUIsS0FBekI7QUFDQVQsa0JBQUFBLFFBQVEsQ0FBQ3NCLFFBQVQsR0FBb0JDLE9BQXBCLENBQTRCQyxNQUE1QixDQUFtQ0MsTUFBbkMsR0FBNENKLE9BQTVDO0FBQ0gsaUJBSEQ7QUFLSCxlQWpCRCxFQWlCRyxJQWpCSCxFQWlCU04sVUFqQlQ7O0FBbUJBLGtCQUFHSCxDQUFDLElBQUksQ0FBUixFQUFVO0FBQ04scUJBQUtKLFlBQUwsR0FBcUJMLElBQUksQ0FBQ2EsT0FBRCxFQUFTLEtBQUtVLElBQWQsQ0FBTCxDQUFrQ0MsWUFBbEMsQ0FBK0M1QixlQUEvQyxDQUFwQjtBQUNBLHFCQUFLUyxZQUFMLENBQWtCVSxZQUFsQixHQUFpQyxLQUFqQztBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdjMsIEV2ZW50VG91Y2gsIEJ1dHRvbkNvbXBvbmVudCwgZGlyZWN0b3IsIHZpZXcsIGxvYWRlciwgVGV4dHVyZUN1YmUsIFRvZ2dsZUNvbXBvbmVudCwgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlcic7XG5pbXBvcnQgeyBVSUxheWVyIH0gZnJvbSAnLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuXG5leHBvcnQgY2xhc3MgVUlfU2t5Ym94U2V0dGluZyBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NvbW1vbi9za3lib3gvdWlfc2t5Ym94X3NldHRpbmcnLCBVSUxheWVyLlBPUFVQKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbGRTZWxlY3RlZDogQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmdDdWJlbWFwID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuXG4gICAgICAgIHRoaXMub25CdXR0b25FdmVudCgnYnRuX2Nsb3NlJywoKT0+e1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICBsZXQgc2VwID0gaW5kZXggPCAxMCA/ICcwJyA6ICcnO1xuICAgICAgICAgICAgbGV0IHNreWJveE5hbWUgPSBzZXAgKyBpbmRleDtcbiAgICAgICAgICAgIGxldCBidG5OYW1lID0gJ2NvbnRlbnQvYnRuXzAnICsgc2t5Ym94TmFtZTtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25FdmVudChidG5OYW1lLCAoYnRuOiBCdXR0b25Db21wb25lbnQsIHNreWJveE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmdDdWJlbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX29sZFNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkID0gYnRuO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nQ3ViZW1hcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoJ2NvbW1vbi9za3lib3gvY3ViZW1hcF9za3knICsgc2t5Ym94TmFtZSwgVGV4dHVyZUN1YmUsIChlcnIsIGN1YmVtYXA6IFRleHR1cmVDdWJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZ0N1YmVtYXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3IuZ2V0U2NlbmUoKS5nbG9iYWxzLnNreWJveC5lbnZtYXAgPSBjdWJlbWFwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9LCB0aGlzLCBza3lib3hOYW1lKTtcblxuICAgICAgICAgICAgaWYoaSA9PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZCA9IChmaW5kKGJ0bk5hbWUsdGhpcy5ub2RlKSBhcyBOb2RlKS5nZXRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=