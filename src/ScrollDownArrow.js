import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollDownArrow = () => {
  return (
    <div className="animate-bounce">
      <ChevronDown size={60} className="text-white" />
    </div>
  );
};

export default ScrollDownArrow;