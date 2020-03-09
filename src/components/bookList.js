import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions"
import BookCard from "./BookCard";
import {Link} from"react-router-dom";

function BookList(props) {
  const handleData = e => {
    e.preventDefault()
    props.getData()
  }

  return(
    <div>

        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard">Add Book</Link>
      <h1>BestSellers</h1>
      {props.isFetchingData ? (
        <div> We are grabbing your list</div>
      ) : (
        <button onClick={handleData}>Best Sellers</button>
      )}
              <BookCard />
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  }
}

export default connect(mapStateToProps,
  { getData })(BookList)