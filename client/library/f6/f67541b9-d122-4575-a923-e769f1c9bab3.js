System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimationComponent, SkinningModelComponent, v4, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp, _crd, ccclass, property, PlayerCtrl;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      SkinningModelComponent = _cc.SkinningModelComponent;
      v4 = _cc.v4;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f6754G50SJFdakj52nxybqz", "PlayerCtrl", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerCtrl", PlayerCtrl = (_dec = ccclass('PlayerCtrl'), _dec2 = property({
        type: SkinningModelComponent
      }), _dec3 = property({
        type: SkinningModelComponent
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(PlayerCtrl, _Component);

        function PlayerCtrl() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, PlayerCtrl);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PlayerCtrl)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "body", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "weapon", _descriptor2, _assertThisInitialized(_this));

          _this._isLoop = true;
          _this._anim = void 0;
          _this._curentAnimIndex = 0;
          _this._rimColor = v4(0, 0, 0, 0);
          _this._rimEnabled = false;
          return _this;
        }

        _createClass(PlayerCtrl, [{
          key: "start",
          value: function start() {
            PlayerCtrl._inst = this;
            this._anim = this.node.getComponent(SkeletalAnimationComponent);

            for (var i = 0; i < this._anim.clips.length; ++i) {
              var clip = this._anim[i];

              if (clip == this._anim.defaultClip) {
                this._curentAnimIndex = i;
              }
            }

            this.rimLightColor = this._rimColor;
          }
        }, {
          key: "playNext",
          value: function playNext() {
            this._curentAnimIndex = (this._curentAnimIndex + 1) % this._anim.clips.length;
            this.playAnim(this.curAnimName, this._isLoop);
          }
        }, {
          key: "playPrev",
          value: function playPrev() {
            this._curentAnimIndex = (this._curentAnimIndex - 1 + this._anim.clips.length) % this._anim.clips.length;
            this.playAnim(this.curAnimName, this._isLoop);
          }
        }, {
          key: "playAnim",
          value: function playAnim(animName, isLoop, cb) {
            var animState = this._anim.getAnimationState(animName);

            animState.repeatCount = isLoop ? Infinity : 1;

            this._anim.play(animName);
          }
        }, {
          key: "rimLightEnabled",
          set: function set(enable) {
            this._rimEnabled = enable;
            this.rimLightColor = this._rimColor;
          },
          get: function get() {
            return this._rimEnabled;
          }
        }, {
          key: "rimLightColor",
          set: function set(rimColor) {
            this._rimColor = rimColor;
            var value = v4(rimColor.x, rimColor.y, rimColor.z, this._rimEnabled ? rimColor.w : 0);
            this.body.sharedMaterial.setProperty('rimColor', value);
            this.weapon.sharedMaterial.setProperty('rimColor', value);
          },
          get: function get() {
            return this._rimColor;
          }
        }, {
          key: "isLoop",
          set: function set(v) {
            this._isLoop = v;

            var animState = this._anim.getAnimationState(this.curAnimName);

            animState.repeatCount = v ? Infinity : 1;
          },
          get: function get() {
            return this._isLoop;
          }
        }, {
          key: "curAnimName",
          get: function get() {
            var clip = this._anim.clips[this._curentAnimIndex];
            return clip.name;
          }
        }], [{
          key: "inst",
          get: function get() {
            return this._inst;
          }
        }]);

        return PlayerCtrl;
      }(Component), _class3._inst = void 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "weapon", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvY29tcG9uZW50cy9QbGF5ZXJDdHJsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJ2NCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckN0cmwiLCJ0eXBlIiwiX2lzTG9vcCIsIl9hbmltIiwiX2N1cmVudEFuaW1JbmRleCIsIl9yaW1Db2xvciIsIl9yaW1FbmFibGVkIiwiX2luc3QiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiaSIsImNsaXBzIiwibGVuZ3RoIiwiY2xpcCIsImRlZmF1bHRDbGlwIiwicmltTGlnaHRDb2xvciIsInBsYXlBbmltIiwiY3VyQW5pbU5hbWUiLCJhbmltTmFtZSIsImlzTG9vcCIsImNiIiwiYW5pbVN0YXRlIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJyZXBlYXRDb3VudCIsIkluZmluaXR5IiwicGxheSIsImVuYWJsZSIsInJpbUNvbG9yIiwidmFsdWUiLCJ4IiwieSIsInoiLCJ3IiwiYm9keSIsInNoYXJlZE1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJ3ZWFwb24iLCJ2IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFrSEMsTUFBQUEsMEIsT0FBQUEsMEI7QUFBMEVDLE1BQUFBLHNCLE9BQUFBLHNCO0FBQXdCQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUVqT0MsTUFBQUEsTyxHQUFzQkwsVSxDQUF0QkssTztBQUFTQyxNQUFBQSxRLEdBQWFOLFUsQ0FBYk0sUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQU1I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U0FBUyxHQUFHLEtBQUtsQixLQUFMLENBQVdtQixpQkFBWCxDQUE2QixLQUFLTCxXQUFsQyxDQUFoQjs7QUFDQUksWUFBQUEsU0FBUyxDQUFDRSxXQUFWLEdBQXdCYyxDQUFDLEdBQUdiLFFBQUgsR0FBYyxDQUF2QztBQUNILFc7OEJBRTRCO0FBQ3pCLG1CQUFPLEtBQUt0QixPQUFaO0FBQ0g7Ozs4QkFrQmdDO0FBQzdCLGdCQUFJVyxJQUFJLEdBQUcsS0FBS1YsS0FBTCxDQUFXUSxLQUFYLENBQWlCLEtBQUtQLGdCQUF0QixDQUFYO0FBQ0EsbUJBQU9TLElBQUksQ0FBQ3lCLElBQVo7QUFDSDs7OzhCQXhFb0M7QUFDakMsbUJBQU8sS0FBSy9CLEtBQVo7QUFDSDs7OztRQWQyQmIsUyxXQVdiYSxLOzs7OztpQkFMZ0IsSTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50S2V5Ym9hcmQsIG1hY3JvLCBWZWMzLCBRdWF0LCBxdWF0LCB2MywgdHdlZW4sIGdlb21ldHJ5LCBkaXJlY3RvciwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFRlcnJhaW4sIGZpbmQsIEFuaW1hdGlvblN0YXRlLCBBbmltYXRpb25DbGlwLCBTa2lubmluZ01vZGVsQ29tcG9uZW50LCB2NCwgVmVjNCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEZvbGxvd0NhbWVyYSB9IGZyb20gJy4vRm9sbG93Q2FtZXJhJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdQbGF5ZXJDdHJsJylcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDdHJsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNraW5uaW5nTW9kZWxDb21wb25lbnQgfSlcbiAgICBib2R5OiBTa2lubmluZ01vZGVsQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFNraW5uaW5nTW9kZWxDb21wb25lbnQgfSlcbiAgICB3ZWFwb246IFNraW5uaW5nTW9kZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFBsYXllckN0cmw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpOiBQbGF5ZXJDdHJsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNMb29wOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9hbmltOiBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudDtcbiAgICBwcml2YXRlIF9jdXJlbnRBbmltSW5kZXg6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgUGxheWVyQ3RybC5faW5zdCA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2FuaW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FuaW0uY2xpcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBjbGlwID0gdGhpcy5fYW5pbVtpXTtcbiAgICAgICAgICAgIGlmIChjbGlwID09IHRoaXMuX2FuaW0uZGVmYXVsdENsaXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJlbnRBbmltSW5kZXggPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmltTGlnaHRDb2xvciA9IHRoaXMuX3JpbUNvbG9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JpbUNvbG9yID0gdjQoMCwgMCwgMCwgMCk7XG4gICAgcHJpdmF0ZSBfcmltRW5hYmxlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBzZXQgcmltTGlnaHRFbmFibGVkKGVuYWJsZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9yaW1FbmFibGVkID0gZW5hYmxlO1xuICAgICAgICB0aGlzLnJpbUxpZ2h0Q29sb3IgPSB0aGlzLl9yaW1Db2xvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHJpbUxpZ2h0RW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpbUVuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IHJpbUxpZ2h0Q29sb3IocmltQ29sb3I6IFZlYzQpIHtcbiAgICAgICAgdGhpcy5fcmltQ29sb3IgPSByaW1Db2xvcjtcbiAgICAgICAgbGV0IHZhbHVlID0gdjQocmltQ29sb3IueCwgcmltQ29sb3IueSwgcmltQ29sb3IueiwgdGhpcy5fcmltRW5hYmxlZD8gcmltQ29sb3IudyA6IDApO1xuICAgICAgICB0aGlzLmJvZHkuc2hhcmVkTWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3JpbUNvbG9yJywgdmFsdWUpO1xuICAgICAgICB0aGlzLndlYXBvbi5zaGFyZWRNYXRlcmlhbC5zZXRQcm9wZXJ0eSgncmltQ29sb3InLCB2YWx1ZSlcbiAgICB9XG5cbiAgICBnZXQgcmltTGlnaHRDb2xvcigpOiBWZWM0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JpbUNvbG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNMb29wKHY6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNMb29wID0gdjtcbiAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHRoaXMuX2FuaW0uZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5jdXJBbmltTmFtZSk7XG4gICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IHYgPyBJbmZpbml0eSA6IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBpc0xvb3AoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0xvb3A7XG4gICAgfVxuXG4gICAgcGxheU5leHQoKSB7XG4gICAgICAgIHRoaXMuX2N1cmVudEFuaW1JbmRleCA9ICh0aGlzLl9jdXJlbnRBbmltSW5kZXggKyAxKSAlIHRoaXMuX2FuaW0uY2xpcHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuY3VyQW5pbU5hbWUsIHRoaXMuX2lzTG9vcCk7XG4gICAgfVxuXG4gICAgcGxheVByZXYoKSB7XG4gICAgICAgIHRoaXMuX2N1cmVudEFuaW1JbmRleCA9ICh0aGlzLl9jdXJlbnRBbmltSW5kZXggLSAxICsgdGhpcy5fYW5pbS5jbGlwcy5sZW5ndGgpICUgdGhpcy5fYW5pbS5jbGlwcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5jdXJBbmltTmFtZSwgdGhpcy5faXNMb29wKTtcbiAgICB9XG5cbiAgICBwbGF5QW5pbShhbmltTmFtZSwgaXNMb29wPzogYm9vbGVhbiwgY2I/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgYW5pbVN0YXRlID0gdGhpcy5fYW5pbS5nZXRBbmltYXRpb25TdGF0ZShhbmltTmFtZSk7XG4gICAgICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IGlzTG9vcCA/IEluZmluaXR5IDogMTtcbiAgICAgICAgdGhpcy5fYW5pbS5wbGF5KGFuaW1OYW1lKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1ckFuaW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIGxldCBjbGlwID0gdGhpcy5fYW5pbS5jbGlwc1t0aGlzLl9jdXJlbnRBbmltSW5kZXhdO1xuICAgICAgICByZXR1cm4gY2xpcC5uYW1lO1xuICAgIH1cbn1cbiJdfQ==