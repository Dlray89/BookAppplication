import React from "react";
import { connect } from "react-redux";


const bookLists = (props) => {
    return(
        <div style={{display: "flex",justifyContent: "space-between", flexWrap: "wrap", border: "solid 2px black", padding:"2%"}}>
            {props.books.map(book => (
                <div style={{border: " solid 2px red", width: "30%",textAlign: "center", padding: "1%", borderRadius:"30px"}}>
                    <h1>
                        {book.title}
                    </h1>
                    <p>Rank #{book.rank}
                    <br />
                    Author: {book.author}
                    <br />
                    Description: {book.description}</p>
                    < img src={book.book_image} width={book.book_image_width} />
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