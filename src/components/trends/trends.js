import React from "react";
import Tendencia from "../tendencia/tendencia";
import {tendencias} from "../newSource/newSource";

class Trends extends React.Component {
    constructor() {
        super();
        this.state = {
            tend: tendencias
        }
    }

    render() {

        // const {category, title, noTweets} = {
        //     category: "",
        //     title: "",
        //     noTweets: ""
        // };
        
        return (
            <div>
                {
                    this.state.tend.map( (tends, index) => {
                        return (
                            <Tendencia
                                key={index}
                                category={tends.category}
                                title={tends.title}
                                noTweets={tends.noTweets} />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Trends;