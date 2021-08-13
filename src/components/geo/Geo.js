export default function Geo({geo, geo: {lat, lng}}) {
    return (
        <div>
            <p>Geo:</p>
            lat: {lat} - lng: {lng}
        </div>
    )
}