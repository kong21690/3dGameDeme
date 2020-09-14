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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9xZncvYmFzZS9VSU1nci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiTm9kZSIsImxvYWRlciIsImluc3RhbnRpYXRlIiwiZmluZCIsIldpZGdldENvbXBvbmVudCIsIlVJVHJhbnNmb3JtQ29tcG9uZW50IiwidmlldyIsIlJlc29sdXRpb25Qb2xpY3kiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSUxheWVyIiwiVUlNZ3IiLCJkciIsImdldERlc2lnblJlc29sdXRpb25TaXplIiwicyIsImNjIiwiZ2V0RnJhbWVTaXplIiwicnciLCJ3aWR0aCIsInJoIiwiaGVpZ2h0IiwiZmluYWxXIiwiZmluYWxIIiwic2V0RGVzaWduUmVzb2x1dGlvblNpemUiLCJVTktOT1dOIiwiY3ZzIiwiZ2V0Q29tcG9uZW50Iiwibm9kZSIsIm1heExheWVycyIsInJlc2l6ZSIsImNhbnZhcyIsImNoaWxkcmVuIiwibGVuZ3RoIiwiaSIsImxheWVyTm9kZSIsImxheWVyIiwidWlUcmFuc2Zyb20iLCJhZGRDb21wb25lbnQiLCJ3aWRnZXQiLCJpc0FsaWduQm90dG9tIiwiaXNBbGlnblRvcCIsImlzQWxpZ25MZWZ0IiwiaXNBbGlnblJpZ2h0IiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWRkQ2hpbGQiLCJsYXllckluZGV4IiwidWlDbHMiLCJjYiIsInRhcmdldCIsInVpIiwicmVzQXJyIiwiZ2V0UmVzIiwicHVzaCIsInByZWZhYlVybCIsImxvYWRSZXNBcnJheSIsInByZWZhYiIsInNldHVwIiwiX2luc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQXVCQyxNQUFBQSxJLE9BQUFBLEk7QUFBeUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxP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LGdCQUFBQSxJQUFJLEdBQUd6QixXQUFXLENBQUN3RCxNQUFELENBQWxCO0FBQ0gsZUFIRCxNQUlJO0FBQ0E7QUFDQS9CLGdCQUFBQSxJQUFJLEdBQUcsSUFBSTNCLElBQUosRUFBUDtBQUNBMkIsZ0JBQUFBLElBQUksQ0FBQ1EsS0FBTCxHQUFhaEMsSUFBSSxDQUFDLFFBQUQsQ0FBSixDQUFlZ0MsS0FBNUIsQ0FIQSxDQUtBOztBQUNBLG9CQUFJRyxNQUFNLEdBQUdYLElBQUksQ0FBQ1UsWUFBTCxDQUFrQmpDLGVBQWxCLENBQWI7QUFDQWtDLGdCQUFBQSxNQUFNLENBQUNDLGFBQVAsR0FBdUIsSUFBdkI7QUFDQUQsZ0JBQUFBLE1BQU0sQ0FBQ0UsVUFBUCxHQUFvQixJQUFwQjtBQUNBRixnQkFBQUEsTUFBTSxDQUFDRyxXQUFQLEdBQXFCLElBQXJCO0FBQ0FILGdCQUFBQSxNQUFNLENBQUNJLFlBQVAsR0FBc0IsSUFBdEI7QUFFQUosZ0JBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxHQUFjLENBQWQ7QUFDQUwsZ0JBQUFBLE1BQU0sQ0FBQ00sS0FBUCxHQUFlLENBQWY7QUFDQU4sZ0JBQUFBLE1BQU0sQ0FBQ08sR0FBUCxHQUFhLENBQWI7QUFDQVAsZ0JBQUFBLE1BQU0sQ0FBQ1EsTUFBUCxHQUFnQixDQUFoQjtBQUNIOztBQUVETSxjQUFBQSxFQUFFLENBQUNPLEtBQUgsQ0FBU2hDLElBQVQ7QUFDSCxhQXpCRDtBQTBCQSxtQkFBT3lCLEVBQVA7QUFDSDs7OzhCQXpHK0I7QUFDNUIsZ0JBQUksQ0FBQyxLQUFLUSxLQUFWLEVBQWlCO0FBQ2IsbUJBQUtBLEtBQUwsR0FBYSxJQUFJakQsS0FBSixFQUFiO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBS2lELEtBQVo7QUFDSDs7Ozs7O0FBUFFqRCxNQUFBQSxLLENBQ01pRCxLLEdBQWUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBUZXh0dXJlMkQsIGxvYWRlciwgaW5zdGFudGlhdGUsIGZpbmQsIFdpZGdldENvbXBvbmVudCwgVUlUcmFuc2Zvcm1Db21wb25lbnQsIGRpcmVjdG9yLCBnYW1lLCB2aWV3LCBSZXNvbHV0aW9uUG9saWN5LCBMYXllcnMsIG1hY3JvIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSAnLi9VSUNvbnRyb2xsZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuXG5leHBvcnQgZW51bSBVSUxheWVye1xuICAgIFNDRU5FLFxuICAgIEdBTUUsXG4gICAgSFVELFxuICAgIFBPUFVQLFxuICAgIEFMRVJULFxuICAgIE5PVElDRSxcbiAgICBNQVNLLFxuICAgIE5VTVxufVxuXG5leHBvcnQgY2xhc3MgVUlNZ3Ige1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBVSU1nciA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpOiBVSU1nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBVSU1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNpemUoKSB7XG4gICAgICAgIC8v5qC55o2u5bGP5bmV5aSn5bCP5Yaz5a6a6YCC6YWN562W55WlXG4gICAgICAgIC8v5oOz5piO55m95Y6f55CG77yM6K+36ZiF6K+75pys5paHIGh0dHBzOi8vYmxvZy5jc2RuLm5ldC9xcV8zNjcyMDg0OC9hcnRpY2xlL2RldGFpbHMvODk3NDI0NTFcblxuICAgICAgICAvL2RlY2lkZSB0aGUgcmVzb2x1dGlvbiBwb2xpY3kgYWNjb3JkaW5nIHRvIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiBzY3JlZW4gc2l6ZSBhbmQgZGVzaWduIHJlc29sdXRpb24uICBnbyBodHRwczovL2Jsb2cuY3Nkbi5uZXQvcXFfMzY3MjA4NDgvYXJ0aWNsZS9kZXRhaWxzLzg5NzQyNDUxIChhcnRpbGUgaW4gQ2hpbmVzZSkgZm9yIG1vcmUgZGV0YWlsLlxuICAgICAgICBsZXQgZHIgPSB2aWV3LmdldERlc2lnblJlc29sdXRpb25TaXplKCk7XG4gICAgICAgIHZhciBzID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcbiAgICAgICAgdmFyIHJ3ID0gcy53aWR0aDtcbiAgICAgICAgdmFyIHJoID0gcy5oZWlnaHQ7XG4gICAgICAgIHZhciBmaW5hbFcgPSBydztcbiAgICAgICAgdmFyIGZpbmFsSCA9IHJoO1xuXG4gICAgICAgIC8vXG4gICAgICAgIGlmKChydy9yaCkgPiAoZHIud2lkdGggLyBkci5oZWlnaHQpKXtcbiAgICAgICAgICAgIC8v5aaC5p6c5pu06ZW/77yM5YiZ55So5a6a6auYXG4gICAgICAgICAgICAvL2lmIHNjcmVlbiBzaXplIGlzIGxvbmdlciB0aGFuIGRlc2lnbiByZXNvbHV0aW9uLiB1c2UgZml0SGVpZ2h0XG4gICAgICAgICAgICBmaW5hbEggPSBkci5oZWlnaHQ7XG4gICAgICAgICAgICBmaW5hbFcgPSBmaW5hbEggKiBydy9yaDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy/lpoLmnpzmm7Tnn63vvIzliJnnlKjlrprlrr1cbiAgICAgICAgICAgIC8vaWYgc2NyZWVuIHNpemUgaXMgc2hvcnRlciB0aGFuIGRlc2lnbiByZXNvbHV0aW9uLiB1c2UgZml0V2lkdGguXG4gICAgICAgICAgICBmaW5hbFcgPSBkci53aWR0aDtcbiAgICAgICAgICAgIGZpbmFsSCA9IHJoL3J3ICogZmluYWxXO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/miYvlt6Xkv67mlLljYW52YXPlkozorr7orqHliIbovqjnjofvvIzov5nmoLflj43lpI3osIPnlKjkuZ/og73nlJ/mlYjjgIJcbiAgICAgICAgLy93ZSB1c2UgdGhlIGNvZGUgYmVsb3cgaW5zdGVhZCBvZiBmaXRXaWR0aCA9IHRydWUgb3IgZml0SGVpZ2h0ID0gdHJ1ZS4gc28gdGhhdCB3ZSBjYW4gcmVjYWxsIHRoaXMgbWV0aG9kIG1hbnkgdGltZXMuXG4gICAgICAgIHZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoZmluYWxXLGZpbmFsSCxSZXNvbHV0aW9uUG9saWN5LlVOS05PV04pO1xuICAgICAgICBsZXQgY3ZzID0gZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KFVJVHJhbnNmb3JtQ29tcG9uZW50KTtcbiAgICAgICAgY3ZzLm5vZGUud2lkdGggPSBmaW5hbFc7XG4gICAgICAgIGN2cy5ub2RlLmhlaWdodCA9IGZpbmFsSDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXAobWF4TGF5ZXJzOm51bWJlcil7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIGxldCBjYW52YXMgPSBmaW5kKCdDYW52YXMnKS5nZXRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xuICAgICAgICBpZihjYW52YXMubm9kZS5jaGlsZHJlbi5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWF4TGF5ZXJzOyArK2kpe1xuICAgICAgICAgICAgbGV0IGxheWVyTm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgICAgICBsYXllck5vZGUubGF5ZXIgPSBjYW52YXMubm9kZS5sYXllcjtcbiAgICAgICAgICAgIGxldCB1aVRyYW5zZnJvbSA9IGxheWVyTm9kZS5hZGRDb21wb25lbnQoVUlUcmFuc2Zvcm1Db21wb25lbnQpO1xuICAgICAgICAgICAgdWlUcmFuc2Zyb20ud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgICAgICB1aVRyYW5zZnJvbS5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgd2lkZ2V0ID0gbGF5ZXJOb2RlLmFkZENvbXBvbmVudChXaWRnZXRDb21wb25lbnQpO1xuICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xuICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpZGdldC5pc0FsaWduUmlnaHQgPSB0cnVlO1xuXG4gICAgICAgICAgICB3aWRnZXQubGVmdCA9IDA7XG4gICAgICAgICAgICB3aWRnZXQucmlnaHQgPSAwO1xuICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IDA7XG4gICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcbiAgICAgICAgICAgIGNhbnZhcy5ub2RlLmFkZENoaWxkKGxheWVyTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGF5ZXJOb2RlKGxheWVySW5kZXg6bnVtYmVyKTpOb2Rle1xuICAgICAgICBsZXQgY2FudmFzID0gZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIHJldHVybiBjYW52YXMuY2hpbGRyZW5bbGF5ZXJJbmRleF07XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dVSSh1aUNsczogYW55LCBjYj86IEZ1bmN0aW9uLHRhcmdldD86YW55KTphbnkge1xuICAgICAgICBsZXQgdWkgPSBuZXcgdWlDbHMoKSBhcyBVSUNvbnRyb2xsZXI7XG4gICAgICAgIGxldCByZXNBcnIgPSB1aS5nZXRSZXMoKSB8fCBbXTtcbiAgICAgICAgcmVzQXJyLnB1c2godWkucHJlZmFiVXJsIGFzIG5ldmVyKTtcbiAgICAgICAgbG9hZGVyLmxvYWRSZXNBcnJheShyZXNBcnIsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBub2RlOk5vZGUgPSBudWxsO1xuICAgICAgICAgICAgaWYodWkucHJlZmFiVXJsKXtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gbG9hZGVyLmdldFJlcyh1aS5wcmVmYWJVcmwpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL3NwZWNpYWwgZm9yIGVtcHR5IHVpXG4gICAgICAgICAgICAgICAgbm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgICAgICAgICAgICAgbm9kZS5sYXllciA9IGZpbmQoJ0NhbnZhcycpLmxheWVyO1xuXG4gICAgICAgICAgICAgICAgLy9rZWVwIHNpemVcbiAgICAgICAgICAgICAgICBsZXQgd2lkZ2V0ID0gbm9kZS5hZGRDb21wb25lbnQoV2lkZ2V0Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdpZGdldC5pc0FsaWduTGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICAgICAgd2lkZ2V0LmxlZnQgPSAwO1xuICAgICAgICAgICAgICAgIHdpZGdldC5yaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmJvdHRvbSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVpLnNldHVwKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVpO1xuICAgIH1cbn1cbiJdfQ==