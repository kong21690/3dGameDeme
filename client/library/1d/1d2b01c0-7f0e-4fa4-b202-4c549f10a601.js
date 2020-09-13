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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9hdmF0YXIvaHVkL1VJX0F2YXRhckhVRC50cyJdLCJuYW1lcyI6WyJnYW1lIiwiVUlDb250cm9sbGVyIiwiVUlMYXllciIsIkF2YXRhckJvZHlwYXJ0cyIsIlVJX0F2YXRhckhVRCIsIkhVRCIsImZuIiwiZXZ0IiwiYXJncyIsImVtaXQiLCJFVkVOVF9DSEFOR0VfUEFSVCIsInBhcnQiLCJzdWl0IiwiaSIsIk5VTSIsInBhcnROYW1lIiwiZ2V0UGFydE5hbWUiLCJvbkJ1dHRvbkV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFDQUMsTUFBQUEsWSwwQkFBQUEsWTs7QUFDQUMsTUFBQUEsTyxtQkFBQUEsTzs7QUFDQUMsTUFBQUEsZSxzQkFBQUEsZTs7Ozs7Ozs4QkFFSUMsWTs7O0FBRVQsZ0NBQWM7QUFBQTs7QUFBQSwyRkFDSix1Q0FESSxFQUNxQztBQUFBO0FBQUEsa0NBQVFDLEdBRDdDO0FBRWI7Ozs7c0NBRXFCO0FBRWxCLGdCQUFJQyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNwQlIsY0FBQUEsSUFBSSxDQUFDUyxJQUFMLENBQVU7QUFBQTtBQUFBLHNEQUFnQkMsaUJBQTFCLEVBQTZDRixJQUFJLENBQUNHLElBQWxELEVBQXVESCxJQUFJLENBQUNJLElBQTVEO0FBQ0gsYUFGRDs7QUFJQSxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHO0FBQUE7QUFBQSxvREFBZ0JDLEdBQXBDLEVBQXlDLEVBQUVELENBQTNDLEVBQThDO0FBQzFDLGtCQUFJRSxRQUFRLEdBQUc7QUFBQTtBQUFBLHNEQUFnQkMsV0FBaEIsQ0FBNEJILENBQTVCLENBQWY7QUFDQSxtQkFBS0ksYUFBTCxDQUFtQixTQUFTRixRQUFULEdBQW9CLFVBQXZDLEVBQW1EVCxFQUFuRCxFQUF1RCxJQUF2RCxFQUE2RDtBQUFFSyxnQkFBQUEsSUFBSSxFQUFFRSxDQUFSO0FBQVdELGdCQUFBQSxJQUFJLEVBQUU7QUFBakIsZUFBN0Q7QUFDQSxtQkFBS0ssYUFBTCxDQUFtQixTQUFTRixRQUFULEdBQW9CLFVBQXZDLEVBQW1EVCxFQUFuRCxFQUF1RCxJQUF2RCxFQUE2RDtBQUFFSyxnQkFBQUEsSUFBSSxFQUFFRSxDQUFSO0FBQVdELGdCQUFBQSxJQUFJLEVBQUU7QUFBakIsZUFBN0Q7QUFDQSxtQkFBS0ssYUFBTCxDQUFtQixTQUFTRixRQUFULEdBQW9CLFVBQXZDLEVBQW1EVCxFQUFuRCxFQUF1RCxJQUF2RCxFQUE2RDtBQUFFSyxnQkFBQUEsSUFBSSxFQUFFRSxDQUFSO0FBQVdELGdCQUFBQSxJQUFJLEVBQUU7QUFBakIsZUFBN0Q7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgVUlMYXllciwgVUlNZ3IgfSBmcm9tIFwiLi4vLi4vLi4vcWZ3L2Jhc2UvVUlNZ3JcIjtcbmltcG9ydCB7IEF2YXRhckJvZHlwYXJ0cyB9IGZyb20gXCIuLi9BdmF0YXJCb2R5cGFydHNcIjtcblxuZXhwb3J0IGNsYXNzIFVJX0F2YXRhckhVRCBleHRlbmRzIFVJQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NjZW5lcy9hdmF0YXIvaHVkL3VpX2F2YXRhcl9odWRfcGFuZWwnLCBVSUxheWVyLkhVRCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcblxuICAgICAgICBsZXQgZm4gPSAoZXZ0LCBhcmdzKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmVtaXQoQXZhdGFyQm9keXBhcnRzLkVWRU5UX0NIQU5HRV9QQVJULCBhcmdzLnBhcnQsYXJncy5zdWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXZhdGFyQm9keXBhcnRzLk5VTTsgKytpKSB7XG4gICAgICAgICAgICBsZXQgcGFydE5hbWUgPSBBdmF0YXJCb2R5cGFydHMuZ2V0UGFydE5hbWUoaSk7XG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uRXZlbnQoJ29wcy8nICsgcGFydE5hbWUgKyAnL2J0bl8wMDQnLCBmbiwgbnVsbCwgeyBwYXJ0OiBpLCBzdWl0OiAnMDA0JyB9KTtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25FdmVudCgnb3BzLycgKyBwYXJ0TmFtZSArICcvYnRuXzAwNicsIGZuLCBudWxsLCB7IHBhcnQ6IGksIHN1aXQ6ICcwMDYnIH0pO1xuICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkV2ZW50KCdvcHMvJyArIHBhcnROYW1lICsgJy9idG5fMDA4JywgZm4sIG51bGwsIHsgcGFydDogaSwgc3VpdDogJzAwOCcgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19