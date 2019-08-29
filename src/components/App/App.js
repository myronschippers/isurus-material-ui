import React, { Component } from 'react';

// COMPONENTS
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <main>

                    <div>
                        <img src="images/pokemon-go-walk.jpg" alt="Pokemon Go" />
                        <button>Gotta Catch Them All</button>
                    </div>

                    <div>
                        <div>
                            <img src="images/pikachu.png" alt="Pikachu" />
                            <h3>Pikachu</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at elit ex. Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh.</p>
                        </div>

                        <div>
                            <img src="images/cubone.png" alt="Cubone" />
                            <h3>Cubone</h3>
                            <p>Etiam at elit ex. Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis. Sed vel lectus efficitur.</p>
                        </div>

                        <div>
                            <img src="images/gible.png" alt="Gible" />
                            <h3>Gible</h3>
                            <p>Nullam pellentesque dui nec varius congue. Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis.</p>
                        </div>

                        <div>
                            <img src="images/eevee.png" alt="Eevee" />
                            <h3>Eevee</h3>
                            <p>Fusce efficitur est eu libero vulputate, vel sollicitudin lorem rhoncus. Sed vestibulum a elit non ultricies. Etiam feugiat libero a fringilla faucibus. Fusce eu blandit tortor. Nunc gravida interdum sem, quis accumsan quam tincidunt interdum. Donec sed justo sit amet eros fringilla imperdiet hendrerit sit amet massa. Nunc non dapibus nibh. Nulla posuere enim ac est sollicitudin lobortis.</p>
                        </div>
                    </div>

                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
