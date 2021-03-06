import React from 'react';
//component 
import Thumb from '../Thumb';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// image
import NoImage from '../../images/no_image.jpg';

//styles
import {Wrapper, Content, Text} from './ActorInfo.styles';

//types
import {ActorState} from '../../hooks/useActorFetch';
type Props = {
    actor: ActorState
}

const ActorInfo: React.FC<Props>= ({actor}) => (
    <Wrapper>
        <Content>
            <Thumb
            image={
                actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            } 
            clickable={false}
            />
            <Text>
                <h1> {actor.name} </h1>
                <h3>Biography</h3>
                <p>{actor.biography}</p>

                <div className='popularity_rating'>
                    <div>
                        <h3>POPULARITY</h3>
                        <div className="popularity">{actor.popularity}</div>
                    </div>

                    <div className="birthday">
                        <h3>DATE OF BIRTH</h3>
                        <p>{actor.birthday}</p>
                    </div>
                </div>
            </Text>

        </Content>
    </Wrapper>

);

export default ActorInfo
