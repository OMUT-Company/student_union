import '../card/style.scss'
import Button from '../../atoms/button'
const Card = ({header,description,date,url}) => {
    return (


        <div class="card ">
            <div className='overlay'></div>
            <div class="card_image"> <img src={url} /> </div>
            <div class="card_title title-white">
                <p>{ header}</p>
            </div>
            <div className='card_body'>
                {description}
            </div>
            <div className='card_footer'>
                <Button value={date}/>
                <Button value = 'join'/>
            </div>
        </div>
    )
}
export default Card