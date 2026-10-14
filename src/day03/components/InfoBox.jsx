
export default function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <h3 className="info-box-title">{title}</h3>
      <div className="info-box-content">
        {children}
      </div>
    </div>
  );
}
