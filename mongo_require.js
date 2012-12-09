var exports
  , module
  , mongo_require
  , __cleanup_mongo_require__;

mongo_require = function (file) {
  load(file);

  var result = module.exports;
  __cleanup_mongo_require__();

  return result;
};

__cleanup_mongo_require__ = function () {
  exports = {};
  module  = {"exports": exports};
};

__cleanup_mongo_require__();
