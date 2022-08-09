import './css/App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">

      {/* SideBar */}
        <Sidebar/>


      {/* Feed */}
      <Feed/>

      {/* Widges */}
      <Widgets/>
     
    </div>
  );
}

export default App;
