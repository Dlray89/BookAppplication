import React from "react";
import { connect } from "react-redux";
import { getData } from "./actions";
import BookLists from "./components/bookList";


function BookList(props) {
  const handleData = e => {
    e.preventDefault()
    props.getData()
  }

  return(
    <div>
      <h1>BestSellers</h1>
      {props.isFetchingData ? (
        <div> We are grabbing your list</div>
      ) : (
        <button onClick={handleData}>Best Sellers</button>
      )}
              <BookLists />
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