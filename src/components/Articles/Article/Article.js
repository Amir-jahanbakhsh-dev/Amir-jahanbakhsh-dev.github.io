import './Article.css'
export default function Article(props){
    return(
        <div className="box_worker ">
                <img className='img-thumbnail' src={props.img} alt="" />
                <h3 className="name">{props.name}</h3>
                <p className="descTask">{props.task}</p>
            </div>
    )
}