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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvY29tcG9uZW50cy9Gb2xsb3dDYW1lcmEudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiRXZlbnRNb3VzZSIsIlZlYzMiLCJ2MyIsIlF1YXQiLCJxdWF0IiwiQ2FtZXJhQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRm9sbG93Q2FtZXJhIiwidHlwZSIsIl9pc01vdXNlRG93biIsIl90YXJnZXRQb3MiLCJfY2FtZXJhUG9zIiwiX2xvb2tEaXIiLCJfbG9va1JpZ2h0IiwiX2xvb2tVcCIsIl9yb3RhdGUiLCJfem9vbSIsIl9taW5ab29tIiwiX21heFpvb20iLCJfem9vbVNlbnNpdGl2dHkiLCJ0YXJnZXQiLCJfaW5zdCIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfRE9XTiIsIm9uTW91c2VEb3duIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJNT1VTRV9NT1ZFIiwib25Nb3VzZU1vdmUiLCJNT1VTRV9XSEVFTCIsIm9uTW91c2VXaGVlbCIsImFkanVzdENhbWVyYSIsIm5vcm1hbGl6ZSIsInNldCIsImNyb3NzIiwiZnJvbUF4ZXMiLCJub2RlIiwic2V0Um90YXRpb24iLCJtdWx0aXBseVNjYWxhciIsInN1YnRyYWN0IiwiY2FtZXJhIiwic2V0UG9zaXRpb24iLCJldmVudCIsImdldEJ1dHRvbiIsIkJVVFRPTl9SSUdIVCIsImRlbHRhWCIsImdldFVJRGVsdGFYIiwiZGVsdGFZIiwiZ2V0VUlEZWx0YVkiLCJyb3RhdGUiLCJyeCIsInJ5IiwiYW5nbGVzIiwiZXVsZXJBbmdsZXMiLCJzZXRSb3RhdGlvbkZyb21FdWxlciIsIngiLCJ5IiwieiIsImRlbHRhIiwiZ2V0U2Nyb2xsWSIsInpvb20iLCJkZWx0YVRpbWUiLCJnZXRQb3NpdGlvbiIs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LENBQTZCLEtBQUsvQixVQUFsQztBQUNIOzs7dUNBR1lnQyxLLEVBQW1CO0FBQzVCLGdCQUFJZ0IsS0FBSyxHQUFHaEIsS0FBSyxDQUFDaUIsVUFBTixLQUFxQixLQUFLekMsZUFBdEM7O0FBQ0EsaUJBQUswQyxJQUFMLENBQVVGLEtBQVY7QUFDSDs7O2lDQUVNRyxTLEVBQW1CO0FBQ3RCO0FBQ0EsZ0JBQUksS0FBSzFDLE1BQVQsRUFBaUI7QUFDYixtQkFBS0EsTUFBTCxDQUFZMkMsV0FBWixDQUF3QixLQUFLckQsVUFBN0I7QUFDQVYsY0FBQUEsSUFBSSxDQUFDZ0UsR0FBTCxDQUFTLEtBQUt0RCxVQUFkLEVBQTBCLEtBQUtBLFVBQS9CLEVBQTJDLEtBQUt1RCxZQUFoRDtBQUNBLG1CQUFLNUIsSUFBTCxDQUFVSyxXQUFWLENBQXNCLEtBQUtoQyxVQUEzQjtBQUNIO0FBQ0o7Ozs4QkE1RjBCO0FBQ3ZCLG1CQUFPLEtBQUt3RCxPQUFaO0FBQ0g7Ozs4QkFFaUM7QUFDOUIsZ0JBQUlDLEtBQUssR0FBRyxLQUFLOUIsSUFBTCxDQUFVaUIsV0FBVixDQUFzQmMsS0FBdEIsRUFBWjtBQUNBRCxZQUFBQSxLQUFLLENBQUNYLENBQU4sSUFBVyxDQUFDLENBQVo7QUFDQVcsWUFBQUEsS0FBSyxDQUFDVixDQUFOLElBQVcsQ0FBQyxDQUFaO0FBQ0FVLFlBQUFBLEtBQUssQ0FBQ1QsQ0FBTixJQUFXLENBQUMsQ0FBWjtBQUNBLG1CQUFPUyxLQUFQO0FBQ0g7Ozs4QkF0RHNDO0FBQ25DLG1CQUFPLEtBQUs5QyxLQUFaO0FBQ0g7Ozs7UUFWNkIxQixTLFdBT2YwQixLLEdBQXNCLEk7Ozs7O2lCQU10QixJOzs7Ozs7O2lCQUdVLEk7Ozs7Ozs7aUJBR0pwQixFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIHN5cywgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudE1vdXNlLCBWZWMzLCB2MywgUXVhdCwgcXVhdCwgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0ZvbGxvd0NhbWVyYScpXG5leHBvcnQgY2xhc3MgRm9sbG93Q2FtZXJhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogRm9sbG93Q2FtZXJhID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IEZvbGxvd0NhbWVyYSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICB0YXJnZXQ6IE5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogQ2FtZXJhQ29tcG9uZW50IH0pXG4gICAgY2FtZXJhOkNhbWVyYUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBWZWMzIH0pXG4gICAgbG9va0F0T2Zmc2V0OiBWZWMzID0gdjMoMCwgMTAsIDApO1xuXG4gICAgcHJpdmF0ZSBfaXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBwcml2YXRlIF90YXJnZXRQb3MgPSB2MygwLCAwLCAwKTtcbiAgICBwcml2YXRlIF9jYW1lcmFQb3MgPSB2MygwLCAwLCAwKTtcbiAgICBwcml2YXRlIF9sb29rRGlyID0gdjMoMCwgMCwgLTEpO1xuICAgIHByaXZhdGUgX2xvb2tSaWdodCA9IHYzKDEsIDAsIDApO1xuICAgIHByaXZhdGUgX2xvb2tVcCA9IHYzKDAsIDEsIDApO1xuICAgIHByaXZhdGUgX3JvdGF0ZSA9IHF1YXQoKTtcbiAgICBwcml2YXRlIF96b29tID0gNDtcbiAgICBwcml2YXRlIF9taW5ab29tID0gMjtcbiAgICBwcml2YXRlIF9tYXhab29tID0gNjtcbiAgICBwcml2YXRlIF96b29tU2Vuc2l0aXZ0eSA9IDAuMDI7XG5cbiAgICBzZXRGb2xsb3dUYXJnZXQodGFyZ2V0OiBOb2RlKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBGb2xsb3dDYW1lcmEuX2luc3QgPSB0aGlzO1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX01PVkUsIHRoaXMub25Nb3VzZU1vdmUsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfV0hFRUwsIHRoaXMub25Nb3VzZVdoZWVsLCB0aGlzKTtcblxuICAgICAgICAvL3N5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uTW91c2VEb3duLHRoaXMpO1xuICAgICAgICAvL3N5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uTW91c2VEb3duLHRoaXMpO1xuICAgICAgICAvL3N5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uTW91c2VEb3duLHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYWRqdXN0Q2FtZXJhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsb29rRGlyKCk6IFZlYzMge1xuICAgICAgICByZXR1cm4gdGhpcy5sb29rRGlyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcm90YXRpb25FdWxlcnMoKTogVmVjMyB7XG4gICAgICAgIGxldCBldWxlciA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcy5jbG9uZSgpO1xuICAgICAgICBldWxlci54ICo9IC0xO1xuICAgICAgICBldWxlci55ICo9IC0xO1xuICAgICAgICBldWxlci56ICo9IC0xO1xuICAgICAgICByZXR1cm4gZXVsZXI7XG4gICAgfVxuXG4gICAgYWRqdXN0Q2FtZXJhKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBWZWMzLm5vcm1hbGl6ZSh0aGlzLl9sb29rRGlyLCB0aGlzLl9sb29rRGlyKTtcblxuICAgICAgICB0aGlzLl9sb29rVXAuc2V0KDAsIDEsIDApO1xuXG4gICAgICAgIC8v5Y+W5Y+z5ZCR6YePXG4gICAgICAgIFZlYzMuY3Jvc3ModGhpcy5fbG9va1JpZ2h0LCB0aGlzLl9sb29rRGlyLCB0aGlzLl9sb29rVXApO1xuICAgICAgICBWZWMzLm5vcm1hbGl6ZSh0aGlzLl9sb29rUmlnaHQsIHRoaXMuX2xvb2tSaWdodCk7XG5cbiAgICAgICAgLy/lj5blvpfnnJ/lrp7nmoRVUOWQkemHj1xuICAgICAgICBWZWMzLmNyb3NzKHRoaXMuX2xvb2tVcCwgdGhpcy5fbG9va1JpZ2h0LCB0aGlzLl9sb29rRGlyKTtcbiAgICAgICAgVmVjMy5ub3JtYWxpemUodGhpcy5fbG9va1VwLCB0aGlzLl9sb29rVXApO1xuXG4gICAgICAgIFF1YXQuZnJvbUF4ZXModGhpcy5fcm90YXRlLCB0aGlzLl9sb29rUmlnaHQsIHRoaXMuX2xvb2tVcCwgdGhpcy5fbG9va0Rpcik7XG4gICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbih0aGlzLl9yb3RhdGUpO1xuXG5cbiAgICAgICAgLy/ku47op4Llr5/ngrnlvIDlp4vvvIzmiormkYTnm7jmnLrlvoDlkI7mjqh6b29t6Led56a7XG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fbG9va0RpciwgdGhpcy5fbG9va0RpciwgdGhpcy5fem9vbSk7XG4gICAgICAgIFZlYzMuc3VidHJhY3QodGhpcy5fY2FtZXJhUG9zLCB2MygwLCAwLCAwKSwgdGhpcy5fbG9va0Rpcik7XG4gICAgICAgIHRoaXMuY2FtZXJhLm5vZGUuc2V0UG9zaXRpb24odGhpcy5fY2FtZXJhUG9zKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRG93bihldmVudDogRXZlbnRNb3VzZSkge1xuICAgICAgICBpZihldmVudC5nZXRCdXR0b24oKSA9PSBFdmVudE1vdXNlLkJVVFRPTl9SSUdIVCl7XG4gICAgICAgICAgICB0aGlzLl9pc01vdXNlRG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoKSB7XG4gICAgICAgIHRoaXMuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQ6IEV2ZW50TW91c2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdXNlRG93bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkZWx0YVggPSBldmVudC5nZXRVSURlbHRhWCgpICogMC4xO1xuICAgICAgICBsZXQgZGVsdGFZID0gZXZlbnQuZ2V0VUlEZWx0YVkoKSAqIDAuMTtcbiAgICAgICAgdGhpcy5yb3RhdGUoZGVsdGFZLC1kZWx0YVgpO1xuICAgIH1cblxuICAgIHJvdGF0ZShyeDpudW1iZXIscnk6bnVtYmVyKXtcbiAgICAgICAgbGV0IGFuZ2xlcyA9IHRoaXMubm9kZS5ldWxlckFuZ2xlcztcbiAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uRnJvbUV1bGVyKGFuZ2xlcy54ICsgcngsIGFuZ2xlcy55ICsgcnksIGFuZ2xlcy56KTtcbiAgICB9XG5cbiAgICB6b29tKGRlbHRhOm51bWJlcil7XG4gICAgICAgIHRoaXMuX3pvb20gKz0gZGVsdGEgKiB0aGlzLl96b29tU2Vuc2l0aXZ0eTtcbiAgICAgICAgaWYgKHRoaXMuX3pvb20gPCB0aGlzLl9taW5ab29tKSB7XG4gICAgICAgICAgICB0aGlzLl96b29tID0gdGhpcy5fbWluWm9vbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fem9vbSA+IHRoaXMuX21heFpvb20pIHtcbiAgICAgICAgICAgIHRoaXMuX3pvb20gPSB0aGlzLl9tYXhab29tO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/ku47op4Llr5/ngrnlvIDlp4vvvIzmiormkYTnm7jmnLrlvoDlkI7mjqh6b29t6Led56a7XG4gICAgICAgIFZlYzMubm9ybWFsaXplKHRoaXMuX2xvb2tEaXIsIHRoaXMuX2xvb2tEaXIpO1xuICAgICAgICBWZWMzLm11bHRpcGx5U2NhbGFyKHRoaXMuX2xvb2tEaXIsIHRoaXMuX2xvb2tEaXIsIHRoaXMuX3pvb20pO1xuICAgICAgICBWZWMzLnN1YnRyYWN0KHRoaXMuX2NhbWVyYVBvcywgdjMoMCwgMCwgMCksIHRoaXMuX2xvb2tEaXIpO1xuICAgICAgICB0aGlzLmNhbWVyYS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuX2NhbWVyYVBvcyk7XG4gICAgfVxuXG5cbiAgICBvbk1vdXNlV2hlZWwoZXZlbnQ6IEV2ZW50TW91c2UpIHtcbiAgICAgICAgbGV0IGRlbHRhID0gZXZlbnQuZ2V0U2Nyb2xsWSgpICogdGhpcy5fem9vbVNlbnNpdGl2dHk7XG4gICAgICAgIHRoaXMuem9vbShkZWx0YSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5nZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xuICAgICAgICAgICAgVmVjMy5hZGQodGhpcy5fdGFyZ2V0UG9zLCB0aGlzLl90YXJnZXRQb3MsIHRoaXMubG9va0F0T2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19