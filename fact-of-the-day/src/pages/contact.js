import Navbar from "../components/navbar";
import styles from "../styles/home.module.css";

export default function Contact() {
    return (
        <main>
            <br></br>
            <h2>Contact page</h2>
            <Navbar></Navbar>
            <div className={styles.container}>
                <h3>
                    Contact
                </h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                </p>
            </div>
        </main>
    );
}
