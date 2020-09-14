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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvamlqaS9Eb2N1bWVudHMvM2RHYW1lRGVtZS9jbGllbnQvYXNzZXRzL3Jlc291cmNlcy9zY2VuZXMvYXZhdGFyL0F2YXRhckJvZHlwYXJ0cy50cyJdLCJuYW1lcyI6WyJBdmF0YXJCb2R5cGFydHMiLCJwYXJ0Iiwic3VpdElkIiwiV0VBUE9OIiwiYm9keXBhcnRzTmFtZSIsIkhFQUQiLCJCT0RZIiwiSEFORCIsIkxFRyIsIk5VTSIsIkVWRU5UX0NIQU5HRV9QQVJUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FBYUEsZTs7Ozs7Ozs0Q0FZdUJDLEksRUFBY0MsTSxFQUFnQjtBQUMxRCxnQkFBSUQsSUFBSSxJQUFJRCxlQUFlLENBQUNHLE1BQTVCLEVBQW9DO0FBQ2hDLHFCQUFPLG1CQUFtQkQsTUFBMUI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBTyxlQUFlQSxNQUFmLEdBQXdCLEdBQXhCLEdBQThCLEtBQUtFLGFBQUwsQ0FBbUJILElBQW5CLENBQXJDO0FBQ0g7QUFDSjs7O3NDQUV5QkEsSSxFQUFjO0FBQ3BDLG1CQUFPLEtBQUtHLGFBQUwsQ0FBbUJILElBQW5CLENBQVA7QUFDSDs7Ozs7O0FBdkJRRCxNQUFBQSxlLENBQ0tLLEksR0FBTyxDO0FBRFpMLE1BQUFBLGUsQ0FFS00sSSxHQUFPLEM7QUFGWk4sTUFBQUEsZSxDQUdLTyxJLEdBQU8sQztBQUhaUCxNQUFBQSxlLENBSUtRLEcsR0FBTSxDO0FBSlhSLE1BQUFBLGUsQ0FLS0csTSxHQUFTLEM7QUFMZEgsTUFBQUEsZSxDQU1LUyxHLEdBQU0sQztBQU5YVCxNQUFBQSxlLENBUUtVLGlCLEdBQTRCLG1DO0FBUmpDVixNQUFBQSxlLENBVU1JLGEsR0FBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixNQUFoQixFQUF3QixNQUF4QixDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF2YXRhckJvZHlwYXJ0cyB7XG4gICAgcHVibGljIHN0YXRpYyBIRUFEID0gMDtcbiAgICBwdWJsaWMgc3RhdGljIEJPRFkgPSAxO1xuICAgIHB1YmxpYyBzdGF0aWMgSEFORCA9IDI7XG4gICAgcHVibGljIHN0YXRpYyBMRUcgPSAzO1xuICAgIHB1YmxpYyBzdGF0aWMgV0VBUE9OID0gNDtcbiAgICBwdWJsaWMgc3RhdGljIE5VTSA9IDU7XG5cbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UX0NIQU5HRV9QQVJUOiBzdHJpbmcgPSAnQXZhdGFyQm9keXBhcnRzLkVWRU5UX0NIQU5HRV9QQVJUJztcblxuICAgIHByaXZhdGUgc3RhdGljIGJvZHlwYXJ0c05hbWUgPSBbJ3RvdScsICdzaGVuJywgJ3Nob3UnLCAnamlhbyddO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lT2ZCb2R5cGFydChwYXJ0OiBudW1iZXIsIHN1aXRJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwYXJ0ID09IEF2YXRhckJvZHlwYXJ0cy5XRUFQT04pIHtcbiAgICAgICAgICAgIHJldHVybiAnY2hfd2Vfb25lX2hvdV8nICsgc3VpdElkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdjaF9wY19ob3VfJyArIHN1aXRJZCArICdfJyArIHRoaXMuYm9keXBhcnRzTmFtZVtwYXJ0XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UGFydE5hbWUocGFydDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlwYXJ0c05hbWVbcGFydF07XG4gICAgfVxufSJdfQ==