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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9jb21tb24vdWkvbXlfaW5mby9NeUluZm9NZ3IudHMiXSwibmFtZXMiOlsiZ2FtZSIsIk15SW5mb0V2ZW50IiwiSU5UUk9EVUNFX0NIQU5HRUQiLCJNeUluZm9NZ3IiLCJfaW50cm9kdWNlIiwiRGF0ZSIsImVtaXQiLCJfaW5zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0NBLE1BQUFBLEksT0FBQUEsSTs7Ozs7Ozs2QkFFekJDLFc7Ozs7QUFBQUEsTUFBQUEsVyxDQUNLQyxpQixHQUEyQiwrQjs7MkJBR2hDQyxTOzs7O2VBVURDLFUsR0FBb0Isb0Q7Ozs7OzRDQU9KO0FBQ3BCLGlCQUFLQSxVQUFMLEdBQWtCLHVEQUF3RCxJQUFJQyxJQUFKLEVBQTFFO0FBQ0FMLFlBQUFBLElBQUksQ0FBQ00sSUFBTCxDQUFVTCxXQUFXLENBQUNDLGlCQUF0QjtBQUNIOzs7QUFSRDs4QkFDK0I7QUFDM0IsbUJBQU8sS0FBS0UsVUFBWjtBQUNIOzs7OEJBWm1DO0FBQ2hDLGdCQUFJLENBQUMsS0FBS0csS0FBVixFQUFpQjtBQUNiLG1CQUFLQSxLQUFMLEdBQWEsSUFBSUosU0FBSixFQUFiO0FBQ0g7O0FBQ0QsbUJBQU8sS0FBS0ksS0FBWjtBQUNIOzs7Ozs7QUFSUUosTUFBQUEsUyxDQUVLSSxLLEdBQW1CLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGdhbWUgfSBmcm9tICdjYyc7XG5cbmV4cG9ydCBjbGFzcyBNeUluZm9FdmVudHtcbiAgICBwdWJsaWMgc3RhdGljIElOVFJPRFVDRV9DSEFOR0VEOnN0cmluZyA9ICdNeUluZm9FdmVudC5JTlRST0RVQ0VfQ0hBTkdFRCc7XG59XG5cbmV4cG9ydCBjbGFzcyBNeUluZm9NZ3Ige1xuICAgIC8v5Y2V5Lu257G7XG4gICAgcHVibGljIHN0YXRpYyBfaW5zdDogTXlJbmZvTWdyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IE15SW5mb01nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBNeUluZm9NZ3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbnRyb2R1Y2U6c3RyaW5nID0gJ+S9nOiAhTrpupLpup/lrZAgVlgmUVE6NzM4MzM3ODIyXFxu5YiG5LqrQ29jb3PlrabkuaDlkozmuLjmiI/lvIDlj5Hnu4/pqozvvIzmnJ/lvoXlkozlpKflrrbmiJDkuLrmnIvlj4snO1xuXG4gICAgLy/mlbDmja7mjqXlj6PmvJTnpLpcbiAgICBwdWJsaWMgZ2V0IGludHJvZHVjZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50cm9kdWNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VJbnRyb2R1Y2UoKXtcbiAgICAgICAgdGhpcy5faW50cm9kdWNlID0gJ+S9nOiAhTrpupLpup/lrZAgVlgmUVE6NzM4MzM3ODIyXFxu5YiG5LqrQ29jb3PlrabkuaDlkozmuLjmiI/lvIDlj5Hnu4/pqozvvIzmnJ/lvoXlkozlpKflrrbmiJDkuLrmnIvlj4snICsgKG5ldyBEYXRlKCkpO1xuICAgICAgICBnYW1lLmVtaXQoTXlJbmZvRXZlbnQuSU5UUk9EVUNFX0NIQU5HRUQpO1xuICAgIH1cbn1cbiJdfQ==