const Button = ({ classNameProp, title, onClick }) => {
    return (
        <>
            <button onClick={() => onClick()} className={classNameProp}>
                {title}
            </button>
        </>
    );
};

export default Button;
