import prisma from '@/lib/prisma/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // get car from body and save it to user in db
  const body = await request.json();
  try {
    // find user by id and update car
    const user = await prisma?.user.update({
      where: {
        id: body.userId,
      },
      data: {
        cars: {
          create: {
            make: body.make,
            model: body.model,
            year: Number(body.year),
            engine: body?.engine ? body.engine : undefined,
            transmission: body?.transmission ? body.transmission : 'Automatic',
            vin: body?.vin ? body.vin : undefined,
            mileage: body?.mileage ? Number(body.mileage) : 0,
          },
        },
      },
      include: {
        cars: true,
      },
    });
    return NextResponse.json({ car: user?.cars[0] });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, message: 'Error creating car' });
  }
}
