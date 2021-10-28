import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        {/** Logo here */}
        <h1 className="header__logo">Jorick.</h1>
        {/** Navigation here */}
        <div className="header__navigation">
          <a href="#" className="item">Projects</a>
          <a href="#" className="item">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
