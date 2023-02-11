import React from 'react';
// specify props
interface IProps{
    name? : string;
    age? : number;
    title? : string;

}


// specify state
let Customer:React.FC<IProps> = ({name, age, title}) => {
    console.log("🚀 ~ file: customer.tsx:13 ~ name, age, title", name, age, title)
    return (
        <React.Fragment>
            <h2>Customer Component</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    Name : {name}
                </li>
                <li className="list-group-item">
                    Age : {age}
                </li>
                <li className="list-group-item">
                    Title : {title}
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Customer;