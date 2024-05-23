

export default function Header({onButtonClick, notifications}) {

    const unreadedNotifications = notifications.filter(notification => !notification.readed).length

    return (
        <header>
            <p>
                Notifications <span>{unreadedNotifications}</span>
            </p>
            <button onClick={onButtonClick}>Mark all as read</button>
        </header>
    );
}
