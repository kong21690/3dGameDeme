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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9jb21wb25lbnRzL05vZGVGbG9hdGluZ0FuaW0udHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsInYzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTm9kZUZsb2F0aW5nQW5pbSIsIl9hbmdsZXMiLCJfcG9zIiwiX2xpZmVUaW1lIiwiTWF0aCIsInJhbmRvbSIsIm5vZGUiLCJldWxlckFuZ2xlcyIsImNsb25lIiwiZ2V0UG9zaXRpb24iLCJkZWx0YVRpbWUiLCJyb3RhdGVTcGVlZCIsInkiLCJ1cGRvd25TcGVlZCIsInNpbiIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQXVCQyxNQUFBQSxFLE9BQUFBLEU7Ozs7OztBQUNwQ0MsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7a0NBR0pDLGdCLFdBRFpGLE9BQU8sQ0FBQyxrQkFBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Z0JBUUlHLE8sR0FBZUosRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDO2dCQUNqQkssSSxHQUFZTCxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEM7Z0JBQ2RNLFMsR0FBWUMsSUFBSSxDQUFDQyxNQUFMLEU7Ozs7Ozs7Ozs7O2tDQVFYO0FBQ0w7QUFDQSxpQkFBS0osT0FBTCxHQUFlLEtBQUtLLElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsS0FBdEIsRUFBZjtBQUNBLGlCQUFLRixJQUFMLENBQVVHLFdBQVYsQ0FBc0IsS0FBS1AsSUFBM0I7QUFDSDs7O2lDQUVPUSxTLEVBQW1CO0FBQ3RCLGdCQUFHLEtBQUtDLFdBQVIsRUFBb0I7QUFDakIsbUJBQUtWLE9BQUwsQ0FBYVcsQ0FBYixJQUFrQkYsU0FBUyxHQUFHLEtBQUtDLFdBQW5DO0FBQ0EsbUJBQUtMLElBQUwsQ0FBVUMsV0FBVixHQUF3QixLQUFLTixPQUE3QjtBQUNGOztBQUVELGdCQUFHLEtBQUtZLFdBQVIsRUFBb0I7QUFDakIsbUJBQUtWLFNBQUwsSUFBa0JPLFNBQWxCO0FBRUEsbUJBQUtKLElBQUwsQ0FBVUcsV0FBVixDQUFzQixLQUFLUCxJQUEzQjtBQUNBLG1CQUFLQSxJQUFMLENBQVVVLENBQVYsR0FBY1IsSUFBSSxDQUFDVSxHQUFMLENBQVMsS0FBS1gsU0FBTCxHQUFpQixLQUFLVSxXQUEvQixDQUFkO0FBQ0EsbUJBQUtQLElBQUwsQ0FBVVMsV0FBVixDQUFzQixLQUFLYixJQUEzQjtBQUNGO0FBQ0w7Ozs7UUFwQ2lDTixTLHVGQVdqQ0csUTs7Ozs7aUJBQ29CLEU7O3NGQUVwQkEsUTs7Ozs7aUJBQ29CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHYzLCBDYW1lcmFDb21wb25lbnQsIFRlcnJhaW4gfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnTm9kZUZsb2F0aW5nQW5pbScpXG5leHBvcnQgY2xhc3MgTm9kZUZsb2F0aW5nQW5pbSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXG4gICAgLy8gZHVtbXkgPSAnJztcblxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XG4gICAgcHJpdmF0ZSBfYW5nbGVzOlZlYzMgPSB2MygwLDAsMCk7XG4gICAgcHJpdmF0ZSBfcG9zOlZlYzMgPSB2MygwLDAsMCk7XG4gICAgcHJpdmF0ZSBfbGlmZVRpbWUgPSBNYXRoLnJhbmRvbSgpO1xuXG4gICAgQHByb3BlcnR5XG4gICAgcm90YXRlU3BlZWQ6bnVtYmVyID0gMTA7XG5cbiAgICBAcHJvcGVydHlcbiAgICB1cGRvd25TcGVlZDpudW1iZXIgPSAxO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fYW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLmNsb25lKCk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9wb3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgIGlmKHRoaXMucm90YXRlU3BlZWQpe1xuICAgICAgICAgICAgdGhpcy5fYW5nbGVzLnkgKz0gZGVsdGFUaW1lICogdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IHRoaXMuX2FuZ2xlcztcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYodGhpcy51cGRvd25TcGVlZCl7XG4gICAgICAgICAgICB0aGlzLl9saWZlVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRQb3NpdGlvbih0aGlzLl9wb3MpO1xuICAgICAgICAgICAgdGhpcy5fcG9zLnkgPSBNYXRoLnNpbih0aGlzLl9saWZlVGltZSAqIHRoaXMudXBkb3duU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX3Bvcyk7XG4gICAgICAgICB9XG4gICAgfVxufVxuIl19