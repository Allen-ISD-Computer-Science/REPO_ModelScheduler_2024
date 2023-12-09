import FireFileNames from "@/constants/FireFileNames";

const FireSVGRating = ({ percentage, className }) => {
  const percentageFloat = parseFloat(percentage);
  const emptyFireSVG = FireFileNames.EmptyFireSVG;
  const filledFireSVG = FireFileNames.FilledFireSVG;

  let fireSVGs = [];

  /**
   * 0% - 0 fires
   * 1-49% - 1 fire
   * 50-99% - 2 fires
   * +100% - 3 fires
   */
  if (percentageFloat === 0) {
    fireSVGs = [emptyFireSVG, emptyFireSVG, emptyFireSVG];
  } else if (percentageFloat > 0 && percentageFloat < .5) {
    fireSVGs = [filledFireSVG, emptyFireSVG, emptyFireSVG];
  } else if (percentageFloat >= .5 && percentageFloat < 1) {
    fireSVGs = [filledFireSVG, filledFireSVG, emptyFireSVG];
  } else if (percentageFloat >= 1) {
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