import React from 'react';

import './TechStackItem.scss';



const TechStackItem: React.FunctionComponent<{}> = () => {
    return (
        <article className="Tech-Stack-item">
            <div className="img-wrapper">
                <img src="https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png" />
            </div>
            <section className="content">
                <h3>HTML</h3>
                <p>
                    HTML
                </p>
            </section>
        </article>
    );
};

export default TechStackItem;