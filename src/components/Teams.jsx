// import files
import { ourTeam } from "../constant"

const Teams = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {ourTeam.map((team) =>(
            <div key={team.id}>
                <img src={`img/${team.img}`} alt="team pics" loading="lazy" />
                <div className="text-center font-semibold mt-4">
                    <p>{team.name}</p>
                    <p>{team.tag}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Teams