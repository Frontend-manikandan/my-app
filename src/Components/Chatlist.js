
import React from 'react'
import { Card } from 'react-bootstrap';
import card from '../Images/Food card.jpg';
import Card2 from '../Images/Food card 3.jpg';
import Card3 from '../Images/Food card 6.jpg';
import Card4 from '../Images/Food card 4.jpg';

const Chatlist = () => {
  return (
    <div className='chats'>
       <h2>CHATLIST Demo</h2>
       <div className='row'>
        <Card style={{width:' 20rem'}}>
            <Card.Img variant="top" src={card} alt=""/>
            <Card.Body>
                <Card.Title>Special Samosa</Card.Title>
                <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit placeat, dolor iste sit nihil magni, expedita incidunt ducimus voluptatem maiores rerum minima temporibus mollitia eveniet. Non dolorum tempora labore soluta!</p>
                </Card.Text>
                <div id='button'>
                <button variant="primary">Order Now.....</button>
                </div>
            </Card.Body>
        </Card>
        <Card style={{width:' 20rem'}}>
            <Card.Img variant="top" src={Card2}alt=""/>
            <Card.Body>
                <Card.Title>Samosa</Card.Title>
                <Card.Text>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore dignissimos dicta tenetur ab excepturi, velit quia unde voluptate laudantium sunt magni quam vitae accusamus aspernatur voluptatem molestias magnam, quibusdam sed.</p>
                </Card.Text>
                <button variant="primary">Order Now.....</button>
            </Card.Body>
        </Card>
        <Card style={{width:' 20rem'}}>
            <Card.Img variant="top" src={Card3} alt=""/>
            <Card.Body>
                <Card.Title>Curd Vadapav</Card.Title>
                <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsa laudantium, accusamus debitis et pariatur nobis eveniet reiciendis doloribus aperiam! Numquam quidem nostrum architecto alias, atque odio dignissimos tenetur ullam!</p>
                </Card.Text>
                <button variant="primary">Order Now.....</button>
            </Card.Body>
        </Card>
        <Card style={{width:' 20rem'}}>
            <Card.Img variant="top" src={Card4} alt=""/>
            <Card.Body>
                <Card.Title>Masala poori</Card.Title>
                <Card.Text>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, iste voluptatibus? Odit aut omnis voluptates ut deleniti laudantium, ea quos. Aspernatur, explicabo repellendus unde corporis ea modi doloremque enim est?</p>
                </Card.Text>
                <button variant="primary">Order Now.....</button>
            </Card.Body>
        </Card>
       </div>
    </div>
  )
}

export default Chatlist

       