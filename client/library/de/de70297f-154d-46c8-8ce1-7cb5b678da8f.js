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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvYmFzZS9VSUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJmaW5kIiwiQnV0dG9uQ29tcG9uZW50IiwiRXZlbnRIYW5kbGVyIiwiZ2FtZSIsIlRvZ2dsZUNvbXBvbmVudCIsIlNsaWRlckNvbXBvbmVudCIsIlVJTWdyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2xpY2tFdmVudEFnZW50IiwiZXZ0IiwiY3VzdG9tRXZlbnREYXRhIiwiYnRuIiwidGFyZ2V0IiwiZ2V0Q29tcG9uZW50IiwiY2xpY2tFdmVudHMiLCJpIiwibGVuZ3RoIiwiaCIsImNiIiwiYXJncyIsImFwcGx5IiwidG9nZ2xlIiwiY2hlY2tFdmVudHMiLCJzbGlkZXIiLCJzbGlkZUV2ZW50cyIsIkF1dG9FdmVudEhhbmRsZXIiLCJfaGFuZGxlcnMiLCJldmVudCIsIm9uY2UiLCJwdXNoIiwib24iLCJvZmYiLCJzcGxpY2UiLCJVSUNvbnRyb2xsZXIiLCJwcmVmYWJVcmwiLCJsYXllciIsIl9jb250cm9sbGVySWQiLCJfcHJlZmFiVXJsIiwiX2xheWVyIiwiX2lkQmFzZSIsIl9jb250cm9sbGVycyIsIm5vZGUiLCJwYXJlbnQiLCJpbnN0IiwiZ2V0TGF5ZXJOb2RlIiwiYWRkQ2hpbGQiLCJvbkNyZWF0ZWQiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsImRpc3Bvc2UiLCJvbkRpc3Bvc2UiLCJyZWxhdGl2ZU5vZGVQYXRoIiwiYnV0dG9uTm9kZSIsImFnZW50IiwiYWRkQ29tcG9uZW50IiwiaGFuZGxlciIsImNvbXBvbmVudCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFB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Q0Esa0JBQUlFLENBQUMsQ0FBQyxNQUFELENBQUQsSUFBYUMsRUFBYixJQUFtQkQsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxJQUFpQkwsTUFBeEMsRUFBZ0Q7QUFDNUNZLGdCQUFBQSxXQUFXLENBQUNRLE1BQVosQ0FBbUJqQixDQUFuQixFQUFzQixDQUF0QjtBQUNBSixnQkFBQUEsR0FBRyxDQUFDYSxXQUFKLEdBQWtCQSxXQUFsQjtBQUNBO0FBQ0g7QUFDSjtBQUNKLFcsQ0FFRDs7OztzQ0FDc0IsQ0FBRyxDLENBQ3pCOzs7O3NDQUNzQixDQUFHOzs7OEJBdlJNO0FBQzNCLG1CQUFPLEtBQUthLFVBQVo7QUFDSDs7OzhCQUUwQjtBQUN2QixtQkFBTyxLQUFLQyxNQUFaO0FBQ0g7OztvQ0FNdUI7QUFDcEIsbUJBQU8sS0FBS0UsWUFBTCxDQUFrQnhCLE1BQXpCLEVBQWlDO0FBQzdCLG1CQUFLd0IsWUFBTCxDQUFrQixDQUFsQixFQUFxQmlCLElBQXJCO0FBQ0g7QUFDSjs7OztRQWhDNkJoQyxnQjs7QUFBckJRLE1BQUFBLFksQ0FDTU0sTyxHQUFVLEk7QUFEaEJOLE1BQUFBLFksQ0FHTU8sWSxHQUErQixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFRleHR1cmUyRCwgbG9hZGVyLCBpbnN0YW50aWF0ZSwgZmluZCwgQnV0dG9uQ29tcG9uZW50LCBFdmVudEhhbmRsZXIsIEV2ZW50VG91Y2gsIGdhbWUsIFRvZ2dsZUNvbXBvbmVudCwgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlNZ3IgfSBmcm9tICcuL1VJTWdyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuLy/mjInpkq7kuovku7bnm5HlkKzlmahcbkBjY2NsYXNzKCdDbGlja0V2ZW50QWdlbnQnKVxuZXhwb3J0IGNsYXNzIENsaWNrRXZlbnRBZ2VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgIH1cblxuICAgIG9uQnV0dG9uQ2xpY2tlZChldnQ6IEV2ZW50VG91Y2gsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgYnRuID0gKGV2dC50YXJnZXQgYXMgTm9kZSkuZ2V0Q29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjbGlja0V2ZW50cyA9IGJ0bi5jbGlja0V2ZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGlja0V2ZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSBjbGlja0V2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChoLmN1c3RvbUV2ZW50RGF0YSA9PSBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2IgPSBoWyckY2IkJ107XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGhbJyR0YXJnZXQkJ11cbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IGhbJyRhcmdzJCddO1xuICAgICAgICAgICAgICAgIGNiLmFwcGx5KHRhcmdldCwgW2J0biwgYXJnc10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGVja0V2ZW50KHRvZ2dsZTogVG9nZ2xlQ29tcG9uZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGNoZWNrRXZlbnRzID0gdG9nZ2xlLmNoZWNrRXZlbnRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrRXZlbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IGNoZWNrRXZlbnRzW2ldO1xuICAgICAgICAgICAgaWYgKGguY3VzdG9tRXZlbnREYXRhID09IGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgICAgIGxldCBjYiA9IGhbJyRjYiQnXTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gaFsnJHRhcmdldCQnXVxuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gaFsnJGFyZ3MkJ107XG4gICAgICAgICAgICAgICAgY2IuYXBwbHkodGFyZ2V0LCBbdG9nZ2xlLCBhcmdzXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNsaWRlRXZlbnQoc2xpZGVyOiBTbGlkZXJDb21wb25lbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgc2xpZGVFdmVudHMgPSBzbGlkZXIuc2xpZGVFdmVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVFdmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBoID0gc2xpZGVFdmVudHNbaV07XG4gICAgICAgICAgICBpZiAoaC5jdXN0b21FdmVudERhdGEgPT0gY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNiID0gaFsnJGNiJCddO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBoWyckdGFyZ2V0JCddXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBoWyckYXJncyQnXTtcbiAgICAgICAgICAgICAgICBjYi5hcHBseSh0YXJnZXQsIFtzbGlkZXIsIGFyZ3NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vL+iHquWKqOeuoeeQhuS6i+S7tu+8jOWwhuWcqFVJ6ZSA5q+B5pe26Ieq5Yqo5riF55CGXG5leHBvcnQgY2xhc3MgQXV0b0V2ZW50SGFuZGxlciB7XG4gICAgcHJpdmF0ZSBfaGFuZGxlcnMgPSBbXTtcbiAgICBvbihldmVudDogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgb25jZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBjYjogY2IsXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIG9uY2U6IG9uY2VcbiAgICAgICAgfSk7XG4gICAgICAgIGdhbWUub24oZXZlbnQsIGNiLCB0YXJnZXQsIG9uY2UpO1xuICAgIH1cblxuICAgIG9mZihldmVudDogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgb25jZT86IGJvb2xlYW4pIHtcbiAgICAgICAgZ2FtZS5vZmYoZXZlbnQsIGNiLCB0YXJnZXQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2hhbmRsZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgaCA9IHRoaXMuX2hhbmRsZXJzW2ldO1xuICAgICAgICAgICAgaWYgKGguZXZlbnQgPT0gZXZlbnQgJiYgaC5jYiA9PSBjYiAmJiBoLnRhcmdldCA9PSB0YXJnZXQgJiYgaC5vbmNlID09IG9uY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9oYW5kbGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSB0aGlzLl9oYW5kbGVyc1tpXTtcbiAgICAgICAgICAgIGdhbWUub2ZmKGguZXZlbnQsIGguY2IsIGgudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVJQ29udHJvbGxlciBleHRlbmRzIEF1dG9FdmVudEhhbmRsZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pZEJhc2UgPSAxMDAwO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2NvbnRyb2xsZXJzOiBVSUNvbnRyb2xsZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NvbnRyb2xsZXJJZDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9wcmVmYWJVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9sYXllcjogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBub2RlOiBOb2RlO1xuICAgIGNvbnN0cnVjdG9yKHByZWZhYlVybDogc3RyaW5nLCBsYXllcjogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3ByZWZhYlVybCA9IHByZWZhYlVybDtcbiAgICAgICAgdGhpcy5fbGF5ZXIgPSBsYXllcjtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlcklkID0gVUlDb250cm9sbGVyLl9pZEJhc2UrKztcbiAgICAgICAgVUlDb250cm9sbGVyLl9jb250cm9sbGVycy5wdXNoKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcHJlZmFiVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVmYWJVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBsYXllcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF5ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlcygpOiBbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhpZGVBbGwoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLl9jb250cm9sbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRyb2xsZXJzWzBdLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cChub2RlOiBOb2RlKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIGxldCBwYXJlbnQgPSBVSU1nci5pbnN0LmdldExheWVyTm9kZSh0aGlzLmxheWVyKSB8fCBmaW5kKCdDYW52YXMnKTtcbiAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUpO1xuICAgICAgICAvL+e7k+eCueWIm+W7uuWujOavle+8jOiwg+eUqOWtkOexu+eahOWkhOeQhuWHveaVsOOAglxuICAgICAgICB0aGlzLm9uQ3JlYXRlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFVJQ29udHJvbGxlci5fY29udHJvbGxlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChVSUNvbnRyb2xsZXIuX2NvbnRyb2xsZXJzW2ldID09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBVSUNvbnRyb2xsZXIuX2NvbnRyb2xsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICAvL+a3u+WKoOaMiemSruS6i+S7tlxuICAgIC8vY2I6KGJ0bjpCdXR0b25Db21wb25lbnQsYXJnczphbnkpPT52b2lkXG4gICAgb25CdXR0b25FdmVudChyZWxhdGl2ZU5vZGVQYXRoOiBzdHJpbmcgfCBOb2RlIHwgQnV0dG9uQ29tcG9uZW50LCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgYXJncz86IGFueSkge1xuXG4gICAgICAgIGxldCBidXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gcmVsYXRpdmVOb2RlUGF0aDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gcmVsYXRpdmVOb2RlUGF0aC5ub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IGZpbmQocmVsYXRpdmVOb2RlUGF0aCwgdGhpcy5ub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYnV0dG9uTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvL+a3u+WKoOi9rOWPkeWZqFxuICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENsaWNrRXZlbnRBZ2VudCk7XG4gICAgICAgIGlmICghYWdlbnQpIHtcbiAgICAgICAgICAgIGFnZW50ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJ0biA9IGJ1dHRvbk5vZGUuZ2V0Q29tcG9uZW50KEJ1dHRvbkNvbXBvbmVudCk7XG4gICAgICAgIGxldCBjbGlja0V2ZW50cyA9IGJ0bi5jbGlja0V2ZW50cztcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBuZXcgRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIGhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBoYW5kbGVyLmNvbXBvbmVudCA9ICdDbGlja0V2ZW50QWdlbnQnO1xuICAgICAgICBoYW5kbGVyLmhhbmRsZXIgPSAnb25CdXR0b25DbGlja2VkJztcbiAgICAgICAgaGFuZGxlci5jdXN0b21FdmVudERhdGEgPSAnJyArIFVJQ29udHJvbGxlci5faWRCYXNlKys7XG5cbiAgICAgICAgLy/pmYTliqDpop3lpJbkv6Hmga8g5L6b5LqL5Lu26L2s5Y+R5L2/55SoXG4gICAgICAgIGhhbmRsZXJbJyRjYiQnXSA9IGNiO1xuICAgICAgICBoYW5kbGVyWyckdGFyZ2V0JCddID0gdGFyZ2V0O1xuICAgICAgICBoYW5kbGVyWyckYXJncyQnXSA9IGFyZ3M7XG5cbiAgICAgICAgY2xpY2tFdmVudHMucHVzaChoYW5kbGVyKTtcbiAgICAgICAgYnRuLmNsaWNrRXZlbnRzID0gY2xpY2tFdmVudHM7XG4gICAgfVxuXG4gICAgLy/np7vpmaTmjInpkq7kuovku7ZcbiAgICBvZmZCdXR0b25FdmVudChyZWxhdGl2ZU5vZGVQYXRoOiBzdHJpbmcgfCBOb2RlIHwgQnV0dG9uQ29tcG9uZW50LCBjYjogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XG4gICAgICAgIGxldCBidXR0b25Ob2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gcmVsYXRpdmVOb2RlUGF0aDtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gZmluZChyZWxhdGl2ZU5vZGVQYXRoLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFidXR0b25Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm47IGBgXG4gICAgICAgIH1cblxuICAgICAgICAvL+a3u+WKoOi9rOWPkeWZqFxuICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENsaWNrRXZlbnRBZ2VudCk7XG4gICAgICAgIGlmICghYWdlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gYnV0dG9uTm9kZS5nZXRDb21wb25lbnQoQnV0dG9uQ29tcG9uZW50KTtcbiAgICAgICAgaWYgKCFidG4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpY2tFdmVudHMgPSBidG4uY2xpY2tFdmVudHM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpY2tFdmVudHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBoID0gY2xpY2tFdmVudHNbaV07XG4gICAgICAgICAgICBpZiAoaFsnJGNiJCddID09IGNiICYmIGhbJyR0YXJnZXQkJ10gPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGlja0V2ZW50cyA9IGNsaWNrRXZlbnRzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/mt7vliqBUb2dnbGXkuovku7ZcbiAgICAvL2NiOihidG46VG9nZ2xlQ29tcG9uZW50LGFyZ3M6YW55KT0+dm9pZFxuICAgIG9uVG9nZ2xlRXZlbnQocmVsYXRpdmVOb2RlUGF0aDogc3RyaW5nIHwgTm9kZSB8IFRvZ2dsZUNvbXBvbmVudCwgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnksIGFyZ3M/OiBhbnkpIHtcbiAgICAgICAgbGV0IGJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBUb2dnbGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gZmluZChyZWxhdGl2ZU5vZGVQYXRoLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFidXR0b25Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg6L2s5Y+R5ZmoXG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgYWdlbnQgPSB0aGlzLm5vZGUuYWRkQ29tcG9uZW50KENsaWNrRXZlbnRBZ2VudCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnRuID0gYnV0dG9uTm9kZS5nZXRDb21wb25lbnQoVG9nZ2xlQ29tcG9uZW50KTtcbiAgICAgICAgbGV0IGNoZWNrRXZlbnRzID0gYnRuLmNoZWNrRXZlbnRzO1xuICAgICAgICBsZXQgaGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIoKTtcbiAgICAgICAgaGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gJ0NsaWNrRXZlbnRBZ2VudCc7XG4gICAgICAgIGhhbmRsZXIuaGFuZGxlciA9ICdvbkNoZWNrRXZlbnQnO1xuICAgICAgICBoYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9ICcnICsgVUlDb250cm9sbGVyLl9pZEJhc2UrKztcblxuICAgICAgICAvL+mZhOWKoOmineWkluS/oeaBryDkvpvkuovku7bovazlj5Hkvb/nlKhcbiAgICAgICAgaGFuZGxlclsnJGNiJCddID0gY2I7XG4gICAgICAgIGhhbmRsZXJbJyR0YXJnZXQkJ10gPSB0YXJnZXQ7XG4gICAgICAgIGhhbmRsZXJbJyRhcmdzJCddID0gYXJncztcblxuICAgICAgICBjaGVja0V2ZW50cy5wdXNoKGhhbmRsZXIpO1xuICAgICAgICBidG4uY2hlY2tFdmVudHMgPSBjaGVja0V2ZW50cztcbiAgICB9XG5cbiAgICAvL+enu+mZpOaMiemSruS6i+S7tlxuICAgIG9mZlRvZ2dsZUV2ZW50KHJlbGF0aXZlTm9kZVBhdGg6IHN0cmluZyB8IE5vZGUgfCBUb2dnbGVDb21wb25lbnQsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgbGV0IGJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBUb2dnbGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gZmluZChyZWxhdGl2ZU5vZGVQYXRoLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFidXR0b25Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg6L2s5Y+R5ZmoXG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidG4gPSBidXR0b25Ob2RlLmdldENvbXBvbmVudChUb2dnbGVDb21wb25lbnQpO1xuICAgICAgICBpZiAoIWJ0bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja0V2ZW50cyA9IGJ0bi5jaGVja0V2ZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja0V2ZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSBjaGVja0V2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChoWyckY2IkJ10gPT0gY2IgJiYgaFsnJHRhcmdldCQnXSA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBjaGVja0V2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnRuLmNoZWNrRXZlbnRzID0gY2hlY2tFdmVudHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8v5re75YqgU2xpZGXkuovku7ZcbiAgICAvL2NiOihidG46VG9nZ2xlQ29tcG9uZW50LGFyZ3M6YW55KT0+dm9pZFxuICAgIG9uU2xpZGVFdmVudChyZWxhdGl2ZU5vZGVQYXRoOiBzdHJpbmcgfCBOb2RlIHwgU2xpZGVyQ29tcG9uZW50LCBjYjogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgYXJncz86IGFueSkge1xuICAgICAgICBsZXQgYnV0dG9uTm9kZTogTm9kZSA9IG51bGw7XG4gICAgICAgIGlmIChyZWxhdGl2ZU5vZGVQYXRoIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIFNsaWRlckNvbXBvbmVudCkge1xuICAgICAgICAgICAgYnV0dG9uTm9kZSA9IHJlbGF0aXZlTm9kZVBhdGgubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSBmaW5kKHJlbGF0aXZlTm9kZVBhdGgsIHRoaXMubm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJ1dHRvbk5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/mt7vliqDovazlj5HlmahcbiAgICAgICAgbGV0IGFnZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDbGlja0V2ZW50QWdlbnQpO1xuICAgICAgICBpZiAoIWFnZW50KSB7XG4gICAgICAgICAgICBhZ2VudCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBidG4gPSBidXR0b25Ob2RlLmdldENvbXBvbmVudChTbGlkZXJDb21wb25lbnQpO1xuICAgICAgICBsZXQgc2xpZGVFdmVudHMgPSBidG4uc2xpZGVFdmVudHM7XG4gICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcigpO1xuICAgICAgICBoYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgaGFuZGxlci5jb21wb25lbnQgPSAnQ2xpY2tFdmVudEFnZW50JztcbiAgICAgICAgaGFuZGxlci5oYW5kbGVyID0gJ29uU2xpZGVFdmVudCc7XG4gICAgICAgIGhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gJycgKyBVSUNvbnRyb2xsZXIuX2lkQmFzZSsrO1xuXG4gICAgICAgIC8v6ZmE5Yqg6aKd5aSW5L+h5oGvIOS+m+S6i+S7tui9rOWPkeS9v+eUqFxuICAgICAgICBoYW5kbGVyWyckY2IkJ10gPSBjYjtcbiAgICAgICAgaGFuZGxlclsnJHRhcmdldCQnXSA9IHRhcmdldDtcbiAgICAgICAgaGFuZGxlclsnJGFyZ3MkJ10gPSBhcmdzO1xuXG4gICAgICAgIHNsaWRlRXZlbnRzLnB1c2goaGFuZGxlcik7XG4gICAgICAgIGJ0bi5zbGlkZUV2ZW50cyA9IHNsaWRlRXZlbnRzO1xuICAgIH1cblxuICAgIC8v56e76ZmkU2xpZGXkuovku7ZcbiAgICBvZmZTbGlkZUV2ZW50KHJlbGF0aXZlTm9kZVBhdGg6IHN0cmluZyB8IE5vZGUgfCBTbGlkZXJDb21wb25lbnQsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgbGV0IGJ1dHRvbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAocmVsYXRpdmVOb2RlUGF0aCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlbGF0aXZlTm9kZVBhdGggaW5zdGFuY2VvZiBTbGlkZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGJ1dHRvbk5vZGUgPSByZWxhdGl2ZU5vZGVQYXRoLm5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBidXR0b25Ob2RlID0gZmluZChyZWxhdGl2ZU5vZGVQYXRoLCB0aGlzLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFidXR0b25Ob2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg6L2s5Y+R5ZmoXG4gICAgICAgIGxldCBhZ2VudCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2xpY2tFdmVudEFnZW50KTtcbiAgICAgICAgaWYgKCFhZ2VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidG4gPSBidXR0b25Ob2RlLmdldENvbXBvbmVudChTbGlkZXJDb21wb25lbnQpO1xuICAgICAgICBpZiAoIWJ0bikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzbGlkZUV2ZW50cyA9IGJ0bi5zbGlkZUV2ZW50cztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZUV2ZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGggPSBzbGlkZUV2ZW50c1tpXTtcbiAgICAgICAgICAgIGlmIChoWyckY2IkJ10gPT0gY2IgJiYgaFsnJHRhcmdldCQnXSA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBzbGlkZUV2ZW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnRuLnNsaWRlRXZlbnRzID0gc2xpZGVFdmVudHM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WtkOexu+eahOaJgOacieaTjeS9nO+8jOmcgOimgeWcqOi/meS4quWHveaVsOS5i+WQjuOAglxuICAgIHByb3RlY3RlZCBvbkNyZWF0ZWQoKSB7IH1cbiAgICAvL+mUgOavgVxuICAgIHByb3RlY3RlZCBvbkRpc3Bvc2UoKSB7IH1cbn0iXX0=