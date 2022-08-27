import React, { SyntheticEvent } from "react";

type IHouseForm = {
}
type HouseFormState = {
    value: string
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

class HouseForm extends React.Component<IHouseForm, HouseFormState> {
    constructor(props: IHouseForm) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event: InputEvent): void {
        this.setState({value: event.target.value})
    }

    handleSubmit(event: SyntheticEvent) {
        console.log("new house is " + this.state.value)
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    House Name:
                    <input type = "text" name="name" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default HouseForm