import Fork from '../components/Fork'
import Todo from '../components/Todo'

export default function Index({ stars }) {
	return (
		<>
			<Fork stars={stars} />
			<Todo />
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch(
		'https://api.github.com/repos/ooade/NextSimpleStarter'
	)
	const json = await res.json()

	return {
		props: {
			stars: json.stargazers_count,
		},
	}
}
