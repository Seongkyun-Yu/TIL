import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <Carousel showThumbs={false} autoPlay width="50%">
        <div>
          <img alt="" src={require('./images/peng1.jpg')} />
          <p className="legend">이런 1</p>
        </div>
        <div>
          <img alt="" src={require('./images/peng2.jpg')} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img alt="" src={require('./images/peng3.jpg')} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img alt="" src={require('./images/peng4.jpg')} />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
