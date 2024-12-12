import model from "./model.js";

export const createQuiz = (quiz) => model.create(quiz);

export const findAllQuizzes = (courseId) => model.find({ courseId: courseId });

export const findQuizById = (courseId, quizId) =>
  model.findOne({ courseId: courseId, _id: quizId });

export const updateQuiz = (courseId, quizId, quiz) =>
  model.updateOne({ courseId: courseId, _id: quizId }, quiz);

export const deleteQuiz = (courseId, quizId) =>
  model.deleteOne({ courseId, _id: quizId });


export const findQuestionById = (id) => {
  return model.findOne({ 'questions.id': id });
};


export const findQuizzesByPartialName = (courseId, partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    courseId,
    $or: [{ title: { $regex: regex } }],
  });

  
};
