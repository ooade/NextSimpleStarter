import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Badge from '@material-ui/core/Badge';
import Media from 'react-media'

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
		<Media query="(min-width: 1025px)">
			{matches => (
				<div>
					<div className={`Fork  ${matches ? 'Fork__desktop' : 'Fork__mobile'}`}>
						<a className="Fork__badge" href="https://github.com/ooade/NextSimpleStarter" target="_blank" rel="noopener noreferrer">
							Fork me
							<Badge className={classes.margin} badgeContent={stars || 0} max={9999} color="primary">
							<StarIcon className={classes.icon} color="primary" />
						</Badge>
						</a>
					</div>
					<style>{`
						
						.Fork {
							margin-top: 20px;
							margin-right: 10px;
						}

						.Fork__desktop {
							position: absolute;
							top: 27px;
							right: 15px;
						}

						.Fork__mobile {
							position: relative;
						}

						.Fork__badge {
							border: 2px solid rgb(63, 81, 181);
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
			)}
		</Media>
	)
}

export default Fork
