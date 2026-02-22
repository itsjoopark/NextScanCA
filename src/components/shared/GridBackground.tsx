export default function GridBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Horizontal lines — full width, covering viewport */}
      <img
        alt=""
        src="/3b147b1b7ce153d9acdef7964a57b006e04ae271.svg"
        className="absolute inset-0 h-full w-full"
      />

      {/* Vertical lines — centered, rotated 90deg, offset down */}
      <div className="absolute left-1/2 top-[80px] -translate-x-1/2 h-[1381px] w-[1277px]">
        <img
          alt=""
          src="/33e073ae156c34467e120eaf74ed0b3938925261.svg"
          className="absolute inset-0 -rotate-90 h-full w-full origin-center"
        />
      </div>

      {/* Diagonal hatching — left edge */}
      <img
        alt=""
        src="/3c0bf5455c79c19fb97d998b978dbd24da383075.svg"
        className="absolute left-0 top-[344px] h-[385px] w-[119px]"
      />

      {/* Diagonal hatching — right edge */}
      <img
        alt=""
        src="/3c0bf5455c79c19fb97d998b978dbd24da383075.svg"
        className="absolute right-0 top-[344px] h-[385px] w-[119px]"
      />

      {/* Soft blob — centered behind content */}
      <img
        alt=""
        src="/3804bd1780286e3404684e3bd5a458819a2f29cc.svg"
        className="absolute left-1/2 top-[333px] -translate-x-1/2 h-[763px] w-[828px]"
      />
    </div>
  );
}
