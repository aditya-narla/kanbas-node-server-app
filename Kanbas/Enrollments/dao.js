import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ 
        _id: new Date().getTime().toString(),
        user: userId, 
        course: courseId 
    });
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter(
        e => !(e.user === userId && e.course === courseId)
    );
}

export function getUserEnrollments(userId) {
    const { enrollments } = Database;
    return enrollments.filter(
        enrollment => enrollment.user === userId
    );
}
