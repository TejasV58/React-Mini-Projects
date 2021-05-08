import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail" >
      <img src={image} className="img" alt="" />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className="btn-primary" to={`/cocktails/${id}`}>Details</Link>
      </div>
    </article>
  );
};

export default Cocktail
