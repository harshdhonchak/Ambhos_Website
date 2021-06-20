import React from 'react'

import styles from './Dance.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from './cards/cards';
import { Container, Row, Col } from 'react-bootstrap';
import Cards1 from './cards/cards1'
import { style } from '@material-ui/system';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 2000, min: 1000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 1000, min: 824 },
        items: 1
    }

};



function Dance() {
    return (
        <div >

            <Container className={styles.new}>
                <Row>
                    <Col md={12} className={styles.content}>
                        <h4 className={styles.head}>Dance</h4>
                        <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ultricies elit non congue. Fusce sit amet dapibus orci, et blan dolor. Nunc posuere diam dolor, a blandit od dictum sit amet. Etiam vitae euismod ante. Integer dict.<button className={styles.btn}>EXPLORE</button></p
                        >
                    </Col>


                    <Col md={12}>
                        <Carousel className={styles.slider} responsive={responsive}>
                            <Cards classes="Dance" />
                            <Cards1 classes="Gym" />
                            <Cards classes="Dance" />
                            <Cards1 classes="Gym" />
                            <Cards classes="Dance" />
                            <Cards1 classes="Gym" />
                            <Cards classes="Dance" />
                            <Cards1 classes="Gym" />

                        </Carousel>

                    </Col>

                </Row>

            </Container>
        </div>




    );
}


export default Dance

