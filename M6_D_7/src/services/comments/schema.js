import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const commentSchema = new Schema(
	{
		username: { type: String, required: true },
		comments: { type: String },
	},
	{
		timestamps: true,
	},
);
export default model('comments', commentSchema);
