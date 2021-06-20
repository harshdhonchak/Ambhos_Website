import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styles from './cards.module.css';
import * as Icon from 'react-bootstrap-icons';





function Cards(props) {
    return (
        <>

            <Card className={styles.main_card}

            >

                <Card.Body>
                    <h1 className={styles.card_content}>{props.classes}</h1>
                    <div className={styles.cart}>
                        <div>
                            <p className={styles.wishlist}>ADD TO WISHLIST
                            </p>
                        </div>


                        <Icon.BookmarkFill className={styles.bookmark} />

                    </div>



                </Card.Body>
            </Card>
        </>
    )
}
export default Cards;