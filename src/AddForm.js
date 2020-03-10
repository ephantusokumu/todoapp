import React from 'react'

class AddForm extends React.Component{
    state = {
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
        content:e.target.value
    })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
       // console.log(this.state)
       this.props.addForm(this.state)
       this.setState({
           content:''
       })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new to do</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />        
                </form>
            </div>

        )
    }
}
export default AddForm;