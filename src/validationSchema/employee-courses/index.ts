import * as yup from 'yup';

export const employeeCourseValidationSchema = yup.object().shape({
  status: yup.string().required(),
  employee_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
