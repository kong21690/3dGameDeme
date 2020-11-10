System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, SkeletalAnimationComponent, SkinningModelComponent, v4, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, PlayerCtrl;

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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
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
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "body", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvY29tcG9uZW50cy9QbGF5ZXJDdHJsLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlNraW5uaW5nTW9kZWxDb21wb25lbnQiLCJ2NCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBsYXllckN0cmwiLCJ0eXBlIiwiX2lzTG9vcCIsIl9jdXJlbnRBbmltSW5kZXgiLCJfcmltQ29sb3IiLCJfcmltRW5hYmxlZCIsIl9pbnN0IiwiX2FuaW0iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiaSIsImNsaXBzIiwibGVuZ3RoIiwiY2xpcCIsImRlZmF1bHRDbGlwIiwicmltTGlnaHRDb2xvciIsInBsYXlBbmltIiwiY3VyQW5pbU5hbWUiLCJhbmltTmFtZSIsImlzTG9vcCIsImNiIiwiYW5pbVN0YXRlIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJyZXBlYXRDb3VudCIsIkluZmluaXR5IiwicGxheSIsImVuYWJsZSIsInJpbUNvbG9yIiwidmFsdWUiLCJ4IiwieSIsInoiLCJ3IiwiYm9keSIsInNoYXJlZE1hdGVyaWFsIiwic2V0UHJvcGVydHkiLCJ3ZWFwb24iLCJ2IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWtIQyxNQUFBQSwwQixPQUFBQSwwQjtBQUEwRUMsTUFBQUEsc0IsT0FBQUEsc0I7QUFBd0JDLE1BQUFBLEUsT0FBQUEsRTs7Ozs7O0FBRWpPQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs0QkFHSkMsVSxXQURaRixPQUFPLENBQUMsWUFBRCxDLFVBTUhD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QUtkLEtBQUwsQ0FBV2UsaUJBQVgsQ0FBNkIsS0FBS0wsV0FBbEMsQ0FBaEI7O0FBQ0FJLFlBQUFBLFNBQVMsQ0FBQ0UsV0FBVixHQUF3QmMsQ0FBQyxHQUFHYixRQUFILEdBQWMsQ0FBdkM7QUFDSCxXOzhCQUU0QjtBQUN6QixtQkFBTyxLQUFLdEIsT0FBWjtBQUNIOzs7OEJBa0JnQztBQUM3QixnQkFBSVcsSUFBSSxHQUFHLEtBQUtOLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQixLQUFLUixnQkFBdEIsQ0FBWDtBQUNBLG1CQUFPVSxJQUFJLENBQUN5QixJQUFaO0FBQ0g7Ozs4QkF4RW9DO0FBQ2pDLG1CQUFPLEtBQUtoQyxLQUFaO0FBQ0g7Ozs7UUFkMkJaLFM7Ozs7O2lCQU1HLEk7Ozs7Ozs7aUJBR0UsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudEtleWJvYXJkLCBtYWNybywgVmVjMywgUXVhdCwgcXVhdCwgdjMsIHR3ZWVuLCBnZW9tZXRyeSwgZGlyZWN0b3IsIFNrZWxldGFsQW5pbWF0aW9uQ29tcG9uZW50LCBUZXJyYWluLCBmaW5kLCBBbmltYXRpb25TdGF0ZSwgQW5pbWF0aW9uQ2xpcCwgU2tpbm5pbmdNb2RlbENvbXBvbmVudCwgdjQsIFZlYzQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBGb2xsb3dDYW1lcmEgfSBmcm9tICcuL0ZvbGxvd0NhbWVyYSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnUGxheWVyQ3RybCcpXG5leHBvcnQgY2xhc3MgUGxheWVyQ3RybCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTa2lubmluZ01vZGVsQ29tcG9uZW50IH0pXG4gICAgYm9keTogU2tpbm5pbmdNb2RlbENvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBTa2lubmluZ01vZGVsQ29tcG9uZW50IH0pXG4gICAgd2VhcG9uOiBTa2lubmluZ01vZGVsQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBQbGF5ZXJDdHJsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogUGxheWVyQ3RybCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2lzTG9vcDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfYW5pbTogU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQ7XG4gICAgcHJpdmF0ZSBfY3VyZW50QW5pbUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFBsYXllckN0cmwuX2luc3QgPSB0aGlzO1xuICAgICAgICB0aGlzLl9hbmltID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9hbmltLmNsaXBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgY2xpcCA9IHRoaXMuX2FuaW1baV07XG4gICAgICAgICAgICBpZiAoY2xpcCA9PSB0aGlzLl9hbmltLmRlZmF1bHRDbGlwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyZW50QW5pbUluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJpbUxpZ2h0Q29sb3IgPSB0aGlzLl9yaW1Db2xvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9yaW1Db2xvciA9IHY0KDAsIDAsIDAsIDApO1xuICAgIHByaXZhdGUgX3JpbUVuYWJsZWQgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2V0IHJpbUxpZ2h0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fcmltRW5hYmxlZCA9IGVuYWJsZTtcbiAgICAgICAgdGhpcy5yaW1MaWdodENvbG9yID0gdGhpcy5fcmltQ29sb3I7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByaW1MaWdodEVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yaW1FbmFibGVkO1xuICAgIH1cblxuICAgIHNldCByaW1MaWdodENvbG9yKHJpbUNvbG9yOiBWZWM0KSB7XG4gICAgICAgIHRoaXMuX3JpbUNvbG9yID0gcmltQ29sb3I7XG4gICAgICAgIGxldCB2YWx1ZSA9IHY0KHJpbUNvbG9yLngsIHJpbUNvbG9yLnksIHJpbUNvbG9yLnosIHRoaXMuX3JpbUVuYWJsZWQ/IHJpbUNvbG9yLncgOiAwKTtcbiAgICAgICAgdGhpcy5ib2R5LnNoYXJlZE1hdGVyaWFsLnNldFByb3BlcnR5KCdyaW1Db2xvcicsIHZhbHVlKTtcbiAgICAgICAgdGhpcy53ZWFwb24uc2hhcmVkTWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3JpbUNvbG9yJywgdmFsdWUpXG4gICAgfVxuXG4gICAgZ2V0IHJpbUxpZ2h0Q29sb3IoKTogVmVjNCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yaW1Db2xvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzTG9vcCh2OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzTG9vcCA9IHY7XG4gICAgICAgIGxldCBhbmltU3RhdGUgPSB0aGlzLl9hbmltLmdldEFuaW1hdGlvblN0YXRlKHRoaXMuY3VyQW5pbU5hbWUpO1xuICAgICAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSB2ID8gSW5maW5pdHkgOiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaXNMb29wKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNMb29wO1xuICAgIH1cblxuICAgIHBsYXlOZXh0KCkge1xuICAgICAgICB0aGlzLl9jdXJlbnRBbmltSW5kZXggPSAodGhpcy5fY3VyZW50QW5pbUluZGV4ICsgMSkgJSB0aGlzLl9hbmltLmNsaXBzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmN1ckFuaW1OYW1lLCB0aGlzLl9pc0xvb3ApO1xuICAgIH1cblxuICAgIHBsYXlQcmV2KCkge1xuICAgICAgICB0aGlzLl9jdXJlbnRBbmltSW5kZXggPSAodGhpcy5fY3VyZW50QW5pbUluZGV4IC0gMSArIHRoaXMuX2FuaW0uY2xpcHMubGVuZ3RoKSAlIHRoaXMuX2FuaW0uY2xpcHMubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuY3VyQW5pbU5hbWUsIHRoaXMuX2lzTG9vcCk7XG4gICAgfVxuXG4gICAgcGxheUFuaW0oYW5pbU5hbWUsIGlzTG9vcD86IGJvb2xlYW4sIGNiPzogRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IGFuaW1TdGF0ZSA9IHRoaXMuX2FuaW0uZ2V0QW5pbWF0aW9uU3RhdGUoYW5pbU5hbWUpO1xuICAgICAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSBpc0xvb3AgPyBJbmZpbml0eSA6IDE7XG4gICAgICAgIHRoaXMuX2FuaW0ucGxheShhbmltTmFtZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJBbmltTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICBsZXQgY2xpcCA9IHRoaXMuX2FuaW0uY2xpcHNbdGhpcy5fY3VyZW50QW5pbUluZGV4XTtcbiAgICAgICAgcmV0dXJuIGNsaXAubmFtZTtcbiAgICB9XG59XG4iXX0=