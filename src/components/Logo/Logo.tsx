import React from 'react';

import { Container } from "./Logo.style";

interface LogoProps {
    title?: string; 
    image?: string;
  }

const Logo: React.FC<LogoProps> = ({title, image}) => {
    return (
        <Container>
            {title && <span className="title">{title}</span>}
            {image && <img src={image} alt='Logo' />}
        </Container>
    )
}

export  default Logo;