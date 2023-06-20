import { CertificateInterface } from 'interfaces/certificate';
import { EmployeeCourseInterface } from 'interfaces/employee-course';
import { VideoInterface } from 'interfaces/video';
import { TeamInterface } from 'interfaces/team';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  title: string;
  description: string;
  team_id?: string;
  created_at?: any;
  updated_at?: any;
  certificate?: CertificateInterface[];
  employee_course?: EmployeeCourseInterface[];
  video?: VideoInterface[];
  team?: TeamInterface;
  _count?: {
    certificate?: number;
    employee_course?: number;
    video?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  team_id?: string;
}
