export default function Notification({ author, text, link, time, readed }) {
    let notification = (
        <div>
            <p>
                <a href="">{author.name}</a> {text}
            </p>
            <p>{time}</p>
        </div>
    );

    switch (link?.type) {
        case "text":
            notification = (
                <div>
                    <p>
                        <a href="#">{author.name}</a> {text}{" "}
                        <a href="#">{link.text}</a>
                    </p>
                    <p>{time}</p>
                </div>
            );
            break;
        case "image":
            notification = (
                <div>
                    <p>
                        <span>
                            <a href="#">{author.name}</a> {text}
                        </span>{" "}
                        <img src={link.image} alt="" />
                    </p>
                    <p>{time}</p>
                </div>
            );
            break;
        case "message":
            notification = (
                <div>
                    <div>
                        <p>
                            <span>
                                <a href="#">{author.name}</a> {text}
                            </span>
                        </p>
                        <p>{time}</p>
                    </div>
                    <p>{link.message}</p>
                </div>
            );
            break;
    }

    return (
        <li className={!readed ? 'unreaded' : null}>
            <img src={author.image} alt="" width={50} />
            {notification}
        </li>
    );
}
