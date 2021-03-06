

let state = {
    profilePage: {

        postData: [
            { id: 1, message: 'Hello', likesCount: 12 },
            { id: 2, message: 'It"s my first post', likesCount: 16 }],
        
    },

    messagePage: {
   messageData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "Wow" },
            { id: 4, message: "Call me!!!" },
            { id: 5, message: "Ok" },
            { id: 6, message: "Goodbye!" },
        ],

                dialogsData: [
            { id: 1, name: "Kiwi" },
            { id: 2, name: "Polly" },
            { id: 3, name: "Molly" },
            { id: 4, name: "Mark" },
            { id: 5, name: "Andry" },
            { id: 6, name: "Ann" },
    ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
}

export default state;