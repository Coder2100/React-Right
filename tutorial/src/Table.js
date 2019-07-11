//creating another components

import React, {Component} from 'react'


const TableHeader = () => {
    return(
        <thead>
        <tr> 
        <th>Name</th>
        <th>Job</th>
        </tr>
        </thead>
    )
}

const TableBody = props =>{
    const rows = props.characterData.map((row, index) =>{
        return (
            <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}
class Table extends Component {
    render(){
        const {characterData} = this.props
        return (
            <table>
            <TableHeader/>
            <TableBody characterData={characterData}/>
            </table>
        )
    }
}
export default Table

// class compoent boilerplate
/**
 * 
 * if return in one line, it does not need parenthesis
class ClassName extends Component{
    render(){
        return <div></div>
    }
}
 */

 //simple class
/**
 const SimpleClass = () =>{
     return<div>Example</div>
 }
 */
 