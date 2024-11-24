"use server";

import { createClient } from "@/utils/supabase/server/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema, signupSchema } from "../schemas/authSchema";

export async function login(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const validation = loginSchema.safeParse(data);

	if (!validation.success) {
		console.error(validation.error.errors);
		redirect("/error");
	}

	const { error } = await supabase.auth.signInWithPassword(validation.data);

	if (error) redirect("/error");

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signup(formData: FormData) {
	const supabase = await createClient();

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		confirmPassword: formData.get("confirmPassword") as string,
	};

	const validation = signupSchema.safeParse(data);

	if (!validation.success) {
		console.error(validation.error.errors);
		redirect("/error");
	}

	const { error } = await supabase.auth.signUp({
		email: validation.data.email,
		password: validation.data.password,
	});

	if (error) redirect("/error");

	revalidatePath("/", "layout");
	redirect("/login?success=1");
}
