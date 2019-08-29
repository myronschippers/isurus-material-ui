import React, { Component } from 'react';

// COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PokemonCard from '../PokemonCard/PokemonCard';
import Button from '@material-ui/core/Button';

// MATERIAL
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <main>

                    <div>
                        <img src="images/pokemon-go-walk.jpg" alt="Pokemon Go" />
                        <Button variant="contained" color="primary">Gotta Catch Them All</Button>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <PokemonCard />
                        </Grid>

                        <Grid item xs={3}>
                            <img src="images/cubone.png" alt="Cubone" />
                            <h3>Cubone</h3>
                            <p>Etiam at elit ex. Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis. Sed vel lectus efficitur.</p>
                        </Grid>

                        <Grid item xs={3}>
                            <img src="images/gible.png" alt="Gible" />
                            <h3>Gible</h3>
                            <p>Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis.</p>
                        </Grid>

                        <Grid item xs={3}>
                            <img src="images/eevee.png" alt="Eevee" />
                            <h3>Eevee</h3>
                            <p>Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis.</p>
                        </Grid>
                    </Grid>

                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
