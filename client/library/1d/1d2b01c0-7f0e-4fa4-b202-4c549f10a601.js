System.register(["cc", "code-quality:cr", "../../../qfw/base/UIController.js", "../../../qfw/base/UIMgr.js", "../AvatarBodyparts.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, game, UIController, UILayer, AvatarBodyparts, _crd, UI_AvatarHUD;

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

  function _reportPossibleCrUseOfAvatarBodyparts(extras) {
    _reporterNs.report("AvatarBodyparts", "../AvatarBodyparts", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UILayer = _qfwBaseUIMgrJs.UILayer;
    }, function (_AvatarBodypartsJs) {
      AvatarBodyparts = _AvatarBodypartsJs.AvatarBodyparts;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "1d2b0HAfw5PpLICTFSfEKYB", "UI_AvatarHUD", _context.meta);

      _crd = true;

      _export("UI_AvatarHUD", UI_AvatarHUD = /*#__PURE__*/function (_ref) {
        _inherits(UI_AvatarHUD, _ref);

        function UI_AvatarHUD() {
          _classCallCheck(this, UI_AvatarHUD);

          return _possibleConstructorReturn(this, _getPrototypeOf(UI_AvatarHUD).call(this, 'scenes/avatar/hud/ui_avatar_hud_panel', (_crd && UILayer === void 0 ? (_reportPossibleCrUseOfUILayer({
            error: Error()
          }), UILayer) : UILayer).HUD));
        }

        _createClass(UI_AvatarHUD, [{
          key: "onCreated",
          value: function onCreated() {
            var fn = function fn(evt, args) {
              game.emit((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
                error: Error()
              }), AvatarBodyparts) : AvatarBodyparts).EVENT_CHANGE_PART, args.part, args.suit);
            };

            for (var i = 0; i < (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).NUM; ++i) {
              var partName = (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
                error: Error()
              }), AvatarBodyparts) : AvatarBodyparts).getPartName(i);
              this.onButtonEvent('ops/' + partName + '/btn_004', fn, null, {
                part: i,
                suit: '004'
              });
              this.onButtonEvent('ops/' + partName + '/btn_006', fn, null, {
                part: i,
                suit: '006'
              });
              this.onButtonEvent('ops/' + partName + '/btn_008', fn, null, {
                part: i,
                suit: '008'
              });
            }
          }
        }]);

        return UI_AvatarHUD;
      }(_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
        error: Error()
      }), UIController) : UIController));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvYXZhdGFyL2h1ZC9VSV9BdmF0YXJIVUQudHMiXSwibmFtZXMiOlsiZ2FtZSIsIlVJQ29udHJvbGxlciIsIlVJTGF5ZXIiLCJBdmF0YXJCb2R5cGFydHMiLCJVSV9BdmF0YXJIVUQiLCJIVUQiLCJmbiIsImV2dCIsImFyZ3MiLCJlbWl0IiwiRVZFTlRfQ0hBTkdFX1BBUlQiLCJwYXJ0Iiwic3VpdCIsImkiLCJOVU0iLCJwYXJ0TmFtZSIsImdldFBhcnROYW1lIiwib25CdXR0b25FdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsSSxPQUFBQSxJOzs7O0FBQ0FDLE1BQUFBLFksMEJBQUFBLFk7O0FBQ0FDLE1BQUFBLE8sbUJBQUFBLE87O0FBQ0FDLE1BQUFBLGUsc0JBQUFBLGU7Ozs7Ozs7OEJBRUlDLFk7OztBQUVULGdDQUFjO0FBQUE7O0FBQUEsMkZBQ0osdUNBREksRUFDcUM7QUFBQTtBQUFBLGtDQUFRQyxHQUQ3QztBQUViOzs7O3NDQUVxQjtBQUVsQixnQkFBSUMsRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDcEJSLGNBQUFBLElBQUksQ0FBQ1MsSUFBTCxDQUFVO0FBQUE7QUFBQSxzREFBZ0JDLGlCQUExQixFQUE2Q0YsSUFBSSxDQUFDRyxJQUFsRCxFQUF1REgsSUFBSSxDQUFDSSxJQUE1RDtBQUNILGFBRkQ7O0FBSUEsaUJBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRztBQUFBO0FBQUEsb0RBQWdCQyxHQUFwQyxFQUF5QyxFQUFFRCxDQUEzQyxFQUE4QztBQUMxQyxrQkFBSUUsUUFBUSxHQUFHO0FBQUE7QUFBQSxzREFBZ0JDLFdBQWhCLENBQTRCSCxDQUE1QixDQUFmO0FBQ0EsbUJBQUtJLGFBQUwsQ0FBbUIsU0FBU0YsUUFBVCxHQUFvQixVQUF2QyxFQUFtRFQsRUFBbkQsRUFBdUQsSUFBdkQsRUFBNkQ7QUFBRUssZ0JBQUFBLElBQUksRUFBRUUsQ0FBUjtBQUFXRCxnQkFBQUEsSUFBSSxFQUFFO0FBQWpCLGVBQTdEO0FBQ0EsbUJBQUtLLGFBQUwsQ0FBbUIsU0FBU0YsUUFBVCxHQUFvQixVQUF2QyxFQUFtRFQsRUFBbkQsRUFBdUQsSUFBdkQsRUFBNkQ7QUFBRUssZ0JBQUFBLElBQUksRUFBRUUsQ0FBUjtBQUFXRCxnQkFBQUEsSUFBSSxFQUFFO0FBQWpCLGVBQTdEO0FBQ0EsbUJBQUtLLGFBQUwsQ0FBbUIsU0FBU0YsUUFBVCxHQUFvQixVQUF2QyxFQUFtRFQsRUFBbkQsRUFBdUQsSUFBdkQsRUFBNkQ7QUFBRUssZ0JBQUFBLElBQUksRUFBRUUsQ0FBUjtBQUFXRCxnQkFBQUEsSUFBSSxFQUFFO0FBQWpCLGVBQTdEO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IFVJQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi8uLi9xZncvYmFzZS9VSUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFVJTGF5ZXIsIFVJTWdyIH0gZnJvbSBcIi4uLy4uLy4uL3Fmdy9iYXNlL1VJTWdyXCI7XG5pbXBvcnQgeyBBdmF0YXJCb2R5cGFydHMgfSBmcm9tIFwiLi4vQXZhdGFyQm9keXBhcnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBVSV9BdmF0YXJIVUQgZXh0ZW5kcyBVSUNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzY2VuZXMvYXZhdGFyL2h1ZC91aV9hdmF0YXJfaHVkX3BhbmVsJywgVUlMYXllci5IVUQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkNyZWF0ZWQoKSB7XG5cbiAgICAgICAgbGV0IGZuID0gKGV2dCwgYXJncykgPT4ge1xuICAgICAgICAgICAgZ2FtZS5lbWl0KEF2YXRhckJvZHlwYXJ0cy5FVkVOVF9DSEFOR0VfUEFSVCwgYXJncy5wYXJ0LGFyZ3Muc3VpdCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEF2YXRhckJvZHlwYXJ0cy5OVU07ICsraSkge1xuICAgICAgICAgICAgbGV0IHBhcnROYW1lID0gQXZhdGFyQm9keXBhcnRzLmdldFBhcnROYW1lKGkpO1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KCdvcHMvJyArIHBhcnROYW1lICsgJy9idG5fMDA0JywgZm4sIG51bGwsIHsgcGFydDogaSwgc3VpdDogJzAwNCcgfSk7XG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQoJ29wcy8nICsgcGFydE5hbWUgKyAnL2J0bl8wMDYnLCBmbiwgbnVsbCwgeyBwYXJ0OiBpLCBzdWl0OiAnMDA2JyB9KTtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25FdmVudCgnb3BzLycgKyBwYXJ0TmFtZSArICcvYnRuXzAwOCcsIGZuLCBudWxsLCB7IHBhcnQ6IGksIHN1aXQ6ICcwMDgnIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==