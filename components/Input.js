import React, { Component } from "react";

var Input = React.createClass({
  render: function(){
    return(
        <form>
            <label>Your Name</label>
            <input type="text"/>
            <input type="submit" value="Submit"/>
        </form>
    )
  }
})

export default Input
