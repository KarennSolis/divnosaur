import { useSelector } from "react-redux";

export function FilteredUser({ filteredUsers }) {
  
  /* return (
    <ul>
      {filteredUsers.map((user) => (
        <li key={user.id} className='results'>{user.name}</li>
      ))}
    </ul>
  ); */

 /*  const users = useSelector((state) => state.user.users);
  const searchTerm = useSelector((state) => state.user.searchTerm);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase() || user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  ); */

  return (
    <ul>
      {/* {filteredUsers.map((user) => (
        <li className="filtrados" key={user.id}>{user.name}</li>
      ))} */}
    </ul>
  );
}
