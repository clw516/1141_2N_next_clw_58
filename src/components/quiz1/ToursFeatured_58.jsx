import { useState, useEffect } from 'react';
// import { tours } from './data';
import Tour_58 from './Tour_58';
import Tour_58 from './Tour_58';

const api_url = 'http://localhost:5000/api/tour_10/featured';

const ToursFeatured_58 = () => {
  const [tours_58, setTours_58] = useState([]);
  const fetchTourFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('tours', data);
      setTours_58(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTourFromNodeServer();
  }, []);

  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
        <h4>tours from Node -- htchung, 12345678 </h4>
      </div>

      <div className='section-center featured-center'>
        {tours_58?.map((tour) => {
          return <Tour_58 {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default ToursFeatured_58;
