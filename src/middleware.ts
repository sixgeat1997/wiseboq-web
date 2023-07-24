import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { userStore } from "./lib/store";
import { encryptAES } from "./util/crypto";
import { fetchUser } from "./api/apiUser";
import { BACKEND } from "./constant/backend";
import axios from "axios";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  let uidCookie = request.cookies.get("wiseboq-uid");

  if (!uidCookie?.value) {
    // const { fetchUser } = userStore();
    // const user = await fetchUser();
    //   const userId = encryptAES("" + user.userId);
    //   response.cookies.set({
    //     name: "wiseboq-uid",
    //     value: userId,
    //   });
  }

  // console.log({ cookie }); // => { name: 'nextjs', value: 'fast', Path: '/' }
  // const allCookies = request.cookies.getAll();
  // console.log({ allCookies }); // => [{ name: 'nextjs', value: 'fast' }]

  // request.cookies.has("nextjs"); // => true
  // request.cookies.delete("nextjs");
  // request.cookies.has("nextjs"); // => false

  // // Setting cookies on the response using the `ResponseCookies` API
  // response.cookies.set({
  //   name: "userid",
  //   value: "4",
  //   path: "/",
  // });
  // cookie = response.cookies.get("vercel");
  // console.log({ cookie }); // => { name: 'vercel', value: 'fast', Path: '/' }
  // // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
