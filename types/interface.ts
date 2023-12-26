export interface User {
    bananas: number; 
    lastDayPlayed: string; 
    longestStreak: number; 
    name: string; 
    stars: number; 
    subscribed: boolean; 
    uid: string; 
    highlight?: boolean;
    rank?: number;
}

export interface PlayerInfoProps{
    item: User,
} 


export interface TableHeadProps {
    handleSort: (sortKey: string) => void;
};

export interface TableBodyProps {
    sortedUsers: User[];
    error: boolean | null;
    usersArray: User[];
}

export interface Users {
    usersArray: User[]; 
    searchedUser: string; 
}

export interface RootState {
    users: {
        searchedUser: string;
        usersArray: User[];
    };
}

export interface HeaderProps {
    setSearchedUser: (username: string) => void; 
}