const mapping: Record<string, string> = {
  certificates: 'certificate',
  courses: 'course',
  'employee-courses': 'employee_course',
  teams: 'team',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
