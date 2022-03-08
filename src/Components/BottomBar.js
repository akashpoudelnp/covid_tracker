import { Link } from "react-router-dom";

function BottomBar() {
    return (
        <div>
            <div className="flex bg-gray-50 fixed bottom-0 p-1 w-full justify-around">
                <div className="hover:backdrop-blur-xl hover:bg-green-300 p-3 rounded-xl">
                    <Link to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                        </svg>
                    </Link>
                </div>
                <div className="hover:backdrop-blur-xl hover:bg-green-300 p-3 rounded-xl">
                    <Link to={"/weather"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12"></path>
                        </svg>
                    </Link>
                </div>
                <div className="hover:backdrop-blur-xl hover:bg-green-300 p-3 rounded-xl">
                    <Link to={"/about"}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            <polyline points="11 12 12 12 12 16 13 16"></polyline>
                        </svg>

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BottomBar;