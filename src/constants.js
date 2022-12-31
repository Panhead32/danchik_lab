const entities = {
  teachers: {
    name: 'teachers',
    title: 'Teachers',
    fields: [
      'id', 'name', 'surname', 'email', 'phone',
    ],
  },
  schedule: {
    name: 'schedule',
    title: 'Schedule',
    fields: [
      'id', 'name', 'teacher_id', 'discipline_id', 'group_id', 'time', 'classroom',
    ],
  },
  disciplines: {
    name: 'disciplines',
    title: 'Disciplines',
    fields: [
      'id', 'name',
    ],
  },
  group: {
    name: 'group',
    title: 'Group',
    fields: [
      'id', 'department_id', 'name', 'course',
    ],
  },
  students: {
    name: 'students',
    title: 'Students',
    fields: [
      'id', 'group_id', 'name', 'email', 'phone',
    ],
  },
  department: {
    name: 'department',
    title: 'Department',
    fields: [
      'id', 'faculty_id', 'name', 'short_name',
    ],
  },
  faculty: {
    name: 'faculty',
    title: 'Faculty',
    fields: [
      'id', 'name', 'short_name',
    ],
  },
};
export default entities;
