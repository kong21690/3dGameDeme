System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, NodeFloatingAnim;

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
      v3 = _cc.v3;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "59efeALQDZHU65gNyEHtjOV", "NodeFloatingAnim", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("NodeFloatingAnim", NodeFloatingAnim = (_dec = ccclass('NodeFloatingAnim'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(NodeFloatingAnim, _Component);

        function NodeFloatingAnim() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, NodeFloatingAnim);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NodeFloatingAnim)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._angles = v3(0, 0, 0);
          _this._pos = v3(0, 0, 0);
          _this._lifeTime = Math.random();

          _initializerDefineProperty(_this, "rotateSpeed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "updownSpeed", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(NodeFloatingAnim, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this._angles = this.node.eulerAngles.clone();
            this.node.getPosition(this._pos);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (this.rotateSpeed) {
              this._angles.y += deltaTime * this.rotateSpeed;
              this.node.eulerAngles = this._angles;
            }

            if (this.updownSpeed) {
              this._lifeTime += deltaTime;
              this.node.getPosition(this._pos);
              this._pos.y = Math.sin(this._lifeTime * this.updownSpeed);
              this.node.setPosition(this._pos);
            }
          }
        }]);

        return NodeFloatingAnim;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "updownSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvY29tcG9uZW50cy9Ob2RlRmxvYXRpbmdBbmltLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJ2MyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk5vZGVGbG9hdGluZ0FuaW0iLCJfYW5nbGVzIiwiX3BvcyIsIl9saWZlVGltZSIsIk1hdGgiLCJyYW5kb20iLCJub2RlIiwiZXVsZXJBbmdsZXMiLCJjbG9uZSIsImdldFBvc2l0aW9uIiwiZGVsdGFUaW1lIiwicm90YXRlU3BlZWQiLCJ5IiwidXBkb3duU3BlZWQiLCJzaW4iLCJzZXRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUF1QkMsTUFBQUEsRSxPQUFBQSxFOzs7Ozs7QUFDcENDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O2tDQUdKQyxnQixXQURaRixPQUFPLENBQUMsa0JBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQVFJRyxPLEdBQWVKLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQztnQkFDakJLLEksR0FBWUwsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDO2dCQUNkTSxTLEdBQVlDLElBQUksQ0FBQ0MsTUFBTCxFOzs7Ozs7Ozs7OztrQ0FRWDtBQUNMO0FBQ0EsaUJBQUtKLE9BQUwsR0FBZSxLQUFLSyxJQUFMLENBQVVDLFdBQVYsQ0FBc0JDLEtBQXRCLEVBQWY7QUFDQSxpQkFBS0YsSUFBTCxDQUFVRyxXQUFWLENBQXNCLEtBQUtQLElBQTNCO0FBQ0g7OztpQ0FFT1EsUyxFQUFtQjtBQUN0QixnQkFBRyxLQUFLQyxXQUFSLEVBQW9CO0FBQ2pCLG1CQUFLVixPQUFMLENBQWFXLENBQWIsSUFBa0JGLFNBQVMsR0FBRyxLQUFLQyxXQUFuQztBQUNBLG1CQUFLTCxJQUFMLENBQVVDLFdBQVYsR0FBd0IsS0FBS04sT0FBN0I7QUFDRjs7QUFFRCxnQkFBRyxLQUFLWSxXQUFSLEVBQW9CO0FBQ2pCLG1CQUFLVixTQUFMLElBQWtCTyxTQUFsQjtBQUVBLG1CQUFLSixJQUFMLENBQVVHLFdBQVYsQ0FBc0IsS0FBS1AsSUFBM0I7QUFDQSxtQkFBS0EsSUFBTCxDQUFVVSxDQUFWLEdBQWNSLElBQUksQ0FBQ1UsR0FBTCxDQUFTLEtBQUtYLFNBQUwsR0FBaUIsS0FBS1UsV0FBL0IsQ0FBZDtBQUNBLG1CQUFLUCxJQUFMLENBQVVTLFdBQVYsQ0FBc0IsS0FBS2IsSUFBM0I7QUFDRjtBQUNMOzs7O1FBcENpQ04sUyx1RkFXakNHLFE7Ozs7O2lCQUNvQixFOztzRkFFcEJBLFE7Ozs7O2lCQUNvQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCB2MywgQ2FtZXJhQ29tcG9uZW50LCBUZXJyYWluIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ05vZGVGbG9hdGluZ0FuaW0nKVxuZXhwb3J0IGNsYXNzIE5vZGVGbG9hdGluZ0FuaW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIHByaXZhdGUgX2FuZ2xlczpWZWMzID0gdjMoMCwwLDApO1xuICAgIHByaXZhdGUgX3BvczpWZWMzID0gdjMoMCwwLDApO1xuICAgIHByaXZhdGUgX2xpZmVUaW1lID0gTWF0aC5yYW5kb20oKTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHJvdGF0ZVNwZWVkOm51bWJlciA9IDEwO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdXBkb3duU3BlZWQ6bnVtYmVyID0gMTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX2FuZ2xlcyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy5jbG9uZSgpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fcG9zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgICBpZih0aGlzLnJvdGF0ZVNwZWVkKXtcbiAgICAgICAgICAgIHRoaXMuX2FuZ2xlcy55ICs9IGRlbHRhVGltZSAqIHRoaXMucm90YXRlU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSB0aGlzLl9hbmdsZXM7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmKHRoaXMudXBkb3duU3BlZWQpe1xuICAgICAgICAgICAgdGhpcy5fbGlmZVRpbWUgKz0gZGVsdGFUaW1lO1xuICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0UG9zaXRpb24odGhpcy5fcG9zKTtcbiAgICAgICAgICAgIHRoaXMuX3Bvcy55ID0gTWF0aC5zaW4odGhpcy5fbGlmZVRpbWUgKiB0aGlzLnVwZG93blNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9wb3MpO1xuICAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==