import React from 'react';
import { CardGrid } from '../styles';
import Lottie from 'lottie-react';
import cardAnimation from 'assets/animations/card.json';

const CardGridSkeleton = () => {
  return (
    <CardGrid>
      {Array(8)
        .fill(0)
        .map((item, index) => (
          <div style={{ width: 300, flexGrow: 1 }} key={index}>
            <Lottie animationData={cardAnimation} />
          </div>
        ))}
    </CardGrid>
  );
};

export default React.memo(CardGridSkeleton);
