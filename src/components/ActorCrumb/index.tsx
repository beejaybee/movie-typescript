import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


// styles

import { Wrapper, Content } from './ActorCrumb.style';

//types
type Props = {
    actorName: string;
}

const ActorCrumb: React.FC<Props>= ({actorName}) => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Content>
                <Link to='/' className='no-underline'>
                    <span >Home</span>
                </Link>
                <span className='go_back' onClick={() => navigate(-1)}>Go back</span>
                <span>|</span>
                <span>{actorName}</span>
            </Content>
        </Wrapper>
    )
}


export default ActorCrumb;