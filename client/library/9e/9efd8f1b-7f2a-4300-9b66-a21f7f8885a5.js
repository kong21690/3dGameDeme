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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9jb21wb25lbnRzL1RpdGxlQmFyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJMYWJlbENvbXBvbmVudCIsImxvYWRlciIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwidjMiLCJmaW5kIiwiRm9sbG93Q2FtZXJhIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiVGl0bGVCYXIiLCJfdGl0bGVCYXIiLCJfaHBCYXIiLCJfbXBCYXIiLCJfbmFtZVR4dCIsIl9ocFBlcmNlbnQiLCJfbXBQZXJjZW50IiwiX25hbWVTdHIiLCJfdGFyZ2V0UG9zIiwiX29mZnNldFkiLCJfbGFzdFVwZGF0ZVRpbWUiLCJEYXRlIiwibm93IiwiX3RpdGxlQmFyUG9pbnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJsb2FkVGl0bGVCYXIiLCJsb2FkUmVzIiwiZXJyIiwiYXNzZXQiLCJpc1ZhbGlkIiwidGl0bGVCYXIiLCJyb290IiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJzZXRIUFBlcmNlbnQiLCJzZXRNUFBlcmNlbnQiLCJzZXROYW1lIiwicmVtb3ZlRnJvbVBhcmVudCIsImRlbHRhVGltZSIsImdldFdvcmxkUG9zaXRpb24iLCJpbnN0IiwiY2FtZXJhIiwiY29udmVydFRvVUlOb2RlIiwicGFyZW50IiwicG9zaXRpb24iLCJwZXJjZW50Iiwic2V0U2NhbGUiLCJuYW1lIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsYyxPQUFBQSxjO0FBQWdCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFtQkMsTUFBQUEsRSxPQUFBQSxFO0FBQUlDLE1BQUFB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O0FBQzFCLGlCQUFLL0IsVUFBTCxHQUFrQitCLE9BQWxCOztBQUNBLGdCQUFJLEtBQUtsQyxNQUFULEVBQWlCO0FBQ2IsbUJBQUtBLE1BQUwsQ0FBWW1DLFFBQVosQ0FBcUJELE9BQXJCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0g7QUFDSjs7O3VDQUVZQSxPLEVBQWlCO0FBQzFCLGlCQUFLOUIsVUFBTCxHQUFrQjhCLE9BQWxCOztBQUNBLGdCQUFJLEtBQUtqQyxNQUFULEVBQWlCO0FBQ2IsbUJBQUtBLE1BQUwsQ0FBWWtDLFFBQVosQ0FBcUJELE9BQXJCLEVBQThCLENBQTlCLEVBQWlDLENBQWpDO0FBQ0g7QUFDSjs7O2tDQUVPRSxJLEVBQWM7QUFDbEIsaUJBQUsvQixRQUFMLEdBQWdCK0IsSUFBaEI7O0FBQ0EsZ0JBQUksS0FBS2xDLFFBQVQsRUFBbUI7QUFDZixtQkFBS0EsUUFBTCxDQUFjbUMsTUFBZCxHQUF1QixLQUFLaEMsUUFBNUI7QUFDSDtBQUNKOzs7O1FBbkZ5QmpCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIExhYmVsQ29tcG9uZW50LCBsb2FkZXIsIFByZWZhYiwgaW5zdGFudGlhdGUsIFZlYzMsIHYzLCBmaW5kIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlNZ3IsIFVJTGF5ZXIgfSBmcm9tICcuLi9xZncvVUlNZ3InO1xuaW1wb3J0IHsgRm9sbG93Q2FtZXJhIH0gZnJvbSAnLi9Gb2xsb3dDYW1lcmEnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1RpdGxlQmFyJylcbmV4cG9ydCBjbGFzcyBUaXRsZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF90aXRsZUJhcjogTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfaHBCYXI6IE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX21wQmFyOiBOb2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9uYW1lVHh0OiBMYWJlbENvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9ocFBlcmNlbnQ6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfbXBQZXJjZW50OiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX25hbWVTdHI6IHN0cmluZyA9ICfkuI3opoHlpKrphbflk6YnO1xuXG4gICAgcHJpdmF0ZSBfdGFyZ2V0UG9zID0gdjMoKTtcbiAgICBwcml2YXRlIF9vZmZzZXRZOiBudW1iZXIgPSAxO1xuXG4gICAgcHJpdmF0ZSBfbGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHByaXZhdGUgX3RpdGxlQmFyUG9pbnQ6Tm9kZSA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX3RpdGxlQmFyUG9pbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlX2Jhcl9wb2ludCcpIHx8IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5sb2FkVGl0bGVCYXIoKTtcbiAgICB9XG5cbiAgICBsb2FkVGl0bGVCYXIoKSB7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzKCd0aXRsZV9iYXInLCBQcmVmYWIsIChlcnIsIGFzc2V0OiBQcmVmYWIpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICF0aGlzLm5vZGUuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0aXRsZUJhciA9IGluc3RhbnRpYXRlKGFzc2V0KTtcbiAgICAgICAgICAgIGxldCByb290ID0gZmluZCgnQ2FudmFzJyk7IC8vVUlNZ3IuaW5zdC5nZXRMYXllck5vZGUoVUlMYXllci5HQU1FKTtcbiAgICAgICAgICAgIHJvb3QuYWRkQ2hpbGQodGl0bGVCYXIpO1xuICAgICAgICAgICAgdGhpcy5fdGl0bGVCYXIgPSB0aXRsZUJhcjtcbiAgICAgICAgICAgIHRoaXMuX2hwQmFyID0gdGl0bGVCYXIuZ2V0Q2hpbGRCeU5hbWUoJ2hwX2JhcicpO1xuICAgICAgICAgICAgdGhpcy5fbXBCYXIgPSB0aXRsZUJhci5nZXRDaGlsZEJ5TmFtZSgnbXBfYmFyJyk7XG4gICAgICAgICAgICB0aGlzLl9uYW1lVHh0ID0gdGl0bGVCYXIuZ2V0Q2hpbGRCeU5hbWUoJ25hbWUnKS5nZXRDb21wb25lbnQoTGFiZWxDb21wb25lbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldEhQUGVyY2VudCh0aGlzLl9ocFBlcmNlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRNUFBlcmNlbnQodGhpcy5fbXBQZXJjZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0TmFtZSh0aGlzLl9uYW1lU3RyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5fdGl0bGVCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpdGxlQmFyLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aXRsZUJhciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy9zbG93LXVwZGF0ZS4gZnBzID0gMTBcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl90aXRsZUJhcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChub3cgLSB0aGlzLl9sYXN0VXBkYXRlVGltZSA8IDEwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdGl0bGVCYXJQb2ludC5nZXRXb3JsZFBvc2l0aW9uKHRoaXMuX3RhcmdldFBvcyk7XG4gICAgICAgIC8vdGhpcy5fdGFyZ2V0UG9zLnkgKz0gdGhpcy5fb2Zmc2V0WTtcbiAgICAgICAgRm9sbG93Q2FtZXJhLmluc3QuY2FtZXJhLmNvbnZlcnRUb1VJTm9kZSh0aGlzLl90YXJnZXRQb3MsIHRoaXMuX3RpdGxlQmFyLnBhcmVudCx0aGlzLl90YXJnZXRQb3MpO1xuICAgICAgICB0aGlzLl90aXRsZUJhci5wb3NpdGlvbiA9IHRoaXMuX3RhcmdldFBvcztcbiAgICB9XG5cbiAgICBzZXRIUFBlcmNlbnQocGVyY2VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2hwUGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgICAgIGlmICh0aGlzLl9ocEJhcikge1xuICAgICAgICAgICAgdGhpcy5faHBCYXIuc2V0U2NhbGUocGVyY2VudCwgMSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNUFBlcmNlbnQocGVyY2VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21wUGVyY2VudCA9IHBlcmNlbnQ7XG4gICAgICAgIGlmICh0aGlzLl9tcEJhcikge1xuICAgICAgICAgICAgdGhpcy5fbXBCYXIuc2V0U2NhbGUocGVyY2VudCwgMSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9uYW1lU3RyID0gbmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX25hbWVUeHQpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWVUeHQuc3RyaW5nID0gdGhpcy5fbmFtZVN0cjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==