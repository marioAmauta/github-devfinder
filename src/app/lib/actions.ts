"use server";

import { redirect } from "next/navigation";

export async function searchAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!formData.get("search")) redirect("/");

  redirect(`/?user=${formData.get("search")}`);
}
