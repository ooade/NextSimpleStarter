
const errorTextStyle = {
	color: 'red', 
	textAlign: 'center', 
	marginTop: '25px'
}

const emojiStyle = {
	fontSize: '50px',
	marginTop: '50px'
}

const ErrorComp = props => (

	<div className="mdl-card mdl-shadow--2dp error">
		<ul>
			<li style={errorTextStyle}>
				You need to add a task.
			</li>
		</ul>
	</div>

)

export default ErrorComp
