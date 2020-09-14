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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvYXZhdGFyL0F2YXRhci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiVGV4dHVyZTJEIiwibG9hZGVyIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiU2tpbm5pbmdNb2RlbENvbXBvbmVudCIsIkltYWdlQXNzZXQiLCJnYW1lIiwiQXZhdGFyQm9keXBhcnRzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQXZhdGFyIiwidHlwZSIsImJvZHlwYXJ0cyIsIl9yb290Tm9kZSIsImNoYW5nZUJvZHlwYXJ0IiwiSEVBRCIsIkJPRFkiLCJIQU5EIiwiTEVHIiwib24iLCJFVkVOVF9DSEFOR0VfUEFSVCIsIm9mZiIsInBhcnQiLCJzdWl0SWQiLCJvbGRQYXJ0IiwicmVtb3ZlRnJvbVBhcmVudCIsImRlc3Ryb3kiLCJwYXJ0TmFtZSIsIldFQVBPTiIsImdldFBhcnROYW1lIiwibG9hZFJlcyIsImVyciIsInByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsIm1lc2hOb2RlIiwiYWxiZWRvTWFwTmFtZSIsImdldE5hbWVPZkJvZHlwYXJ0IiwidGV4IiwiZ2V0Q29tcG9uZW50IiwibWF0ZXJpYWwiLCJzZXRQcm9wZXJ0eSIsIl90ZXh0dXJlIiwiZGVsdGFUaW1lIiwiciIsImV1bGVyQW5nbGVzIiwiY2xvbmUiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEksT0FBQUEsSTtBQUFrQ0MsTUFB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dEIsRUFBOENvQyxRQUE5QyxDQUF1REMsV0FBdkQsQ0FBbUUsV0FBbkUsRUFBZ0ZILEdBQUcsQ0FBQ0ksUUFBcEY7QUFDSDtBQUNKLGVBSkQ7QUFNSCxhQW5CRDtBQW9CSDs7O2lDQUVNQyxTLEVBQW1CO0FBQ3RCO0FBQ0EsZ0JBQUlDLENBQUMsR0FBRyxLQUFLWCxJQUFMLENBQVVZLFdBQVYsQ0FBc0JDLEtBQXRCLEVBQVI7QUFDQUYsWUFBQUEsQ0FBQyxDQUFDRyxDQUFGLElBQU9KLFNBQVMsR0FBRyxFQUFuQjtBQUNBLGlCQUFLVixJQUFMLENBQVVZLFdBQVYsR0FBd0JELENBQXhCO0FBQ0g7Ozs7UUFwRXVCOUMsUzs7Ozs7aUJBU0EsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBUZXh0dXJlMkQsIGxvYWRlciwgaW5zdGFudGlhdGUsIGZpbmQsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBTa2lubmluZ01vZGVsQ29tcG9uZW50LCBJbWFnZUFzc2V0LCBnYW1lIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgQXZhdGFyQm9keXBhcnRzIH0gZnJvbSAnLi9BdmF0YXJCb2R5cGFydHMnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0F2YXRhcicpXG5leHBvcnQgY2xhc3MgQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIHByaXZhdGUgYm9keXBhcnRzOiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIF9yb290Tm9kZTogTm9kZTtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFRleHR1cmUyRCB9KVxuICAgIHB1YmxpYyB0ZXg6IFRleHR1cmUyRCA9IG51bGw7XG5cblxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5cGFydChBdmF0YXJCb2R5cGFydHMuSEVBRCwgJzAwNCcpO1xuICAgICAgICB0aGlzLmNoYW5nZUJvZHlwYXJ0KEF2YXRhckJvZHlwYXJ0cy5CT0RZLCAnMDA0Jyk7XG4gICAgICAgIHRoaXMuY2hhbmdlQm9keXBhcnQoQXZhdGFyQm9keXBhcnRzLkhBTkQsICcwMDQnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5cGFydChBdmF0YXJCb2R5cGFydHMuTEVHLCAnMDA0Jyk7XG5cbiAgICAgICAgZ2FtZS5vbihBdmF0YXJCb2R5cGFydHMuRVZFTlRfQ0hBTkdFX1BBUlQsIHRoaXMuY2hhbmdlQm9keXBhcnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgZ2FtZS5vZmYoQXZhdGFyQm9keXBhcnRzLkVWRU5UX0NIQU5HRV9QQVJULCB0aGlzLmNoYW5nZUJvZHlwYXJ0LCB0aGlzKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VCb2R5cGFydChwYXJ0OiBudW1iZXIsIHN1aXRJZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBvbGRQYXJ0ID0gdGhpcy5ib2R5cGFydHNbcGFydF07XG4gICAgICAgIGlmIChvbGRQYXJ0KSB7XG4gICAgICAgICAgICBvbGRQYXJ0LnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIG9sZFBhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5ib2R5cGFydHNbcGFydF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJ0TmFtZSA9ICcnO1xuICAgICAgICBpZiAocGFydCA9PSBBdmF0YXJCb2R5cGFydHMuV0VBUE9OKSB7XG4gICAgICAgICAgICBwYXJ0TmFtZSA9ICdjaF93ZV9ob3VfJyArIHN1aXRJZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcnROYW1lID0gJ2NoX3BjX2hvdV8nICsgc3VpdElkICsgJ18nICsgQXZhdGFyQm9keXBhcnRzLmdldFBhcnROYW1lKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGxvYWRlci5sb2FkUmVzKCdzY2VuZXMvYXZhdGFyL3ByZWZhYnMvJyArIHBhcnROYW1lLCBQcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgaWYgKHBhcnQgPT0gQXZhdGFyQm9keXBhcnRzLldFQVBPTikge1xuICAgICAgICAgICAgICAgIC8vdGhpcy5fd2VhcG9uUG9pbnRSLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2R5cGFydHNbcGFydF0gPSBub2RlO1xuXG4gICAgICAgICAgICBsZXQgbWVzaE5vZGUgPSBmaW5kKCdSb290Tm9kZS8nICsgcGFydE5hbWUsIG5vZGUpO1xuXG4gICAgICAgICAgICBsZXQgYWxiZWRvTWFwTmFtZSA9IEF2YXRhckJvZHlwYXJ0cy5nZXROYW1lT2ZCb2R5cGFydChwYXJ0LCBzdWl0SWQpICsgJ19kJztcbiAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKCdzY2VuZXMvYXZhdGFyL3RleHR1cmVzLycgKyBhbGJlZG9NYXBOYW1lLCBJbWFnZUFzc2V0LCAoZXJyLCB0ZXg6IEltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc2hOb2RlLmdldENvbXBvbmVudChTa2lubmluZ01vZGVsQ29tcG9uZW50KS5tYXRlcmlhbC5zZXRQcm9wZXJ0eSgnYWxiZWRvTWFwJywgdGV4Ll90ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICBsZXQgciA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy5jbG9uZSgpO1xuICAgICAgICByLnkgKz0gZGVsdGFUaW1lICogMTA7XG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHI7XG4gICAgfVxufVxuIl19