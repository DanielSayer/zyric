import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Dashboard } from "./dashboard";

export default async function Page() {
  const session = await auth();

  if (!session.userId) {
    redirect("/sign-in");
  }

  return <Dashboard />;
}
