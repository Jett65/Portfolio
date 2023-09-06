import "../style/Portfolio.css"

function Portfolio() {
    return (
        <>
            <h2 className="portfolio">Portfolio</h2>
            <div className="projLink1">
                <a
                    href="https://github.com/Jett65/Daily_ToDo_List"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="./image/project1.png" alt="Project 2"></img>
                </a>
                <a
                    className="dep"
                    href="https://jett65.github.io/Daily_ToDo_List/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Deposited App
                </a>
            </div>

            <div className="projLink2">
                <a
                    href="https://github.com/Jett65/Whats_the_wether"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="./image/project2.png" alt="Project 2"></img>
                </a>
                <a
                    className="dep"
                    href="https://jett65.github.io/Whats_the_wether/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Deposited App
                </a>
            </div>

            <div className="projLink3">
                <a
                    href="https://github.com/Jett65/onBrowsTextEditor"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="./image/project3.png" alt="Project 2"></img>
                </a>
                <a
                    className="dep"
                    href="https://on-browser-text-editor.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Deposited App
                </a>
            </div>
        </>
    );

}

export default Portfolio;
