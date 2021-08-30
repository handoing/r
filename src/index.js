// import {
//   render,
//   createElement,
//   Component
// } from './lib/v1';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   increase() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={e => this.increase()}>++++++</button>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("app"));

import {
  render,
  createElement,
  useState
} from './lib/v2';

function Counter() {
  const [ state, setState ] = useState(1);
  return (
    <h1 onClick={() => setState(c => c + 1)}>
      Count: {state}
    </h1>
  )
}
const element = <Counter />
const container = document.getElementById("app")
render(element, container)