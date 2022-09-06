import CardTable from "./CardTable";

const PokerRoom = () => {
    return (
        <>
            <nav className="nav-bar">
                <img id="logo-img" src="./pictures/logo.png"></img>
                <div id="user">
                    <p>Richard Calin</p>
                    <img id="user-img" src="./pictures/user.png"></img>
                </div>
            </nav>
            <h2 className="room-name">Room name</h2>
            <div className="container">
                
                <div className="card-block">
                    <CardTable/>
                </div>
                <div>
                    ceva
                </div>
            </div>
        </>
    );
}

export default PokerRoom;