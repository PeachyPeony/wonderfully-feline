import { Link } from 'react-router'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <Link to="/" className="footer-logo">
                    <span aria-hidden="true">✿</span>
                    Wonderfully Feline
                </Link>

                <p>Made with curiosity and a lot of love for cats.</p>

                <a href="#" className="back-to-top">
                    Back to top ↑
                </a>

                <small>
                    © {new Date().getFullYear()} Wonderfully Feline
                </small>
            </div>
        </footer>
    )
}

export default Footer