export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students by city
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the corresponding grade for the student
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student, grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
