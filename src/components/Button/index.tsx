import React from 'react';
// styles
import { Wrapper } from './Button.styles';

//types
type Props = {
    text: string;
    callback: () => void;
}


export const Button: React.FC<Props> = ({text, callback}) => (
    <Wrapper type='button' onClick={callback} >
        {text}
    </Wrapper>
);


export default Button;
