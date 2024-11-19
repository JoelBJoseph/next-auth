export { auth as middleware } from "@/lib/auth";

export const config = {
    matches: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};