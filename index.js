(function (root) {
  var serverSide = typeof module !== 'undefined' && module.exports;
  var MedsSessions = function (options) {
    void (options);
  };
  MedsSessions = [
      { name: 'Morning',  value: 7  , boundary: 10},
      { name: 'Lunch',    value: 12 , boundary: 15},
      { name: 'Teatime',  value: 17 , boundary: 19},
      { name: 'Night',    value: 22 }
    ];

  //=============================================================================
  // Export
  //=============================================================================
  if (serverSide) {
    module.exports = {
      MedsSessions: MedsSessions
    };
  }
  if (typeof ender === 'undefined') {
    root['MedsSessions'] = MedsSessions;
  }
  if (typeof define === "function" && define.amd) {
    define("MedsSessions", [], function () {
      return MedsSessions;
    });
  }
})(this);
