import TrainerInfo from "./TrainerInfo";

export default function WorkshopCard({title, trainer, duration, level, online}) {
    return (
        
        <article>
            <h3>{title}</h3>
            <TrainerInfo name={trainer} />
            <p>Dauer: {duration} UE</p>
            <p>Nieveau: {level}</p>
            <p>{online ? "Online möglich" : "nur Präsenz"}</p>
        </article>
    );
}
