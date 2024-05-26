import { styled } from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        display: flex;
        align-items: center;
        gap: 0.45em;
        font-size: 1.25rem;
        font-weight: 800;
        color: var(--clr-neutral-800);

        @media screen and (min-width: 769px) {
            font-size: 1.5rem;
        }

        span{
            display: inline-flex;
            align-items: center;
            padding: 0.1em 0.75em;
            border-radius: 0.25em; 
            font-size: 1rem;
            color: var(--clr-neutral-100);
            background-color: var(--clr-primary-blue);
        }
    }

    button{
        border: none;
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
            <h1>Notifications <span>{unreadedNotifications}</span></h1>
            <button onClick={onButtonClick}>Mark all as read</button>
        </StyledHeader>
    );
}
