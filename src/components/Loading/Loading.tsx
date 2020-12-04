import React from 'react';
import Lottie from 'lottie-react';
import load from 'assets/animations/loading.json';

const Loading = () => {
  return <Lottie animationData={load} />;
};

export default Loading;
