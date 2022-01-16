import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map(function(item, i) {
                return (
                    <Card key={`${i}x`} id={item.id} name={item.name} email={item.email} />
                );
            })}
        </div>
    );
}

export default CardList;