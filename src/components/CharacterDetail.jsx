import './CharacterDetail.css';

const CharacterDetail = ({ character}) => {

    return(
        <div className="character-detail">
            <p><strong>Full Name:</strong> {character.biography.fullName}</p>
            <p><strong>Aliases:</strong> {character.biography.aliases}</p>
            <p><strong>Birth Place:</strong> {character.biography.placeOfBirth}</p>
            <p><strong>Power Stats:</strong></p>
            <ul>
                {Object.entries(character.powerstats).map(([key, value]) => (
                <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div>
    );
};
export default CharacterDetail;