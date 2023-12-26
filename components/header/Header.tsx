import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./header.style";
import { useState } from "react";
import { connect } from "react-redux";
import { setSearchUser } from "../../reducers/users/Users";
import { Dispatch } from "redux"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { HeaderProps } from "../../types/interface";

const Header = ({ setSearchedUser }: HeaderProps) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    setSearchedUser(username);
    setUsername(''); 
  };
  
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.userName}>Hello Player</Text>
        <Text style={styles.welcomeMessage}>Find your competitor here!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" color='grey' size={14} />
          <TextInput
            style={styles.searchInput}
            placeholder='Search player here...'
            value={username} 
            onChangeText={setUsername} 
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSearchedUser: (user: string) => dispatch(setSearchUser(user)),
});

export default connect(null, mapDispatchToProps)(Header);