System.register(["cc", "code-quality:cr", "./UIMgr.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, Node, find, ButtonComponent, EventHandler, game, ToggleComponent, SliderComponent, UIMgr, _dec, _class, _crd, ccclass, property, ClickEventAgent, AutoEventHandler, UIController;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./UIMgr", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
      ButtonComponent = _cc.ButtonComponent;
      EventHandler = _cc.EventHandler;
      game = _cc.game;
      ToggleComponent = _cc.ToggleComponent;
      SliderComponent = _cc.SliderComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_UIMgrJs) {
      UIMgr = _UIMgrJs.UIMgr;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "de702l/FU1GyIzhfLW2eNqP", "UIController", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //按钮事件监听器

      _export("ClickEventAgent", ClickEventAgent = (_dec = ccclass('ClickEventAgent'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(ClickEventAgent, _Component);

        function ClickEventAgent() {
          _classCallCheck(this, ClickEventAgent);

          return _possibleConstructorReturn(this, _getPrototypeOf(ClickEventAgent).apply(this, arguments));
        }

        _createClass(ClickEventAgent, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "onButtonClicked",
          value: function onButtonClicked(evt, customEventData) {
            var btn = evt.target.getComponent(ButtonComponent);
            var clickEvents = btn.clickEvents;

            for (var i = 0; i < clickEvents.length; ++i) {
              var h = clickEvents[i];

              if (h.customEventData == customEventData) {
                var cb = h['$cb$'];
                var target = h['$target$'];
                var args = h['$args$'];
                cb.apply(target, [btn, args]);
              }
            }
          }
        }, {
          key: "onCheckEvent",
          value: function onCheckEvent(toggle, customEventData) {
            var checkEvents = toggle.checkEvents;

            for (var i = 0; i < checkEvents.length; ++i) {
              var h = checkEvents[i];

              if (h.customEventData == customEventData) {
                var cb = h['$cb$'];
                var target = h['$target$'];
                var args = h['$args$'];
                cb.apply(target, [toggle, args]);
              }
            }
          }
        }, {
          key: "onSlideEvent",
          value: function onSlideEvent(slider, customEventData) {
            var slideEvents = slider.slideEvents;

            for (var i = 0; i < slideEvents.length; ++i) {
              var h = slideEvents[i];

              if (h.customEventData == customEventData) {
                var cb = h['$cb$'];
                var target = h['$target$'];
                var args = h['$args$'];
                cb.apply(target, [slider, args]);
              }
            }
          }
        }]);

        return ClickEventAgent;
      }(Component)) || _class)); //自动管理事件，将在UI销毁时自动清理


      _export("AutoEventHandler", AutoEventHandler = /*#__PURE__*/function () {
        function AutoEventHandler() {
          _classCallCheck(this, AutoEventHandler);

          this._handlers = [];
        }

        _createClass(AutoEventHandler, [{
          key: "on",
          value: function on(event, cb, target, once) {
            this._handlers.push({
              event: event,
              cb: cb,
              target: target,
              once: once
            });

            game.on(event, cb, target, once);
          }
        }, {
          key: "off",
          value: function off(event, cb, target, once) {
            game.off(event, cb, target);

            for (var i = 0; i < this._handlers.length; ++i) {
              var h = this._handlers[i];

              if (h.event == event && h.cb == cb && h.target == target && h.once == once) {
                this._handlers.splice(i, 1);

                return;
              }
            }
          }
        }, {
          key: "dispose",
          value: function dispose() {
            for (var i = 0; i < this._handlers.length; ++i) {
              var h = this._handlers[i];
              game.off(h.event, h.cb, h.target);
            }
          }
        }]);

        return AutoEventHandler;
      }());

      _export("UIController", UIController = /*#__PURE__*/function (_AutoEventHandler) {
        _inherits(UIController, _AutoEventHandler);

        function UIController(prefabUrl, layer) {
          var _this;

          _classCallCheck(this, UIController);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(UIController).call(this));
          _this._controllerId = 0;
          _this._prefabUrl = void 0;
          _this._layer = void 0;
          _this.node = void 0;
          _this._prefabUrl = prefabUrl;
          _this._layer = layer;
          _this._controllerId = UIController._idBase++;

          UIController._controllers.push(_assertThisInitialized(_this));

          return _this;
        }

        _createClass(UIController, [{
          key: "getRes",
          value: function getRes() {
            return [];
          }
        }, {
          key: "setup",
          value: function setup(node) {
            this.node = node;
            var parent = (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).inst.getLayerNode(this.layer) || find('Canvas');
            parent.addChild(node); //结点创建完毕，调用子类的处理函数。

            this.onCreated();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.node.removeFromParent();
            this.node.destroy();

            for (var i = 0; i < UIController._controllers.length; ++i) {
              if (UIController._controllers[i] == this) {
                UIController._controllers.splice(i, 1);

                break;
              }
            }

            this.dispose();
            this.onDispose();
          } //添加按钮事件
          //cb:(btn:ButtonComponent,args:any)=>void

        }, {
          key: "onButtonEvent",
          value: function onButtonEvent(relativeNodePath, cb, target, args) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof ButtonComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return null;
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              agent = this.node.addComponent(ClickEventAgent);
            }

            var btn = buttonNode.getComponent(ButtonComponent);
            var clickEvents = btn.clickEvents;
            var handler = new EventHandler();
            handler.target = this.node;
            handler.component = 'ClickEventAgent';
            handler.handler = 'onButtonClicked';
            handler.customEventData = '' + UIController._idBase++; //附加额外信息 供事件转发使用

            handler['$cb$'] = cb;
            handler['$target$'] = target;
            handler['$args$'] = args;
            clickEvents.push(handler);
            btn.clickEvents = clickEvents;
          } //移除按钮事件

        }, {
          key: "offButtonEvent",
          value: function offButtonEvent(relativeNodePath, cb, target) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof ButtonComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return;
              "";
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              return;
            }

            var btn = buttonNode.getComponent(ButtonComponent);

            if (!btn) {
              return;
            }

            var clickEvents = btn.clickEvents;

            for (var i = 0; i < clickEvents.length; ++i) {
              var h = clickEvents[i];

              if (h['$cb$'] == cb && h['$target$'] == target) {
                clickEvents.splice(i, 1);
                btn.clickEvents = clickEvents;
                break;
              }
            }
          } //添加Toggle事件
          //cb:(btn:ToggleComponent,args:any)=>void

        }, {
          key: "onToggleEvent",
          value: function onToggleEvent(relativeNodePath, cb, target, args) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof ToggleComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return null;
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              agent = this.node.addComponent(ClickEventAgent);
            }

            var btn = buttonNode.getComponent(ToggleComponent);
            var checkEvents = btn.checkEvents;
            var handler = new EventHandler();
            handler.target = this.node;
            handler.component = 'ClickEventAgent';
            handler.handler = 'onCheckEvent';
            handler.customEventData = '' + UIController._idBase++; //附加额外信息 供事件转发使用

            handler['$cb$'] = cb;
            handler['$target$'] = target;
            handler['$args$'] = args;
            checkEvents.push(handler);
            btn.checkEvents = checkEvents;
          } //移除按钮事件

        }, {
          key: "offToggleEvent",
          value: function offToggleEvent(relativeNodePath, cb, target) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof ToggleComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return null;
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              return;
            }

            var btn = buttonNode.getComponent(ToggleComponent);

            if (!btn) {
              return;
            }

            var checkEvents = btn.checkEvents;

            for (var i = 0; i < checkEvents.length; ++i) {
              var h = checkEvents[i];

              if (h['$cb$'] == cb && h['$target$'] == target) {
                checkEvents.splice(i, 1);
                btn.checkEvents = checkEvents;
                break;
              }
            }
          } //添加Slide事件
          //cb:(btn:ToggleComponent,args:any)=>void

        }, {
          key: "onSlideEvent",
          value: function onSlideEvent(relativeNodePath, cb, target, args) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof SliderComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return null;
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              agent = this.node.addComponent(ClickEventAgent);
            }

            var btn = buttonNode.getComponent(SliderComponent);
            var slideEvents = btn.slideEvents;
            var handler = new EventHandler();
            handler.target = this.node;
            handler.component = 'ClickEventAgent';
            handler.handler = 'onSlideEvent';
            handler.customEventData = '' + UIController._idBase++; //附加额外信息 供事件转发使用

            handler['$cb$'] = cb;
            handler['$target$'] = target;
            handler['$args$'] = args;
            slideEvents.push(handler);
            btn.slideEvents = slideEvents;
          } //移除Slide事件

        }, {
          key: "offSlideEvent",
          value: function offSlideEvent(relativeNodePath, cb, target) {
            var buttonNode = null;

            if (relativeNodePath instanceof Node) {
              buttonNode = relativeNodePath;
            } else if (relativeNodePath instanceof SliderComponent) {
              buttonNode = relativeNodePath.node;
            } else {
              buttonNode = find(relativeNodePath, this.node);
            }

            if (!buttonNode) {
              return null;
            } //添加转发器


            var agent = this.node.getComponent(ClickEventAgent);

            if (!agent) {
              return;
            }

            var btn = buttonNode.getComponent(SliderComponent);

            if (!btn) {
              return;
            }

            var slideEvents = btn.slideEvents;

            for (var i = 0; i < slideEvents.length; ++i) {
              var h = slideEvents[i];

              if (h['$cb$'] == cb && h['$target$'] == target) {
                slideEvents.splice(i, 1);
                btn.slideEvents = slideEvents;
                break;
              }
            }
          } //子类的所有操作，需要在这个函数之后。

        }, {
          key: "onCreated",
          value: function onCreated() {} //销毁

        }, {
          key: "onDispose",
          value: function onDispose() {}
        }, {
          key: "prefabUrl",
          get: function get() {
            return this._prefabUrl;
          }
        }, {
          key: "layer",
          get: function get() {
            return this._layer;
          }
        }], [{
          key: "hideAll",
          value: function hideAll() {
            while (this._controllers.length) {
              this._controllers[0].hide();
            }
          }
        }]);

        return UIController;
      }(AutoEventHandler));

      UIController._idBase = 1000;
      UIController._controllers = [];
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9iYXNlL1VJQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImZpbmQiLCJCdXR0b25Db21wb25lbnQiLCJFdmVudEhhbmRsZXIiLCJnYW1lIiwiVG9nZ2xlQ29tcG9uZW50IiwiU2xpZGVyQ29tcG9uZW50IiwiVUlNZ3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDbGlja0V2ZW50QWdlbnQiLCJldnQiLCJjdXN0b21FdmVudERhdGEiLCJidG4iLCJ0YXJnZXQiLCJnZXRDb21wb25lbnQiLCJjbGlja0V2ZW50cyIsImkiLCJsZW5ndGgiLCJoIiwiY2IiLCJhcmdzIiwiYXBwbHkiLCJ0b2dnbGUiLCJjaGVja0V2ZW50cyIsInNsaWRlciIsInNsaWRlRXZlbnRzIiwiQXV0b0V2ZW50SGFuZGxlciIsIl9oYW5kbGVycyIsImV2ZW50Iiwib25jZSIsInB1c2giLCJvbiIsIm9mZiIsInNwbGljZSIsIlVJQ29udHJvbGxlciIsInByZWZhYlVybCIsImxheWVyIiwiX2NvbnRyb2xsZXJJZCIsIl9wcmVmYWJVcmwiLCJfbGF5ZXIiLCJub2RlIiwiX2lkQmFzZSIsIl9jb250cm9sbGVycyIsInBhcmVudCIsImluc3QiLCJnZXRMYXllck5vZGUiLCJhZGRDaGlsZCIsIm9uQ3JlYXRlZCIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwiZGlzcG9zZSIsIm9uRGlzcG9zZSIsInJlbGF0aXZlTm9kZVBhdGgiLCJidXR0b25Ob2RlIiwiYWdlbnQiLCJhZGRDb21wb25lbnQiLCJoYW5kbGVyIiwiY29tcG9uZW50IiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBOEND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LEdBQUdPLFdBQVcsQ0FBQ1QsQ0FBRCxDQUFuQjs7QUFDQSxrQkFBSUUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxJQUFhQyxFQUFiLElBQW1CRCxDQUFDLENBQUMsVUFBRCxDQUFELElBQWlCTCxNQUF4QyxFQUFnRDtBQUM1Q1ksZ0JBQUFBLFdBQVcsQ0FBQ1EsTUFBWixDQUFtQmpCLENBQW5CLEVBQXNCLENBQXRCO0FBQ0FKLGdCQUFBQSxHQUFHLENBQUNhLFdBQUosR0FBa0JBLFdBQWxCO0FBQ0E7QUFDSDtBQUNKO0FBQ0osVyxDQUVEOzs7O3NDQUNzQixDQUFHLEMsQ0FDekI7Ozs7c0NBQ3NCLENBQUc7Ozs4QkF2Uk07QUFDM0IsbUJBQU8sS0FBS2EsVUFBWjtBQUNIOzs7OEJBRTBCO0FBQ3ZCLG1CQUFPLEtBQUtDLE1BQVo7QUFDSDs7O29DQU11QjtBQUNwQixtQkFBTyxLQUFLRyxZQUFMLENBQWtCekIsTUFBekIsRUFBaUM7QUFDN0IsbUJBQUt5QixZQUFMLENBQWtCLENBQWxCLEVBQXFCZ0IsSUFBckI7QUFDSDtBQUNKOzs7O1FBaEM2QmhDLGdCOztBQUFyQlEsTUFBQUEsWSxDQUNNTyxPLEdBQVUsSTtBQURoQlAsTUFBQUEsWSxDQUdNUSxZLEdBQStCLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgVGV4dHVyZTJELCBsb2FkZXIsIGluc3RhbnRpYXRlLCBmaW5kLCBCdXR0b25Db21wb25lbnQsIEV2ZW50SGFuZGxlciwgRXZlbnRUb3VjaCwgZ2FtZSwgVG9nZ2xlQ29tcG9uZW50LCBTbGlkZXJDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSU1nciB9IGZyb20gJy4vVUlNZ3InO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG4vL+aMiemSruS6i+S7tuebkeWQrOWZqFxuQGNjY2xhc3MoJ0NsaWNrRXZlbnRBZ2VudCcpXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudEFnZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgfVxuXG4gICAgb25CdXR0b25DbGlja2VkKGV2dDogRXZlbnRUb3VjaCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBidG4gPSAoZXZ0LnRhcmdldCBhcyBOb2RlKS5nZXRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRzID0gYnRuLmNsaWNrRXZlbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaWNrRXZlbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IGNsaWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGguY3VzdG9tRXZlbnREYXRhID09IGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IGhbJyRjYiQnXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaFsnJHRhcmdldCQnXVxuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gaFsnJGFyZ3MkJ107XG4gICAgICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbYnRuLCBhcmdzXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrRXZlbnQodG9nZ2xlOiBUb2dnbGVDb21wb25lbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgY2hlY2tFdmVudHMgPSB0b2dnbGUuY2hlY2tFdmVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tFdmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBoID0gY2hlY2tFdmVudHNbaV07XG4gICAgICAgICAgICBpZiAoaC5jdXN0b21FdmVudERhdGEgPT0gY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gaFsnJGNiJCddO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBoWyckdGFyZ2V0JCddXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBoWyckYXJncyQnXTtcbiAgICAgICAgICAgICAgICBjYi5hcHBseSh0YXJnZXQsIFt0b2dnbGUsIGFyZ3NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2xpZGVFdmVudChzbGlkZXI6IFNsaWRlckNvbXBvbmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBzbGlkZUV2ZW50cyA9IHNsaWRlci5zbGlkZUV2ZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZUV2ZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSBzbGlkZUV2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChoLmN1c3RvbUV2ZW50RGF0YSA9PSBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSBoWyckY2IkJ107XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGhbJyR0YXJnZXQkJ11cbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IGhbJyRhcmdzJCddO1xuICAgICAgICAgICAgICAgIGNiLmFwcGx5KHRhcmdldCwgW3NsaWRlciwgYXJnc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbi8v6Ieq5Yqo566h55CG5LqL5Lu277yM5bCG5ZyoVUnplIDmr4Hml7boh6rliqjmuIXnkIZcbmV4cG9ydCBjbGFzcyBBdXRvRXZlbnRIYW5kbGVyIHtcbiAgICBwcml2YXRlIF9oYW5kbGVycyA9IFtdO1xuICAgIG9uKGV2ZW50OiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCBvbmNlPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYW5kbGVycy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGNiOiBjYixcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgb25jZTogb25jZVxuICAgICAgICB9KTtcbiAgICAgICAgZ2FtZS5vbihldmVudCwgY2IsIHRhcmdldCwgb25jZSk7XG4gICAgfVxuXG4gICAgb2ZmKGV2ZW50OiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCBvbmNlPzogYm9vbGVhbikge1xuICAgICAgICBnYW1lLm9mZihldmVudCwgY2IsIHRhcmdldCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faGFuZGxlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBoID0gdGhpcy5faGFuZGxlcnNbaV07XG4gICAgICAgICAgICBpZiAoaC5ldmVudCA9PSBldmVudCAmJiBoLmNiID09IGNiICYmIGgudGFyZ2V0ID09IHRhcmdldCAmJiBoLm9uY2UgPT0gb25jZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IHRoaXMuX2hhbmRsZXJzW2ldO1xuICAgICAgICAgICAgZ2FtZS5vZmYoaC5ldmVudCwgaC5jYiwgaC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVUlDb250cm9sbGVyIGV4dGVuZHMgQXV0b0V2ZW50SGFuZGxlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lkQmFzZSA9IDEwMDA7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfY29udHJvbGxlcnM6IFVJQ29udHJvbGxlcltdID0gW107XG4gICAgcHJpdmF0ZSBfY29udHJvbGxlcklkOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3ByZWZhYlVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2xheWVyOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIG5vZGU6IE5vZGU7XG4gICAgY29uc3RydWN0b3IocHJlZmFiVXJsOiBzdHJpbmcsIGxheWVyOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcHJlZmFiVXJsID0gcHJlZmFiVXJsO1xuICAgICAgICB0aGlzLl9sYXllciA9IGxheWVyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVySWQgPSBVSUNvbnRyb2xsZXIuX2lkQmFzZSsrO1xuICAgICAgICBVSUNvbnRyb2xsZXIuX2NvbnRyb2xsZXJzLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBwcmVmYWJVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZhYlVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGxheWVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXllcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVzKCk6IFtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZUFsbCgpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuX2NvbnRyb2xsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fY29udHJvbGxlcnNbMF0uaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKG5vZGU6IE5vZGUpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgbGV0IHBhcmVudCA9IFVJTWdyLmluc3QuZ2V0TGF5ZXJOb2RlKHRoaXMubGF5ZXIpIHx8IGZpbmQoJ0NhbnZhcycpO1xuICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgIC8v57uT54K55Yib5bu65a6M5q+V77yM6LCD55So5a2Q57G755qE5aSE55CG5Ye95pWw44CCXG4gICAgICAgIHRoaXMub25DcmVhdGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVUlDb250cm9sbGVyLl9jb250cm9sbGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKFVJQ29udHJvbGxlci5fY29udHJvbGxlcnNbaV0gPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIFVJQ29udHJvbGxlci5fY29udHJvbGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLm9uRGlzcG9zZSgpO1xuICAgIH1cblxuICAgIC8v5re75Yqg5oyJ6ZKu5LqL5Lu2XG4gICAgLy9jYjooYnRuOkJ1dHRvbkNvbXBvbmVudCxhcmdzOmFueSk9PnZvaWRcbiAgICBvbkJ1dHRvbkV2ZW50KHJlbGF0aXZlTm9kZVBhdGg6IHN0cmluZyB8IE5vZGUgfCBCdXR0b25Db21wb25lbnQsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCBhcmdzPzogYW55KSB7XG5cbiAgICAgICAgbGV0IGJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gZmluZChyZWxhdGl2ZU5vZGVQYXRoLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFidXR0b25Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg6L2s5Y+R5ZmoXG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgYWdlbnQgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KENsaWNrRXZlbnRBZ2VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnRuID0gYnV0dG9uTm9kZS5nZXRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRzID0gYnRuLmNsaWNrRXZlbnRzO1xuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcbiAgICAgICAgaGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gJ0NsaWNrRXZlbnRBZ2VudCc7XG4gICAgICAgIGhhbmRsZXIuaGFuZGxlciA9ICdvbkJ1dHRvbkNsaWNrZWQnO1xuICAgICAgICBoYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9ICcnICsgVUlDb250cm9sbGVyLl9pZEJhc2UrKztcblxuICAgICAgICAvL+mZhOWKoOmineWkluS/oeaBryDkvpvkuovku7bovazlj5Hkvb/nlKhcbiAgICAgICAgaGFuZGxlclsnJGNiJCddID0gY2I7XG4gICAgICAgIGhhbmRsZXJbJyR0YXJnZXQkJ10gPSB0YXJnZXQ7XG4gICAgICAgIGhhbmRsZXJbJyRhcmdzJCddID0gYXJncztcblxuICAgICAgICBjbGlja0V2ZW50cy5wdXNoKGhhbmRsZXIpO1xuICAgICAgICBidG4uY2xpY2tFdmVudHMgPSBjbGlja0V2ZW50cztcbiAgICB9XG5cbiAgICAvL+enu+mZpOaMiemSruS6i+S7tlxuICAgIG9mZkJ1dHRvbkV2ZW50KHJlbGF0aXZlTm9kZVBhdGg6IHN0cmluZyB8IE5vZGUgfCBCdXR0b25Db21wb25lbnQsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgbGV0IGJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIEJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGgubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSBmaW5kKHJlbGF0aXZlTm9kZVBhdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJ1dHRvbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybjsgYGBcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg6L2s5Y+R5ZmoXG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidG4gPSBidXR0b25Ob2RlLmdldENvbXBvbmVudChCdXR0b25Db21wb25lbnQpO1xuICAgICAgICBpZiAoIWJ0bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjbGlja0V2ZW50cyA9IGJ0bi5jbGlja0V2ZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja0V2ZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSBjbGlja0V2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChoWyckY2IkJ10gPT0gY2IgJiYgaFsnJHRhcmdldCQnXSA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnRuLmNsaWNrRXZlbnRzID0gY2xpY2tFdmVudHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+a3u+WKoFRvZ2dsZeS6i+S7tlxuICAgIC8vY2I6KGJ0bjpUb2dnbGVDb21wb25lbnQsYXJnczphbnkpPT52b2lkXG4gICAgb25Ub2dnbGVFdmVudChyZWxhdGl2ZU5vZGVQYXRoOiBzdHJpbmcgfCBOb2RlIHwgVG9nZ2xlQ29tcG9uZW50LCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgYXJncz86IGFueSkge1xuICAgICAgICBsZXQgYnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIFRvZ2dsZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGgubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSBmaW5kKHJlbGF0aXZlTm9kZVBhdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJ1dHRvbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/mt7vliqDovazlj5HlmahcbiAgICAgICAgbGV0IGFnZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICBpZiAoIWFnZW50KSB7XG4gICAgICAgICAgICBhZ2VudCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBidG4gPSBidXR0b25Ob2RlLmdldENvbXBvbmVudChUb2dnbGVDb21wb25lbnQpO1xuICAgICAgICBsZXQgY2hlY2tFdmVudHMgPSBidG4uY2hlY2tFdmVudHM7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuICAgICAgICBoYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgaGFuZGxlci5jb21wb25lbnQgPSAnQ2xpY2tFdmVudEFnZW50JztcbiAgICAgICAgaGFuZGxlci5oYW5kbGVyID0gJ29uQ2hlY2tFdmVudCc7XG4gICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gJycgKyBVSUNvbnRyb2xsZXIuX2lkQmFzZSsrO1xuXG4gICAgICAgIC8v6ZmE5Yqg6aKd5aSW5L+h5oGvIOS+m+S6i+S7tui9rOWPkeS9v+eUqFxuICAgICAgICBoYW5kbGVyWyckY2IkJ10gPSBjYjtcbiAgICAgICAgaGFuZGxlclsnJHRhcmdldCQnXSA9IHRhcmdldDtcbiAgICAgICAgaGFuZGxlclsnJGFyZ3MkJ10gPSBhcmdzO1xuXG4gICAgICAgIGNoZWNrRXZlbnRzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIGJ0bi5jaGVja0V2ZW50cyA9IGNoZWNrRXZlbnRzO1xuICAgIH1cblxuICAgIC8v56e76Zmk5oyJ6ZKu5LqL5Lu2XG4gICAgb2ZmVG9nZ2xlRXZlbnQocmVsYXRpdmVOb2RlUGF0aDogc3RyaW5nIHwgTm9kZSB8IFRvZ2dsZUNvbXBvbmVudCwgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xuICAgICAgICBsZXQgYnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIFRvZ2dsZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGgubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSBmaW5kKHJlbGF0aXZlTm9kZVBhdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJ1dHRvbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/mt7vliqDovazlj5HlmahcbiAgICAgICAgbGV0IGFnZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICBpZiAoIWFnZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IGJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFRvZ2dsZUNvbXBvbmVudCk7XG4gICAgICAgIGlmICghYnRuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrRXZlbnRzID0gYnRuLmNoZWNrRXZlbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrRXZlbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IGNoZWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGhbJyRjYiQnXSA9PSBjYiAmJiBoWyckdGFyZ2V0JCddID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGNoZWNrRXZlbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBidG4uY2hlY2tFdmVudHMgPSBjaGVja0V2ZW50cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy/mt7vliqBTbGlkZeS6i+S7tlxuICAgIC8vY2I6KGJ0bjpUb2dnbGVDb21wb25lbnQsYXJnczphbnkpPT52b2lkXG4gICAgb25TbGlkZUV2ZW50KHJlbGF0aXZlTm9kZVBhdGg6IHN0cmluZyB8IE5vZGUgfCBTbGlkZXJDb21wb25lbnQsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55LCBhcmdzPzogYW55KSB7XG4gICAgICAgIGxldCBidXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gcmVsYXRpdmVOb2RlUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgU2xpZGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gcmVsYXRpdmVOb2RlUGF0aC5ub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IGZpbmQocmVsYXRpdmVOb2RlUGF0aCwgdGhpcy5ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYnV0dG9uTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvL+a3u+WKoOi9rOWPkeWZqFxuICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENsaWNrRXZlbnRBZ2VudCk7XG4gICAgICAgIGlmICghYWdlbnQpIHtcbiAgICAgICAgICAgIGFnZW50ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJ0biA9IGJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNsaWRlckNvbXBvbmVudCk7XG4gICAgICAgIGxldCBzbGlkZUV2ZW50cyA9IGJ0bi5zbGlkZUV2ZW50cztcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBoYW5kbGVyLmNvbXBvbmVudCA9ICdDbGlja0V2ZW50QWdlbnQnO1xuICAgICAgICBoYW5kbGVyLmhhbmRsZXIgPSAnb25TbGlkZUV2ZW50JztcbiAgICAgICAgaGFuZGxlci5jdXN0b21FdmVudERhdGEgPSAnJyArIFVJQ29udHJvbGxlci5faWRCYXNlKys7XG5cbiAgICAgICAgLy/pmYTliqDpop3lpJbkv6Hmga8g5L6b5LqL5Lu26L2s5Y+R5L2/55SoXG4gICAgICAgIGhhbmRsZXJbJyRjYiQnXSA9IGNiO1xuICAgICAgICBoYW5kbGVyWyckdGFyZ2V0JCddID0gdGFyZ2V0O1xuICAgICAgICBoYW5kbGVyWyckYXJncyQnXSA9IGFyZ3M7XG5cbiAgICAgICAgc2xpZGVFdmVudHMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgYnRuLnNsaWRlRXZlbnRzID0gc2xpZGVFdmVudHM7XG4gICAgfVxuXG4gICAgLy/np7vpmaRTbGlkZeS6i+S7tlxuICAgIG9mZlNsaWRlRXZlbnQocmVsYXRpdmVOb2RlUGF0aDogc3RyaW5nIHwgTm9kZSB8IFNsaWRlckNvbXBvbmVudCwgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ6IGFueSkge1xuICAgICAgICBsZXQgYnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIFNsaWRlckNvbXBvbmVudCkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGgubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSBmaW5kKHJlbGF0aXZlTm9kZVBhdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJ1dHRvbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/mt7vliqDovazlj5HlmahcbiAgICAgICAgbGV0IGFnZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICBpZiAoIWFnZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IGJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KFNsaWRlckNvbXBvbmVudCk7XG4gICAgICAgIGlmICghYnRuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNsaWRlRXZlbnRzID0gYnRuLnNsaWRlRXZlbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlRXZlbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IHNsaWRlRXZlbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGhbJyRjYiQnXSA9PSBjYiAmJiBoWyckdGFyZ2V0JCddID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHNsaWRlRXZlbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBidG4uc2xpZGVFdmVudHMgPSBzbGlkZUV2ZW50cztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5a2Q57G755qE5omA5pyJ5pON5L2c77yM6ZyA6KaB5Zyo6L+Z5Liq5Ye95pWw5LmL5ZCO44CCXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHsgfVxuICAgIC8v6ZSA5q+BXG4gICAgcHJvdGVjdGVkIG9uRGlzcG9zZSgpIHsgfVxufSJdfQ==