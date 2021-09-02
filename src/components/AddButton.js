const AddButton = ({ children, onClickHandler }) => {
    return (
        <button className="btn" onClick={onClickHandler}>
            {children}
        </button>
    );
}
// children is built into react/redux and defines where in the component child HTML can be added

export default AddButton;