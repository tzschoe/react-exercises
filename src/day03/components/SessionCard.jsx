export default function SessionCard({ session }) {
  const { title, speaker, room, time, track, level, online, seats, highlight, duration } = session;

  const cardStyles = `session-card 
    ${highlight ? "highlight" : ""} 
    ${online ? "online" : ""} 
    ${seats === 0 ? "sold-out" : ""} 
    ${seats > 0 && seats <= 3 ? "few-seats" : ""}`

  return (
    <div className={cardStyles}>
      <div className="session-badges">
        {highlight && <span className="badge badge-highlight">★ Highlight</span>}
        {online && <span className="badge badge-online">Online-Session</span>}
      </div>

      <h3 className="session-title">{title}</h3>
      <p className="session-speaker">von <strong>{speaker}</strong></p>

      <div className="session-details">
        <span> {time} ({duration} Min.)</span>
        <span> {online ? "Online" : room}</span>
      </div>

      <div className="session-meta">
        <span className="meta-track"> {track}</span>
        <span className="meta-level"> {level}</span>
      </div>

      <div className="session-booking">
        {seats === 0 && <span className="status status-sold-out"> Ausgebucht</span>}
        {seats > 0 && seats <= 3 && <span className="status status-few"> Nur noch {seats} Plätze!</span>}
        {seats > 3 && <span className="status status-available"> {seats} Plätze frei</span>}
      </div>
    </div>
  );
}
