import { Text, View, Pressable } from 'react-native';
import styles from "./tablehead.style"
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants/styles';
import { TableHeadProps } from '../../../types/interface';

const TableHead = ({ handleSort }: TableHeadProps) => {
    return (
        <View style={styles.row}>
            <Pressable style={styles.cell}>
                <Text>Rank</Text>
            </Pressable>
            <Pressable 
            onPress={() => handleSort('name')} 
            style={({ pressed }) => 
            pressed ? [styles.cell, styles.pressed] : styles.cell
            }
            android_ripple={{ color: COLORS.lightWhite }}
            >
                <Text style={styles.headText}>Name</Text>
                <Ionicons style={styles.filterIcon} name='filter-outline' />
            </Pressable>
            <Pressable 
            style={({ pressed }) => 
            pressed ? [styles.cell, styles.pressed] : styles.cell
            }
            onPress={() => handleSort('rank')}
            android_ripple={{ color: COLORS.lightWhite }}
            >
                <Text style={styles.headText}># of bananas</Text>
                <Ionicons style={styles.filterIcon} name='filter-outline' />
            </Pressable>
        </View>
    );
};

export default TableHead