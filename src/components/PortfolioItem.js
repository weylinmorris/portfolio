import React, { Component } from 'react';

class PortfolioItem extends Component {
    render() {
        return (
            <div className="portfolioItemContainer" style={{animationDuration: `${(this.props.index) * 150 + 450}ms`}}>
                <div className="portfolioItem">
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.description}</p>
                    <img src={this.props.item.imgUrl}></img>
                    <div className="img-filter"></div>
                    <a href={this.props.item.liveLink} target="_blank"></a>
                </div>
                <div className="portfolioLinks">
                    {
                        this.props.item.liveLink && <a href={this.props.item.liveLink} target="_blank">See Live</a>
                    }
                    {
                        this.props.item.githubLink && <a href={this.props.item.liveLink} target="_blank">View Code</a>
                    }
                </div>
            </div>
        );
    }
}

export default PortfolioItem;