import Fork from '../components/Fork'
import Todo from '../components/Todo'

export default function Index({ stars }) {
	return (
		<main>
			<Fork stars={stars} />
			<Todo />
		</main>
	)
}

export async function getServerSideProps() {
	try {
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()

		return {
			props: {
				stars: json.stargazers_count,
			},
		}
	} catch (error) {
		return {
			props: {
				stars: 0,
			},
		}
	}
}
