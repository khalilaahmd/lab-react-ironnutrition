import React from "react";
import { Card, Row, Col, Divider, Input, Button} from "antd";
import { useState } from "react";

function SearchBar (props) {
    
    const handleSearch = (e) => {
        props.onSearchTermChange(e.target.value);
    };

    return (
        <div>
        <Divider>
            <label>Search For Food</label>
            <Input value={props.searchTerm} onChange={handleSearch}></Input>
        </Divider>
        </div>
    )
}
export default SearchBar;