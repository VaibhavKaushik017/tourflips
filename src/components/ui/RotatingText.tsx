function RotatingText({ text }: { text: string }) {
  return (
    <div className="relative w-52 h-52">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <path
            id="circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="7.5" letterSpacing="2">
          <textPath href="#circle" className="fill-gray-400 uppercase">
            {text}
          </textPath>
        </text>
      </svg>
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        svg {
          animation: rotate 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default RotatingText;
