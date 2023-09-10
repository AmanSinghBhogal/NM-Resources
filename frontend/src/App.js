import './App.css';

function App() {
  return (
    <div className="App">
      <img class="main-pic" src="school.png" alt=""/>
      <form action="home.html" class="login-box" autocomplete="on">
          <div class="title">
              <h1>Welcome</h1>
          </div>
          <div class="input-box">
              <input type="email" name="" required class="input" id="username"/>
              <label for="username">Email</label>
          </div>
          <div class="input-box">
              <input type="password" name="" required class="input pass-input" id="password"/>
              <label for="password">Password</label>
          </div>
          <button type="submit" onClick="myFunction()">Login</button>
      </form>

      <div id="profile">
          <a href="home.html"><img class="skip" src="skip.png" alt="skip-btn"/></a>
      </div>
    </div>
  );
}

export default App;
