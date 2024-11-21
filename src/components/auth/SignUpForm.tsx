import { signup } from "@/lib/auth/authActions";
import Link from "next/link";

export default function SignUpForm() {
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
				<label
					htmlFor="confirmPassword"
					className="input input-bordered flex items-center gap-2 my-5"
				>
					Confirm Password
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className="grow"
						required
					/>
				</label>
				<button
					formAction={signup}
					className="btn btn-block sm:btn-sm md:btn-md lg:btn-lg"
				>
					Sign up
				</button>
				<p className="my-5">
					Already have an account?{" "}
					<Link href="/login" className="font-bold">
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
