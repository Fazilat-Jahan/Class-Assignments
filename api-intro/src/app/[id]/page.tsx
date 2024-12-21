
const dynamicBook = (props: any) => {
    console.log(props);

    return (
        <div>
            <h1 className="text-4xl">My Dynamic Book Data:
                <span className="text-5xl">{props.params.id}  
                </span></h1>
        </div>

    )
}
export default dynamicBook
