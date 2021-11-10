import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const commentSchema = new Schema({
	username: { type: String, required: true },
	comments: { type: String },
});
export default model('comments', commentSchema);
