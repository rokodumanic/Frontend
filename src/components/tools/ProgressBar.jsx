function ProgressBar({ percentage, barColor = "#33AFFD" }) {

  return (
    <div className="loader-container">
      <div
        className="loader-fill"
        style={{ width: `${percentage*100}%`, backgroundColor: barColor }}
      ></div>
    </div>
  );
}

export default ProgressBar;