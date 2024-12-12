import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    title: String,
    id: String,
    type: String,
    points: Number,
    question: String,
    choices: [
      {
        id: Number,
        text: String,
        isCorrect: Boolean,
      },
    ],
    blanks: [
      {
        id: Number,
        text: String,
      },
    ],
    answer: Boolean,
  },
  {
    _id: false,
  }
);

const quizSchema = new mongoose.Schema(
  {
    courseId: String,
    numQuestions: Number,
    published: Boolean,
    title: String,
    description: String,
    quizType: String,
    points: Number,
    group: String,
    shuffle: Boolean,
    hasTimeLimit: Boolean,
    timeLimit: Number,
    multipleAttempt: Boolean,
    maxAttempts: Number,
    showCorrect: Boolean,
    answersDisplayedAt: String,
    accessCode: String,
    oneQView: Boolean,
    webcamReq: Boolean,
    lockAfterAttempt: Boolean,
    dueDate: Date,
    availableFrom: Date,
    availableUntil: Date,
    questions: [questionSchema],
  },
  {
    collection: "quizzes",
    timestamps: true,
  }
);

export default quizSchema;
