import WorkshopCard from "./WorkshopCard.jsx";

export default function WorkshopList() {
    return (
        <section>

            <WorkshopCard title="JavaScript Basics" trainer="Anna Weber" duration={8} level="Beginner" online={true} />
            
            <WorkshopCard title="React Advanced" trainer="Christian Müller" duration={16} level="Advanced" online={true} />
            
            <WorkshopCard title="Agile Projektleitung & Scrum" trainer="Sarah König" duration={12} level="Intermediate" featured={false} />

        </section>
    );
}