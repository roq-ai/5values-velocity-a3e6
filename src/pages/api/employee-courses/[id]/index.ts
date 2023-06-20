import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { employeeCourseValidationSchema } from 'validationSchema/employee-courses';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.employee_course
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getEmployeeCourseById();
    case 'PUT':
      return updateEmployeeCourseById();
    case 'DELETE':
      return deleteEmployeeCourseById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployeeCourseById() {
    const data = await prisma.employee_course.findFirst(convertQueryToPrismaUtil(req.query, 'employee_course'));
    return res.status(200).json(data);
  }

  async function updateEmployeeCourseById() {
    await employeeCourseValidationSchema.validate(req.body);
    const data = await prisma.employee_course.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteEmployeeCourseById() {
    const data = await prisma.employee_course.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
