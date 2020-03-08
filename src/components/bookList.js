import React from "react";
import { connect } from "react-redux";


const bookLists = (props) => {
    return(
        <div>
            {props.books.map(book => (
                <div>
                    <h1>
                        {book.list_name}
                    </h1>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        books: state.books

    }

}
export default connect(mapStateToProps, {})(bookLists)