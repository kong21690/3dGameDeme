System.register(["cc", "code-quality:cr", "../../qfw/base/UIController.js", "../../qfw/base/UIMgr.js", "./hud/UI_Common_HUD.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, UIController, director, UIMgr, UI_Common_HUD, _crd, DemoMgr;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _reportPossibleCrUseOfUIController(extras) {
    _reporterNs.report("UIController", "../../qfw/base/UIController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../qfw/base/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUI_Common_HUD(extras) {
    _reporterNs.report("UI_Common_HUD", "./hud/UI_Common_HUD", _context.meta, extras);
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_qfwBaseUIControllerJs) {
      UIController = _qfwBaseUIControllerJs.UIController;
    }, function (_qfwBaseUIMgrJs) {
      UIMgr = _qfwBaseUIMgrJs.UIMgr;
    }, function (_hudUI_Common_HUDJs) {
      UI_Common_HUD = _hudUI_Common_HUDJs.UI_Common_HUD;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "5a3a7i0MCpJ0b/ZIFAK/zwD", "DemoMgr", _context.meta);

      _crd = true;

      _export("DemoMgr", DemoMgr = /*#__PURE__*/function () {
        _createClass(DemoMgr, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new DemoMgr();
            }

            return this._inst;
          }
        }]);

        function DemoMgr() {
          _classCallCheck(this, DemoMgr);

          this._demos = null;
          this._isLoading = false;
          this._currentIndex = 0;
          this._demos = [{
            title: 'Cocos Creator 3D 实用案例\nCocos Creator 3D Cases',
            folder: 'scenes/start',
            scene: 'start',
            icon: ''
          }, {
            title: '换装\nAvatar',
            folder: 'scenes/avatar',
            scene: 'avatar',
            icon: 'preview.jpg'
          }, {
            title: '天空盒\nSkybox',
            folder: 'scenes/skybox',
            scene: 'skybox',
            icon: 'preview.jpg'
          }, {
            title: '模型查看器\nModel Viewer',
            folder: 'scenes/model_viewer',
            scene: 'model_viewer',
            icon: 'preview.jpg'
          }, {
            title: '边缘光\nRim Light',
            folder: 'scenes/rim_light',
            scene: 'rim_light',
            icon: 'preview.jpg'
          }, {
            title: '武器发光\nWeapon Glow',
            folder: 'scenes/weapon_glow',
            scene: 'weapon_glow',
            icon: 'preview.jpg'
          }];
        }

        _createClass(DemoMgr, [{
          key: "goto",
          value: function goto(demoIndex) {
            var _this = this;

            if (this._isLoading) {
              return;
            }

            this._currentIndex = demoIndex;
            (_crd && UIController === void 0 ? (_reportPossibleCrUseOfUIController({
              error: Error()
            }), UIController) : UIController).hideAll();
            var demo = this._demos[demoIndex];

            if (demo && director.getScene().name != demo.scene) {
              this._isLoading = true;
              director.loadScene(demo.scene, function (error) {
                _this._isLoading = false;

                if (error) {
                  alert('demo not found!');
                  DemoMgr.inst["goto"](0);
                  return;
                }

                if (demoIndex != 0) {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).inst.showUI(_crd && UI_Common_HUD === void 0 ? (_reportPossibleCrUseOfUI_Common_HUD({
                    error: Error()
                  }), UI_Common_HUD) : UI_Common_HUD);
                }
              });
            }
          }
        }, {
          key: "demos",
          get: function get() {
            return this._demos;
          }
        }, {
          key: "current",
          get: function get() {
            return this._demos[this._currentIndex];
          }
        }]);

        return DemoMgr;
      }());

      DemoMgr._inst = null;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9zdGFydC9EZW1vTWdyLnRzIl0sIm5hbWVzIjpbImRpcmVjdG9yIiwiVUlDb250cm9sbGVyIiwiVUlNZ3IiLCJVSV9Db21tb25fSFVEIiwiRGVtb01nciIsIl9pbnN0IiwiX2RlbW9zIiwiX2lzTG9hZGluZyIsIl9jdXJyZW50SW5kZXgiLCJ0aXRsZSIsImZvbGRlciIsInNjZW5lIiwiaWNvbiIsImRlbW9JbmRleCIsImhpZGVBbGwiLCJkZW1vIiwiZ2V0U2NlbmUiLCJuYW1lIiwibG9hZFNjZW5lIiwiZXJyb3IiLCJhbGVydCIsImluc3QiLCJzaG93VUkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFEsT0FBQUEsUTs7OztBQURBQyxNQUFBQSxZLDBCQUFBQSxZOztBQUVBQyxNQUFBQSxLLG1CQUFBQSxLOztBQUNBQyxNQUFBQSxhLHVCQUFBQSxhOzs7Ozs7O3lCQUVJQyxPOzs7OEJBRXlCO0FBQzlCLGdCQUFJLENBQUMsS0FBS0MsS0FBVixFQUFpQjtBQUNiLG1CQUFLQSxLQUFMLEdBQWEsSUFBSUQsT0FBSixFQUFiO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBS0MsS0FBWjtBQUNIOzs7QUFNRCwyQkFBYztBQUFBOztBQUFBLGVBSk5DLE1BSU0sR0FKRyxJQUlIO0FBQUEsZUFITkMsVUFHTSxHQUhPLEtBR1A7QUFBQSxlQUZOQyxhQUVNLEdBRlUsQ0FFVjtBQUNWLGVBQUtGLE1BQUwsR0FBYyxDQUNWO0FBQUVHLFlBQUFBLEtBQUssRUFBRSwrQ0FBVDtBQUEwREMsWUFBQUEsTUFBTSxFQUFFLGNBQWxFO0FBQWtGQyxZQUFBQSxLQUFLLEVBQUUsT0FBekY7QUFBa0dDLFlBQUFBLElBQUksRUFBRTtBQUF4RyxXQURVLEVBRVY7QUFBRUgsWUFBQUEsS0FBSyxFQUFFLFlBQVQ7QUFBdUJDLFlBQUFBLE1BQU0sRUFBRSxlQUEvQjtBQUFnREMsWUFBQUEsS0FBSyxFQUFFLFFBQXZEO0FBQWlFQyxZQUFBQSxJQUFJLEVBQUU7QUFBdkUsV0FGVSxFQUdWO0FBQUVILFlBQUFBLEtBQUssRUFBRSxhQUFUO0FBQXdCQyxZQUFBQSxNQUFNLEVBQUUsZUFBaEM7QUFBaURDLFlBQUFBLEtBQUssRUFBRSxRQUF4RDtBQUFrRUMsWUFBQUEsSUFBSSxFQUFFO0FBQXhFLFdBSFUsRUFJVjtBQUFFSCxZQUFBQSxLQUFLLEVBQUUscUJBQVQ7QUFBZ0NDLFlBQUFBLE1BQU0sRUFBRSxxQkFBeEM7QUFBK0RDLFlBQUFBLEtBQUssRUFBRSxjQUF0RTtBQUFzRkMsWUFBQUEsSUFBSSxFQUFFO0FBQTVGLFdBSlUsRUFLVjtBQUFFSCxZQUFBQSxLQUFLLEVBQUUsZ0JBQVQ7QUFBMkJDLFlBQUFBLE1BQU0sRUFBRSxrQkFBbkM7QUFBdURDLFlBQUFBLEtBQUssRUFBRSxXQUE5RDtBQUEyRUMsWUFBQUEsSUFBSSxFQUFFO0FBQWpGLFdBTFUsRUFNVjtBQUFFSCxZQUFBQSxLQUFLLEVBQUUsbUJBQVQ7QUFBOEJDLFlBQUFBLE1BQU0sRUFBRSxvQkFBdEM7QUFBNERDLFlBQUFBLEtBQUssRUFBRSxhQUFuRTtBQUFrRkMsWUFBQUEsSUFBSSxFQUFFO0FBQXhGLFdBTlUsQ0FBZDtBQVFIOzs7OytCQVVXQyxTLEVBQW1CO0FBQUE7O0FBQzNCLGdCQUFJLEtBQUtOLFVBQVQsRUFBcUI7QUFDakI7QUFDSDs7QUFDRCxpQkFBS0MsYUFBTCxHQUFxQkssU0FBckI7QUFDQTtBQUFBO0FBQUEsOENBQWFDLE9BQWI7QUFDQSxnQkFBSUMsSUFBSSxHQUFHLEtBQUtULE1BQUwsQ0FBWU8sU0FBWixDQUFYOztBQUNBLGdCQUFJRSxJQUFJLElBQUlmLFFBQVEsQ0FBQ2dCLFFBQVQsR0FBb0JDLElBQXBCLElBQTRCRixJQUFJLENBQUNKLEtBQTdDLEVBQW9EO0FBQ2hELG1CQUFLSixVQUFMLEdBQWtCLElBQWxCO0FBQ0FQLGNBQUFBLFFBQVEsQ0FBQ2tCLFNBQVQsQ0FBbUJILElBQUksQ0FBQ0osS0FBeEIsRUFBK0IsVUFBQ1EsS0FBRCxFQUFXO0FBQ3RDLGdCQUFBLEtBQUksQ0FBQ1osVUFBTCxHQUFrQixLQUFsQjs7QUFDQSxvQkFBSVksS0FBSixFQUFXO0FBQ1BDLGtCQUFBQSxLQUFLLENBQUMsaUJBQUQsQ0FBTDtBQUNBaEIsa0JBQUFBLE9BQU8sQ0FBQ2lCLElBQVIsU0FBa0IsQ0FBbEI7QUFDQTtBQUNIOztBQUNELG9CQUFJUixTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDaEI7QUFBQTtBQUFBLHNDQUFNUSxJQUFOLENBQVdDLE1BQVg7QUFBQTtBQUFBO0FBQ0g7QUFDSixlQVZEO0FBV0g7QUFDSjs7OzhCQTdCa0I7QUFDZixtQkFBTyxLQUFLaEIsTUFBWjtBQUNIOzs7OEJBRW9GO0FBQ2pGLG1CQUFPLEtBQUtBLE1BQUwsQ0FBWSxLQUFLRSxhQUFqQixDQUFQO0FBQ0g7Ozs7OztBQTlCUUosTUFBQUEsTyxDQUNNQyxLLEdBQWlCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vcWZ3L2Jhc2UvVUlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBkaXJlY3RvciB9IGZyb20gXCJjY1wiO1xuaW1wb3J0IHsgVUlNZ3IgfSBmcm9tIFwiLi4vLi4vcWZ3L2Jhc2UvVUlNZ3JcIjtcbmltcG9ydCB7IFVJX0NvbW1vbl9IVUQgfSBmcm9tIFwiLi9odWQvVUlfQ29tbW9uX0hVRFwiO1xuXG5leHBvcnQgY2xhc3MgRGVtb01nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IERlbW9NZ3IgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogRGVtb01nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBEZW1vTWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3Q7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVtb3MgPSBudWxsO1xuICAgIHByaXZhdGUgX2lzTG9hZGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fZGVtb3MgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiAnQ29jb3MgQ3JlYXRvciAzRCDlrp7nlKjmoYjkvotcXG5Db2NvcyBDcmVhdG9yIDNEIENhc2VzJywgZm9sZGVyOiAnc2NlbmVzL3N0YXJ0Jywgc2NlbmU6ICdzdGFydCcsIGljb246ICcnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5o2i6KOFXFxuQXZhdGFyJywgZm9sZGVyOiAnc2NlbmVzL2F2YXRhcicsIHNjZW5lOiAnYXZhdGFyJywgaWNvbjogJ3ByZXZpZXcuanBnJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+WkqeepuuebklxcblNreWJveCcsIGZvbGRlcjogJ3NjZW5lcy9za3lib3gnLCBzY2VuZTogJ3NreWJveCcsIGljb246ICdwcmV2aWV3LmpwZycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfmqKHlnovmn6XnnIvlmahcXG5Nb2RlbCBWaWV3ZXInLCBmb2xkZXI6ICdzY2VuZXMvbW9kZWxfdmlld2VyJywgc2NlbmU6ICdtb2RlbF92aWV3ZXInLCBpY29uOiAncHJldmlldy5qcGcnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn6L6557yY5YWJXFxuUmltIExpZ2h0JywgZm9sZGVyOiAnc2NlbmVzL3JpbV9saWdodCcsIHNjZW5lOiAncmltX2xpZ2h0JywgaWNvbjogJ3ByZXZpZXcuanBnJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+atpuWZqOWPkeWFiVxcbldlYXBvbiBHbG93JywgZm9sZGVyOiAnc2NlbmVzL3dlYXBvbl9nbG93Jywgc2NlbmU6ICd3ZWFwb25fZ2xvdycsIGljb246ICdwcmV2aWV3LmpwZycgfSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRlbW9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVtb3M7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50KCk6IHsgdGl0bGU6IHN0cmluZywgZm9sZGVyOiBzdHJpbmcsIHNjZW5lOiBzdHJpbmcsIGljb246IHN0cmluZyB9IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbW9zW3RoaXMuX2N1cnJlbnRJbmRleF07XG4gICAgfVxuXG4gICAgcHVibGljIGdvdG8oZGVtb0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzTG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGRlbW9JbmRleDtcbiAgICAgICAgVUlDb250cm9sbGVyLmhpZGVBbGwoKTtcbiAgICAgICAgbGV0IGRlbW8gPSB0aGlzLl9kZW1vc1tkZW1vSW5kZXhdIGFzIHsgdGl0bGU6IHN0cmluZywgZm9sZGVyOiBzdHJpbmcsIHNjZW5lOiBzdHJpbmcsIGljb246IHN0cmluZyB9O1xuICAgICAgICBpZiAoZGVtbyAmJiBkaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUgIT0gZGVtby5zY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZShkZW1vLnNjZW5lLCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2RlbW8gbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgICAgICAgICBEZW1vTWdyLmluc3QuZ290bygwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGVtb0luZGV4ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVUlNZ3IuaW5zdC5zaG93VUkoVUlfQ29tbW9uX0hVRCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19