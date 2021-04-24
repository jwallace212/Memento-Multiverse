import React from 'react';
import '../styles.css';
import { Link, useHistory } from 'react-router-dom';
import {
    Box,
    Flex,
    Button
} from 'rebass'

const Card = ({ image_link, product_name, fake_price, fake_quantity, fake_sold, id, description }) => {
    const history = useHistory()
    const redirect = () => {
        history.push(`/product/${id}`)
    }
    return (
        <Box className="biggerboot" onClick={redirect}>
            <Flex>
                <div>
                    <Box className="boot">
                        <Box className="title">
                            <p className="display">{product_name}</p>
                        </Box>
                        <Box className="smallerboot">
                            <Box className="imgs">
                                <img src={image_link} style={{ maxHeight: 160 }} alt="item"></img>
                            </Box>
                            <Box className="toes">
                                <h3><div>
                                    Price:{" "}{fake_price}
                                </div>
                                    <div>
                                        Stock:{" "}{fake_quantity}
                                    </div>
                                    <div>
                                        Sold:{" "}{fake_sold}
                                    </div>
                                </h3>
                            </Box>
                        </Box>
                    </Box>
                </div>

            </Flex>
        </Box>
    )
};

export default Card;


