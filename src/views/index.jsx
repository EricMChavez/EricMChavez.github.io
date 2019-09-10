import React from 'react'
import './../css/home.css'
const Home = () => {
        return (
            <main>
                <div id="greeting">
                    <div id="title">
                        <h1>Eric Chavez</h1>
                        <h2>Full-Stack Developer</h2>
                    </div>
                    <div className="card" id="face"></div>
                    <div className="card" id="stats"></div>
                </div>
                <div id="cards">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </main>
        )
    
}
export default Home