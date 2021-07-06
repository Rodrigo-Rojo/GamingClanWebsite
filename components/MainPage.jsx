import React from "react";
import TableSetUp from "./TableSetUp";

export default function MainPage({userInfo}) {
  userInfo.sort((a, b) => {
      return (
        parseFloat(b.currentRankPoint) - parseFloat(a.currentRankPoint)
      );
    });

  return (
    <section className="leaderboard-section main-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12">
            <div className="infinity-rage">
              <div>
                {/* <img className="logo" src="logo.png" alt="logo" />
                <h1 className="h1">Infinity Rage</h1> */}
                <img
                  className="pubg-img"
                  src="https://logodownload.org/wp-content/uploads/2019/12/pubg-logo-3.png"
                  alt="pubg-logo"
                />
                <h3>Leaderboard</h3>
              </div>
              <div className="TableDiv">
                <table className="table table-Secondary table-hover table-borderless table-sm">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInfo.map((data) => (
                        <TableSetUp
                          name={data.name}
                          key={data._id}
                          rating={data.currentRankPoint}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
