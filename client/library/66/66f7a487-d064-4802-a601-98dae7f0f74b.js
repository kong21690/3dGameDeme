System.register(["cc", "code-quality:cr", "./AvatarBodyparts.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Prefab, Texture2D, loader, instantiate, find, SkinningModelComponent, ImageAsset, game, AvatarBodyparts, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Avatar;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAvatarBodyparts(extras) {
    _reporterNs.report("AvatarBodyparts", "./AvatarBodyparts", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      Texture2D = _cc.Texture2D;
      loader = _cc.loader;
      instantiate = _cc.instantiate;
      find = _cc.find;
      SkinningModelComponent = _cc.SkinningModelComponent;
      ImageAsset = _cc.ImageAsset;
      game = _cc.game;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AvatarBodypartsJs) {
      AvatarBodyparts = _AvatarBodypartsJs.AvatarBodyparts;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "66f7aSH0GRIAqYBmNrn8PdL", "Avatar", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Avatar", Avatar = (_dec = ccclass('Avatar'), _dec2 = property({
        type: Texture2D
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(Avatar, _Component);

        function Avatar() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Avatar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.bodyparts = [];
          _this._rootNode = void 0;

          _initializerDefineProperty(_this, "tex", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(Avatar, [{
          key: "start",
          value: function start() {
            this.changeBodypart((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).HEAD, '004');
            this.changeBodypart((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).BODY, '004');
            this.changeBodypart((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).HAND, '004');
            this.changeBodypart((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).LEG, '004');
            game.on((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).EVENT_CHANGE_PART, this.changeBodypart, this);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            game.off((_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).EVENT_CHANGE_PART, this.changeBodypart, this);
          }
        }, {
          key: "changeBodypart",
          value: function changeBodypart(part, suitId) {
            var _this2 = this;

            var oldPart = this.bodyparts[part];

            if (oldPart) {
              oldPart.removeFromParent();
              oldPart.destroy();
              this.bodyparts[part] = null;
            }

            var partName = '';

            if (part == (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
              error: Error()
            }), AvatarBodyparts) : AvatarBodyparts).WEAPON) {
              partName = 'ch_we_hou_' + suitId;
            } else {
              partName = 'ch_pc_hou_' + suitId + '_' + (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
                error: Error()
              }), AvatarBodyparts) : AvatarBodyparts).getPartName(part);
            }

            loader.loadRes('scenes/avatar/prefabs/' + partName, Prefab, function (err, prefab) {
              var node = instantiate(prefab);

              if (part == (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
                error: Error()
              }), AvatarBodyparts) : AvatarBodyparts).WEAPON) {//this._weaponPointR.addChild(node);
              } else {
                _this2.node.addChild(node);
              }

              _this2.bodyparts[part] = node;
              var meshNode = find('RootNode/' + partName, node);
              var albedoMapName = (_crd && AvatarBodyparts === void 0 ? (_reportPossibleCrUseOfAvatarBodyparts({
                error: Error()
              }), AvatarBodyparts) : AvatarBodyparts).getNameOfBodypart(part, suitId) + '_d';
              loader.loadRes('scenes/avatar/textures/' + albedoMapName, ImageAsset, function (err, tex) {
                if (tex) {
                  meshNode.getComponent(SkinningModelComponent).material.setProperty('albedoMap', tex._texture);
                }
              });
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            var r = this.node.eulerAngles.clone();
            r.y += deltaTime * 10;
            this.node.eulerAngles = r;
          }
        }]);

        return Avatar;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tex", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9hdmF0YXIvQXZhdGFyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJUZXh0dXJlMkQiLCJsb2FkZXIiLCJpbnN0YW50aWF0ZSIsImZpbmQiLCJTa2lubmluZ01vZGVsQ29tcG9uZW50IiwiSW1hZ2VBc3NldCIsImdhbWUiLCJBdmF0YXJCb2R5cGFydHMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdmF0YXIiLCJ0eXBlIiwiYm9keXBhcnRzIiwiX3Jvb3ROb2RlIiwiY2hhbmdlQm9keXBhcnQiLCJIRUFEIiwiQk9EWSIsIkhBTkQiLCJMRUciLCJvbiIsIkVWRU5UX0NIQU5HRV9QQVJUIiwib2ZmIiwicGFydCIsInN1aXRJZCIsIm9sZFBhcnQiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsInBhcnROYW1lIiwiV0VBUE9OIiwiZ2V0UGFydE5hbWUiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwibWVzaE5vZGUiLCJhbGJlZG9NYXBOYW1lIiwiZ2V0TmFtZU9mQm9keXBhcnQiLCJ0ZXgiLCJnZXRDb21wb25lbnQiLCJtYXRlcmlhbCIsInNldFByb3BlcnR5IiwiX3RleHR1cmUiLCJkZWx0YVRpbWUiLCJyIiwiZXVsZXJBbmdsZXMiLCJjbG9uZSIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJO0FBQWtDQyxNQUFBQSxzQixPQUFBQSxzQjtBQUF3QkMsTUFB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QUF2RCxDQUFtRSxXQUFuRSxFQUFnRkgsR0FBRyxDQUFDSSxRQUFwRjtBQUNIO0FBQ0osZUFKRDtBQU1ILGFBbkJEO0FBb0JIOzs7aUNBRU1DLFMsRUFBbUI7QUFDdEI7QUFDQSxnQkFBSUMsQ0FBQyxHQUFHLEtBQUtYLElBQUwsQ0FBVVksV0FBVixDQUFzQkMsS0FBdEIsRUFBUjtBQUNBRixZQUFBQSxDQUFDLENBQUNHLENBQUYsSUFBT0osU0FBUyxHQUFHLEVBQW5CO0FBQ0EsaUJBQUtWLElBQUwsQ0FBVVksV0FBVixHQUF3QkQsQ0FBeEI7QUFDSDs7OztRQXBFdUI5QyxTOzs7OztpQkFTQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFRleHR1cmUyRCwgbG9hZGVyLCBpbnN0YW50aWF0ZSwgZmluZCwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFNraW5uaW5nTW9kZWxDb21wb25lbnQsIEltYWdlQXNzZXQsIGdhbWUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBBdmF0YXJCb2R5cGFydHMgfSBmcm9tICcuL0F2YXRhckJvZHlwYXJ0cyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQXZhdGFyJylcbmV4cG9ydCBjbGFzcyBBdmF0YXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgcHJpdmF0ZSBib2R5cGFydHM6IE5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgX3Jvb3ROb2RlOiBOb2RlO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogVGV4dHVyZTJEIH0pXG4gICAgcHVibGljIHRleDogVGV4dHVyZTJEID0gbnVsbDtcblxuXG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmNoYW5nZUJvZHlwYXJ0KEF2YXRhckJvZHlwYXJ0cy5IRUFELCAnMDA0Jyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQm9keXBhcnQoQXZhdGFyQm9keXBhcnRzLkJPRFksICcwMDQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5cGFydChBdmF0YXJCb2R5cGFydHMuSEFORCwgJzAwNCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUJvZHlwYXJ0KEF2YXRhckJvZHlwYXJ0cy5MRUcsICcwMDQnKTtcblxuICAgICAgICBnYW1lLm9uKEF2YXRhckJvZHlwYXJ0cy5FVkVOVF9DSEFOR0VfUEFSVCwgdGhpcy5jaGFuZ2VCb2R5cGFydCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBnYW1lLm9mZihBdmF0YXJCb2R5cGFydHMuRVZFTlRfQ0hBTkdFX1BBUlQsIHRoaXMuY2hhbmdlQm9keXBhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIGNoYW5nZUJvZHlwYXJ0KHBhcnQ6IG51bWJlciwgc3VpdElkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IG9sZFBhcnQgPSB0aGlzLmJvZHlwYXJ0c1twYXJ0XTtcbiAgICAgICAgaWYgKG9sZFBhcnQpIHtcbiAgICAgICAgICAgIG9sZFBhcnQucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgb2xkUGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmJvZHlwYXJ0c1twYXJ0XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnROYW1lID0gJyc7XG4gICAgICAgIGlmIChwYXJ0ID09IEF2YXRhckJvZHlwYXJ0cy5XRUFQT04pIHtcbiAgICAgICAgICAgIHBhcnROYW1lID0gJ2NoX3dlX2hvdV8nICsgc3VpdElkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFydE5hbWUgPSAnY2hfcGNfaG91XycgKyBzdWl0SWQgKyAnXycgKyBBdmF0YXJCb2R5cGFydHMuZ2V0UGFydE5hbWUocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVyLmxvYWRSZXMoJ3NjZW5lcy9hdmF0YXIvcHJlZmFicy8nICsgcGFydE5hbWUsIFByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICBpZiAocGFydCA9PSBBdmF0YXJCb2R5cGFydHMuV0VBUE9OKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLl93ZWFwb25Qb2ludFIuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvZHlwYXJ0c1twYXJ0XSA9IG5vZGU7XG5cbiAgICAgICAgICAgIGxldCBtZXNoTm9kZSA9IGZpbmQoJ1Jvb3ROb2RlLycgKyBwYXJ0TmFtZSwgbm9kZSk7XG5cbiAgICAgICAgICAgIGxldCBhbGJlZG9NYXBOYW1lID0gQXZhdGFyQm9keXBhcnRzLmdldE5hbWVPZkJvZHlwYXJ0KHBhcnQsIHN1aXRJZCkgKyAnX2QnO1xuICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoJ3NjZW5lcy9hdmF0YXIvdGV4dHVyZXMvJyArIGFsYmVkb01hcE5hbWUsIEltYWdlQXNzZXQsIChlcnIsIHRleDogSW1hZ2VBc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaE5vZGUuZ2V0Q29tcG9uZW50KFNraW5uaW5nTW9kZWxDb21wb25lbnQpLm1hdGVyaWFsLnNldFByb3BlcnR5KCdhbGJlZG9NYXAnLCB0ZXguX3RleHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIGxldCByID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLmNsb25lKCk7XG4gICAgICAgIHIueSArPSBkZWx0YVRpbWUgKiAxMDtcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gcjtcbiAgICB9XG59XG4iXX0=