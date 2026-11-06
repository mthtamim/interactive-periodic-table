import React, { useState, useRef, useLayoutEffect } from 'react';
import { PeriodicElement } from '../types';

interface TooltipProps {
  data: {
    element: PeriodicElement;
    x: number;
    y: number;
  } | null;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Opacity state to handle fade-in/out effect smoothly
  const [visible, setVisible] = useState(false);

  // Style state to manage position
  const [style, setStyle] = useState<React.CSSProperties>({
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    // Use visibility to prevent a brief flash at initial position (0,0)
    visibility: 'hidden', 
  });

  useLayoutEffect(() => {
    if (data && tooltipRef.current) {
      const { x, y } = data;
      const tooltipWidth = tooltipRef.current.offsetWidth;
      const tooltipHeight = tooltipRef.current.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const offset = 15; // Space between cursor and tooltip

      let newX = x + offset;
      let newY = y + offset;

      // Adjust horizontally if it overflows right edge
      if (newX + tooltipWidth > viewportWidth) {
        newX = x - tooltipWidth - offset;
      }
      
      // Adjust vertically if it overflows bottom edge
      if (newY + tooltipHeight > viewportHeight) {
        newY = y - tooltipHeight - offset;
      }

      // Prevent tooltip from going off the top or left edges
      if (newX < 0) newX = offset;
      if (newY < 0) newY = offset;

      setStyle({
        ...style,
        top: `${newY}px`,
        left: `${newX}px`,
        visibility: 'visible',
      });
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [data]);

  if (!data) {
    return null;
  }

  const { element } = data;

  return (
    <div
      ref={tooltipRef}
      style={{
          ...style,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out',
      }}
      className="z-50 px-3 py-2 text-sm font-semibold text-white bg-gray-900/80 dark:bg-black/80 rounded-md shadow-lg backdrop-blur-sm"
      role="tooltip"
    >
      <div className="flex items-center gap-3">
        <span className="font-bold text-xl">{element.symbol}</span>
        <div className="text-left">
            <div className="whitespace-nowrap">{element.name}</div>
            <div className="text-xs font-normal text-gray-300">#{element.number}</div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
