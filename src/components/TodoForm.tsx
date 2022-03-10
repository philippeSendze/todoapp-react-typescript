import React, {ChangeEvent, HTMLProps} from "react";

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}

const TodoForm = ({onInputChange, ...props}: Props) => {
    return (
        <form {...props}>
            <input 
                className="form-control"
                placeholder="What would you like to get done?"
                onChange={onInputChange}
                value={props.inputValue}
                />
            <button className="btn btn-primary">Create</button>
        </form>
    )
}

export default TodoForm