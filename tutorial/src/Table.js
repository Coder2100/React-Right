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

const TableBody = () => {
    return(
        <tbody>
        <tr>
        <td>Zukile</td>
        <td>Barista</td>
        </tr>

        <tr>
        <td>Odwa</td>
        <td>Lawyer</td>
        </tr>

        <tr>
        <td>Nqwesh</td>
        <td>Cosmetics Director</td>
        </tr>

        </tbody>
    )
}
class Table extends Component {
    render(){
        return (
            <table>
            <TableHeader/>
            <TableBody/>
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
 