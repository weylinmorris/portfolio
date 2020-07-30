import React, { Component } from 'react';
import portfolioItems from '../utils/portfolio-items'
import PortfolioItem from './PortfolioItem';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                {
                    portfolioItems.map((item, index) => {
                        return (<PortfolioItem key={index} item={item} index={index} />)
                    })
                }
            </div>
        );
    }
}

export default Portfolio;
