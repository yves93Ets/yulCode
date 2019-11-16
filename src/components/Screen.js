import React from 'react';
import '../styles/Screen.scss';

class Screen extends React.Component {
	render() {
		const dim = this.props.dim;
		const styles = {
			dimensions: {
				width: dim.w,
				height: dim.h
			}
		};
		return (
			<canvas className="screen" style={styles.dimensions}></canvas>
		);
	}
}

export default Screen;