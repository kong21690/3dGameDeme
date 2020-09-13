System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, AvatarBodyparts;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "f50fb8rbkRLe4T6cdcbF2AC", "AvatarBodyparts", _context.meta);

      _crd = true;

      _export("AvatarBodyparts", AvatarBodyparts = /*#__PURE__*/function () {
        function AvatarBodyparts() {
          _classCallCheck(this, AvatarBodyparts);
        }

        _createClass(AvatarBodyparts, null, [{
          key: "getNameOfBodypart",
          value: function getNameOfBodypart(part, suitId) {
            if (part == AvatarBodyparts.WEAPON) {
              return 'ch_we_one_hou_' + suitId;
            } else {
              return 'ch_pc_hou_' + suitId + '_' + this.bodypartsName[part];
            }
          }
        }, {
          key: "getPartName",
          value: function getPartName(part) {
            return this.bodypartsName[part];
          }
        }]);

        return AvatarBodyparts;
      }());

      AvatarBodyparts.HEAD = 0;
      AvatarBodyparts.BODY = 1;
      AvatarBodyparts.HAND = 2;
      AvatarBodyparts.LEG = 3;
      AvatarBodyparts.WEAPON = 4;
      AvatarBodyparts.NUM = 5;
      AvatarBodyparts.EVENT_CHANGE_PART = 'AvatarBodyparts.EVENT_CHANGE_PART';
      AvatarBodyparts.bodypartsName = ['tou', 'shen', 'shou', 'jiao'];
      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovcWZ3L2NsaWVudC9hc3NldHMvcmVzb3VyY2VzL3NjZW5lcy9hdmF0YXIvQXZhdGFyQm9keXBhcnRzLnRzIl0sIm5hbWVzIjpbIkF2YXRhckJvZHlwYXJ0cyIsInBhcnQiLCJzdWl0SWQiLCJXRUFQT04iLCJib2R5cGFydHNOYW1lIiwiSEVBRCIsIkJPRFkiLCJIQU5EIiwiTEVHIiwiTlVNIiwiRVZFTlRfQ0hBTkdFX1BBUlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUFhQSxlOzs7Ozs7OzRDQVl1QkMsSSxFQUFjQyxNLEVBQWdCO0FBQzFELGdCQUFJRCxJQUFJLElBQUlELGVBQWUsQ0FBQ0csTUFBNUIsRUFBb0M7QUFDaEMscUJBQU8sbUJBQW1CRCxNQUExQjtBQUNILGFBRkQsTUFHSztBQUNELHFCQUFPLGVBQWVBLE1BQWYsR0FBd0IsR0FBeEIsR0FBOEIsS0FBS0UsYUFBTCxDQUFtQkgsSUFBbkIsQ0FBckM7QUFDSDtBQUNKOzs7c0NBRXlCQSxJLEVBQWM7QUFDcEMsbUJBQU8sS0FBS0csYUFBTCxDQUFtQkgsSUFBbkIsQ0FBUDtBQUNIOzs7Ozs7QUF2QlFELE1BQUFBLGUsQ0FDS0ssSSxHQUFPLEM7QUFEWkwsTUFBQUEsZSxDQUVLTSxJLEdBQU8sQztBQUZaTixNQUFBQSxlLENBR0tPLEksR0FBTyxDO0FBSFpQLE1BQUFBLGUsQ0FJS1EsRyxHQUFNLEM7QUFKWFIsTUFBQUEsZSxDQUtLRyxNLEdBQVMsQztBQUxkSCxNQUFBQSxlLENBTUtTLEcsR0FBTSxDO0FBTlhULE1BQUFBLGUsQ0FRS1UsaUIsR0FBNEIsbUM7QUFSakNWLE1BQUFBLGUsQ0FVTUksYSxHQUFnQixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXZhdGFyQm9keXBhcnRzIHtcbiAgICBwdWJsaWMgc3RhdGljIEhFQUQgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgQk9EWSA9IDE7XG4gICAgcHVibGljIHN0YXRpYyBIQU5EID0gMjtcbiAgICBwdWJsaWMgc3RhdGljIExFRyA9IDM7XG4gICAgcHVibGljIHN0YXRpYyBXRUFQT04gPSA0O1xuICAgIHB1YmxpYyBzdGF0aWMgTlVNID0gNTtcblxuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRfQ0hBTkdFX1BBUlQ6IHN0cmluZyA9ICdBdmF0YXJCb2R5cGFydHMuRVZFTlRfQ0hBTkdFX1BBUlQnO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYm9keXBhcnRzTmFtZSA9IFsndG91JywgJ3NoZW4nLCAnc2hvdScsICdqaWFvJ107XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWVPZkJvZHlwYXJ0KHBhcnQ6IG51bWJlciwgc3VpdElkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBhcnQgPT0gQXZhdGFyQm9keXBhcnRzLldFQVBPTikge1xuICAgICAgICAgICAgcmV0dXJuICdjaF93ZV9vbmVfaG91XycgKyBzdWl0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ2NoX3BjX2hvdV8nICsgc3VpdElkICsgJ18nICsgdGhpcy5ib2R5cGFydHNOYW1lW3BhcnRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRQYXJ0TmFtZShwYXJ0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keXBhcnRzTmFtZVtwYXJ0XTtcbiAgICB9XG59Il19