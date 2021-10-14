import { useHistory } from "react-router";
import { useParams } from "react-router";

export const PrimaryData = ({allData}) =>{
    const params = useParams();
    const history = useHistory();
    const {userId, data, imgIndex, setImgIndex} = allData;
    console.log(userId, data)
    const leftArrowHandler = () => {

        if (imgIndex === 0){
            setImgIndex(data.images.length - 1 );
            return
        }
        setImgIndex((prev) => prev - 1);
    };
    const rightArrowHandler = () => {
        if (imgIndex === data.images.length - 1){
            setImgIndex(0);
            return
        }
        setImgIndex((prev) => prev + 1)
    };
    const editPostClickHandler = () => {
        history.push(`/spots/${params.spotId}/edit`)
    }
    const deleteClickHandler = () => {}
    return (
        <div className='leftSide'>
            <div className='spotHeader'>
                <div className='title'>
			        <h1>{data?.title} by {data?.author.username}</h1>
                </div>
                <div className='editDeleteLinks' style={data.ownerId !== userId.id? {'display': 'none'}:null}>
                    <h1 onClick={() => editPostClickHandler()}>Edit</h1>
                    <h1>Delete</h1>
                </div>
            </div>
            <div className={'scrollImages'}>
            <i className='fas fa-arrow-alt-circle-left arrow left' onClick={() => {leftArrowHandler()}}/>
			<img className='spotImage' src={data?.images[imgIndex].url} alt={data?.images[imgIndex].alt}></img>
            <i className='fas fa-arrow-alt-circle-right arrow right' onClick={() => {rightArrowHandler()}}/>
            </div>
		</div>
    )
}
