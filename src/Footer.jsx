export default function Footer(){
    const date = new Date()
    return (
        
        <footer>
            <div className="container">
                <p>&copy; {date.getFullYear()} All Right Reserved</p>
            </div>
        </footer>
    )
}