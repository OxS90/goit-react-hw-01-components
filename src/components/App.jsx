import user from './profile';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Statistics from './statistics/statistics';
import Profile from './profile/profile';
import FriendList from './friends/friends';
import TransactionHistory from './transactions/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
