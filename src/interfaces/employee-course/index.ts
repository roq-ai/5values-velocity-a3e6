import { UserInterface } from 'interfaces/user';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeCourseInterface {
  id?: string;
  employee_id?: string;
  course_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface EmployeeCourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  course_id?: string;
  status?: string;
}
