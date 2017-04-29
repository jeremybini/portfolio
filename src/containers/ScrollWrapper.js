import { Component, PropTypes } from 'react';

class ScrollWrapper extends Component {
  static propTypes = {
    onWindowScroll: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.onWindowScroll = props.onWindowScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  render() {
    return this.props.children;
  }
}

export default ScrollWrapper;
