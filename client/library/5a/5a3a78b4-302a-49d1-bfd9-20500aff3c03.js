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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvc3RhcnQvRGVtb01nci50cyJdLCJuYW1lcyI6WyJkaXJlY3RvciIsIlVJQ29udHJvbGxlciIsIlVJTWdyIiwiVUlfQ29tbW9uX0hVRCIsIkRlbW9NZ3IiLCJfaW5zdCIsIl9kZW1vcyIsIl9pc0xvYWRpbmciLCJfY3VycmVudEluZGV4IiwidGl0bGUiLCJmb2xkZXIiLCJzY2VuZSIsImljb24iLCJkZW1vSW5kZXgiLCJoaWRlQWxsIiwiZGVtbyIsImdldFNjZW5lIiwibmFtZSIsImxvYWRTY2VuZSIsImVycm9yIiwiYWxlcnQiLCJpbnN0Iiwic2hvd1VJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxRLE9BQUFBLFE7Ozs7QUFEQUMsTUFBQUEsWSwwQkFBQUEsWTs7QUFFQUMsTUFBQUEsSyxtQkFBQUEsSzs7QUFDQUMsTUFBQUEsYSx1QkFBQUEsYTs7Ozs7Ozt5QkFFSUMsTzs7OzhCQUV5QjtBQUM5QixnQkFBSSxDQUFDLEtBQUtDLEtBQVYsRUFBaUI7QUFDYixtQkFBS0EsS0FBTCxHQUFhLElBQUlELE9BQUosRUFBYjtBQUNIOztBQUNELG1CQUFPLEtBQUtDLEtBQVo7QUFDSDs7O0FBTUQsMkJBQWM7QUFBQTs7QUFBQSxlQUpOQyxNQUlNLEdBSkcsSUFJSDtBQUFBLGVBSE5DLFVBR00sR0FITyxLQUdQO0FBQUEsZUFGTkMsYUFFTSxHQUZVLENBRVY7QUFDVixlQUFLRixNQUFMLEdBQWMsQ0FDVjtBQUFFRyxZQUFBQSxLQUFLLEVBQUUsK0NBQVQ7QUFBMERDLFlBQUFBLE1BQU0sRUFBRSxjQUFsRTtBQUFrRkMsWUFBQUEsS0FBSyxFQUFFLE9BQXpGO0FBQWtHQyxZQUFBQSxJQUFJLEVBQUU7QUFBeEcsV0FEVSxFQUVWO0FBQUVILFlBQUFBLEtBQUssRUFBRSxZQUFUO0FBQXVCQyxZQUFBQSxNQUFNLEVBQUUsZUFBL0I7QUFBZ0RDLFlBQUFBLEtBQUssRUFBRSxRQUF2RDtBQUFpRUMsWUFBQUEsSUFBSSxFQUFFO0FBQXZFLFdBRlUsRUFHVjtBQUFFSCxZQUFBQSxLQUFLLEVBQUUsYUFBVDtBQUF3QkMsWUFBQUEsTUFBTSxFQUFFLGVBQWhDO0FBQWlEQyxZQUFBQSxLQUFLLEVBQUUsUUFBeEQ7QUFBa0VDLFlBQUFBLElBQUksRUFBRTtBQUF4RSxXQUhVLEVBSVY7QUFBRUgsWUFBQUEsS0FBSyxFQUFFLHFCQUFUO0FBQWdDQyxZQUFBQSxNQUFNLEVBQUUscUJBQXhDO0FBQStEQyxZQUFBQSxLQUFLLEVBQUUsY0FBdEU7QUFBc0ZDLFlBQUFBLElBQUksRUFBRTtBQUE1RixXQUpVLEVBS1Y7QUFBRUgsWUFBQUEsS0FBSyxFQUFFLGdCQUFUO0FBQTJCQyxZQUFBQSxNQUFNLEVBQUUsa0JBQW5DO0FBQXVEQyxZQUFBQSxLQUFLLEVBQUUsV0FBOUQ7QUFBMkVDLFlBQUFBLElBQUksRUFBRTtBQUFqRixXQUxVLEVBTVY7QUFBRUgsWUFBQUEsS0FBSyxFQUFFLG1CQUFUO0FBQThCQyxZQUFBQSxNQUFNLEVBQUUsb0JBQXRDO0FBQTREQyxZQUFBQSxLQUFLLEVBQUUsYUFBbkU7QUFBa0ZDLFlBQUFBLElBQUksRUFBRTtBQUF4RixXQU5VLENBQWQ7QUFRSDs7OzsrQkFVV0MsUyxFQUFtQjtBQUFBOztBQUMzQixnQkFBSSxLQUFLTixVQUFULEVBQXFCO0FBQ2pCO0FBQ0g7O0FBQ0QsaUJBQUtDLGFBQUwsR0FBcUJLLFNBQXJCO0FBQ0E7QUFBQTtBQUFBLDhDQUFhQyxPQUFiO0FBQ0EsZ0JBQUlDLElBQUksR0FBRyxLQUFLVCxNQUFMLENBQVlPLFNBQVosQ0FBWDs7QUFDQSxnQkFBSUUsSUFBSSxJQUFJZixRQUFRLENBQUNnQixRQUFULEdBQW9CQyxJQUFwQixJQUE0QkYsSUFBSSxDQUFDSixLQUE3QyxFQUFvRDtBQUNoRCxtQkFBS0osVUFBTCxHQUFrQixJQUFsQjtBQUNBUCxjQUFBQSxRQUFRLENBQUNrQixTQUFULENBQW1CSCxJQUFJLENBQUNKLEtBQXhCLEVBQStCLFVBQUNRLEtBQUQsRUFBVztBQUN0QyxnQkFBQSxLQUFJLENBQUNaLFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0Esb0JBQUlZLEtBQUosRUFBVztBQUNQQyxrQkFBQUEsS0FBSyxDQUFDLGlCQUFELENBQUw7QUFDQWhCLGtCQUFBQSxPQUFPLENBQUNpQixJQUFSLFNBQWtCLENBQWxCO0FBQ0E7QUFDSDs7QUFDRCxvQkFBSVIsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2hCO0FBQUE7QUFBQSxzQ0FBTVEsSUFBTixDQUFXQyxNQUFYO0FBQUE7QUFBQTtBQUNIO0FBQ0osZUFWRDtBQVdIO0FBQ0o7Ozs4QkE3QmtCO0FBQ2YsbUJBQU8sS0FBS2hCLE1BQVo7QUFDSDs7OzhCQUVvRjtBQUNqRixtQkFBTyxLQUFLQSxNQUFMLENBQVksS0FBS0UsYUFBakIsQ0FBUDtBQUNIOzs7Ozs7QUE5QlFKLE1BQUFBLE8sQ0FDTUMsSyxHQUFpQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL3Fmdy9iYXNlL1VJQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgZGlyZWN0b3IgfSBmcm9tIFwiY2NcIjtcbmltcG9ydCB7IFVJTWdyIH0gZnJvbSBcIi4uLy4uL3Fmdy9iYXNlL1VJTWdyXCI7XG5pbXBvcnQgeyBVSV9Db21tb25fSFVEIH0gZnJvbSBcIi4vaHVkL1VJX0NvbW1vbl9IVURcIjtcblxuZXhwb3J0IGNsYXNzIERlbW9NZ3Ige1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBEZW1vTWdyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IERlbW9NZ3Ige1xuICAgICAgICBpZiAoIXRoaXMuX2luc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3QgPSBuZXcgRGVtb01ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2RlbW9zID0gbnVsbDtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2RlbW9zID0gW1xuICAgICAgICAgICAgeyB0aXRsZTogJ0NvY29zIENyZWF0b3IgM0Qg5a6e55So5qGI5L6LXFxuQ29jb3MgQ3JlYXRvciAzRCBDYXNlcycsIGZvbGRlcjogJ3NjZW5lcy9zdGFydCcsIHNjZW5lOiAnc3RhcnQnLCBpY29uOiAnJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+aNouijhVxcbkF2YXRhcicsIGZvbGRlcjogJ3NjZW5lcy9hdmF0YXInLCBzY2VuZTogJ2F2YXRhcicsIGljb246ICdwcmV2aWV3LmpwZycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICflpKnnqbrnm5JcXG5Ta3lib3gnLCBmb2xkZXI6ICdzY2VuZXMvc2t5Ym94Jywgc2NlbmU6ICdza3lib3gnLCBpY29uOiAncHJldmlldy5qcGcnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5qih5Z6L5p+l55yL5ZmoXFxuTW9kZWwgVmlld2VyJywgZm9sZGVyOiAnc2NlbmVzL21vZGVsX3ZpZXdlcicsIHNjZW5lOiAnbW9kZWxfdmlld2VyJywgaWNvbjogJ3ByZXZpZXcuanBnJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+i+uee8mOWFiVxcblJpbSBMaWdodCcsIGZvbGRlcjogJ3NjZW5lcy9yaW1fbGlnaHQnLCBzY2VuZTogJ3JpbV9saWdodCcsIGljb246ICdwcmV2aWV3LmpwZycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfmrablmajlj5HlhYlcXG5XZWFwb24gR2xvdycsIGZvbGRlcjogJ3NjZW5lcy93ZWFwb25fZ2xvdycsIHNjZW5lOiAnd2VhcG9uX2dsb3cnLCBpY29uOiAncHJldmlldy5qcGcnIH0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkZW1vcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbW9zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VycmVudCgpOiB7IHRpdGxlOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nLCBzY2VuZTogc3RyaW5nLCBpY29uOiBzdHJpbmcgfSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZW1vc1t0aGlzLl9jdXJyZW50SW5kZXhdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb3RvKGRlbW9JbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBkZW1vSW5kZXg7XG4gICAgICAgIFVJQ29udHJvbGxlci5oaWRlQWxsKCk7XG4gICAgICAgIGxldCBkZW1vID0gdGhpcy5fZGVtb3NbZGVtb0luZGV4XSBhcyB7IHRpdGxlOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nLCBzY2VuZTogc3RyaW5nLCBpY29uOiBzdHJpbmcgfTtcbiAgICAgICAgaWYgKGRlbW8gJiYgZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lICE9IGRlbW8uc2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoZGVtby5zY2VuZSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdkZW1vIG5vdCBmb3VuZCEnKTtcbiAgICAgICAgICAgICAgICAgICAgRGVtb01nci5pbnN0LmdvdG8oMCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRlbW9JbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFVJTWdyLmluc3Quc2hvd1VJKFVJX0NvbW1vbl9IVUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==