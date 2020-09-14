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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9jb21tb24vc2t5Ym94L1VJX1NreWJveFNldHRpbmcudHMiXSwibmFtZXMiOlsiQnV0dG9uQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJsb2FkZXIiLCJUZXh0dXJlQ3ViZSIsImZpbmQiLCJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiVUlfU2t5Ym94U2V0dGluZyIsIlBPUFVQIiwiX29sZFNlbGVjdGVkIiwiX2lzTG9hZGluZ0N1YmVtYXAiLCJvbkJ1dHRvbkV2ZW50IiwiaGlkZSIsImkiLCJpbmRleCIsInNlcCIsInNreWJveE5hbWUiLCJidG5OYW1lIiwiYnRuIiwiaW50ZXJhY3RhYmxlIiwibG9hZFJlcyIsImVyciIsImN1YmVtYXAiLCJnZXRTY2VuZSIsImdsb2JhbHMiLCJza3lib3giLCJlbnZtYXAiLCJub2RlIiwiZ2V0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREQSxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFEsT0FBQUEsUTtBQUFnQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUE4QkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQzFIQyxNQUFBQSxZLDBCQUFBQSxZOztBQUNBQyxNQUFBQSxPLG1CQUFBQSxPOzs7Ozs7O2tDQUVJQyxnQjs7O0FBRVQsb0NBQWM7QUFBQTs7QUFBQTs7QUFDVixnR0FBTSxpQ0FBTixFQUF5QztBQUFBO0FBQUEsa0NBQVFDLEtBQWpEO0FBRFUsZ0JBSU5DLFlBSk0sR0FJMEIsSUFKMUI7QUFBQSxnQkFLTkMsaUJBTE0sR0FLYyxLQUxkO0FBQUE7QUFFYjs7OztzQ0FLcUI7QUFBQTs7QUFFbEIsaUJBQUtDLGFBQUwsQ0FBbUIsV0FBbkIsRUFBK0IsWUFBSTtBQUMvQixjQUFBLE1BQUksQ0FBQ0MsSUFBTDtBQUNILGFBRkQ7O0FBSUEsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QixFQUFFQSxDQUExQixFQUE2QjtBQUN6QixrQkFBSUMsS0FBSyxHQUFHRCxDQUFDLEdBQUcsQ0FBaEI7QUFDQSxrQkFBSUUsR0FBRyxHQUFHRCxLQUFLLEdBQUcsRUFBUixHQUFhLEdBQWIsR0FBbUIsRUFBN0I7QUFDQSxrQkFBSUUsVUFBVSxHQUFHRCxHQUFHLEdBQUdELEtBQXZCO0FBQ0Esa0JBQUlHLE9BQU8sR0FBRyxrQkFBa0JELFVBQWhDO0FBQ0EsbUJBQUtMLGFBQUwsQ0FBbUJNLE9BQW5CLEVBQTRCLFVBQUNDLEdBQUQsRUFBdUJGLFVBQXZCLEVBQThDO0FBQ3RFLG9CQUFJLE1BQUksQ0FBQ04saUJBQVQsRUFBNEI7QUFDeEI7QUFDSDs7QUFFRFEsZ0JBQUFBLEdBQUcsQ0FBQ0MsWUFBSixHQUFtQixLQUFuQjs7QUFDQSxvQkFBSSxNQUFJLENBQUNWLFlBQVQsRUFBdUI7QUFDbkIsa0JBQUEsTUFBSSxDQUFDQSxZQUFMLENBQWtCVSxZQUFsQixHQUFpQyxJQUFqQztBQUNIOztBQUNELGdCQUFBLE1BQUksQ0FBQ1YsWUFBTCxHQUFvQlMsR0FBcEI7QUFFQSxnQkFBQSxNQUFJLENBQUNSLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0FSLGdCQUFBQSxNQUFNLENBQUNrQixPQUFQLENBQWUsOEJBQThCSixVQUE3QyxFQUF5RGIsV0FBekQsRUFBc0UsVUFBQ2tCLEdBQUQsRUFBTUMsT0FBTixFQUErQjtBQUNqRyxrQkFBQSxNQUFJLENBQUNaLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0FULGtCQUFBQSxRQUFRLENBQUNzQixRQUFULEdBQW9CQyxPQUFwQixDQUE0QkMsTUFBNUIsQ0FBbUNDLE1BQW5DLEdBQTRDSixPQUE1QztBQUNILGlCQUhEO0FBS0gsZUFqQkQsRUFpQkcsSUFqQkgsRUFpQlNOLFVBakJUOztBQW1CQSxrQkFBR0gsQ0FBQyxJQUFJLENBQVIsRUFBVTtBQUNOLHFCQUFLSixZQUFMLEdBQXFCTCxJQUFJLENBQUNhLE9BQUQsRUFBUyxLQUFLVSxJQUFkLENBQUwsQ0FBa0NDLFlBQWxDLENBQStDNUIsZUFBL0MsQ0FBcEI7QUFDQSxxQkFBS1MsWUFBTCxDQUFrQlUsWUFBbEIsR0FBaUMsS0FBakM7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzLCBFdmVudFRvdWNoLCBCdXR0b25Db21wb25lbnQsIGRpcmVjdG9yLCB2aWV3LCBsb2FkZXIsIFRleHR1cmVDdWJlLCBUb2dnbGVDb21wb25lbnQsIGZpbmQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVUlMYXllciB9IGZyb20gJy4uLy4uL3Fmdy9iYXNlL1VJTWdyJztcblxuZXhwb3J0IGNsYXNzIFVJX1NreWJveFNldHRpbmcgZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjb21tb24vc2t5Ym94L3VpX3NreWJveF9zZXR0aW5nJywgVUlMYXllci5QT1BVUCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb2xkU2VsZWN0ZWQ6IEJ1dHRvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nQ3ViZW1hcCA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcblxuICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQoJ2J0bl9jbG9zZScsKCk9PntcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgbGV0IHNlcCA9IGluZGV4IDwgMTAgPyAnMCcgOiAnJztcbiAgICAgICAgICAgIGxldCBza3lib3hOYW1lID0gc2VwICsgaW5kZXg7XG4gICAgICAgICAgICBsZXQgYnRuTmFtZSA9ICdjb250ZW50L2J0bl8wJyArIHNreWJveE5hbWU7XG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQoYnRuTmFtZSwgKGJ0bjogQnV0dG9uQ29tcG9uZW50LCBza3lib3hOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nQ3ViZW1hcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9vbGRTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9vbGRTZWxlY3RlZCA9IGJ0bjtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZ0N1YmVtYXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKCdjb21tb24vc2t5Ym94L2N1YmVtYXBfc2t5JyArIHNreWJveE5hbWUsIFRleHR1cmVDdWJlLCAoZXJyLCBjdWJlbWFwOiBUZXh0dXJlQ3ViZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmdDdWJlbWFwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdG9yLmdldFNjZW5lKCkuZ2xvYmFscy5za3lib3guZW52bWFwID0gY3ViZW1hcDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSwgdGhpcywgc2t5Ym94TmFtZSk7XG5cbiAgICAgICAgICAgIGlmKGkgPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkU2VsZWN0ZWQgPSAoZmluZChidG5OYW1lLHRoaXMubm9kZSkgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkU2VsZWN0ZWQuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19