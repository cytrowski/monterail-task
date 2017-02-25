import React from 'react';

export default class StatItem extends React.Component {
	render() {
		let className = '';
		let Tag = `div`;

		if (this.props.className) {
			className = this.props.className;
		}

		if (this.props.tag == 'li') {
			Tag = `li`;
		}

		return (
			<Tag className={"stat stat__item " + className}>
				{ this.props.textBefore && <span className="stat--text">{this.props.textBefore}</span>}

				{ this.props.counter && <span className="stat--counter">{this.props.counter}</span> }

				{ this.props.textAfter && <span className="stat--text">{this.props.textAfter}</span>}
			</Tag>
		);
	}
}
