import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/server/auth";
import AdminNav from "@/components/admin/AdminNav";

export const metadata = {
  title: { default: "Admin", template: "%s | Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const isAuthenticated = token ? verifyToken(token) !== null : false;

  // Unauthenticated: render children (login page) without the admin shell.
  // The middleware handles redirecting other admin routes to /admin/login.
  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <AdminNav />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
