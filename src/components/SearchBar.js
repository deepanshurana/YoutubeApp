import React, {useState} from 'react';

const SearchBar = ({ formProp }) => {
    const [term, setTerm] = useState('')

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        formProp(term);
    }
    return (
        <div className=" search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}> 
                <div className="field ">
                    <label style={{textAlign: 'center'}}>Search</label>
                        <input type="text" placeholder="Search Here."
                            onChange={onInputChange} 
                            value={term} />
                </div>
            </form>
        </div>
    )


}



// class SearchBar extends React.Component {

//     // constructor(props){
//     //     super(props);
//     //     this.state = {term: ""};
//     // }


//     // onInputChange(e){
//     //     this.setState({term: e.target.value});
//     // }

//     // onFormSubmit = e => {
//     //     e.preventDefault();
//     //     //TODO: make sure we call 'callback' from the parent.
//     //     this.props.formProp(this.state.term);
//     // }


//     render(){
        
//     }
// }



export default SearchBar;