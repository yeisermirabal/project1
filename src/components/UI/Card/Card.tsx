import React from 'react';

/*Types */
import { CardProps } from '../../../global/utils/Types';

/*Styles */
import { CardContainer } from './Card.style';

const Card = ({ className, title, children }: CardProps ) => {
  return (
    <CardContainer className={`${className}`}>
      {title && <div className="card-header">{title}</div>}       
      <div className="card-body">{children}</div> 
    </CardContainer>    
  );
};

export default Card;
