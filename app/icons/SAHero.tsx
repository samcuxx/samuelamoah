import React from "react";

interface SvgContainerProps {
  viewBox: string;
}

const SvgContainer: React.FC<SvgContainerProps> = ({ viewBox }) => {
  return (
    <div className="sahero lg:w-[450px] lg:h-[450px] w-full h-full pointer-events-none select-none">
        
    <svg className="lg:w-[450px] lgl:h-[450px] w-full h-full"  viewBox={viewBox}>
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="35%" className="text--line">
          Samuel
        </text>
        <text
          text-anchor="middle"
          x="50%"
          y="68%"
          className="text--line2"
        >
          Amoah
        </text>
      </symbol>

      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
        <use xlinkHref="#s-text" className="text-copy"></use>
      </g>
    </svg>
    </div>
  );
};

export default SvgContainer;
