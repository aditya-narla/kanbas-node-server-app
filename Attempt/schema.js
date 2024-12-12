import mongoose from "mongoose";
const attemptSchema = new mongoose.Schema(
  {
    userId: String,
    courseId: String,
    quizId: String,
    attemptNo: Number,
    score: Number,
    answers: [
      {
        qid: String,
        answer: { type: mongoose.Schema.Types.Mixed },
      },
    ],
  },
  { collection: "attempts" }
);
export default attemptSchema;
