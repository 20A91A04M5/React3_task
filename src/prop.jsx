import Button from "./Button"


function Prop(data){
    // console.log(data)
    const styles={
        color:"white",
        backgroundColor:"orange"
    }
    return (
        <>
        <Button value="Get Ready" style={styles}/>
            <h1>hello,{data.data[0].name}</h1>
        <table border={"2px"} cellPadding={"5px"}>
            <tr>

            {Object.keys(data.data[0]).map((key) => (
                        <>
                        <th key={key}>{key}</th>
                        </>
                    
                
               
            ))}
            </tr>
            {data.data.map((e)=>{
                // console.log(e)
                return (
                    <>
                    <tr>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.place}</td>
                    <td>{e.phone}</td>
                    </tr>
                    </>
                )
            })}
        </table>
        </>
    )
}

export default Prop