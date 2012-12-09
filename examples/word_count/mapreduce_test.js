/**
 * Unit-test example using Nodeunit.
 */
var assert  = require('assert')
  , mr      = require('./mapreduce.js')
  , mapper  = mr.mapper
  , reducer = mr.reducer
  , mapperEmits;

mapperEmits = function (mapper, record, expected, message) {
  global.__mapper_emitted_values__ = [];
  mapper.apply(record);

  assert.deepEqual(global.__mapper_emitted_values__, expected);
};

global.emit = function (key, value) {
  var record = {}
    , result;
  record[key] = value;
  global.__mapper_emitted_values__.push(record);
};

module.exports = {
  "test_mapper_1": function (test) {
    mapperEmits(mapper, {"text": "foo bar baz"}, [
      {"foo": {"count": 1}},
      {"bar": {"count": 1}},
      {"baz": {"count": 1}},
    ]);
    test.done();
  },

  "test_mapper_2": function (test) {
    mapperEmits(mapper, {"text": "FOO BAR BAZ"}, [
      {"foo": {"count": 1}},
      {"bar": {"count": 1}},
      {"baz": {"count": 1}},
    ]);
    test.done();
  },

  "test_reducer_1": function (test) {
    var values = [{"count": 1}, {"count": 1}, {"count": 1}]
      , result = reducer('word', values);

    test.deepEqual(result, {"count": 3});
    test.done();
  },

  "test_reducer_2": function (test) {
    var values = [{"count": 3}, {"count": 1}, {"count": 1}]
      , result = reducer('word', values);

    test.deepEqual(result, {"count": 5});
    test.done();
  },
};
