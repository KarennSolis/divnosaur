import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUserId, setUsers } from '../../redux/followerSlice';
import { setFollowedUsers } from '../../redux/followerSlice';


const FetchData = () => {
  const fetchData = async () => {
        const allUsers = await fetch(`http://localhost:3001/users`);
        let dataUser = [];
        if (allUsers.ok) {
            dataUser = await allUsers.json();
            console.log(dataUser);
        }

        const followedResponse = await fetch(`http://localhost:3001/followed/${idLogged}`);
        let followedData = [];

        if (followedResponse.ok) {
            followedData = await followedResponse.json();
            dispatch(
                setFollowedUsers(
                    followedData.map((friend) => ({
                        ...friend,
                        status_friendship: 1,
                    }))
                )
            );
        }

        //Haciendo combinación de info de users + status_friendship  para almacenarla en el estado global
        const combinedUsers = dataUser.map((user) => {
            const followedUser = followedData.find((followed) => followed.user_id === user.user_id);
            return followedUser ? { ...user, status_friendship: followedUser.status_friendship } : user;
        });

        dispatch(setUsers(combinedUsers));
        dispatch(setLoggedUserId(idLogged));

    }
}
export { FetchData };

