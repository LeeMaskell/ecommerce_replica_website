export const Item = ({ children, item }) => {
    return (
        <div key={item.id} className="item">
            <div className="model-card" key={item.name}>
                <div className="model-card__flex-container">
                    <h4 className="model-card__name">{item.name}</h4>
                    <h4 className="model-card__price">{item.price}</h4>
                </div>
                <img src={item.image} className="model-card__img" />
            </div>
            {children}
        </div>
    );
}

export default Item;