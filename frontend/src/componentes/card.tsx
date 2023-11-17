import "./card.css"

interface CardProps{
    price: number,
    imagem: string;
    title: string,
    description:string
}
export function Card({price,title,imagem,description}:CardProps){
 console.log({price,imagem,title});
 
    return(
        <div className="card">
        <img src={imagem} alt=  {title} />
        <h2>{title}</h2>
        <p><b>Valor:</b>{price}</p>
        <p><b>Descrição:</b>{description}</p>
        </div>
    )
}