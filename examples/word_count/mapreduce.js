var mapper
  , reducer;

mapper = function () {
  this.text.split(/\s+/).forEach(function (word) {
    emit(word.toLowerCase(), {"count": 1});
  });
};

reducer = function (key, values) {
  var result = {"count": 0};

  values.forEach(function (value) {
    result.count += value.count;
  });

  return result;
};

exports.mapper  = mapper;
exports.reducer = reducer;
