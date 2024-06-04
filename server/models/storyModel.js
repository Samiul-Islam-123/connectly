const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const storySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  image: { type: String }, // URL to an image if any
  views: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Users who viewed the story
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date } // The expiration time for the story
});

storySchema.pre('save', function (next) {
  // Set expiration time to 24 hours from creation
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 1);
  this.expiresAt = expiryDate;
  next();
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
