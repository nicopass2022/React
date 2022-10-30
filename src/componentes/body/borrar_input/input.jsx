export const Input=()=>{
    const handleInput=(e)=>{
        evt.stopPropagation()
        console.log(e)
    }
    return(
        <>
        
        <div className="box p-5">
            <div className="border border-3 border-warning p-5">
                <input onClick={handleInput}
                    className="m-5"
                    type="text"
                    name="1"
                    id="1"
                />
            </div>
        </div>
        </>
    )
}