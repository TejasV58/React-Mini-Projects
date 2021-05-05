import React from 'react'

const Section = ({id,title,content}) => {
  return (
    <div className="job-info">
      <h3>{title}</h3>
      <div className="rows-container">
        {typeof content === "object" &&
          content.map((c) => {
            if (c.id == null) return <Rows c={c} />;
            return <Rows {...c} />;
          })}
        {(typeof content !== "object") && <p className="para">{content}</p>}
      </div>
    </div>
  );
}

const Rows = (props) => {
  console.log(props);
  const { id, type, date, school, grade } = props;
  if (id == null) {
    return (
      <div className="rows skills">
        {props.c}
      </div>
    );
  }
    return (
      <div className="rows" key={id}>
        <h4>{type}</h4>
        <h6 className="date">{date}</h6>
        <p className="schl">{school}</p>
        <p className="grade">{grade}</p>
      </div>
    );
}

export default Section
