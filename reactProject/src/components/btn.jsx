
const Button = ({name,setCount,count}) => {

    return(
        <>
            <div onClick={()=>setCount((count= count * 2))}>
                <h1>{name}</h1>
            </div>
        </>
    )

}

export default Button;