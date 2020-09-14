System.register(["cc", "code-quality:cr", "./FollowCamera.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, LabelComponent, loader, Prefab, instantiate, v3, find, FollowCamera, _dec, _class, _temp, _crd, ccclass, property, TitleBar;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfFollowCamera(extras) {
    _reporterNs.report("FollowCamera", "./FollowCamera", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      LabelComponent = _cc.LabelComponent;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      find = _cc.find;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_FollowCameraJs) {
      FollowCamera = _FollowCameraJs.FollowCamera;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "9efd88bfypDAJtmoh9/iIWl", "TitleBar", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("TitleBar", TitleBar = (_dec = ccclass('TitleBar'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(TitleBar, _Component);

        function TitleBar() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, TitleBar);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TitleBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this._titleBar = null;
          _this._hpBar = null;
          _this._mpBar = null;
          _this._nameTxt = null;
          _this._hpPercent = 1;
          _this._mpPercent = 1;
          _this._nameStr = '不要太酷哦';
          _this._targetPos = v3();
          _this._offsetY = 1;
          _this._lastUpdateTime = Date.now();
          _this._titleBarPoint = null;
          return _this;
        }

        _createClass(TitleBar, [{
          key: "start",
          value: function start() {
            this._titleBarPoint = this.node.getChildByName('title_bar_point') || this.node;
            this.loadTitleBar();
          }
        }, {
          key: "loadTitleBar",
          value: function loadTitleBar() {
            var _this2 = this;

            loader.loadRes('title_bar', Prefab, function (err, asset) {
              if (!_this2.isValid || !_this2.node.isValid) {
                return;
              }

              var titleBar = instantiate(asset);
              var root = find('Canvas'); //UIMgr.inst.getLayerNode(UILayer.GAME);

              root.addChild(titleBar);
              _this2._titleBar = titleBar;
              _this2._hpBar = titleBar.getChildByName('hp_bar');
              _this2._mpBar = titleBar.getChildByName('mp_bar');
              _this2._nameTxt = titleBar.getChildByName('name').getComponent(LabelComponent);

              _this2.setHPPercent(_this2._hpPercent);

              _this2.setMPPercent(_this2._mpPercent);

              _this2.setName(_this2._nameStr);
            });
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            if (this._titleBar) {
              this._titleBar.removeFromParent();
            }

            this._titleBar = null;
          } //slow-update. fps = 10

        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this._titleBar) {
              return;
            }

            var now = Date.now();

            if (now - this._lastUpdateTime < 100) {
              return;
            }

            this._titleBarPoint.getWorldPosition(this._targetPos); //this._targetPos.y += this._offsetY;


            (_crd && FollowCamera === void 0 ? (_reportPossibleCrUseOfFollowCamera({
              error: Error()
            }), FollowCamera) : FollowCamera).inst.camera.convertToUINode(this._targetPos, this._titleBar.parent, this._targetPos);
            this._titleBar.position = this._targetPos;
          }
        }, {
          key: "setHPPercent",
          value: function setHPPercent(percent) {
            this._hpPercent = percent;

            if (this._hpBar) {
              this._hpBar.setScale(percent, 1, 1);
            }
          }
        }, {
          key: "setMPPercent",
          value: function setMPPercent(percent) {
            this._mpPercent = percent;

            if (this._mpBar) {
              this._mpBar.setScale(percent, 1, 1);
            }
          }
        }, {
          key: "setName",
          value: function setName(name) {
            this._nameStr = name;

            if (this._nameTxt) {
              this._nameTxt.string = this._nameStr;
            }
          }
        }]);

        return TitleBar;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvY29tcG9uZW50cy9UaXRsZUJhci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTGFiZWxDb21wb25lbnQiLCJsb2FkZXIiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsInYzIiwiZmluZCIsIkZvbGxvd0NhbWVyYSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlRpdGxlQmFyIiwiX3RpdGxlQmFyIiwiX2hwQmFyIiwiX21wQmFyIiwiX25hbWVUeHQiLCJfaHBQZXJjZW50IiwiX21wUGVyY2VudCIsIl9uYW1lU3RyIiwiX3RhcmdldFBvcyIsIl9vZmZzZXRZIiwiX2xhc3RVcGRhdGVUaW1lIiwiRGF0ZSIsIm5vdyIsIl90aXRsZUJhclBvaW50Iiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwibG9hZFRpdGxlQmFyIiwibG9hZFJlcyIsImVyciIsImFzc2V0IiwiaXNWYWxpZCIsInRpdGxlQmFyIiwicm9vdCIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50Iiwic2V0SFBQZXJjZW50Iiwic2V0TVBQZXJjZW50Iiwic2V0TmFtZSIsInJlbW92ZUZyb21QYXJlbnQiLCJkZWx0YVRpbWUiLCJnZXRXb3JsZFBvc2l0aW9uIiwiaW5zdCIsImNhbWVyYSIsImNvbnZlcnRUb1VJTm9kZSIsInBhcmVudCIsInBvc2l0aW9uIiwicGVyY2VudCIsInNldFNjYWxlIiwibmFtZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1B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L0I7QUFDSDs7O3VDQUVZNEIsTyxFQUFpQjtBQUMxQixpQkFBSy9CLFVBQUwsR0FBa0IrQixPQUFsQjs7QUFDQSxnQkFBSSxLQUFLbEMsTUFBVCxFQUFpQjtBQUNiLG1CQUFLQSxNQUFMLENBQVltQyxRQUFaLENBQXFCRCxPQUFyQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUNIO0FBQ0o7Ozt1Q0FFWUEsTyxFQUFpQjtBQUMxQixpQkFBSzlCLFVBQUwsR0FBa0I4QixPQUFsQjs7QUFDQSxnQkFBSSxLQUFLakMsTUFBVCxFQUFpQjtBQUNiLG1CQUFLQSxNQUFMLENBQVlrQyxRQUFaLENBQXFCRCxPQUFyQixFQUE4QixDQUE5QixFQUFpQyxDQUFqQztBQUNIO0FBQ0o7OztrQ0FFT0UsSSxFQUFjO0FBQ2xCLGlCQUFLL0IsUUFBTCxHQUFnQitCLElBQWhCOztBQUNBLGdCQUFJLEtBQUtsQyxRQUFULEVBQW1CO0FBQ2YsbUJBQUtBLFFBQUwsQ0FBY21DLE1BQWQsR0FBdUIsS0FBS2hDLFFBQTVCO0FBQ0g7QUFDSjs7OztRQW5GeUJqQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBMYWJlbENvbXBvbmVudCwgbG9hZGVyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBWZWMzLCB2MywgZmluZCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFVJTWdyLCBVSUxheWVyIH0gZnJvbSAnLi4vcWZ3L1VJTWdyJztcbmltcG9ydCB7IEZvbGxvd0NhbWVyYSB9IGZyb20gJy4vRm9sbG93Q2FtZXJhJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdUaXRsZUJhcicpXG5leHBvcnQgY2xhc3MgVGl0bGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfdGl0bGVCYXI6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2hwQmFyOiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9tcEJhcjogTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmFtZVR4dDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfaHBQZXJjZW50OiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX21wUGVyY2VudDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9uYW1lU3RyOiBzdHJpbmcgPSAn5LiN6KaB5aSq6YW35ZOmJztcblxuICAgIHByaXZhdGUgX3RhcmdldFBvcyA9IHYzKCk7XG4gICAgcHJpdmF0ZSBfb2Zmc2V0WTogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBwcml2YXRlIF90aXRsZUJhclBvaW50Ok5vZGUgPSBudWxsO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl90aXRsZUJhclBvaW50ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCd0aXRsZV9iYXJfcG9pbnQnKSB8fCB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMubG9hZFRpdGxlQmFyKCk7XG4gICAgfVxuXG4gICAgbG9hZFRpdGxlQmFyKCkge1xuICAgICAgICBsb2FkZXIubG9hZFJlcygndGl0bGVfYmFyJywgUHJlZmFiLCAoZXJyLCBhc3NldDogUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhdGhpcy5ub2RlLmlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGl0bGVCYXIgPSBpbnN0YW50aWF0ZShhc3NldCk7XG4gICAgICAgICAgICBsZXQgcm9vdCA9IGZpbmQoJ0NhbnZhcycpOyAvL1VJTWdyLmluc3QuZ2V0TGF5ZXJOb2RlKFVJTGF5ZXIuR0FNRSk7XG4gICAgICAgICAgICByb290LmFkZENoaWxkKHRpdGxlQmFyKTtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlQmFyID0gdGl0bGVCYXI7XG4gICAgICAgICAgICB0aGlzLl9ocEJhciA9IHRpdGxlQmFyLmdldENoaWxkQnlOYW1lKCdocF9iYXInKTtcbiAgICAgICAgICAgIHRoaXMuX21wQmFyID0gdGl0bGVCYXIuZ2V0Q2hpbGRCeU5hbWUoJ21wX2JhcicpO1xuICAgICAgICAgICAgdGhpcy5fbmFtZVR4dCA9IHRpdGxlQmFyLmdldENoaWxkQnlOYW1lKCduYW1lJykuZ2V0Q29tcG9uZW50KExhYmVsQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRIUFBlcmNlbnQodGhpcy5faHBQZXJjZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TVBQZXJjZW50KHRoaXMuX21wUGVyY2VudCk7XG4gICAgICAgICAgICB0aGlzLnNldE5hbWUodGhpcy5fbmFtZVN0cik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlQmFyKSB7XG4gICAgICAgICAgICB0aGlzLl90aXRsZUJhci5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGl0bGVCYXIgPSBudWxsO1xuICAgIH1cblxuICAgIC8vc2xvdy11cGRhdGUuIGZwcyA9IDEwXG4gICAgdXBkYXRlKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fdGl0bGVCYXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBpZiAobm93IC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPCAxMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RpdGxlQmFyUG9pbnQuZ2V0V29ybGRQb3NpdGlvbih0aGlzLl90YXJnZXRQb3MpO1xuICAgICAgICAvL3RoaXMuX3RhcmdldFBvcy55ICs9IHRoaXMuX29mZnNldFk7XG4gICAgICAgIEZvbGxvd0NhbWVyYS5pbnN0LmNhbWVyYS5jb252ZXJ0VG9VSU5vZGUodGhpcy5fdGFyZ2V0UG9zLCB0aGlzLl90aXRsZUJhci5wYXJlbnQsdGhpcy5fdGFyZ2V0UG9zKTtcbiAgICAgICAgdGhpcy5fdGl0bGVCYXIucG9zaXRpb24gPSB0aGlzLl90YXJnZXRQb3M7XG4gICAgfVxuXG4gICAgc2V0SFBQZXJjZW50KHBlcmNlbnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9ocFBlcmNlbnQgPSBwZXJjZW50O1xuICAgICAgICBpZiAodGhpcy5faHBCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hwQmFyLnNldFNjYWxlKHBlcmNlbnQsIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TVBQZXJjZW50KHBlcmNlbnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9tcFBlcmNlbnQgPSBwZXJjZW50O1xuICAgICAgICBpZiAodGhpcy5fbXBCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX21wQmFyLnNldFNjYWxlKHBlcmNlbnQsIDEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZVN0ciA9IG5hbWU7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lVHh0KSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lVHh0LnN0cmluZyA9IHRoaXMuX25hbWVTdHI7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=