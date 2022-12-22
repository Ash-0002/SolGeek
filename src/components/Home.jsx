import React from 'react';
import vg from "../assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";


const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>SolGeek</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est excepturi tenetur culpa ad incidunt commodi maxime accusantium omnis, suscipit ullam delectus hic dolor facere? Maxime iste corporis aliquid aut odit error obcaecati voluptates, excepturi veritatis voluptate consequuntur nobis culpa? Expedita omnis modi laborum numquam earum eos veritatis temporibus porro praesentium a tempore est, quasi ea ratione labore distinctio cumque sed? Culpa, quam? Commodi atque aliquam magni quisquam fuga quis hic, voluptatibus modi praesentium unde alias quia aperiam qui excepturi eaque. Soluta aspernatur cumque autem iure sequi sapiente ipsum et cupiditate sunt, animi ad minus inventore velit, ullam veniam magnam.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{
                            animationDelay: ".3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: ".5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: ".7s"
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home