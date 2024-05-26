import { styled } from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        display: flex;
        align-items: center;
        gap: 0.5em;
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--clr-neutral-800);

        span{
            display: inline-flex;
            align-items: center;
            padding: 0.1em 0.75em;
            border-radius: 0.25em; 
            font-size: initial;
            color: var(--clr-neutral-100);
            background-color: var(--clr-primary-blue);
        }
    }

    button{
        border: none;
        font-size: 0.9rem;
        color: var(--clr-neutral-600);
        background-color: transparent;
        cursor: pointer;

        &:is(:hover, :focus){
            color: var(--clr-primary-blue);
        }
    }
`;


export default function Header({onButtonClick, notifications}) {
    const unreadedNotifications = notifications.filter(notification => !notification.readed).length;

    return (
        <StyledHeader>
            <p>Notifications <span>{unreadedNotifications}</span></p>
            <button onClick={onButtonClick}>Mark all as read</button>
        </StyledHeader>
    );
}
