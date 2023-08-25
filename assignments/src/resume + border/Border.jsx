function Border({children}) {
    return (
        <div style={{border: "5px solid red"}}>
            {children}
        </div>
    );
}

export default Border;