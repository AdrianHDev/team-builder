import {useState} from 'react'
import TeamMember from './Components/TeamMember'
import NewMember from './Components/NewMember'
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const addTeamMember = (newMember) => {
    setTeamMembers([...teamMembers, newMember])
  }
  return (
    <div className="App">
      {teamMembers.map((teamMember, ind) => {
        return <TeamMember key={ind} member={teamMember}></TeamMember>
      })}
      <NewMember addTeamMember={addTeamMember}></NewMember>
    </div>
  );
}

export default App;
