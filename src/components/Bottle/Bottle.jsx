import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price}=bottle;
    return (
        <div className="bottle">
            <h2>bottle : {name} </h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;