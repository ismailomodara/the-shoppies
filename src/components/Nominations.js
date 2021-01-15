import React from 'react';
import nominations from '../assets/nominations.svg'
import Nomination from "./Nomination";

const Nominations = props => {
  return (
      <div className={`nominations ${props.openNomination ? 'open' : ''}`}>
        <div>
          <div className="nominations-illustration">
            <img src={nominations} alt="" />
          </div>
          <h2>Your Nominations</h2>
        </div>
        <div>
          {
            props.nominations.length ?
                (
                  <ul className="nominations-list">
                    {
                      props.nominations.map((movie, index) =>
                        <li key={index}>
                          <Nomination movie={movie} remove={props.removeNomination} />
                        </li>)
                    }
                  </ul>
                )
                :
                (
                  <div className="nominations-list--empty">
                    <p>No nominations added</p>
                  </div>
                )
          }
        </div>
        <div className="nominations-close" onClick={() => props.closeNomination()}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
  )
}

export default Nominations
