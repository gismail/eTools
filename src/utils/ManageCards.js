import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/style/components/card.css"


function GetCategory({ name }) {
    return (
        <div className="custom-card">
            <div className="custom-card-Name"><Link to={"/" + (name.toLowerCase())}>{name}</Link></div>
        </div>
    )
}

export default function GetCategoryCards({ categories }) {
    return (
        <ol className="flex-container wrap">
            {
                categories.map((category) => {
                    return <li className="flex-item" key={category}><GetCategory name={category} /></li>
                })
            }
        </ol>
    )
}

class Category extends React.Component{

    render(){
        const parsedCategories = this.props.categories;
        var categories = parsedCategories.map((category,index)=>{return (
            <Link to={"/"+(category.toLowerCase())} key={index}>{category+" "}</Link>
        )});
        return (
            <div className="custom-card-Category">{categories}</div>
        )
    }
}

function CustomCard({ cardInfo }) {
    return (
        
        <div className="custom-card" key={cardInfo.id}>
            <Card>
                <Card.Header><Category categories={cardInfo.categories} /></Card.Header>
                <Card.Body><div className="custom-card-Name"><Link to={"/" + (cardInfo.name.toLowerCase()).split(" ").join("-")} >{cardInfo.name}</Link></div></Card.Body>
                <Card.Footer>            <div className="custom-card-Description">{cardInfo.description}</div></Card.Footer>
            </Card>
            
            

        </div>
    )

}

export function PageCategory({ targetCategory, cardsInfo }) {
    const cardsToDisplay = cardsInfo.filter(card => {
        return card["categories"].includes(targetCategory);
    })
    return (
        <div className='container'>
            {
                <ol className="flex-container wrap">
                    {cardsToDisplay.map((card) => {
                        return (<li className="flex-item" key={card.id}><CustomCard cardInfo={card}/></li>)
                    })}
                </ol>
            }
        </div>
    )
}