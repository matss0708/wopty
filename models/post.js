import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var post = new Schema({
  post: {
    type: String,
    required: true
  },
  addedTime: {
    type: Date,
    default: Date.now
  }
});

mongoose.models = {};

var Post = mongoose.model('Post', post);

export default Post;