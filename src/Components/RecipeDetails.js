import React, {Component} from 'react';
import {tempdetails} from './tempdetails';

class RecipeDetails extends Component{

    constructor(props)
    {
      super(props);
      
      var result = tempdetails.filter(obj => {
        return obj.id === props.id
      })

      this.state=({
        recipe : result
    })
      
   
    }

    render()
    {
        
       const {setvisibility} = this.props;
const {name,image_url,ingredients,steps} = this.state.recipe[0];


        return(
            <React.Fragment>
              <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <br /> <br />
              <img src={image_url} alt={name} height="400px" width="400px" />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h1>Recipe details</h1>
                <h2>{name}</h2> < br/>
                
                <h2>  Ingredients</h2> 
               {ingredients} < br />  < br />
               <h2>  Steps</h2> 
               <ul>
                 {steps.map((step) => <li key={step.id}>
                   {step}
                 </li>)
                }
               </ul>
                
                < br />  
            <button type="button" className="btn btn-warning" onClick={() => setvisibility(0)} >Go Back</button>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default RecipeDetails;