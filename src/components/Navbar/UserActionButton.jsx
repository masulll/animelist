import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign out" : "Sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link
          href={"/user/dashboard"}
          className="py-1 text-color-primary hover:text-color-warning"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-warning text-color hover:text-color-accent px-12 py-1 inline-block rounded-lg transition-all font-bold"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
