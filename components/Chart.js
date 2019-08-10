import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { createSelector } from 'reselect'
import * as d3 from 'd3'

const useStyles = makeStyles(theme => ({
	paper: {
		desktop: {
			padding: 0,
			margin: 0,
			marginLeft: 20,
			width: 300,
			height: 220
		},
		mobile: {
			padding: 0,
			margin: 10,
			width: 300,
			height: 220
		}
	}
}))

const purple = '#3f51b5'
const red = '#f50057'

const selectNumOfDoneTodos = createSelector(
	state => state.todos,
	todos => todos.filter(todo => todo.isDone).length
)

const updatedTodos = createSelector(
	state => state.todos,
	todos => todos
)

export const DoneTodosCounter = () => {
	const NumOfDoneTodos = useSelector(selectNumOfDoneTodos)
	return <div className="Chart__num">{NumOfDoneTodos}</div>
}

export const TotalTodosCounter = () => {
	const todos = useSelector(updatedTodos)
	return <div className="Chart__num">{todos.length}</div>
}

const Chart = ({ todos, matches }) => {
	const mounted = useRef()
	const classes = useStyles()

	const calcData = newTodos => {
		const totalDone = newTodos.filter(item => item.isDone).length
		const totalTodos = newTodos.length
		const totalNotDone = totalTodos - totalDone

		const percentDone = Math.floor((totalDone / totalTodos) * 100)
		const percentNotDone = Math.floor((totalNotDone / totalTodos) * 100)

		const data = [
			{ label: 'done', value: percentDone, color: red },
			{ label: 'todo', value: percentNotDone, color: purple }
		]
		return data
	}

	const getSentimentValues = data => {
		return data.map(function(node) {
			return node.value
		})
	}

	const getSentimentColor = data => {
		return data.map(function(node) {
			return node.color
		})
	}

	const drawRing = (chart, newTodos) => {
		const ringData = [
			{ label: 'done', value: 0, color: red },
			{ label: 'todo', value: 100, color: purple }
		]

		updateRing(ringData, chart, newTodos, false)
	}

	const updateRing = (ringData, chart, newTodos, isUpdate) => {
		const sentimentValues = getSentimentValues(ringData)
		const sentimentColors = getSentimentColor(ringData)

		let getFill = i => {
			return sentimentColors[i]
		}

		let newData
		let paths

		const height = 180,
			outerRadius = height / 2 - 30,
			cornerRadius = 5

		const responsive = matches ? -70 : 80
		const centerWidth = 240 / 2 - (outerRadius - responsive) / 2

		console.log('TCL: updateRing -> centerWidth', centerWidth)

		if (isUpdate) {
			newData = chart.selectAll('path')
			paths = newData
				.merge(newData)
				.attr('opacity', 1)
				.attr('transform', `translate (${centerWidth},-10)`)
				.attr('fill', function(d, i) {
					return getFill(i)
				})
		} else {
			newData = chart.selectAll('path').data(sentimentValues)
			paths = chart
				.append('g')
				.attr('transform', `translate (${centerWidth},75)`)
				.attr('class', 'path--round')
				.selectAll('path')
				.data(sentimentValues)
				.enter()
				.append('path')
				.attr('opacity', 1)
				.attr('fill', function(d, i) {
					return getFill(i)
				})
		}

		const pie = d3.pie()

		const arc = d3.arc().outerRadius(outerRadius)

		const timer = d3.timer(function(elapsed) {
			const duration = 2500
			const t = 1 - Math.abs((elapsed % duration) / duration - 0.5) * 2

			let sentimentValues = ringData.map(function(node) {
				return node.value
			})

			const arcs = pie.padAngle(t * 0.01)(sentimentValues)

			arc.innerRadius(outerRadius / (2 - t))

			paths.data(arcs).attr('d', arc.cornerRadius(cornerRadius))

			if (t > 0.8) timer.stop()
		}, 150)
	}

	const newTodos = useSelector(updatedTodos)

	// wait until the component has mounted before drawing the svg
	const onMount = () => {
		const chart = d3.select('#chart')

		if (!mounted.current) {
			mounted.current = true
			drawRing(chart, newTodos)
		}
	}

	useEffect(onMount, [])

	// listen to the redux store updates
	const onStoreDidUpdate = () => {
		if (mounted.current) {
			// do componentDidUpate
			const chart = d3.select('#chart')
			const ringData = calcData(newTodos)
			updateRing(ringData, chart, newTodos, true)
		}
	}

	onStoreDidUpdate()

	return (
		<div className={`Chart ${matches ? 'Chart__desktop' : 'Chart__mobile'}`}>
			<Paper className={matches ? classes.paper.desktop : classes.paper.mobile}>
				<div className="Chart__total">
					<span className="Chart__stat">Total</span>
					<TotalTodosCounter />
					<span className="Chart__stat">Done</span>
					<DoneTodosCounter />
				</div>
				<svg id="chart" width="100%" height="100%" />
			</Paper>
			<style>{`
						.Chart {

						}

						.Chart__desktop {
							width: 220px;
							height: 212px;
						}

						.Chart__mobile {
							width: 95vw;
							height: 212px;
						}

						.Chart__total {
							display: flex;
							flex-direction: row;
							justify-content: center;
						}

						.Chart__stat {
							margin: 20px 10px;
							color: #222;
							font-size: 18px;
						}

						.Chart__num {
							margin: 20px 0px;
							color:rgb(63, 81, 181);
							font-size: 18px;
							margin-right: 10px;
						}

						.paths--straight {
							fill: none;
							stroke: transparent;
						}
						
						.paths--round {
							fill: #ccc;
							opacity: 0.5;
						}
					`}</style>
		</div>
	)
}

export default Chart
