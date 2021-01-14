import React from 'react';
import nominations from '../assets/nominations.svg'
import Nomination from "./Nomination";

const Nominations = props => {
  return (
      <div className="nominations">
        <div className="nominations-illustration">
          <img src={nominations} alt="" />
        </div>
        <h2>Your Nominations</h2>
        <div>
          {
            props.nominations.length ?
                (
                    <div className="nominations-list">
                      <Nomination />
                      <Nomination />
                      <Nomination />
                      <Nomination />
                      <Nomination />
                    </div>
                )
                :
                (
                    <div className="nominations-list--empty">
                      <p>No nominations added</p>
                    </div>
                )
          }
        </div>

      </div>
  )
}

export default Nominations