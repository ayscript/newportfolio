import img from "../assets/blog.png"

function Blog(){
    let style = {
        color: "var(--brand1)",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: ".5rem",
        marginBottom: "1rem",
    }

    let blogStyle = {
        width: 'min(90%, 1024px)'
    }


    return (
        <div className="blog" style={blogStyle}>
            <img src={img} alt="" className="blog-img" />
            <div className="blog-texts">
                <h2 className="blog-title">What does it take to become a web developer?</h2>
                <p className="sneak">Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
                <a style={style} href="#" className="read-more">Read More 
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683417 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893Z" fill={style.color}/>
    <path d="M8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893C6.90237 0.683417 6.90237 1.31658 7.29289 1.70711L11.5858 6L7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L13.7071 6.70711C14.0976 6.31658 14.0976 5.68342 13.7071 5.29289L8.70711 0.292893Z" fill={style.color}/>
    </svg>
                </a>
                <div className="blog-info">
                    <span className="tag">Web Developer</span>
                    <div>
                        <span className="author">
                            <span className="bold">Author</span> Ayomide
                        </span>
                        <span className="date-posted">
                            <span className="bold">Date</span> 5, May 2024
                        </span>
                        <span className="read-time">
                            <span className="bold">Read</span> 1 min
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog