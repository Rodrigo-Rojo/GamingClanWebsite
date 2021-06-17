import React, {useState} from "react";
import axios from "axios";
import TableSetUp from "./components/TableSetUp";
import Footer from "./components/Footer";

export default function App() {
    const [userInfo, setUserData] = useState([]);
    function api() {
        axios
            .get("https://shielded-reef-98275.herokuapp.com/find")
            .then((res) => {
                let {data} = res;
                data.sort((a, b) => {
                    return parseFloat(b.currentRankPoint) - parseFloat(a.currentRankPoint)
                });
                console.log(data);
                setUserData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div onLoad={api}>

            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12">
                    <div className="infinity-rage">
                    <div ><img className="logo" src="logo.png" alt="logo"/>
                            <h1 className="h1">Infinity Rage
                            </h1>
                            <img
                                className="pubg-img"
                                src="https://logodownload.org/wp-content/uploads/2019/12/pubg-logo-3.png"
                                alt="pubg-logo"/>
                            <h3>Leaderboard</h3>
                        </div>
                        <div className="TableDiv">
                            <table className="table table-Secondary table-hover table-borderless table-sm">

                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">KDA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userInfo
                                            ?.map((data) => {
                                                return (
                                                    <TableSetUp
                                                        name={data
                                                            ?.name}
                                                        key={data
                                                            ?.id}
                                                        rating={data
                                                            ?.currentRankPoint
}
                                                        kda={data
                                                            ?.kda}/>
                                                );
                                            })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}
