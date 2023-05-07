export default function loading() {
	const items = new Array(8).fill(null);

	return (
		<div className="lg:max-w-5xl mx-auto my-8">
			<h1 className="text-center text-3xl font-bold mb-6">All Products</h1>
			<ul className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
				{items.map((_, i) => (
					<Skeleton key={i} />
				))}
			</ul>
		</div>
	);
}

export function Skeleton() {
	return (
		<div className="w-80 h-96 bg-gray-50 rounded-xl border-2 border-gray-300 flex flex-col shadow-md animate-pulse">
			<div className="bg-gray-200 flex-1" />
			<div className="px-4">
				<div className="w-4/5 bg-gray-200 h-8 rounded-full mt-2" />
				<div className="w-3/4 bg-gray-200 h-8 rounded-full my-2" />
			</div>
		</div>
	);
}
