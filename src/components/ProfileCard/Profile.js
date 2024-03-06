import React from "react"

import './style.css'
import { Link } from "react-router-dom"

export default function Profile() {
    return (
        <div className="MainProfileContainer">
            <table>
                <tr className="tr1">
                    <td>User</td>
                </tr>
                <tr className="tr2">
                    <td><Link to='/findVehicleDetails'>Find Vehicle Details</Link></td>
                </tr>
                <tr className="tr3">
                    <td>Log Out</td>
                </tr>
                <tr className="tr4">
                    <td>Close</td>
                </tr>
            </table>
        </div>
    )
}