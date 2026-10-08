import { Component } from "react";

class Form extends Component {
    state = {
        lastName: "",
        secondName: "",
        email: "",
        course: "",
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { lastName, secondName, email, course } = this.state; 

        const data = {
            lastName,
            secondName,
            email,
            course,
        };

        console.log("отримав дані в функції", data);
        
        this.setState({
            lastName: "",
            secondName: "",
            email: "",
            course: "",
        });
    }; 

    handleChange = (evt) => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value 
        });
    };

    render() {
        const { lastName, secondName, email, course } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange} 
                    value={lastName} 
                    type="text" 
                    name="lastName" 
                    placeholder="enter name"
                />
                <input 
                    onChange={this.handleChange} 
                    value={secondName} 
                    type="text" 
                    name="secondName" 
                    placeholder="enter second name"
                />
                <input 
                    onChange={this.handleChange} 
                    value={email} 
                    type="email" 
                    name="email" 
                    placeholder="enter email"
                />

                <label> 
                    HTML
                    <input 
                        onChange={this.handleChange} 
                        checked={course === "html"} 
                        value="html" 
                        type="radio" 
                        name="course" 
                    />
                </label>
                <label> 
                    CSS
                    <input 
                        onChange={this.handleChange} 
                        checked={course === "css"} 
                        value="css" 
                        type="radio" 
                        name="course" 
                    />
                </label>
                <label> 
                    React
                    <input 
                        onChange={this.handleChange} 
                        checked={course === "react"} 
                        value="react" 
                        type="radio" 
                        name="course" 
                    />
                </label>

                <button type="submit">відправити</button>
            </form>
        );
    }
}

export default Form;