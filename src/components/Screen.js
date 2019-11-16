import React from 'react';
import '../styles/Screen.scss';

class Screen extends React.Component {
	render() {
		const { w, h } = this.props;
		const styles = {
			container: {
				width: w,
				height: h
			}
		};
		return (
			<div className="screen" style={styles.container}></div>
		);
	}
}

export default Screen;