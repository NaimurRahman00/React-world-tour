import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry, handleVisitedCountryFlag}) => {
    const {name, flags} = country;
    const [visited, setVisited] = useState(false)

    const handleVisited = () => setVisited(!visited)

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <button 
            style={{marginTop: '1rem', marginRight: '1rem'}} 
            onClick={()=> { handleVisitedCountry(country); handleVisitedCountryFlag(flags.png);}}
            >Visted country</button>
            <button style={{marginTop: '1rem'}} onClick={handleVisited}>Visited</button>
            <h2>{visited && 'I have visited this country!'}</h2>
        </div>
    );
};

export default Country;