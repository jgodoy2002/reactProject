import styles from './btn.module.css'
const Button = ({name,setCount,count}) => {

    return(
        <>
            <div 
            onClick={()=>setCount((count= count * 2))} 
            >
                <h1 className={styles.display}>
                    {name}
                </h1>
            </div>

        </>
    )

}

export default Button;