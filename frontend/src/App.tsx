import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import TeamCard from './components/teamCard';
import ncaaData from './ncaa.json';
import './App.css';

function App() {
  const teams = ncaaData.teams;
  const teamCards = teams.map((team) => {
    return (
      <TeamCard
        name={team.name}
        school={team.school}
        city={team.city}
        state={team.state}
      />
    );
  });
  return (
    <div className="App" style={{ backgroundColor: '#000'}}>
      <Header></Header>
      <div>
        <h2 style={{ marginTop: '50px', color: '#3137fd', fontSize: '22px', letterSpacing: '4px' }}><i>IS414 - By Adam Norton</i></h2>
      </div>
      <div style={{ padding: '50px 150px 150px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)', gap: '18px'}}>
        { teamCards }
      </div>
    </div>
  );
}

export default App;
