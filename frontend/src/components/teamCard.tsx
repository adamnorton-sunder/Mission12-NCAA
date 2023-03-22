interface TeamCardProps {
    name: string;
    school: string;
    city: string;
    state: string;
  }
  
  function TeamCard(teamInfo: TeamCardProps) {
    return (
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '15px', border: '5px solid #212127'}}>
        <h2 style={{ margin: 0 }}>{teamInfo.school}</h2>
        <p style={{ margin: 0, fontSize: '12px' }}>Mascot: {teamInfo.name}</p>
        <p style={{ margin: 0, fontSize: '12px' }}>{teamInfo.city}, {teamInfo.state}</p>
      </div>
    );
  }
  
  export default TeamCard;