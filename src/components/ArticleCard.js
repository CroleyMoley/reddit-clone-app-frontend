import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../App.css'


const css = {
  cardSize:{
    width: '50rem',
    height: '20rem',
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: 'black'
  },
  cardTitleStyle:{
    textAlign: 'left',
    color: "white",
    textDecoration: 'underline',
    width: '30rem'
    
  },
  cardTextStyle:{
    position: 'relative',
    padding: '10px',
    color: 'white',
    top: '30px',
    textAlign: 'left'
  },
  
  cardSubStyle:{
    position: "relative",
    textAlign: 'right',
    color: 'white',
    bottom: '19px',
  
    
  },

  
} 


const ArticleCard = ({ article }) => {

    return(
      
    <Card style={css.cardSize}>
      <Card.Body>
        <Card.Title style={css.cardTitleStyle}>{article.attributes.title}</Card.Title>
    <Card.Subtitle style={css.cardSubStyle}>{article.attributes.subreddit}</Card.Subtitle>
        <Card.Text style={css.cardTextStyle}>
         {article.attributes.content}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }


export default ArticleCard