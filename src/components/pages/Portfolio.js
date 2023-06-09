import React from 'react';
import '../../styles/Portfolio.css';
import Header from './Header';
import Footer from './Footer';

function Portfolio() {
    return (
        <div className="projects">
            <Header />
            <section className="travlr">  
                <h2><a href="https://dann-lam.github.io/04-08-2023-travlr/">Travlr!</a></h2>
                <img src="https://i.imgur.com/LOjjUer.gif" alt="Travlr!" />
                <p>
                A travel planner application that calculates a user's trip budget 
                by evaluating the distance, gas mileage, gas prices, and any misc. 
                expenses the user may have while traveling.
                </p>
                <h3>Link to the GitHub repository:
                    <a href="https://github.com/dann-lam/04-08-2023-travlr">Travlr! Repository</a>
                </h3>
            </section>

            <section className="foodie-finder">
                <h2><a href="https://foodie-finder.herokuapp.com/">Foodie Finder</a></h2>
                <img src="https://i.imgur.com/I7zCNsK.gif" alt="Foodie Finder" />
                <p>
                    A simple search engine for those HANGRY moments! User can search for a restaurant based on the city they are in and the type of food they are craving.
                </p>
                <h3>Link to the GitHub repository:
                    <a href="https://github.com/RogelioSan09/foodie_findings/tree/app">Foodie Finder Repository</a>
                </h3>
            </section>

            {/* <section className="project3">
                <h2><a href="">Title</a></h2>
                <p>
                    Description
                </p>
                <h3>Link to the GitHub repository:
                    <a href="">Repository</a>
                </h3>
            </section>

            <section className="project4">
                <h2><a href="">Title</a></h2>
                <p>
                    Description
                </p>
                <h3>Link to the GitHub repository:
                    <a href="">Repository</a>
                </h3>
            </section>

            <section className="project5">
                <h2><a href="">Title</a></h2>
                <p>
                    Description
                </p>
                <h3>Link to the GitHub repository:
                    <a href="">Repository</a>
                </h3>
            </section>

            <section className="project6">
                <h2><a href="">Title</a></h2>
                <p>
                    Description
                </p>
                <h3>Link to the GitHub repository:
                    <a href="">Repository</a>
                </h3>
            </section> */}
            <Footer />
        </div>
    );
}

export default Portfolio;