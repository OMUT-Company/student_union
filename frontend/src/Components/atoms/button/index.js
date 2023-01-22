import styles from './style.scss'

function Button(props) {
    const {value}=props
    return(
        <div className={styles.btnItem}>
        <button className="btn btnStandard">{value} </button>
     </div>
    )
}
export default Button