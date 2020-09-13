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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9za3lib3gvaHVkL1VJX1NreWJveF9IVUQudHMiXSwibmFtZXMiOlsiQnV0dG9uQ29tcG9uZW50IiwiZGlyZWN0b3IiLCJsb2FkZXIiLCJUZXh0dXJlQ3ViZSIsImZpbmQiLCJVSUNvbnRyb2xsZXIiLCJVSUxheWVyIiwiVUlfU2t5Ym94SFVEIiwiSFVEIiwiX29sZFNlbGVjdGVkIiwiX2lzTG9hZGluZ0N1YmVtYXAiLCJpIiwiaW5kZXgiLCJzZXAiLCJza3lib3hOYW1lIiwiYnRuTmFtZSIsIm9uQnV0dG9uRXZlbnQiLCJidG4iLCJpbnRlcmFjdGFibGUiLCJsb2FkUmVzIiwiZXJyIiwiY3ViZW1hcCIsImdldFNjZW5lIiwiZ2xvYmFscyIsInNreWJveCIsImVudm1hcCIsIm5vZGUiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNERBLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsUSxPQUFBQSxRO0FBQWdCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQThCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDMUhDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87Ozs7Ozs7OEJBRUlDLFk7OztBQUVULGdDQUFjO0FBQUE7O0FBQUE7O0FBQ1YsNEZBQU0sdUNBQU4sRUFBK0M7QUFBQTtBQUFBLGtDQUFRQyxHQUF2RDtBQURVLGdCQUlOQyxZQUpNLEdBSTBCLElBSjFCO0FBQUEsZ0JBS05DLGlCQUxNLEdBS2MsS0FMZDtBQUFBO0FBRWI7Ozs7c0NBS3FCO0FBQUE7O0FBQ2xCLGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0IsRUFBRUEsQ0FBMUIsRUFBNkI7QUFDekIsa0JBQUlDLEtBQUssR0FBR0QsQ0FBQyxHQUFHLENBQWhCO0FBQ0Esa0JBQUlFLEdBQUcsR0FBR0QsS0FBSyxHQUFHLEVBQVIsR0FBYSxHQUFiLEdBQW1CLEVBQTdCO0FBQ0Esa0JBQUlFLFVBQVUsR0FBR0QsR0FBRyxHQUFHRCxLQUF2QjtBQUNBLGtCQUFJRyxPQUFPLEdBQUcsa0NBQWtDRCxVQUFoRDtBQUNBLG1CQUFLRSxhQUFMLENBQW1CRCxPQUFuQixFQUE0QixVQUFDRSxHQUFELEVBQXVCSCxVQUF2QixFQUE4QztBQUN0RSxvQkFBSSxNQUFJLENBQUNKLGlCQUFULEVBQTRCO0FBQ3hCO0FBQ0g7O0FBRURPLGdCQUFBQSxHQUFHLENBQUNDLFlBQUosR0FBbUIsS0FBbkI7O0FBQ0Esb0JBQUksTUFBSSxDQUFDVCxZQUFULEVBQXVCO0FBQ25CLGtCQUFBLE1BQUksQ0FBQ0EsWUFBTCxDQUFrQlMsWUFBbEIsR0FBaUMsSUFBakM7QUFDSDs7QUFDRCxnQkFBQSxNQUFJLENBQUNULFlBQUwsR0FBb0JRLEdBQXBCO0FBRUEsZ0JBQUEsTUFBSSxDQUFDUCxpQkFBTCxHQUF5QixJQUF6QjtBQUNBUixnQkFBQUEsTUFBTSxDQUFDaUIsT0FBUCxDQUFlLDhCQUE4QkwsVUFBN0MsRUFBeURYLFdBQXpELEVBQXNFLFVBQUNpQixHQUFELEVBQU1DLE9BQU4sRUFBK0I7QUFDakcsa0JBQUEsTUFBSSxDQUFDWCxpQkFBTCxHQUF5QixLQUF6QjtBQUNBVCxrQkFBQUEsUUFBUSxDQUFDcUIsUUFBVCxHQUFvQkMsT0FBcEIsQ0FBNEJDLE1BQTVCLENBQW1DQyxNQUFuQyxHQUE0Q0osT0FBNUM7QUFDSCxpQkFIRDtBQUtILGVBakJELEVBaUJHLElBakJILEVBaUJTUCxVQWpCVDs7QUFtQkEsa0JBQUdILENBQUMsSUFBSSxDQUFSLEVBQVU7QUFDTixxQkFBS0YsWUFBTCxHQUFxQkwsSUFBSSxDQUFDVyxPQUFELEVBQVMsS0FBS1csSUFBZCxDQUFMLENBQWtDQyxZQUFsQyxDQUErQzNCLGVBQS9DLENBQXBCO0FBQ0EscUJBQUtTLFlBQUwsQ0FBa0JTLFlBQWxCLEdBQWlDLEtBQWpDO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgRXZlbnRUb3VjaCwgQnV0dG9uQ29tcG9uZW50LCBkaXJlY3RvciwgdmlldywgbG9hZGVyLCBUZXh0dXJlQ3ViZSwgVG9nZ2xlQ29tcG9uZW50LCBmaW5kIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyJztcbmltcG9ydCB7IFVJTGF5ZXIsIFVJTWdyIH0gZnJvbSAnLi4vLi4vLi4vcWZ3L2Jhc2UvVUlNZ3InO1xuXG5leHBvcnQgY2xhc3MgVUlfU2t5Ym94SFVEIGV4dGVuZHMgVUlDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2NlbmVzL3NreWJveC9odWQvdWlfc2t5Ym94X2h1ZF9wYW5lbCcsIFVJTGF5ZXIuSFVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbGRTZWxlY3RlZDogQnV0dG9uQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmdDdWJlbWFwID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgb25DcmVhdGVkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgbGV0IHNlcCA9IGluZGV4IDwgMTAgPyAnMCcgOiAnJztcbiAgICAgICAgICAgIGxldCBza3lib3hOYW1lID0gc2VwICsgaW5kZXg7XG4gICAgICAgICAgICBsZXQgYnRuTmFtZSA9ICdTY3JvbGxWaWV3L3ZpZXcvY29udGVudC9idG5fMCcgKyBza3lib3hOYW1lO1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KGJ0bk5hbWUsIChidG46IEJ1dHRvbkNvbXBvbmVudCwgc2t5Ym94TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZ0N1YmVtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fb2xkU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb2xkU2VsZWN0ZWQuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fb2xkU2VsZWN0ZWQgPSBidG47XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmdDdWJlbWFwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2FkZXIubG9hZFJlcygnY29tbW9uL3NreWJveC9jdWJlbWFwX3NreScgKyBza3lib3hOYW1lLCBUZXh0dXJlQ3ViZSwgKGVyciwgY3ViZW1hcDogVGV4dHVyZUN1YmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nQ3ViZW1hcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvci5nZXRTY2VuZSgpLmdsb2JhbHMuc2t5Ym94LmVudm1hcCA9IGN1YmVtYXA7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0sIHRoaXMsIHNreWJveE5hbWUpO1xuXG4gICAgICAgICAgICBpZihpID09IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkID0gKGZpbmQoYnRuTmFtZSx0aGlzLm5vZGUpIGFzIE5vZGUpLmdldENvbXBvbmVudChCdXR0b25Db21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29sZFNlbGVjdGVkLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==