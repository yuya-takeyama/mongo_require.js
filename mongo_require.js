var exports
  , module
  , mongo_require;

(function () {
  var cleanup;

  mongo_require = function (file) {
    load(file);

    var result = module.exports;
    cleanup();

    return result;
  };

  cleanup = function () {
    exports = {};
    module  = {"exports": exports};
  };

  cleanup();
})();
