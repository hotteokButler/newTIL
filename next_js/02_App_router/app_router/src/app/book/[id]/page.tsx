export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return <div>{id}번 책</div>;
}
