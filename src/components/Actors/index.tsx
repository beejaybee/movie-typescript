import React from 'react';
import { Link } from 'react-router-dom'; 
//styles
import { Wrapper, Image } from './Actors.styles';

//types
type Props = {
    actorName: string;
    character: string;
    imageUrl: string;
    clickable: boolean;
    actorId: number;
}


const Actors: React.FC<Props> = ({actorName, character, imageUrl, clickable, actorId}) => (
    <Wrapper>
        {clickable ? (
            <Link  className='no_underline' to={`/actor/${actorId}`}>
            <Image src={imageUrl} alt='name of actor' />
            <h3>{actorName}</h3>
            <p>{character}</p>
        </Link>
        ) :
            <>
                <Image src={imageUrl} alt='name of actor' />
                <h3>{actorName}</h3>
                <p>{character}</p>
            </>
            
        }
            
    </Wrapper>
);

export default Actors;