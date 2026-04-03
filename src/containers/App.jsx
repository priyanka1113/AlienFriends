import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';    
import Scroll from '../components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state ={
            aliens: [],
            searchField: ''
        }
        console.log('constructor called ');
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users =>this.setState({aliens: users}));
        //console.log(aliens);
        //this.setState({aliens: aliens})
        console.log('componentDidMount called');
    }


    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value})    
    }


    render(){
        const {aliens ,searchField} = this.state;
        const filteredAliens = aliens.filter((alien) => {
            return alien.name.toLowerCase().includes(searchField.toLowerCase());
        });
        console.log('render called');
        if(aliens.length === 0){
            return (
                <h1>Loading...</h1>
            );
        }else{
            return(
                <div className='tc'>
                    <h1 className ='f1'> Alien Friends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList aliens={filteredAliens} />  
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;