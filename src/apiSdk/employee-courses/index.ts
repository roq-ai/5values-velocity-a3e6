import axios from 'axios';
import queryString from 'query-string';
import { EmployeeCourseInterface, EmployeeCourseGetQueryInterface } from 'interfaces/employee-course';
import { GetQueryInterface } from '../../interfaces';

export const getEmployeeCourses = async (query?: EmployeeCourseGetQueryInterface) => {
  const response = await axios.get(`/api/employee-courses${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEmployeeCourse = async (employeeCourse: EmployeeCourseInterface) => {
  const response = await axios.post('/api/employee-courses', employeeCourse);
  return response.data;
};

export const updateEmployeeCourseById = async (id: string, employeeCourse: EmployeeCourseInterface) => {
  const response = await axios.put(`/api/employee-courses/${id}`, employeeCourse);
  return response.data;
};

export const getEmployeeCourseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/employee-courses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmployeeCourseById = async (id: string) => {
  const response = await axios.delete(`/api/employee-courses/${id}`);
  return response.data;
};
