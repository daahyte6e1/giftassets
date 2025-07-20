import React from "react";
import "./TeamSection.css";
import durovImage from "../../../public/Durov.png";

const teamData = [
    {
        name: "Durov",
        role: "CEO",
        photo: durovImage
    },
    {
        name: "Durov",
        role: "CEO",
        photo: durovImage
    },
    {
        name: "Durov",
        role: "CEO",
        photo: durovImage
    },
    {
        name: "Durov",
        role: "CEO",
        photo: durovImage
    }
]
const TeamSection = () => {
    return (
        <section className="team-section">
            <h2>Команда</h2>
            <div className="team-grid">
                {teamData.map((item, index) => (
                    <section className="member-card" key={item.name + index}>
                        <div className="card-block">
                            <img src={item.photo} alt={item.name} className="team-member-photo" />
                        </div>
                        <div className="team-member-info">
                            <h3 className="team-name">{item.name}</h3>
                            <p className="team-role">{item.role}</p>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;