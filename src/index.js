import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import App from './App';
// import Ref from './components/Ref';
// import SandBox from "./SandBox";
// import Crud from './Crud';
import Cards from './Cards';


const data = {

    "hooks": [
        {
            "id": 1,
            "title": "One way you may boost your 600 credit score",
            "body": "Because 1 in 5 Americans find errors on their credit report, checking yours once per month to look for errors may help you prevent hits to your score and fix costly mistakes.",
            "buttonText": "See my report",
            "imageType": "dial"
        },
        {
            "id": 2,
            "title": "Steps to prep for buying your dream home",
            "body": "Knowing your price range and how your 42% debt-to-income ratio may impact the rate lenders will give you could help save you money on your dream home.",
            "buttonText": "Learn more",
            "imageType": "house"
        },
        {
            "id": 3,
            "title": "Let’s get to saving on your mortgage payments",
            "body": "With interest rates on the rise, a first step may be to focus on boosting your credit score to help you qualify for better rates. We’ll also keep an eye out for other ways to save you money.",
            "buttonText": "Learn more",
            "imageType": "house"
        },
        {
            "id": 4,
            "title": "Let’s take control of your credit card debt ",
            "body": "Consolidating multiple balances into one monthly payment with a personal loan may simplify your $6,000 credit card debt and save you money if you qualify for a lower interest rate.",
            "buttonText": "Learn more",
            "imageType": "cash"
        },
        {
            "id": 5,
            "title": "Let’s get after saving on your car loan",
            "body": "A first step may be to focus on boosting your credit score while we keep an eye out for other ways to save you money.",
            "buttonText": "Learn more",
            "imageType": "auto"
        }
    ]
};


ReactDOM.render(
    <Cards list={data.hooks} />,
    document.getElementById('root')
);
