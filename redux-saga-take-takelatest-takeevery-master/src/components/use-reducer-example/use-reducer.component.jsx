import React, { useState, useEffect } from "react";

import Card from "../card/card.component";

const UseReducerExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        let reqHeader = new Headers();
        reqHeader.append(
          "Content-Type",
          "text/json",
          "Access-Control-Allow-Origin"
        );
        let initObject = {
          method: "GET",
          headers: reqHeader,
        };
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`,
          initObject
        );
        const resJson = await response.json();
        setUser(resJson[0]);
      };

      fetchFunc();
    }
  }, [searchQuery]);

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </Card>
  );
};

export default UseReducerExample;
