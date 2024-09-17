import react from 'react'

const TeamMember = (props) => {
    const {member} = props;
    console.log(member); 
    return (
        <div className='member'>
            <h2>{member.memberName}</h2>
            <h3>{member.role}</h3>
            <h3>{member.eMail}</h3>
        </div>
    )
}
export default TeamMember;