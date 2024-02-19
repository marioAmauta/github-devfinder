"use server";

import { redirect } from "next/navigation";

export async function searchAction(prevState: any, formData: FormData) {
  if (!formData.get("search")) redirect("/");

  redirect(`/?user=${formData.get("search")}`);
}
