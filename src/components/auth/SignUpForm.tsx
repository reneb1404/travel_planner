import { signup } from "@/lib/auth/authActions";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";

export default function SignUpForm() {
	/*return (
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
					<Link href="login" className="font-bold">
						Login
					</Link>
				</p>
			</form>
		</div>
	);*/

	return (
		<div className="min-h-screen bg-base-200 flex items-center">
			<div className="card mx-auto w-full max-w-2xl shadow-xl bg-base-100 rounded-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold mb-2">
						Welcome fellow traveler
					</h2>
					<p className="text-sm text-base-content/70 mb-4">
						Sign up to plan your trips to perfection!
					</p>
					<form>
						<div className="form-control">
							<label className="label" htmlFor="email">
								<div className="input-group flex w-full">
									<span className="bg-base-300 border border-r-0 border-base-300 w-[210px] p-2 flex gap-2 items-center justify-left rounded-l-md">
										<Mail size={18} />
										<span className="label-text">Email</span>
									</span>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="example@example.com"
										className="input input-bordered w-full rounded-r-md"
									/>
								</div>
							</label>
						</div>
						<div className="form-control mt-4">
							<label className="label" htmlFor="password">
								<div className="input-group flex w-full">
									<span className="bg-base-300 border border-r-0 border-base-300 w-[210px] p-2 flex gap-2 rounded-l-md items-center justify-left ">
										<Lock size={18} />
										<span className="label-text">Password</span>
									</span>
									<input
										type="password"
										id="password"
										name="password"
										placeholder="••••••••"
										className="input input-bordered rounded-r-md w-full"
									/>
								</div>
							</label>
						</div>
						<div className="form-control mt-4">
							<label className="label" htmlFor="password">
								<div className="input-group flex w-full">
									<span className="bg-base-300 border border-r-0 border-base-300 w-[210px] px-2 flex gap-2 rounded-l-md items-center justify-left ">
										<Lock size={18} />
										<span className="label-text">Confirm Password</span>
									</span>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										placeholder="••••••••"
										className="input input-bordered rounded-r-md w-full"
									/>
								</div>
							</label>
						</div>
						<div className="form-control mt-6">
							<button
								formAction={signup}
								className="btn btn-primary rounded-md"
							>
								Sign up
							</button>
						</div>
					</form>
					<div className="divider my-4">OR</div>
					<button className="btn btn-outline btn-primary rounded-md">
						Continue with Google
					</button>
					<div className="text-center mt-4">
						<span className="text-sm">Already have an account? </span>
						<Link href="login" className="link link-primary text-sm">
							Log in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
