import './App.scss';

import { BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => (<div>首页</div>)
const About = () => (<div>关于我们</div>)
const App = () => (
  <Router>
    <div>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
    </div>
  </Router>
)

export default App;
