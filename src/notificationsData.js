import markWebberImg from './assets/avatar-mark-webber.webp';
import angelaGrayImg from './assets/avatar-angela-gray.webp';
import jacobThompsonImg from './assets/avatar-jacob-thompson.webp';
import rizkyHasanuddinImg from './assets/avatar-rizky-hasanuddin.webp';
import kimberlySmithImg from './assets/avatar-kimberly-smith.webp';
import chessImg from './assets/image-chess.webp';
import nathanPetersonImg from './assets/avatar-nathan-peterson.webp';
import annaKimImg from './assets/avatar-anna-kim.webp';

export const notifications = [
    {
        id: 1,
        author: {
            name: "Mark Webber",
            image: markWebberImg
        },
        text: "reacted to your recent post",
        link: {
            type: "text",
            text: "My first tournament today!"
        },
        time: "1m ago", 
        readed: false, 
    },
    {
        id: 2,
        author: {
            name: "Angela Gray",
            image: angelaGrayImg
        },
        text: "followed you",
        link: null,
        time: "5m ago", 
        readed: false, 
    },
    {
        id: 3,
        author: {
            name: "Jacob Thompson",
            image: jacobThompsonImg
        },
        text: "has joined your group",
        link: {
            type: "text",
            text: "Chess Club"
        },
        time: "1 day ago", 
        readed: false, 
    },
    {
        id: 4,
        author: {
            name: "Rizky Hasanuddin",
            image: rizkyHasanuddinImg,
        },
        text: "sent you a private message",
        link: {
            type: "message",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
        },
        time: "5 days ago", 
        readed: true, 
    },
    {
        id: 5,
        author: {
            name: "Kimberly Smith",
            image: kimberlySmithImg
        },
        text: "commented on your picture",
        link: {
            type: "image",
            image: chessImg,
        },
        time: "1 week ago", 
        readed: true, 
    },
    {
        id: 6,
        author: {
            name: "Nathan Peterson",
            image: nathanPetersonImg
        },
        text: "reacted to your recent post",
        link: {
            type: "text",
            text: "5 end-game strategies to increase your win rate",
        },
        time: "2 weeks ago", 
        readed: true, 
    },
    {
        id: 7,
        author: {
            name: "Anna Kim",
            image: annaKimImg
        },
        text: "left the group",
        link: {
            type: "text",
            text: "Chess Club",
        },
        time: "2 weeks ago", 
        readed: true, 
    },
];