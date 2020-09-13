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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9jb21wb25lbnRzL1BsYXllckN0cmwudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50IiwiU2tpbm5pbmdNb2RlbENvbXBvbmVudCIsInY0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUGxheWVyQ3RybCIsInR5cGUiLCJfaXNMb29wIiwiX2FuaW0iLCJfY3VyZW50QW5pbUluZGV4IiwiX3JpbUNvbG9yIiwiX3JpbUVuYWJsZWQiLCJfaW5zdCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJpIiwiY2xpcHMiLCJsZW5ndGgiLCJjbGlwIiwiZGVmYXVsdENsaXAiLCJyaW1MaWdodENvbG9yIiwicGxheUFuaW0iLCJjdXJBbmltTmFtZSIsImFuaW1OYW1lIiwiaXNMb29wIiwiY2IiLCJhbmltU3RhdGUiLCJnZXRBbmltYXRpb25TdGF0ZSIsInJlcGVhdENvdW50IiwiSW5maW5pdHkiLCJwbGF5IiwiZW5hYmxlIiwicmltQ29sb3IiLCJ2YWx1ZSIsIngiLCJ5IiwieiIsInciLCJib2R5Iiwic2hhcmVkTWF0ZXJpYWwiLCJzZXRQcm9wZXJ0eSIsIndlYXBvbiIsInYiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWtIQyxNQUFBQSwwQixPQUFBQSwwQjtBQUEwRUMsTUFBQUEsc0IsT0FBQUEsc0I7QUFBd0JDLE1BQUFBLEUsT0FBQUEsRTs7Ozs7O0FBRWpPQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBTUhDLFFBQVEsQ0FBQztBQUFFRSxRQUFBQSxJ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V21CLGlCQUFYLENBQTZCLEtBQUtMLFdBQWxDLENBQWhCOztBQUNBSSxZQUFBQSxTQUFTLENBQUNFLFdBQVYsR0FBd0JjLENBQUMsR0FBR2IsUUFBSCxHQUFjLENBQXZDO0FBQ0gsVzs4QkFFNEI7QUFDekIsbUJBQU8sS0FBS3RCLE9BQVo7QUFDSDs7OzhCQWtCZ0M7QUFDN0IsZ0JBQUlXLElBQUksR0FBRyxLQUFLVixLQUFMLENBQVdRLEtBQVgsQ0FBaUIsS0FBS1AsZ0JBQXRCLENBQVg7QUFDQSxtQkFBT1MsSUFBSSxDQUFDeUIsSUFBWjtBQUNIOzs7OEJBeEVvQztBQUNqQyxtQkFBTyxLQUFLL0IsS0FBWjtBQUNIOzs7O1FBZDJCYixTLFdBV2JhLEs7Ozs7O2lCQUxnQixJOzs7Ozs7O2lCQUdFLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRLZXlib2FyZCwgbWFjcm8sIFZlYzMsIFF1YXQsIHF1YXQsIHYzLCB0d2VlbiwgZ2VvbWV0cnksIGRpcmVjdG9yLCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgVGVycmFpbiwgZmluZCwgQW5pbWF0aW9uU3RhdGUsIEFuaW1hdGlvbkNsaXAsIFNraW5uaW5nTW9kZWxDb21wb25lbnQsIHY0LCBWZWM0IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgRm9sbG93Q2FtZXJhIH0gZnJvbSAnLi9Gb2xsb3dDYW1lcmEnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1BsYXllckN0cmwnKVxuZXhwb3J0IGNsYXNzIFBsYXllckN0cmwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU2tpbm5pbmdNb2RlbENvbXBvbmVudCB9KVxuICAgIGJvZHk6IFNraW5uaW5nTW9kZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogU2tpbm5pbmdNb2RlbENvbXBvbmVudCB9KVxuICAgIHdlYXBvbjogU2tpbm5pbmdNb2RlbENvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogUGxheWVyQ3RybDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFBsYXllckN0cmwge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc0xvb3A6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2FuaW06IFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50O1xuICAgIHByaXZhdGUgX2N1cmVudEFuaW1JbmRleDogbnVtYmVyID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBQbGF5ZXJDdHJsLl9pbnN0ID0gdGhpcztcbiAgICAgICAgdGhpcy5fYW5pbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYW5pbS5jbGlwcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGNsaXAgPSB0aGlzLl9hbmltW2ldO1xuICAgICAgICAgICAgaWYgKGNsaXAgPT0gdGhpcy5fYW5pbS5kZWZhdWx0Q2xpcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cmVudEFuaW1JbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yaW1MaWdodENvbG9yID0gdGhpcy5fcmltQ29sb3I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmltQ29sb3IgPSB2NCgwLCAwLCAwLCAwKTtcbiAgICBwcml2YXRlIF9yaW1FbmFibGVkID0gZmFsc2U7XG4gICAgcHVibGljIHNldCByaW1MaWdodEVuYWJsZWQoZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3JpbUVuYWJsZWQgPSBlbmFibGU7XG4gICAgICAgIHRoaXMucmltTGlnaHRDb2xvciA9IHRoaXMuX3JpbUNvbG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcmltTGlnaHRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmltRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgcmltTGlnaHRDb2xvcihyaW1Db2xvcjogVmVjNCkge1xuICAgICAgICB0aGlzLl9yaW1Db2xvciA9IHJpbUNvbG9yO1xuICAgICAgICBsZXQgdmFsdWUgPSB2NChyaW1Db2xvci54LCByaW1Db2xvci55LCByaW1Db2xvci56LCB0aGlzLl9yaW1FbmFibGVkPyByaW1Db2xvci53IDogMCk7XG4gICAgICAgIHRoaXMuYm9keS5zaGFyZWRNYXRlcmlhbC5zZXRQcm9wZXJ0eSgncmltQ29sb3InLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMud2VhcG9uLnNoYXJlZE1hdGVyaWFsLnNldFByb3BlcnR5KCdyaW1Db2xvcicsIHZhbHVlKVxuICAgIH1cblxuICAgIGdldCByaW1MaWdodENvbG9yKCk6IFZlYzQge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmltQ29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0xvb3AodjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0xvb3AgPSB2O1xuICAgICAgICBsZXQgYW5pbVN0YXRlID0gdGhpcy5fYW5pbS5nZXRBbmltYXRpb25TdGF0ZSh0aGlzLmN1ckFuaW1OYW1lKTtcbiAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gdiA/IEluZmluaXR5IDogMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzTG9vcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9vcDtcbiAgICB9XG5cbiAgICBwbGF5TmV4dCgpIHtcbiAgICAgICAgdGhpcy5fY3VyZW50QW5pbUluZGV4ID0gKHRoaXMuX2N1cmVudEFuaW1JbmRleCArIDEpICUgdGhpcy5fYW5pbS5jbGlwcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5jdXJBbmltTmFtZSwgdGhpcy5faXNMb29wKTtcbiAgICB9XG5cbiAgICBwbGF5UHJldigpIHtcbiAgICAgICAgdGhpcy5fY3VyZW50QW5pbUluZGV4ID0gKHRoaXMuX2N1cmVudEFuaW1JbmRleCAtIDEgKyB0aGlzLl9hbmltLmNsaXBzLmxlbmd0aCkgJSB0aGlzLl9hbmltLmNsaXBzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmN1ckFuaW1OYW1lLCB0aGlzLl9pc0xvb3ApO1xuICAgIH1cblxuICAgIHBsYXlBbmltKGFuaW1OYW1lLCBpc0xvb3A/OiBib29sZWFuLCBjYj86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGxldCBhbmltU3RhdGUgPSB0aGlzLl9hbmltLmdldEFuaW1hdGlvblN0YXRlKGFuaW1OYW1lKTtcbiAgICAgICAgYW5pbVN0YXRlLnJlcGVhdENvdW50ID0gaXNMb29wID8gSW5maW5pdHkgOiAxO1xuICAgICAgICB0aGlzLl9hbmltLnBsYXkoYW5pbU5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VyQW5pbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsaXAgPSB0aGlzLl9hbmltLmNsaXBzW3RoaXMuX2N1cmVudEFuaW1JbmRleF07XG4gICAgICAgIHJldHVybiBjbGlwLm5hbWU7XG4gICAgfVxufVxuIl19