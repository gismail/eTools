import React ,{Fragment}from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router'

import "./static/style/index.css"
import GetCategoryCards ,{PageCategory}from './utils/ManageCards';
import ManageOperation from './utils/ManageOperations';



const cardsInfo = [
    {
      id: 1,
      categories: ["Computer"],
      name: "Calculate String Length",
      description: "Calculate the length of your text or number string"
    },
    {
      id: 2,
      categories: ["Computer"],
      name: "Delete All Whitespace Characters",
      description: "Remove blank Spaces from the given text or string."
    },
    {
      id: 3,
      categories: ["Math", "Computer"],
      name: "Number conversion",
      description: "Convert numbers on octal, decimal , hex and binary."
    }, {
      id: 4,
      categories: ["Math", "Physics"],
      name: "Equation 3rd",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 5,
      categories: ["Math", "Chemistry"],
      name: "Equation 4th",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 6,
      categories: ["Math"],
      name: "Hex",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 7,
      categories: ["Math"],
      name: "String",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 8,
      categories: ["Math", "Computer"],
      name: "Numbers",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 9,
      categories: ["Math", "Physics"],
      name: "Alphabet",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 10,
      categories: ["Math"],
      name: "ASCII",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 11,
      categories: ["Math"],
      name: "Parag",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 25,
      categories: ["Math"],
      name: "POUL",
      description: "solve equation of second degree with x unknown"
    }, {
      id: 12,
      categories: ["Math"],
      name: "SIX",
      description: "solve equation of second degree with x unknown"
    }
]
var categories = new Set();
var namesAndIds = new Set();
cardsInfo.forEach(cardInfo => {
    namesAndIds.add([cardInfo.name , cardInfo.id])
    cardInfo.categories.forEach((category)=>{
        categories.add(category);
    })
});

function Header() {
    return (
        <div className="fixed-header">
            <div className="container">
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </div>
        </div>
    );
}
function Home() {
    return (
        <div className='container'>
            {
                <GetCategoryCards categories={Array.from(categories)}/>
            }     
        </div>

    );
}
function Footer() {
    return (
        <div className="fixed-footer">
            <div className="container">Copyright &copy; {new Date().getFullYear()} eTools</div>
        </div>
    )
}


export default function Routers() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home>{document.title = "Home | Student Pack"}</Home>} />
                    {
                        Array.from(namesAndIds).map((cardNameId)=>{
                            return <Route path={"/" +(cardNameId[0].toLowerCase()).split(" ").join("-")} key={cardNameId[1]} element={<ManageOperation operationId = {cardNameId[1]}></ManageOperation>}></Route>
                        })}
                    {    Array.from(categories).map((category)=>{
                            return <Route path={"/" + category.toLowerCase()} key={category} element={<PageCategory targetCategory={category} cardsInfo={cardsInfo} />}/> 
                        })
                    }
                </Routes>
                <Footer />
            </BrowserRouter>
        </Fragment>
    )
}