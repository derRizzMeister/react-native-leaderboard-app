import { Text, View } from 'react-native'
import styles from './playerInfo.style';
import { PlayerInfoProps } from '../../../types/interface';

const PlayerInfo = ({ item }: PlayerInfoProps) => {
  return (
    <View style={[styles.userRow, item.highlight && styles.highlight]}>
        <View style={styles.userInfoContainer}>
            <Text style={[styles.userInfo, item.highlight && styles.textHighlight]}>{item.rank}</Text>
        </View>
    <View style={styles.userInfoContainer}>
        <Text style={[styles.userInfo, item.highlight && styles.textHighlight]}>{item.name === '' ? 'Unknown Player' : item.name}</Text>
    </View>
        <View style={styles.userInfoContainer}>
            <Text style={[styles.userInfo, item.highlight && styles.textHighlight]}>{item.bananas}</Text>
        </View>
    </View>
  )
}

export default PlayerInfo;