import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const commentSchema = new Schema({
	username: { type: String, required: true },
	comments: { type: String, required: true },
	// ObjectId: {require('mongodb').ObjectID}
});
export default model('comments', commentSchema);

/*

{
"category":"{{$randomAdjective}}" ,
"title":"{{$randomAdjective}}",
"cover":"{{$randomImageUrl}}",
"readTime": {
"value":20,
"unit":"min"
},
"author": {
"name":"{{$randomAdjective}}",
"avatar":"{{$randomImageUrl}}"
},
"contect":"{{$randomAdjective}}"
}

*/
