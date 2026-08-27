import type { Metadata } from "next";
import { AdminApp } from "@/components/AdminApp";

export const metadata: Metadata = {
  title: "記事の管理｜鬼々よろしく魁望蓮",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminApp />;
}
