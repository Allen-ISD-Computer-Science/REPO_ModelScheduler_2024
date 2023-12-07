import FireFileNames from "@/constants/FireFileNames";

const FireSVGRating = ({ percentage, className }) => {
  const emptyFireSVG = FireFileNames.EmptyFireSVG;
  const filledFireSVG = FireFileNames.FilledFireSVG;

  let fireSVGs = [];

  /**
   * 0% - 0 fires
   * 1-49% - 1 fire
   * 50-99% - 2 fires
   * +100% - 3 fires
   */
  if (percentage === 0) {
    fireSVGs = [emptyFireSVG, emptyFireSVG, emptyFireSVG];
  } else if (percentage > 0 && percentage < .5) {
    fireSVGs = [filledFireSVG, emptyFireSVG, emptyFireSVG];
  } else if (percentage >= .5 && percentage < 1) {
    fireSVGs = [filledFireSVG, filledFireSVG, emptyFireSVG];
  } else if (percentage >= 1) {
    fireSVGs = [filledFireSVG, filledFireSVG, filledFireSVG];
  }

  return (
    <>
      <div className={className}>
        {fireSVGs.map((fireSVG) => (
          <img src={fireSVG} alt="Fire Rating" className="w-6 h-6" />
        ))}
      </div>
    </>
  );
};

export default FireSVGRating;