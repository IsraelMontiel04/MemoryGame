
interface Props{
    index:number;
    name:string;
    score:number
}

const Item:React.FC <Props> = ({index, name, score}) => {
  return (
    <div className="item">
      <span>{++index} </span>
      <span>{name} </span>
      <span>{score} Pts</span>
    </div>
  )
}

export default Item
