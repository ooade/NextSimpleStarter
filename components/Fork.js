import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
	button: {
	  margin: theme.spacing(1),
	},
	input: {
	  display: 'none',
	},
	icon: {
	  margin: theme.spacing(1),
	  fontSize: 24,
	},
  }));
 


const Fork = ({ stars }) => {
	const classes = useStyles();
	return (
		<div>
			<div className="badge">
			
				<a className="badge__fork" href="https://github.com/ooade/NextSimpleStarter" target="_blank" rel="noopener noreferrer">
					Fork me
					<Badge className={classes.margin} badgeContent={stars || 0} max={9999} color="primary">
					<StarIcon className={classes.icon} color="primary" />
        		</Badge>
				</a>
			</div>
			<style>{`
				.badge {
					position: absolute;
					top: 27px;
					right: 15px;
					margin-right: 10px;
				}

				.badge__fork {
					border: 1px solid rgb(63, 81, 181);
					background: transparent;
					border-radius: 5px;
					font-family: sans-serif;
					text-decoration: none;
					font-size: 14px;
					font-weight: bold;
					padding: 8px;
					color: rgb(63, 81, 181);
				}
			`}</style>
		</div>
	)
}

export default Fork
