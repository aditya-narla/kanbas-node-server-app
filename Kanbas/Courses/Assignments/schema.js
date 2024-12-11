import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: String,
        description: String,
        points: Number,
        available_date_num: String,
        due_date_num: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "assignments" }
);

export default schema;