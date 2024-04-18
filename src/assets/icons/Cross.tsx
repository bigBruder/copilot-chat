const CrossIcon = () => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_87)">
        <path
          d="M18 6.00005L12 12.0001M12 12.0001L6.00005 18M12 12.0001L6 6M12 12.0001L18 18"
          stroke="#242625"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_87"
          x="1.25"
          y="5.25"
          width="21.5"
          height="21.5001"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_87"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_87"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CrossIcon;
