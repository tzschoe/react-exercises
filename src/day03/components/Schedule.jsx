import { sessions } from '../data/sessions';
import SessionCard from './SessionCard';
import InfoBox from './InfoBox';
import '../style.css';

export default function Schedule() {
  return (
    <div className="schedule-container">
      <header className="schedule-header">
        <h1>Tech Conference 2026</h1>
        <p>Dein persönlicher Fahrplan durch die neuesten Tech-Trends</p>
      </header>

      <InfoBox title="Wichtige Teilnehmer-Information">
        <p>
          Änderungen im Ablauf werden kurzfristig über unsere App bekanntgegeben. 
          Raum-Zuweisungen können sich abhängig von den Registrierungen noch minimal ändern.
        </p>
      </InfoBox>

      <main className="schedule-grid">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </main>
    </div>
  );
}
