import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
          alt=""
        />
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img
          src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg "
          alt="background"
        />
        <div>ava + desc</div>
        <div>
          my posts <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
