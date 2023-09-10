import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
        <div className='titles'>
            <h1>Welcome to NMIMS Resources</h1>
            <h3>Choose your semester 📑</h3>
        </div>

        <div className="container">
            <div className="card">
            <div className="box">
                <div class="content">
                <h2>01</h2>
                <h3>Semester 1</h3>
                <p>CSE101, ECE131, ECE132, MEC103, MTH165, PHY109, PHY119</p>
                <a href="semester1.html">Let's Learn</a>
                </div>
            </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="content">
                    <h2>02</h2>
                    <h3>Semester 2</h3>
                    <p>CSE202, CSE326, ECE213, MEC107, MTH166</p>
                    <a href="semester2.html">Let's Learn</a>
                </div>
                </div>
            </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>03</h2>
                <h3>Semester 3</h3>
                <p>CSE205, CSE211, CSE320, GEN213, INT213, INT306, MTH401, PEL135</p>
                <a href="semester3.html">Let's Learn</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>04</h2>
                <h3>Semester 4</h3>
                <p>PEV108, MTH302, INT404, CSE408, CSE325, CSE316, CSE310, CSE307, CSE306</p>
                <a href="semester4.html">Let's Learn</a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <div className="content">
                <h2>05</h2>
                <h3>Semester 5</h3>
                <p>CAP806, CSE322, CSE332, CSES26, INT219, PEA307, PEV110</p>
                <a href="semester5.html">Let's Learn</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="box">
              <div className  ="content">
                <h2>06</h2>
                <h3>Semester 6</h3>
                <p>CAP806, CSE322, CSE332, CSES26, INT219, PEA307, PEV110</p>
                <a href="semester6.html">Let's Learn</a>
              </div>
            </div>
          </div>

            
        </div>
    </div>
  )
}

export default Home;