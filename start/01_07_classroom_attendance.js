// Destructuring (Extract values from objects and arrays into variables);
function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssistant, students;
  if (hasTeachingAssistant) {
    ({ teacher, teachingAssistant, ...students } = classList);
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Faizan", "Ahmad", "student1", "student2", "student3"],
  })
);
