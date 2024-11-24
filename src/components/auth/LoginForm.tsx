"use client";
import { login } from "@/lib/auth/authActions";
import { CheckCircle, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginForm() {
	const searchParams = useSearchParams();
	const success = searchParams.get("success");
	const [showMessage, setShowMessage] = useState<boolean>(false);

	useEffect(() => {
		if (success === "1") {
			setShowMessage(true);
		}
	}, [success]);

	return (
		<div className="min-h-screen bg-base-200 flex items-center gap-24">
			<div className="card mx-auto w-full max-w-2xl shadow-xl bg-base-100 rounded-xl">
				{showMessage && (
					<div className="alert alert-success shadow-lg mb-4">
						<div className="flex justify-center gap-5">
							<CheckCircle className="stroke-current flex-shrink-0 h-6 w-6" />
							<span>Sign up successful! Please log in.</span>
						</div>
					</div>
				)}
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold mb-2">Welcome Back!</h2>
					<p className="text-sm text-base-content/70 mb-4">
						Log in to access your travel plans
					</p>
					<form>
						<div className="form-control">
							<label className="label" htmlFor="email">
								<div className="input-group flex w-full">
									<span className="bg-base-300 border border-r-0 border-base-300 px-5 flex gap-2 items-center rounded-l-md">
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
									<span className="bg-base-300 border border-r-0 border-base-300 p-2 flex gap-2 rounded-l-md items-center">
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
						<div className="form-control mt-2">
							<label className="label cursor-pointer justify-start">
								<input
									type="checkbox"
									className="checkbox checkbox-primary checkbox-sm"
								/>
								<span className="label-text ml-2">Remember me</span>
							</label>
						</div>
						<div className="form-control mt-6">
							<button formAction={login} className="btn btn-primary rounded-md">
								Log In
							</button>
						</div>
					</form>
					<div className="text-center mt-4">
						<Link href="/forgot-password" className="link link-primary text-sm">
							Forgot Password?
						</Link>
					</div>
					<div className="divider my-4">OR</div>
					<button className="btn btn-outline btn-primary rounded-md">
						Continue with Google
					</button>
					<div className="text-center mt-4">
						<span className="text-sm">Don&apos;t have an account? </span>
						<Link href="signup" className="link link-primary text-sm">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
