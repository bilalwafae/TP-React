function Entete({ titre, sousTitre }) {
  return (
    <header className="entete">
      <h1>{titre}</h1>
      {sousTitre && <p>{sousTitre}</p>}
    </header>
  )
}

export default Entete
