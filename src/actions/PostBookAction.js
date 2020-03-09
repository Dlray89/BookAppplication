import axios from "axios";

export POST_DATA = "POST_DATA";

export postData = () => dispatch => {
dispatch ({type: POST_DATA});
axios
.post('https://api.nytimes.com/svc/books/v3//lists/current/hardcover-fiction.json?api-key=0AjLiy1yPFRQdjP2anUaZiBALrfh5FSN', this.state)
}