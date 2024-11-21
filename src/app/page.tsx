export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>
			<form action="/api/auth/signout" method="post">
				<button className="btn btn-primary" type="submit">
					Logout
				</button>
			</form>
		</div>
	);
}
