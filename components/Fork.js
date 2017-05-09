import React from 'react';

const Fork = ({ stars }) => (
	<div>
		<div
			className="material-icons mdl-badge mdl-badge--overlap"
			data-badge={stars || 0}
		>
			<a href="https://github.com/ooade/NextSimpleStarter">
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
					Fork me
				</button>
			</a>
		</div>
		<style>{`
			.mdl-badge {
				position: absolute;
				top: 30px;
				right: 15px;
			}
		  `}</style>
	</div>
);

export default Fork;
