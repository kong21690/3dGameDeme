System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, systemEvent, SystemEvent, EventMouse, Vec3, v3, Quat, quat, CameraComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp, _crd, ccclass, property, FollowCamera;

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
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _class3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      EventMouse = _cc.EventMouse;
      Vec3 = _cc.Vec3;
      v3 = _cc.v3;
      Quat = _cc.Quat;
      quat = _cc.quat;
      CameraComponent = _cc.CameraComponent;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "8a6ddp5bpNDp6GcnvRAcRCb", "FollowCamera", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FollowCamera", FollowCamera = (_dec = ccclass('FollowCamera'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CameraComponent
      }), _dec4 = property({
        type: Vec3
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inherits(FollowCamera, _Component);

        function FollowCamera() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FollowCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowCamera)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lookAtOffset", _descriptor3, _assertThisInitialized(_this));

          _this._isMouseDown = false;
          _this._targetPos = v3(0, 0, 0);
          _this._cameraPos = v3(0, 0, 0);
          _this._lookDir = v3(0, 0, -1);
          _this._lookRight = v3(1, 0, 0);
          _this._lookUp = v3(0, 1, 0);
          _this._rotate = quat();
          _this._zoom = 4;
          _this._minZoom = 2;
          _this._maxZoom = 6;
          _this._zoomSensitivty = 0.02;
          return _this;
        }

        _createClass(FollowCamera, [{
          key: "setFollowTarget",
          value: function setFollowTarget(target) {
            this.target = target;
          }
        }, {
          key: "start",
          value: function start() {
            FollowCamera._inst = this; // Your initialization goes here.

            systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
            systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
            systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this);
            systemEvent.on(SystemEvent.EventType.MOUSE_WHEEL, this.onMouseWheel, this); //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);
            //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);
            //systemEvent.on(SystemEvent.EventType.TOUCH_START,this.onMouseDown,this);

            this.adjustCamera();
          }
        }, {
          key: "adjustCamera",
          value: function adjustCamera() {
            if (!this.target) {
              return;
            }

            Vec3.normalize(this._lookDir, this._lookDir);

            this._lookUp.set(0, 1, 0); //取右向量


            Vec3.cross(this._lookRight, this._lookDir, this._lookUp);
            Vec3.normalize(this._lookRight, this._lookRight); //取得真实的UP向量

            Vec3.cross(this._lookUp, this._lookRight, this._lookDir);
            Vec3.normalize(this._lookUp, this._lookUp);
            Quat.fromAxes(this._rotate, this._lookRight, this._lookUp, this._lookDir);
            this.node.setRotation(this._rotate); //从观察点开始，把摄相机往后推zoom距离

            Vec3.multiplyScalar(this._lookDir, this._lookDir, this._zoom);
            Vec3.subtract(this._cameraPos, v3(0, 0, 0), this._lookDir);
            this.camera.node.setPosition(this._cameraPos);
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            if (event.getButton() == EventMouse.BUTTON_RIGHT) {
              this._isMouseDown = true;
            }
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp() {
            this._isMouseDown = false;
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(event) {
            if (!this._isMouseDown) {
              return;
            }

            var deltaX = event.getUIDeltaX() * 0.1;
            var deltaY = event.getUIDeltaY() * 0.1;
            this.rotate(deltaY, -deltaX);
          }
        }, {
          key: "rotate",
          value: function rotate(rx, ry) {
            var angles = this.node.eulerAngles;
            this.node.setRotationFromEuler(angles.x + rx, angles.y + ry, angles.z);
          }
        }, {
          key: "zoom",
          value: function zoom(delta) {
            this._zoom += delta * this._zoomSensitivty;

            if (this._zoom < this._minZoom) {
              this._zoom = this._minZoom;
            }

            if (this._zoom > this._maxZoom) {
              this._zoom = this._maxZoom;
            } //从观察点开始，把摄相机往后推zoom距离


            Vec3.normalize(this._lookDir, this._lookDir);
            Vec3.multiplyScalar(this._lookDir, this._lookDir, this._zoom);
            Vec3.subtract(this._cameraPos, v3(0, 0, 0), this._lookDir);
            this.camera.node.setPosition(this._cameraPos);
          }
        }, {
          key: "onMouseWheel",
          value: function onMouseWheel(event) {
            var delta = event.getScrollY() * this._zoomSensitivty;

            this.zoom(delta);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.target) {
              this.target.getPosition(this._targetPos);
              Vec3.add(this._targetPos, this._targetPos, this.lookAtOffset);
              this.node.setPosition(this._targetPos);
            }
          }
        }, {
          key: "lookDir",
          get: function get() {
            return this.lookDir;
          }
        }, {
          key: "rotationEulers",
          get: function get() {
            var euler = this.node.eulerAngles.clone();
            euler.x *= -1;
            euler.y *= -1;
            euler.z *= -1;
            return euler;
          }
        }], [{
          key: "inst",
          get: function get() {
            return this._inst;
          }
        }]);

        return FollowCamera;
      }(Component), _class3._inst = null, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3(0, 10, 0);
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9jb21wb25lbnRzL0ZvbGxvd0NhbWVyYS50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJFdmVudE1vdXNlIiwiVmVjMyIsInYzIiwiUXVhdCIsInF1YXQiLCJDYW1lcmFDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJGb2xsb3dDYW1lcmEiLCJ0eXBlIiwiX2lzTW91c2VEb3duIiwiX3RhcmdldFBvcyIsIl9jYW1lcmFQb3MiLCJfbG9va0RpciIsIl9sb29rUmlnaHQiLCJfbG9va1VwIiwiX3JvdGF0ZSIsIl96b29tIiwiX21pblpvb20iLCJfbWF4Wm9vbSIsIl96b29tU2Vuc2l0aXZ0eSIsInRhcmdldCIsIl9pbnN0Iiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9ET1dOIiwib25Nb3VzZURvd24iLCJNT1VTRV9VUCIsIm9uTW91c2VVcCIsIk1PVVNFX01PVkUiLCJvbk1vdXNlTW92ZSIsIk1PVVNFX1dIRUVMIiwib25Nb3VzZVdoZWVsIiwiYWRqdXN0Q2FtZXJhIiwibm9ybWFsaXplIiwic2V0IiwiY3Jvc3MiLCJmcm9tQXhlcyIsIm5vZGUiLCJzZXRSb3RhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwic3VidHJhY3QiLCJjYW1lcmEiLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiZ2V0QnV0dG9uIiwiQlVUVE9OX1JJR0hUIiwiZGVsdGFYIiwiZ2V0VUlEZWx0YVgiLCJkZWx0YVkiLCJnZXRVSURlbHRhWSIsInJvdGF0ZSIsInJ4IiwicnkiLCJhbmdsZXMiLCJldWxlckFuZ2xlcyIsInNldFJvdGF0aW9uRnJvbUV1bGVyIiwieCIsInkiLCJ6IiwiZGVsdGEiLCJnZXRTY3JvbGxZIiwiem9vbSIsImRlbHRhVGltZSIsImdldFBvc2l0aW9uIiwiYWRkIiwibG9va0F0T2Zmc2V0IiwibG9v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Ozt1Q0FHWWdDLEssRUFBbUI7QUFDNUIsZ0JBQUlnQixLQUFLLEdBQUdoQixLQUFLLENBQUNpQixVQUFOLEtBQXFCLEtBQUt6QyxlQUF0Qzs7QUFDQSxpQkFBSzBDLElBQUwsQ0FBVUYsS0FBVjtBQUNIOzs7aUNBRU1HLFMsRUFBbUI7QUFDdEI7QUFDQSxnQkFBSSxLQUFLMUMsTUFBVCxFQUFpQjtBQUNiLG1CQUFLQSxNQUFMLENBQVkyQyxXQUFaLENBQXdCLEtBQUtyRCxVQUE3QjtBQUNBVixjQUFBQSxJQUFJLENBQUNnRSxHQUFMLENBQVMsS0FBS3RELFVBQWQsRUFBMEIsS0FBS0EsVUFBL0IsRUFBMkMsS0FBS3VELFlBQWhEO0FBQ0EsbUJBQUs1QixJQUFMLENBQVVLLFdBQVYsQ0FBc0IsS0FBS2hDLFVBQTNCO0FBQ0g7QUFDSjs7OzhCQTVGMEI7QUFDdkIsbUJBQU8sS0FBS3dELE9BQVo7QUFDSDs7OzhCQUVpQztBQUM5QixnQkFBSUMsS0FBSyxHQUFHLEtBQUs5QixJQUFMLENBQVVpQixXQUFWLENBQXNCYyxLQUF0QixFQUFaO0FBQ0FELFlBQUFBLEtBQUssQ0FBQ1gsQ0FBTixJQUFXLENBQUMsQ0FBWjtBQUNBVyxZQUFBQSxLQUFLLENBQUNWLENBQU4sSUFBVyxDQUFDLENBQVo7QUFDQVUsWUFBQUEsS0FBSyxDQUFDVCxDQUFOLElBQVcsQ0FBQyxDQUFaO0FBQ0EsbUJBQU9TLEtBQVA7QUFDSDs7OzhCQXREc0M7QUFDbkMsbUJBQU8sS0FBSzlDLEtBQVo7QUFDSDs7OztRQVY2QjFCLFMsV0FPZjBCLEssR0FBc0IsSTs7Ozs7aUJBTXRCLEk7Ozs7Ozs7aUJBR1UsSTs7Ozs7OztpQkFHSnBCLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgc3lzLCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIEV2ZW50TW91c2UsIFZlYzMsIHYzLCBRdWF0LCBxdWF0LCBDYW1lcmFDb21wb25lbnQgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnRm9sbG93Q2FtZXJhJylcbmV4cG9ydCBjbGFzcyBGb2xsb3dDYW1lcmEgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBGb2xsb3dDYW1lcmEgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogRm9sbG93Q2FtZXJhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIHRhcmdldDogTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBDYW1lcmFDb21wb25lbnQgfSlcbiAgICBjYW1lcmE6Q2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IFZlYzMgfSlcbiAgICBsb29rQXRPZmZzZXQ6IFZlYzMgPSB2MygwLCAxMCwgMCk7XG5cbiAgICBwcml2YXRlIF9pc01vdXNlRG93biA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3RhcmdldFBvcyA9IHYzKDAsIDAsIDApO1xuICAgIHByaXZhdGUgX2NhbWVyYVBvcyA9IHYzKDAsIDAsIDApO1xuICAgIHByaXZhdGUgX2xvb2tEaXIgPSB2MygwLCAwLCAtMSk7XG4gICAgcHJpdmF0ZSBfbG9va1JpZ2h0ID0gdjMoMSwgMCwgMCk7XG4gICAgcHJpdmF0ZSBfbG9va1VwID0gdjMoMCwgMSwgMCk7XG4gICAgcHJpdmF0ZSBfcm90YXRlID0gcXVhdCgpO1xuICAgIHByaXZhdGUgX3pvb20gPSA0O1xuICAgIHByaXZhdGUgX21pblpvb20gPSAyO1xuICAgIHByaXZhdGUgX21heFpvb20gPSA2O1xuICAgIHByaXZhdGUgX3pvb21TZW5zaXRpdnR5ID0gMC4wMjtcblxuICAgIHNldEZvbGxvd1RhcmdldCh0YXJnZXQ6IE5vZGUpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEZvbGxvd0NhbWVyYS5faW5zdCA9IHRoaXM7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9XSEVFTCwgdGhpcy5vbk1vdXNlV2hlZWwsIHRoaXMpO1xuXG4gICAgICAgIC8vc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG4gICAgICAgIC8vc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG4gICAgICAgIC8vc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMub25Nb3VzZURvd24sdGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGp1c3RDYW1lcmEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxvb2tEaXIoKTogVmVjMyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvb2tEaXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCByb3RhdGlvbkV1bGVycygpOiBWZWMzIHtcbiAgICAgICAgbGV0IGV1bGVyID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzLmNsb25lKCk7XG4gICAgICAgIGV1bGVyLnggKj0gLTE7XG4gICAgICAgIGV1bGVyLnkgKj0gLTE7XG4gICAgICAgIGV1bGVyLnogKj0gLTE7XG4gICAgICAgIHJldHVybiBldWxlcjtcbiAgICB9XG5cbiAgICBhZGp1c3RDYW1lcmEoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFZlYzMubm9ybWFsaXplKHRoaXMuX2xvb2tEaXIsIHRoaXMuX2xvb2tEaXIpO1xuXG4gICAgICAgIHRoaXMuX2xvb2tVcC5zZXQoMCwgMSwgMCk7XG5cbiAgICAgICAgLy/lj5blj7PlkJHph49cbiAgICAgICAgVmVjMy5jcm9zcyh0aGlzLl9sb29rUmlnaHQsIHRoaXMuX2xvb2tEaXIsIHRoaXMuX2xvb2tVcCk7XG4gICAgICAgIFZlYzMubm9ybWFsaXplKHRoaXMuX2xvb2tSaWdodCwgdGhpcy5fbG9va1JpZ2h0KTtcblxuICAgICAgICAvL+WPluW+l+ecn+WunueahFVQ5ZCR6YePXG4gICAgICAgIFZlYzMuY3Jvc3ModGhpcy5fbG9va1VwLCB0aGlzLl9sb29rUmlnaHQsIHRoaXMuX2xvb2tEaXIpO1xuICAgICAgICBWZWMzLm5vcm1hbGl6ZSh0aGlzLl9sb29rVXAsIHRoaXMuX2xvb2tVcCk7XG5cbiAgICAgICAgUXVhdC5mcm9tQXhlcyh0aGlzLl9yb3RhdGUsIHRoaXMuX2xvb2tSaWdodCwgdGhpcy5fbG9va1VwLCB0aGlzLl9sb29rRGlyKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKHRoaXMuX3JvdGF0ZSk7XG5cblxuICAgICAgICAvL+S7juinguWvn+eCueW8gOWni++8jOaKiuaRhOebuOacuuW+gOWQjuaOqHpvb23ot53nprtcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcih0aGlzLl9sb29rRGlyLCB0aGlzLl9sb29rRGlyLCB0aGlzLl96b29tKTtcbiAgICAgICAgVmVjMy5zdWJ0cmFjdCh0aGlzLl9jYW1lcmFQb3MsIHYzKDAsIDAsIDApLCB0aGlzLl9sb29rRGlyKTtcbiAgICAgICAgdGhpcy5jYW1lcmEubm9kZS5zZXRQb3NpdGlvbih0aGlzLl9jYW1lcmFQb3MpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiBFdmVudE1vdXNlKSB7XG4gICAgICAgIGlmKGV2ZW50LmdldEJ1dHRvbigpID09IEV2ZW50TW91c2UuQlVUVE9OX1JJR0hUKXtcbiAgICAgICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VVcCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTW92ZShldmVudDogRXZlbnRNb3VzZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzTW91c2VEb3duKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRlbHRhWCA9IGV2ZW50LmdldFVJRGVsdGFYKCkgKiAwLjE7XG4gICAgICAgIGxldCBkZWx0YVkgPSBldmVudC5nZXRVSURlbHRhWSgpICogMC4xO1xuICAgICAgICB0aGlzLnJvdGF0ZShkZWx0YVksLWRlbHRhWCk7XG4gICAgfVxuXG4gICAgcm90YXRlKHJ4Om51bWJlcixyeTpudW1iZXIpe1xuICAgICAgICBsZXQgYW5nbGVzID0gdGhpcy5ub2RlLmV1bGVyQW5nbGVzO1xuICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb25Gcm9tRXVsZXIoYW5nbGVzLnggKyByeCwgYW5nbGVzLnkgKyByeSwgYW5nbGVzLnopO1xuICAgIH1cblxuICAgIHpvb20oZGVsdGE6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5fem9vbSArPSBkZWx0YSAqIHRoaXMuX3pvb21TZW5zaXRpdnR5O1xuICAgICAgICBpZiAodGhpcy5fem9vbSA8IHRoaXMuX21pblpvb20pIHtcbiAgICAgICAgICAgIHRoaXMuX3pvb20gPSB0aGlzLl9taW5ab29tO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl96b29tID4gdGhpcy5fbWF4Wm9vbSkge1xuICAgICAgICAgICAgdGhpcy5fem9vbSA9IHRoaXMuX21heFpvb207XG4gICAgICAgIH1cblxuICAgICAgICAvL+S7juinguWvn+eCueW8gOWni++8jOaKiuaRhOebuOacuuW+gOWQjuaOqHpvb23ot53nprtcbiAgICAgICAgVmVjMy5ub3JtYWxpemUodGhpcy5fbG9va0RpciwgdGhpcy5fbG9va0Rpcik7XG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fbG9va0RpciwgdGhpcy5fbG9va0RpciwgdGhpcy5fem9vbSk7XG4gICAgICAgIFZlYzMuc3VidHJhY3QodGhpcy5fY2FtZXJhUG9zLCB2MygwLCAwLCAwKSwgdGhpcy5fbG9va0Rpcik7XG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fY2FtZXJhUG9zKTtcbiAgICB9XG5cblxuICAgIG9uTW91c2VXaGVlbChldmVudDogRXZlbnRNb3VzZSkge1xuICAgICAgICBsZXQgZGVsdGEgPSBldmVudC5nZXRTY3JvbGxZKCkgKiB0aGlzLl96b29tU2Vuc2l0aXZ0eTtcbiAgICAgICAgdGhpcy56b29tKGRlbHRhKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmdldFBvc2l0aW9uKHRoaXMuX3RhcmdldFBvcyk7XG4gICAgICAgICAgICBWZWMzLmFkZCh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX3RhcmdldFBvcywgdGhpcy5sb29rQXRPZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX3RhcmdldFBvcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=