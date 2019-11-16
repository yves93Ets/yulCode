import React from 'react';
import '../styles/Screen.scss';
import Draggable from 'react-draggable';

class Screen extends React.Component {

	state = {
		activeDrags: 0,
		deltaPosition: {
			x: 0, y: 0
		},
		controlledPosition: {
			x: -400, y: 200
		}
	};

	onStart = () => {
		this.setState({ activeDrags: ++this.state.activeDrags });
	};

	onStop = () => {
		this.setState({ activeDrags: --this.state.activeDrags });
	};
	render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
		const dim = this.props.dim;
		const styles = {
			dimensions: {
				width: dim.w,
				height: dim.h
			}
		};
		return (
			<Draggable {...dragHandlers}>
				<div className="screen" style={styles.dimensions}></div>
			</Draggable>
		);
	}
}

export default Screen;