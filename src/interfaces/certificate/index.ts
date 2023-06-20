import { UserInterface } from 'interfaces/user';
import { CourseInterface } from 'interfaces/course';
import { GetQueryInterface } from 'interfaces';

export interface CertificateInterface {
  id?: string;
  employee_id?: string;
  course_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  course?: CourseInterface;
  _count?: {};
}

export interface CertificateGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  course_id?: string;
}
