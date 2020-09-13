System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Node, loader, instantiate, find, WidgetComponent, UITransformComponent, view, ResolutionPolicy, _crd, ccclass, property, UILayer, UIMgr;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export("UILayer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      loader = _cc.loader;
      instantiate = _cc.instantiate;
      find = _cc.find;
      WidgetComponent = _cc.WidgetComponent;
      UITransformComponent = _cc.UITransformComponent;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "82a59QFSGVIYrBkrgAX1U2r", "UIMgr", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (UILayer) {
        UILayer[UILayer["SCENE"] = 0] = "SCENE";
        UILayer[UILayer["GAME"] = 1] = "GAME";
        UILayer[UILayer["HUD"] = 2] = "HUD";
        UILayer[UILayer["POPUP"] = 3] = "POPUP";
        UILayer[UILayer["ALERT"] = 4] = "ALERT";
        UILayer[UILayer["NOTICE"] = 5] = "NOTICE";
        UILayer[UILayer["MASK"] = 6] = "MASK";
        UILayer[UILayer["NUM"] = 7] = "NUM";
      })(UILayer || _export("UILayer", UILayer = {}));

      _export("UIMgr", UIMgr = /*#__PURE__*/function () {
        function UIMgr() {
          _classCallCheck(this, UIMgr);
        }

        _createClass(UIMgr, [{
          key: "resize",
          value: function resize() {
            //根据屏幕大小决定适配策略
            //想明白原理，请阅读本文 https://blog.csdn.net/qq_36720848/article/details/89742451
            //decide the resolution policy according to the relationship between screen size and design resolution.  go https://blog.csdn.net/qq_36720848/article/details/89742451 (artile in Chinese) for more detail.
            var dr = view.getDesignResolutionSize();
            var s = cc.view.getFrameSize();
            var rw = s.width;
            var rh = s.height;
            var finalW = rw;
            var finalH = rh; //

            if (rw / rh > dr.width / dr.height) {
              //如果更长，则用定高
              //if screen size is longer than design resolution. use fitHeight
              finalH = dr.height;
              finalW = finalH * rw / rh;
            } else {
              //如果更短，则用定宽
              //if screen size is shorter than design resolution. use fitWidth.
              finalW = dr.width;
              finalH = rh / rw * finalW;
            } //手工修改canvas和设计分辨率，这样反复调用也能生效。
            //we use the code below instead of fitWidth = true or fitHeight = true. so that we can recall this method many times.


            view.setDesignResolutionSize(finalW, finalH, ResolutionPolicy.UNKNOWN);
            var cvs = find('Canvas').getComponent(UITransformComponent);
            cvs.node.width = finalW;
            cvs.node.height = finalH;
          }
        }, {
          key: "setup",
          value: function setup(maxLayers) {
            this.resize();
            var canvas = find('Canvas').getComponent(UITransformComponent);

            if (canvas.node.children.length) {
              return;
            }

            for (var i = 0; i < maxLayers; ++i) {
              var layerNode = new Node();
              layerNode.layer = canvas.node.layer;
              var uiTransfrom = layerNode.addComponent(UITransformComponent);
              uiTransfrom.width = canvas.width;
              uiTransfrom.height = canvas.height;
              var widget = layerNode.addComponent(WidgetComponent);
              widget.isAlignBottom = true;
              widget.isAlignTop = true;
              widget.isAlignLeft = true;
              widget.isAlignRight = true;
              widget.left = 0;
              widget.right = 0;
              widget.top = 0;
              widget.bottom = 0;
              canvas.node.addChild(layerNode);
            }
          }
        }, {
          key: "getLayerNode",
          value: function getLayerNode(layerIndex) {
            var canvas = find('Canvas');
            return canvas.children[layerIndex];
          }
        }, {
          key: "showUI",
          value: function showUI(uiCls, cb, target) {
            var ui = new uiCls();
            var resArr = ui.getRes() || [];
            resArr.push(ui.prefabUrl);
            loader.loadResArray(resArr, function () {
              var node = null;

              if (ui.prefabUrl) {
                var prefab = loader.getRes(ui.prefabUrl);
                node = instantiate(prefab);
              } else {
                //special for empty ui
                node = new Node();
                node.layer = find('Canvas').layer; //keep size

                var widget = node.addComponent(WidgetComponent);
                widget.isAlignBottom = true;
                widget.isAlignTop = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
                widget.left = 0;
                widget.right = 0;
                widget.top = 0;
                widget.bottom = 0;
              }

              ui.setup(node);
            });
            return ui;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new UIMgr();
            }

            return this._inst;
          }
        }]);

        return UIMgr;
      }());

      UIMgr._inst = null;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3Fmdy9iYXNlL1VJTWdyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJOb2RlIiwibG9hZGVyIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiV2lkZ2V0Q29tcG9uZW50IiwiVUlUcmFuc2Zvcm1Db21wb25lbnQiLCJ2aWV3IiwiUmVzb2x1dGlvblBvbGljeSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlVJTGF5ZXIiLCJVSU1nciIsImRyIiwiZ2V0RGVzaWduUmVzb2x1dGlvblNpemUiLCJzIiwiY2MiLCJnZXRGcmFtZVNpemUiLCJydyIsIndpZHRoIiwicmgiLCJoZWlnaHQiLCJmaW5hbFciLCJmaW5hbEgiLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIlVOS05PV04iLCJjdnMiLCJnZXRDb21wb25lbnQiLCJub2RlIiwibWF4TGF5ZXJzIiwicmVzaXplIiwiY2FudmFzIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJpIiwibGF5ZXJOb2RlIiwibGF5ZXIiLCJ1aVRyYW5zZnJvbSIsImFkZENvbXBvbmVudCIsIndpZGdldCIsImlzQWxpZ25Cb3R0b20iLCJpc0FsaWduVG9wIiwiaXNBbGlnbkxlZnQiLCJpc0FsaWduUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJhZGRDaGlsZCIsImxheWVySW5kZXgiLCJ1aUNscyIsImNiIiwidGFyZ2V0IiwidWkiLCJyZXNBcnIiLCJnZXRSZXMiLCJwdXNoIiwicHJlZmFiVXJsIiwibG9hZFJlc0FycmF5IiwicHJlZmFiIiwic2V0dXAiLCJfaW5zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBdUJDLE1BQUFBLEksT0FBQUEsSTtBQUF5QkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsZSxPQUFB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Q0FBQ3dELE1BQUQsQ0FBbEI7QUFDSCxlQUhELE1BSUk7QUFDQTtBQUNBL0IsZ0JBQUFBLElBQUksR0FBRyxJQUFJM0IsSUFBSixFQUFQO0FBQ0EyQixnQkFBQUEsSUFBSSxDQUFDUSxLQUFMLEdBQWFoQyxJQUFJLENBQUMsUUFBRCxDQUFKLENBQWVnQyxLQUE1QixDQUhBLENBS0E7O0FBQ0Esb0JBQUlHLE1BQU0sR0FBR1gsSUFBSSxDQUFDVSxZQUFMLENBQWtCakMsZUFBbEIsQ0FBYjtBQUNBa0MsZ0JBQUFBLE1BQU0sQ0FBQ0MsYUFBUCxHQUF1QixJQUF2QjtBQUNBRCxnQkFBQUEsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLElBQXBCO0FBQ0FGLGdCQUFBQSxNQUFNLENBQUNHLFdBQVAsR0FBcUIsSUFBckI7QUFDQUgsZ0JBQUFBLE1BQU0sQ0FBQ0ksWUFBUCxHQUFzQixJQUF0QjtBQUVBSixnQkFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWMsQ0FBZDtBQUNBTCxnQkFBQUEsTUFBTSxDQUFDTSxLQUFQLEdBQWUsQ0FBZjtBQUNBTixnQkFBQUEsTUFBTSxDQUFDTyxHQUFQLEdBQWEsQ0FBYjtBQUNBUCxnQkFBQUEsTUFBTSxDQUFDUSxNQUFQLEdBQWdCLENBQWhCO0FBQ0g7O0FBRURNLGNBQUFBLEVBQUUsQ0FBQ08sS0FBSCxDQUFTaEMsSUFBVDtBQUNILGFBekJEO0FBMEJBLG1CQUFPeUIsRUFBUDtBQUNIOzs7OEJBekcrQjtBQUM1QixnQkFBSSxDQUFDLEtBQUtRLEtBQVYsRUFBaUI7QUFDYixtQkFBS0EsS0FBTCxHQUFhLElBQUlqRCxLQUFKLEVBQWI7QUFDSDs7QUFDRCxtQkFBTyxLQUFLaUQsS0FBWjtBQUNIOzs7Ozs7QUFQUWpELE1BQUFBLEssQ0FDTWlELEssR0FBZSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIFRleHR1cmUyRCwgbG9hZGVyLCBpbnN0YW50aWF0ZSwgZmluZCwgV2lkZ2V0Q29tcG9uZW50LCBVSVRyYW5zZm9ybUNvbXBvbmVudCwgZGlyZWN0b3IsIGdhbWUsIHZpZXcsIFJlc29sdXRpb25Qb2xpY3ksIExheWVycywgbWFjcm8gfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tICcuL1VJQ29udHJvbGxlcic7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5cbmV4cG9ydCBlbnVtIFVJTGF5ZXJ7XG4gICAgU0NFTkUsXG4gICAgR0FNRSxcbiAgICBIVUQsXG4gICAgUE9QVVAsXG4gICAgQUxFUlQsXG4gICAgTk9USUNFLFxuICAgIE1BU0ssXG4gICAgTlVNXG59XG5cbmV4cG9ydCBjbGFzcyBVSU1nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IFVJTWdyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFVJTWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IFVJTWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcbiAgICAgICAgLy/moLnmja7lsY/luZXlpKflsI/lhrPlrprpgILphY3nrZbnlaVcbiAgICAgICAgLy/mg7PmmI7nmb3ljp/nkIbvvIzor7fpmIXor7vmnKzmlocgaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NzIwODQ4L2FydGljbGUvZGV0YWlscy84OTc0MjQ1MVxuXG4gICAgICAgIC8vZGVjaWRlIHRoZSByZXNvbHV0aW9uIHBvbGljeSBhY2NvcmRpbmcgdG8gdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHNjcmVlbiBzaXplIGFuZCBkZXNpZ24gcmVzb2x1dGlvbi4gIGdvIGh0dHBzOi8vYmxvZy5jc2RuLm5ldC9xcV8zNjcyMDg0OC9hcnRpY2xlL2RldGFpbHMvODk3NDI0NTEgKGFydGlsZSBpbiBDaGluZXNlKSBmb3IgbW9yZSBkZXRhaWwuXG4gICAgICAgIGxldCBkciA9IHZpZXcuZ2V0RGVzaWduUmVzb2x1dGlvblNpemUoKTtcbiAgICAgICAgdmFyIHMgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xuICAgICAgICB2YXIgcncgPSBzLndpZHRoO1xuICAgICAgICB2YXIgcmggPSBzLmhlaWdodDtcbiAgICAgICAgdmFyIGZpbmFsVyA9IHJ3O1xuICAgICAgICB2YXIgZmluYWxIID0gcmg7XG5cbiAgICAgICAgLy9cbiAgICAgICAgaWYoKHJ3L3JoKSA+IChkci53aWR0aCAvIGRyLmhlaWdodCkpe1xuICAgICAgICAgICAgLy/lpoLmnpzmm7Tplb/vvIzliJnnlKjlrprpq5hcbiAgICAgICAgICAgIC8vaWYgc2NyZWVuIHNpemUgaXMgbG9uZ2VyIHRoYW4gZGVzaWduIHJlc29sdXRpb24uIHVzZSBmaXRIZWlnaHRcbiAgICAgICAgICAgIGZpbmFsSCA9IGRyLmhlaWdodDtcbiAgICAgICAgICAgIGZpbmFsVyA9IGZpbmFsSCAqIHJ3L3JoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL+WmguaenOabtOefre+8jOWImeeUqOWumuWuvVxuICAgICAgICAgICAgLy9pZiBzY3JlZW4gc2l6ZSBpcyBzaG9ydGVyIHRoYW4gZGVzaWduIHJlc29sdXRpb24uIHVzZSBmaXRXaWR0aC5cbiAgICAgICAgICAgIGZpbmFsVyA9IGRyLndpZHRoO1xuICAgICAgICAgICAgZmluYWxIID0gcmgvcncgKiBmaW5hbFc7XG4gICAgICAgIH1cblxuICAgICAgICAvL+aJi+W3peS/ruaUuWNhbnZhc+WSjOiuvuiuoeWIhui+qOeOh++8jOi/meagt+WPjeWkjeiwg+eUqOS5n+iDveeUn+aViOOAglxuICAgICAgICAvL3dlIHVzZSB0aGUgY29kZSBiZWxvdyBpbnN0ZWFkIG9mIGZpdFdpZHRoID0gdHJ1ZSBvciBmaXRIZWlnaHQgPSB0cnVlLiBzbyB0aGF0IHdlIGNhbiByZWNhbGwgdGhpcyBtZXRob2QgbWFueSB0aW1lcy5cbiAgICAgICAgdmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShmaW5hbFcsZmluYWxILFJlc29sdXRpb25Qb2xpY3kuVU5LTk9XTik7XG4gICAgICAgIGxldCBjdnMgPSBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xuICAgICAgICBjdnMubm9kZS53aWR0aCA9IGZpbmFsVztcbiAgICAgICAgY3ZzLm5vZGUuaGVpZ2h0ID0gZmluYWxIO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXR1cChtYXhMYXllcnM6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGZpbmQoJ0NhbnZhcycpLmdldENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgIGlmKGNhbnZhcy5ub2RlLmNoaWxkcmVuLmxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXhMYXllcnM7ICsraSl7XG4gICAgICAgICAgICBsZXQgbGF5ZXJOb2RlID0gbmV3IE5vZGUoKTtcbiAgICAgICAgICAgIGxheWVyTm9kZS5sYXllciA9IGNhbnZhcy5ub2RlLmxheWVyO1xuICAgICAgICAgICAgbGV0IHVpVHJhbnNmcm9tID0gbGF5ZXJOb2RlLmFkZENvbXBvbmVudChVSVRyYW5zZm9ybUNvbXBvbmVudCk7XG4gICAgICAgICAgICB1aVRyYW5zZnJvbS53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHVpVHJhbnNmcm9tLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSBsYXllck5vZGUuYWRkQ29tcG9uZW50KFdpZGdldENvbXBvbmVudCk7XG4gICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XG4gICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XG5cbiAgICAgICAgICAgIHdpZGdldC5sZWZ0ID0gMDtcbiAgICAgICAgICAgIHdpZGdldC5yaWdodCA9IDA7XG4gICAgICAgICAgICB3aWRnZXQudG9wID0gMDtcbiAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSAwO1xuICAgICAgICAgICAgY2FudmFzLm5vZGUuYWRkQ2hpbGQobGF5ZXJOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMYXllck5vZGUobGF5ZXJJbmRleDpudW1iZXIpOk5vZGV7XG4gICAgICAgIGxldCBjYW52YXMgPSBmaW5kKCdDYW52YXMnKTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcy5jaGlsZHJlbltsYXllckluZGV4XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1VJKHVpQ2xzOiBhbnksIGNiPzogRnVuY3Rpb24sdGFyZ2V0PzphbnkpOmFueSB7XG4gICAgICAgIGxldCB1aSA9IG5ldyB1aUNscygpIGFzIFVJQ29udHJvbGxlcjtcbiAgICAgICAgbGV0IHJlc0FyciA9IHVpLmdldFJlcygpIHx8IFtdO1xuICAgICAgICByZXNBcnIucHVzaCh1aS5wcmVmYWJVcmwgYXMgbmV2ZXIpO1xuICAgICAgICBsb2FkZXIubG9hZFJlc0FycmF5KHJlc0FyciwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGU6Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBpZih1aS5wcmVmYWJVcmwpe1xuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBsb2FkZXIuZ2V0UmVzKHVpLnByZWZhYlVybCk7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vc3BlY2lhbCBmb3IgZW1wdHkgdWlcbiAgICAgICAgICAgICAgICBub2RlID0gbmV3IE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlLmxheWVyID0gZmluZCgnQ2FudmFzJykubGF5ZXI7XG5cbiAgICAgICAgICAgICAgICAvL2tlZXAgc2l6ZVxuICAgICAgICAgICAgICAgIGxldCB3aWRnZXQgPSBub2RlLmFkZENvbXBvbmVudChXaWRnZXRDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduQm90dG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblRvcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgICAgICB3aWRnZXQubGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICB3aWRnZXQudG9wID0gMDtcbiAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdWkuc2V0dXAobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdWk7XG4gICAgfVxufVxuIl19