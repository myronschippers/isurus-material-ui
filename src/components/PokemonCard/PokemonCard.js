import React, { Component } from 'react';

// MATERIAL
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './PokemonCard.css';

class PokemonCard extends Component {
    render() {
        return (
            <Card>
                <CardMedia
                    img="/static/images/pikachu.png"
                    title="Pikachu"
                    className="pokeImg"
                />
                <CardContent>
                    <h3>Pikachu</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at elit ex. Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh.</p>
                </CardContent>
            </Card>
        );
    }
}

export default PokemonCard;
