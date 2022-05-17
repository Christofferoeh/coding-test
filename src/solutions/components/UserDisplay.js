import React, {useState} from "react"
import UserData from "../../data/data";

const UserDisplay = () => {
    const [filteredData, setFilteredData] = useState(UserData);
    return(
        <>
            <input
                type="text"
                onChange={
                (e) => {
                    if(e.target.value) {
                        setFilteredData(UserData.filter(user => user.first_name.toLowerCase().includes(e.target.value.toLowerCase())))
                    } else {
                        setFilteredData(UserData)
                    }
                }}
            />
            <ul>
                {filteredData.map(user => {
                    return (
                    <li key={user.id} style={{marginBottom: "10px"}}>
                        {user.id ?? "No ID"}: {user.first_name}, {user.last_name}, {user.email}
                    </li>
                )
            })}
            </ul>
        </>
    )
}

export default UserDisplay;