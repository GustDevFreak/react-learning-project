const footballTeams = [
  { id: 1, name: 'Oriente Petrolero', myTeam: true },
  { id: 2, name: 'Blooming', myTeam: false },
  { id: 3, name: 'Bolivia', myTeam: false },
  { id: 4, name: 'The Strongest', myTeam: false },
];

export default function ListTeams() {

  // Aqui se utiliza map para renderizar el array como una lista, ya que map itera por cada elemento del array
  const listTeams = footballTeams.map(team =>
    <li
      key={team.id}> {/*Para cada elemento de una lista se debe colocar un identificador*/}
      {team.name}
    </li>
  );

  return (
    <ul>
      {listTeams}
    </ul>
  );
}