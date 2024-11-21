import { login } from "@/lib/auth/authActions";
import Link from "next/link";

export default function LoginForm() {
	return (
		<div className="md:flex md:items-center md:justify-center md:h-screen">
			<form>
				<label className="input input-bordered flex items-center gap-2 my-5">
					Email
					<input
						type="email"
						id="email"
						name="email"
						className="grow"
						required
					/>
				</label>
				<label
					htmlFor="password"
					className="input input-bordered flex items-center gap-2 my-5"
				>
					Password
					<input
						type="password"
						id="password"
						name="password"
						className="grow"
						required
					/>
				</label>
				<button
					className="btn btn-block sm:btn-sm md:btn-md lg:btn-lg"
					formAction={login}
				>
					Login
				</button>
				<p className="my-5">
					Don&apos;t have an account yet?{" "}
					<Link href="/signup" className="font-bold">
						Sign Up
					</Link>
				</p>
			</form>
		</div>
	);
}
