import music from "../data/database"

const Card = () => {
    return(
        <>
        {music.map(music =>
            <div className="card-principal" key={music.id}>
                <h2 className="title">{music.musica}</h2>
                <a className="link" target="_blank" rel="noreferrer" href={music.link}>Escute aqui 🎧</a>
                <p className="name">{music.trecho}</p>
                <img className="image" src={music.capa} alt={music.capa} />
            </div>
            )}
        </>
    )
}

export default Card 