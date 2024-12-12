import * as dao from "./dao.js";

export default function AttemptRoutes(app) {
  const createAttempt = async (req, res) => {
    const attempt = await dao.createAttempt(req.body);
    res.json(attempt);
  };

  const findUserAttemptsForQuiz = async (req, res) => {

    console.log(req.params);
    

    const { userId, courseId, quizId } = req.params;
    const attempts = await dao.findUserAttemptsForQuiz(
      userId,
      courseId,
      quizId
    );
    res.json(attempts);
  };

  const updateAttempt = async (req, res) => {
    const { attemptId } = req.params;
    const updatedAttempt = await dao.updateAttempt(attemptId, req.body);
    res.json(updatedAttempt);
  };

  const getAllAttemptsForUser = async (req, res) => {
    const { userId } = req.params;
    // console.log(userId);
    const attempts = await dao.getAllAttemptsForUser(userId);
    // console.log(attempts);
    res.json(attempts);
  };

  app.post("/api/quizattempts", createAttempt);
  app.get("/api/quizattempts/user/:userId/:courseId", getAllAttemptsForUser);
  app.get(
    "/api/quizattempts/:userId/:courseId/:quizId",
    findUserAttemptsForQuiz
  );
  app.put("/api/quizattempts/:attemptId", updateAttempt);
}
