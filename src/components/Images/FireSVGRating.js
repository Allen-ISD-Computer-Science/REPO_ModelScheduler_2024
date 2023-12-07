const FireSVGRating = ({ percentage, className }) => {
  const emptyFireSVG = "fire.svg";
  const filledFireSVG = "filledFire.svg";

  let fireSVGs = [];

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
          <img src={fireSVG} className="h-6 w-6 mx-1" />
        ))}
      </div>
    </>
  );
};

export default FireSVGRating;