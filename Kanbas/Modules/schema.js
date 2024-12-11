// import mongoose from "mongoose";
// const schema = new mongoose.Schema(
//     {
//         name: String,
//         description: String,
//         course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
//     },
//     { collection: "modules" }
// );
// export default schema;

import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    module: String,
});

const moduleSchema = new mongoose.Schema(
    {
        name: String,
        description: { type: String, default: "No description available" },
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        lessons: [lessonSchema]
    },
    { collection: "modules",
        versionKey: false }
);

export default moduleSchema;
