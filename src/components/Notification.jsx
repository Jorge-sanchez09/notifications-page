import {styled, css} from 'styled-components';

const StyledNotification = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 1em;
    padding: 1em;
    border-radius: 0.5em;
    font-size: 0.9rem;
    background-color: ${({$readed}) => $readed ? 'var(--clr-neutral-100)' : 'var(--clr-neutral-300)'};
    cursor: pointer;

    .container{
        display: grid;
        gap: 0.5em;
        align-items: start;
    }

    .row{
        grid-template-columns: 1fr auto;
        justify-content: space-between;
    }

    .column{
        flex-direction: column;
    }

    .info{
        display: grid;
        gap: 0.25em;
    }

    .text-link{
        font-weight: var(--fw-extra-bold);
        color: var(--clr-neutral-700);
    }

    .author{
        font-weight: var(--fw-extra-bold);
        color: var(--clr-neutral-800);
    }

    .group{
        color: var(--clr-primary-blue);
    }

    .text-link:is(:hover, :focus){
        color: var(--clr-primary-blue);
    }

    .message{
        display: block;
        padding: 1em;
        border: 1px solid var(--clr-neutral-400);
        border-radius: 0.25em;

        &:is(:hover, :focus){
            background-color: var(--clr-neutral-400);
        }
    }

    .image{
        display: flex;
        align-items: center;
        border-radius: 0.5em;
    }

    .image:is(:hover, :focus){
        outline: 3px solid var(--clr-neutral-400);
    }

    .time{
        color: var(--clr-neutral-500);
    }

    ${({$readed}) => {
        if(!$readed){
            return css`
                .description :last-child::after{
                    content: '';
                    display: inline-block;
                    width: 0.6em;
                    aspect-ratio: 1 / 1;
                    margin-left: 0.5em;
                    border-radius: 50%;
                    background-color: var(--clr-primary-red);
                }
            `;
        }
    }}
`;

export default function Notification({ id, author, text, link, time, readed, onClick }) {
    let textLink = null;
    let textLinkClasses = null;

    if(link){
        if(link.type === 'post')
            textLinkClasses = 'text-link post';
        else if(link.type === 'group')
            textLinkClasses = 'text-link group';
    }

    if(textLinkClasses)
        textLink = <a href='#' className={textLinkClasses}>{link.content}</a>

    let notification = (
        <div className={`container ${link?.type ==='image' ? 'row' : 'column'}` }>
            <div className="info">
                <p className='description'>
                    <a className='text-link author' href="#">{author.name}</a>
                    <span> {text} </span>
                    { textLink ?? null }
                </p>
                <p className='time'>{time}</p>
            </div>
            { link?.type === 'image' ? 
                <a className='image' href="#">
                    <img src={link.content} alt="" width={40} />
                </a>
            : link?.type === 'message' ? 
                <a className='message' href="#">
                    <p>{link.content}</p>
                </a>
            : null }
        </div>
    )

    return (
        <StyledNotification $readed={readed} onClick={() => onClick(id)}>
            <img src={author.image} alt="#" width={50} />
            {notification}
        </StyledNotification>
    );
}
