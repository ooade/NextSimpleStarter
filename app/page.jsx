import Fork from '../components/Fork'
import Todo from '../components/Todo'

export default async function Index() {
const stars = await getStars();

	return (
		<main>
			<Fork stars={stars} />
			<Todo />
		</main>
	)
}



export async function getStars() {
	try {
		const res = await fetch(
			'https://api.github.com/repos/ooade/NextSimpleStarter'
		)
		const json = await res.json()

		return  json.stargazers_count;
			
	} catch (error) {
		return 0
	}
}
