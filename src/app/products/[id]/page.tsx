'use client';
import { useParams } from 'next/navigation';
import { Product } from '../page';
import { Loader } from './loading';

export default async function ProductDetails() {
	const { id } = useParams();
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	const product = (await res.json()) as Product;

	return (
		<div className="mt-8 mx-4 md:flex gap-8 md:max-w-3xl md:mx-auto">
			<div className="w-fit mx-auto flex-shrink-0">
				<img
					className="w-[400px] h-[400px] object-contain object-center border-2 border-gray-300 rounded-xl px-4 py-2 mb-4"
					src={product.image}
					alt={product.title}
				/>
			</div>
			<div>
				<h1 className="text-3xl font-bold">{product.title}</h1>
				<p className="mt-2 font-semibold text-2xl text-gray-800">
					<span>$</span> {product.price}
				</p>
				<p className="text-gray-700 mt-4 w-full">{product.description}</p>

				<button className="bg-black px-8 py-2 w-full md:w-fit text-white font-semibold rounded-full my-8">
					Add to bag
				</button>
			</div>
		</div>
	);
}
