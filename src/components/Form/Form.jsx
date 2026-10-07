import { Component } from "react";


class Form extends Component{


    state = {
        lastName: "",
        secondName: "",
        email: "",
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        
        
    }   



    render(){
        const {lastName, secondName, email} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={lastName} type="text" name="name" placeholder="enter name"/>
                <input value={secondName} type="text" name="second" placeholder="enter second name"/>
                <input value={email} type="email" name="email" placeholder="enter email"/>
                <button type="submit">відправити</button>
            </form>
        )
    }
}


export default Form