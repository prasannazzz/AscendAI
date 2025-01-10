import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    difficulty: { type: String, required: true },
    type: { type: String, required: true },
    url: { type: String, default: null },
    tag: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
