const RemoveButton = ({ children, onClickHandler }) => {
    console.log('remove clicked');
    return (
        <button className="btn" onClick={onClickHandler}>
            {children}
        </button>
    );
}


export default RemoveButton;