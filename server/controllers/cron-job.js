const cron = require("node-cron");
const Story = require("../models/storyModel");
const { deleteFromCloudinary } = require("../utils/cloudinary");

// Function to delete old stories
const deleteOldStories = async () => {
  try {
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const stories = await Story.find({ createdAt: { $lt: cutoff } });

    for (const story of stories) {
      if (story.image) {
        await deleteFromCloudinary(story.image);
      }
      await story.remove();
    }

    console.log("Old stories deleted successfully");
  } catch (error) {
    console.error("Error deleting old stories:", error);
  }
};

cron.schedule("0 * * * *", deleteOldStories);

deleteOldStories();
