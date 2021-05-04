import React,{useState} from 'react'
import { data } from './data'
import Section from './Section'

const Portfolio = () => {

    const [activeBtn, setActiveBtn] = useState(0);
    return (
      <>
        <div className="section-container">
          <div className="title">
            <h2>Tejas Vaichole</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            <div className="btn-container">
                {
                    data.map((s) => {
                        if (s.id === activeBtn + 1)
                            return <button className="job-btn active-btn" onClick={() => setActiveBtn(s.id - 1)}>
                                        {s.title.toLowerCase()}
                                    </button>;
                        else
                            return (
                              <button className="job-btn" onClick={() => setActiveBtn(s.id - 1)}>
                                {s.title.toLowerCase()}
                              </button>
                            );
                    })
                }
            </div>
            <Section {...data[activeBtn]} />
          </div>
        </div>
      </>
    );
}

export default Portfolio
