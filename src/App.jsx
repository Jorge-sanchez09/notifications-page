import { useState } from "react";
import Header from "./components/Header.jsx";
import Notification from "./components/Notification.jsx";
import { notifications } from "./notificationsData.js";
import { styled, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root{
        --clr-primary-red: hsl(1, 90%, 64%);
        --clr-primary-blue: hsl(219, 85%, 26%);
        --clr-neutral-100: hsl(0, 0%, 100%);
        --clr-neutral-200: hsl(210, 60%, 98%);
        --clr-neutral-300: hsl(211, 68%, 94%);
        --clr-neutral-400: hsl(205, 33%, 90%);
        --clr-neutral-500: hsl(219, 14%, 63%);
        --clr-neutral-600: hsl(219, 12%, 42%);
        --clr-neutral-800: hsl(224, 21%, 14%);
        --fw-extra-bold: 800;
    }

    *{
        margin: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    html{
        height: 100%;
    }

    body{
        display: grid;
        place-content: center;
        min-height: 100%;
        background-color: var(--clr-neutral-200);

        @media screen and (min-width: 769px) {
            padding: 4em;
        }
    }

    ol{
        padding: 0;
        list-style: none;
        display: grid;
        gap: 0.75em;

        @media screen and (min-width: 769px) {
            gap: 0.5em;
        }
    }

    button{
        font-size: inherit;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    img{
        max-width: 100%;
    }
`;

const StyledMain = styled.main`
    display: grid;
    gap: 1.5em;
    max-width: 730px;
    padding: 1.5em 1em;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.9rem;
    background-color: var(--clr-neutral-100);
    color: var(--clr-neutral-600);

    @media screen and (min-width: 769px){
        gap: 2em;
        border-radius: 1em;
        padding: 2em 2em 0;
        font-size: 1rem;
    }
`;

function sortNotifications(notifications){
    const sortedArray = [...notifications].sort((first, second) => {
        if(!first.readed && second.readed)
            return -1;
        else if(first.readed && !second.readed)
            return 1;

        return 0;
    });
    return sortedArray;
}

export default function App() {
    const [notificationStatus, setNotificationStatus] = useState(sortNotifications(notifications));

    function markAllAsRead() {
        setNotificationStatus((prevNotificationStatus) => {
            return prevNotificationStatus.map((notification) => {
                return {
                    ...notification,
                    readed: true,
                };
            });
        });
    }

    function markAsRead(id){
        setNotificationStatus((prevNotificationStatus) => {
            const newArr = prevNotificationStatus.map(notification => 
                notification.id === id && !notification.readed ? {
                    ...notification,
                    readed: true
                } : notification 
            )
            
            return sortNotifications(newArr);
        });
    }

    return (
        <>
            <GlobalStyles />
            <StyledMain>
                <Header
                    onButtonClick={markAllAsRead}
                    notifications={notificationStatus}
                />
                <ol>
                    {notificationStatus.map((notification) => (
                        <Notification
                            key={notification.id}
                            onClick={markAsRead}
                            {...notification}
                        ></Notification>
                    ))}
                </ol>
            </StyledMain>
        </>
    );
}