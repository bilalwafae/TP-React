import { useState } from 'react'

function FormulaireAjout({ onAjouter }) {
  const [titre, setTitre] = useState('')

  function gererSoumission(event) {
    event.preventDefault()
    const texteNettoye = titre.trim()
    if (!texteNettoye) return

    onAjouter(texteNettoye)
    setTitre('')
  }

  const estVide = titre.trim() === ''

  return (
    <form className="formulaire" onSubmit={gererSoumission}>
      <input
        type="text"
        value={titre}
        onChange={(event) => setTitre(event.target.value)}
        placeholder="Ex. : Réviser les hooks"
      />
      <button type="submit" className="principal" disabled={estVide}>
        Ajouter
      </button>
    </form>
  )
}

export default FormulaireAjout
