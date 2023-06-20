import * as yup from 'yup';

export const certificateValidationSchema = yup.object().shape({
  employee_id: yup.string().nullable(),
  course_id: yup.string().nullable(),
});
