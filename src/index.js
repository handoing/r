import {
  render,
  createElement,
  Component
} from './lib/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={e => this.increase()}>++++++</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
