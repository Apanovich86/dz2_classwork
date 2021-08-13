import Geo from '../geo/Geo';
export default function Address({address: {street, city, suite, zipcode, geo}}) {
    return (
        <div>
            <p>Address:</p>
            <i>
                city: {city} - street: {street} - suite: {suite} - zipcode: {zipcode};
            </i>
            <Geo geo={geo}/>
        </div>
    );
}