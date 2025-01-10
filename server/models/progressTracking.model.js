import mongoose from "mongoose";

const ProgressTrackingSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    completion: { type: Number, required: true },
    last_updated: { type: Date, default: Date.now },
    feedback: { type: String, default: null },
  },
  { timestamps: true }
);

export default mongoose.model("ProgressTracking", ProgressTrackingSchema);
