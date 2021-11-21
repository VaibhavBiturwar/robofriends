import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Searchbox from '../components/Searchbox';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount(){
        console.log("Mounted");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json())
        .then(users=>this.setState({robots: users}) );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        // console.log(this.state.searchfield);
        
        // console.log(filteredRobots);
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(newRobots => {
            return newRobots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if(!this.state.robots.length){
            console.log("Length 0")
            return <h2>Loading</h2>
        }
        else{
            return(
                <div  className="tc">
                    <h2>RoboFriends</h2>   
                    <Searchbox searchChange={this.onSearchChange} />   
                    <Scroll>    
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

        
    }
}



export default App;