import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownArrow = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown size={60} className="text-white" />
    </div>
  );
};

export default ScrollDownArrow;