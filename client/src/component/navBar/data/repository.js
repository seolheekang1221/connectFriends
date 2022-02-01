import axios from "axios";

const navigationBarRepository = {
  searchFriends: (friendName) => {
    axios.post("/api/friends", { data: friendName})
    .then((res) => {
      return JSON.parse(res.data);
    });
  }
}

export default navigationBarRepository;