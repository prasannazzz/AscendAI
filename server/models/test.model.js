import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }], // Multiple options
  correctAnswer: { type: String, required: true }, // Correct answer
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // E.g., "JavaScript", "React"
  difficulty: { type: String, required: true }, // E.g., "Easy", "Medium", "Hard"
  questions: [questionSchema], // Array of questions
  createdAt: { type: Date, default: Date.now },
});

const Test = mongoose.model("Test", testSchema);
export default Test;
