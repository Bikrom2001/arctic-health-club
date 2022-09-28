
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footers from './components/Footers/Footers';
import HealthClub from './components/HealthClub/HealthClub';

function App() {
  return (
    <div className="App">
      <HealthClub></HealthClub>
      <Blogs></Blogs>
      <Footers></Footers>
    </div>
  );
}

export default App;
