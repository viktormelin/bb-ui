import type { AuthToken } from '@authorizerdev/authorizer-js';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest, res: Response) => {
  res.headers.set(
    'Set-Cookie',
    `authorizer-client=;Expires=-1;Secure=true;HttpOnly=true;Path=/`,
  );
  return NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 },
  );
};
