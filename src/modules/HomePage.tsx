import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/modules/HomePage.scss';
import image1 from '../assets/img/1.png'
import image2 from '../assets/img/2.png'
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <>
    <Header />
    <h1>We’re farmers, purveyors, and eaters of organically grown food.</h1>
    <Link to="/ShoppingCart" className='btn-shop'>Browse our shop</Link>

    <div className="flex-img">
        <img src={image1} alt="flex-image 2" />
        
        <div className="flex-img-text">
            <img src={image2} alt="flex-image 2" />
            <p><strong>Central California —</strong> The person who grew these was located in Central California and, er, hopefully very well-compensated.</p>
        </div>
    </div>

    <div className="text-flex">
        <strong className="title">WHAT WE BELIEVE</strong>
        <p className="text-description">We believe in produce. Tasty produce. Produce like: <br /><br /><br /> Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.  <br /><br /><br /> What are we forgetting? <br /><br /><br /> Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p>
    </div>
    </>
  );
}

export default HomePage;
