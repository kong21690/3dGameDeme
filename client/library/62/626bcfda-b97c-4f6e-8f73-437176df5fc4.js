System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, game, _crd, MyInfoEvent, MyInfoMgr;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "626bc/auXxPbo9zQ3F231/E", "MyInfoMgr", _context.meta);

      _crd = true;

      _export("MyInfoEvent", MyInfoEvent = function MyInfoEvent() {
        _classCallCheck(this, MyInfoEvent);
      });

      MyInfoEvent.INTRODUCE_CHANGED = 'MyInfoEvent.INTRODUCE_CHANGED';

      _export("MyInfoMgr", MyInfoMgr = /*#__PURE__*/function () {
        function MyInfoMgr() {
          _classCallCheck(this, MyInfoMgr);

          this._introduce = '作者:麒麟子 VX&QQ:738337822\n分享Cocos学习和游戏开发经验，期待和大家成为朋友';
        }

        _createClass(MyInfoMgr, [{
          key: "changeIntroduce",
          value: function changeIntroduce() {
            this._introduce = '作者:麒麟子 VX&QQ:738337822\n分享Cocos学习和游戏开发经验，期待和大家成为朋友' + new Date();
            game.emit(MyInfoEvent.INTRODUCE_CHANGED);
          }
        }, {
          key: "introduce",
          //数据接口演示
          get: function get() {
            return this._introduce;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) {
              this._inst = new MyInfoMgr();
            }

            return this._inst;
          }
        }]);

        return MyInfoMgr;
      }());

      MyInfoMgr._inst = null;
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL2NvbW1vbi91aS9teV9pbmZvL015SW5mb01nci50cyJdLCJuYW1lcyI6WyJnYW1lIiwiTXlJbmZvRXZlbnQiLCJJTlRST0RVQ0VfQ0hBTkdFRCIsIk15SW5mb01nciIsIl9pbnRyb2R1Y2UiLCJEYXRlIiwiZW1pdCIsIl9pbnN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQ0EsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7OzZCQUV6QkMsVzs7OztBQUFBQSxNQUFBQSxXLENBQ0tDLGlCLEdBQTJCLCtCOzsyQkFHaENDLFM7Ozs7ZUFVREMsVSxHQUFvQixvRDs7Ozs7NENBT0o7QUFDcEIsaUJBQUtBLFVBQUwsR0FBa0IsdURBQXdELElBQUlDLElBQUosRUFBMUU7QUFDQUwsWUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVVMLFdBQVcsQ0FBQ0MsaUJBQXRCO0FBQ0g7OztBQVJEOzhCQUMrQjtBQUMzQixtQkFBTyxLQUFLRSxVQUFaO0FBQ0g7Ozs4QkFabUM7QUFDaEMsZ0JBQUksQ0FBQyxLQUFLRyxLQUFWLEVBQWlCO0FBQ2IsbUJBQUtBLEtBQUwsR0FBYSxJQUFJSixTQUFKLEVBQWI7QUFDSDs7QUFDRCxtQkFBTyxLQUFLSSxLQUFaO0FBQ0g7Ozs7OztBQVJRSixNQUFBQSxTLENBRUtJLEssR0FBbUIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZ2FtZSB9IGZyb20gJ2NjJztcblxuZXhwb3J0IGNsYXNzIE15SW5mb0V2ZW50e1xuICAgIHB1YmxpYyBzdGF0aWMgSU5UUk9EVUNFX0NIQU5HRUQ6c3RyaW5nID0gJ015SW5mb0V2ZW50LklOVFJPRFVDRV9DSEFOR0VEJztcbn1cblxuZXhwb3J0IGNsYXNzIE15SW5mb01nciB7XG4gICAgLy/ljZXku7bnsbtcbiAgICBwdWJsaWMgc3RhdGljIF9pbnN0OiBNeUluZm9NZ3IgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogTXlJbmZvTWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0KSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0ID0gbmV3IE15SW5mb01ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX2ludHJvZHVjZTpzdHJpbmcgPSAn5L2c6ICFOum6kum6n+WtkCBWWCZRUTo3MzgzMzc4MjJcXG7liIbkuqtDb2Nvc+WtpuS5oOWSjOa4uOaIj+W8gOWPkee7j+mqjO+8jOacn+W+heWSjOWkp+WutuaIkOS4uuaci+WPiyc7XG5cbiAgICAvL+aVsOaNruaOpeWPo+a8lOekulxuICAgIHB1YmxpYyBnZXQgaW50cm9kdWNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRyb2R1Y2U7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUludHJvZHVjZSgpe1xuICAgICAgICB0aGlzLl9pbnRyb2R1Y2UgPSAn5L2c6ICFOum6kum6n+WtkCBWWCZRUTo3MzgzMzc4MjJcXG7liIbkuqtDb2Nvc+WtpuS5oOWSjOa4uOaIj+W8gOWPkee7j+mqjO+8jOacn+W+heWSjOWkp+WutuaIkOS4uuaci+WPiycgKyAobmV3IERhdGUoKSk7XG4gICAgICAgIGdhbWUuZW1pdChNeUluZm9FdmVudC5JTlRST0RVQ0VfQ0hBTkdFRCk7XG4gICAgfVxufVxuIl19