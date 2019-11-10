import React, { Component } from 'react'


const Country = (props) => {

  function handleClick(ev) {
    ev.preventDefault();
    {props.fnc(props.country)};
  }

    return (
        <div>
          {props.country.name}
          <button type="button" onClick={handleClick}>Show</button>
        </div>
    );
}

export default Country;