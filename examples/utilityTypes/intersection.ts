// intersection for objects

type GoogleUser = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
}

type FacebookUser = {
    _id: string;
    full_name: string;
    email: string;
    avatar_rl: string;
}

type User = GoogleUser & FacebookUser;

function processUserData(user: User) {
    console.log(user.email);
    console.log(user.avatarUrl);

    if ('id' in user) {
        console.log(user.id);
    } else {
        console.log(user._id);
    }
}

export {};