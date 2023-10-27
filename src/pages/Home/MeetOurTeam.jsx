import React from 'react'
import kristine_palmer from '../../assets/images/Kristine-Palmer.png'
import mark_aubri from '../../assets/images/Mark-Aubri.png'
import kimberly_hansen from '../../assets/images/Kimberly-Hansen.png'
import justin_willoman from '../../assets/images/Justin-Willoman.png'
import TeamMemberBox from '../../components/TeamMemberBox'

const MeetOurTeam = () => {

  const teamMember = [
    {image: kristine_palmer, alt: "A portrait photograph of a woman.", name: "Kristine Palmer", title: "Chief Operation Officer"},
    {image: mark_aubri, alt: "A portrait photograph of a man wearing a suit.", name: "Mark Aubri", title: "Senior Consultant"},
    {image: kimberly_hansen, alt: "A portrait photograph of a woman sitting by a window.", name: "Kimberly Hansen", title: "Senior Consultant"},
    {image: justin_willoman, alt: "A portrait photograph of a man.", name: "Justin Willoman", title: "Senior Tech Consultant"},
  ]

  return (
    <section className="meet-our-team">

      <div className="container">

        <div className="head">
          <p>Meet Our Team</p>
          <div>
            <h2>Experience Team Members</h2>
            <button className="btn-yellow">Browse Team<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>

        <div className="content-wrapper">
          {teamMember.map((teamMember, index) => (
              <TeamMemberBox key={index} image={teamMember.image} alt={teamMember.alt} name={teamMember.name} title={teamMember.title}  />
            ))}
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeam