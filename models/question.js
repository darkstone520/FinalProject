var mongoose = require('mongoose'),
    mongoosePaginate = require('mongoose-paginate'),
    Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {type: String, trim: true, required: true},
  content: {type: String, trim: true, required: true},
  location: {type: String, trim: true},
  organization: {type: String, trim: true},
  org_description: {type: String, trim: true},
  start_date : {type: String, trim: true},
  finish_date : {type: String, trim: true},
  tags: [String],
  event_categories : {type: String, trim: true},
  event_area : {type: String, trim: true},
  fee : {type: String, trim: true},
  price : {type: String, trim: true},
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
  limitNum: {type: Number, required: true},
  isAdmin: {type: Boolean, default: 0}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Question = mongoose.model('Question', schema);

module.exports = Question;
