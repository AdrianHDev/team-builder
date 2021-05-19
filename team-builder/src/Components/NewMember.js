import react, { useState } from 'react';
const defaultMember = {memberName: '', eMail: '', role:'None'}
const NewMember = (props) => {
    const {addTeamMember} = props;
    const [curMember, setCurMember] = useState(defaultMember)
    const handleEv = (event) => {
        setCurMember({ ...curMember, [event.target.name]: event.target.value })
    }   
    const handleSel = (ev) => {
        setCurMember({ ...curMember, 'role': ev.target.value })
    }
    return (
        <div className='newMemberForm'>
            <form>
                <label>
                    Name:<br/>
                    <input
                    type='text'
                    name='memberName'
                    value={curMember.memberName}
                    onChange={handleEv}
                    />
                </label>
                <br/>
                <label>
                    EMail:<br/>
                    <input
                    type='text'
                    name='eMail'
                    value={curMember.eMail}
                    onChange={handleEv}
                    ></input>
                </label>
                <br/>
                <label>
                    Role:<br/>
                    <select value={curMember.role} onChange={handleSel}>
                    <option value=""></option>
                    <option value="Front-End Engineer">Front-End Engineer</option>                        
                    <option value="Back-End Engineer">Back-End Engineer</option>
                    <option value="Manager">Manager</option>
                    </select>
                </label>
                <button
                onClick={(e) => {
                    e.preventDefault()
                    console.log(curMember.role.length > 0, curMember.memberName > 0, curMember.eMail > 0)
                    if (curMember.role.length > 0 && curMember.memberName.length > 0 && curMember.eMail.length > 0) {
                        addTeamMember(curMember)
                        setCurMember(defaultMember)}
                }}>Submit Changes</button>
            </form>
        </div>
    )
}

export default NewMember;