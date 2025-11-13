import React from "react";
import Header from "./components/Heaader";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


class App2 extends React.Component {

   constructor(props){
        super(props);

        this.state = {
            users : [
            {
                id: 1,
                firstname: "Jo",
                lastname: "Too",
                bio: "lorem impsum 12412412  4124 4124124 1 2 4124124 12412 41 2",
                age: 40,
                isHappy: true
            },
            {
                id: 2,
                firstname: "Mark",
                lastname: "Blue",
                bio: "lorem2 impsum2 12412412  4124 4124124 1 2 4124124 12412 41 2",
                age: 22,
                isHappy: false
            }
        ]
        }

        this.addUser = this.addUser.bind(this);
   }

    render(){
        return (
            <div >
                <Header title="Список пользавателей" />
                <main>
                    <Users users={this.state.users} />
                </main>
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        );
    }

    addUser(user){
        const id = this.state.users.length +1;

        this.setState({users : [...this.state.users, {id, ...user}]});
    }
    

}

export default App2;
