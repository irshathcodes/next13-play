import Link from 'next/link';
export type Product = {
	id: string;
	title: string;
	price: string;
	description: string;
	image: string;
};

export default async function Home() {
	const res = await fetch('https://fakestoreapi.com/products');
	const products = (await res.json()) as Product[];

	return (
		<div className="lg:max-w-5xl mx-auto my-8">
			<h1 className="text-center text-3xl font-bold mb-6">All Products</h1>
			<ul className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
				{products?.map((product) => {
					return (
						<li
							className="shadow-sm border-2 border-gray-300 rounded-xl w-80"
							key={product.id}
						>
							<Link href={`/products/${product.id}`}>
								<div className="hover:scale-105 transition-transform duration-500 overflow-hidden">
									<img
										className="w-full h-80 object-contain object-center pt-4 px-4 rounded-t-xl"
										src={product.image}
										alt={product.title}
									/>
								</div>
							</Link>
							<div className="px-4 mt-2 mb-4 flex gap-2 items-center justify-between">
								<h1
									title={product.title}
									className="font-semibold text-xl flex-1 max-w-fit line-clamp-2"
								>
									{product.title}
								</h1>
								<div className="flex items-center gap-1">
									<span className="font-bold">$</span>
									<h3 className="font-bold text-xl">{product.price}</h3>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
