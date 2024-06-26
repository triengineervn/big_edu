import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
import MongooseDelete from "mongoose-delete";
const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String },
  videoId: { type: String },
  price: { type: String },
  status: { type: String },
  rating: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  slug: { type: String, slug: "name", unique: true },
});

// Add plugins
mongoose.plugin(slug);
Course.plugin(MongooseDelete, { deletedAt: true, overrideMethods: "all" });

export default mongoose.model("Course", Course);
