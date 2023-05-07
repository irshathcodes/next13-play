import Link from 'next/link';

export default function page() {
	return (
		<div>
			<h1 className="text-2xl text-center font-bold m-8">
				Welcome to our store. Visit our{' '}
				<Link className="underline text-blue-600" href="/products">
					Products
				</Link>
			</h1>
		</div>
	);
}
