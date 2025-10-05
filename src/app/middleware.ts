export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { auth } from './auth';
// import { getToken } from 'next-auth/jwt';

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const token = await getToken({
//     req: request,
//     secret: process.env.AUTH_SECRET,
//   });

//   if (!token) {
//     const url = request.nextUrl.clone();
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/create-book', '/borrow-summary'],
// };
