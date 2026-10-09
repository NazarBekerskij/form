import { Component } from "react"

class Form extends Component {

    state = {
        lastName: "",
        secondName: "",
        email: "",
        courses: "",
        agre: ""
    }



    handleSubmit = (evt) => {
        evt.preventDefault()

        const {lastName, secondName, email, courses} = this.state

        const data = {
            lastName,
            secondName,
            email,
            courses,
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
        const {lastName, secondName, email, courses} = this.state

        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={lastName} type="name" name="lastName" placeholder="enter name"/>
                <input onChange={this.handleChange} value={secondName} type="name" name="secondName" placeholder="enter second name"/>
                <input onChange={this.handleChange} value={email} type="email" name="email" placeholder="enter email"/>
                <label> HTML
                    <input onChange={this.handleChange} checked={courses === "html"} value="html" type="radio" name="courses" />
                </label>
                  <label> CSS
                    <input onChange={this.handleChange} checked={courses === "css"} value="css" type="radio" name="courses" />
                </label>
                  <label> REACT
                    <input onChange={this.handleChange} checked={courses === "react"} value="react" type="radio" name="courses" />
                </label>
                <input type="checkbox" name="" />
                <button type="submit">відправити</button>
            </form>
        )
    }
}


export default Form