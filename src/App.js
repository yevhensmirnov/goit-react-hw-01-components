import Container from "./components/Container/Container";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendItem from "./components/FriendList/FriendItem";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./components/Components-json/user.json";
import statisticalData from "./components/Components-json/statistical-data.json";
import friends from "./components/Components-json/friends.json";
import transactions from "./components/Components-json/transactions.json";

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendItem friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
