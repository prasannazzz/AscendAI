import mongoose from "mongoose";

const RecommendationSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    recommendation_id: { type: String, required: true },
    generated_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Recommendation", RecommendationSchema);
