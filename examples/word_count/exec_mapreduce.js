load('../../mongo_require.js');

var mr = mongo_require('./mapreduce.js');

db.texts.mapReduce(mr.mapper, mr.reducer, {"out": "word_count"});
