import { Component } from "react"

class Form extends Component {

    state = {
        lastName: "",
        secondName: "",
        email: "",
    }



    handleSubmit = (evt) => {
        evt.preventDefault()

        const {lastName, secondName, email} = this.state

        const data = {
            lastName,
            secondName,
            email,
        }
        console.log(data);

        this.setState({
        lastName: "",
        secondName: "",
        email: "",
        })
    }



    
    handleChange = (evt) => {
        const {name, value} = evt.target
        this.setState({
            [name]: value
        })
    }


    render(){
        const {lastName, secondName, email} = this.state

        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={lastName} type="name" name="lastName" placeholder="enter name"/>
                <input onChange={this.handleChange} value={secondName} type="name" name="secondName" placeholder="enter second name"/>
                <input onChange={this.handleChange} value={email} type="email" name="email" placeholder="enter email"/>
                <button type="submit">відправити</button>
            </form>
        )
    }
}


export default Form