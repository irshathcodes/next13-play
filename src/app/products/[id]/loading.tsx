export default function loading() {
	return <Loader />;
}

export function Loader() {
	return (
		<div className="w-8 h-8 border-2 border-transparent border-t-black rounded-full animate-spin mt-8 mx-auto" />
	);
}
