import { useState } from "react";
import Header from "./components/Header.jsx";
import Notification from "./components/Notification.jsx";
import { notifications } from "./notificationsData.js";
import { styled } from 'styled-components';

const Main = styled.main`
    background-color: red;
`;

function App() {
    const [notificationStatus, setNotificationStatus] = useState(notifications);

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

    return (
        <Main>
            <Header
                onButtonClick={markAllAsRead}
                notifications={notificationStatus}
            />
            <ol>
                {notificationStatus.map((notification) => (
                    <Notification
                        key={notification.id}
                        {...notification}
                    ></Notification>
                ))}
            </ol>
        </Main>
    );
}

export default App;
