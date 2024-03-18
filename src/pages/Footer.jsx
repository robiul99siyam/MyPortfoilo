const Footer = () => {

    return (
        <>

            <footer className="text-center bg-body-tertiary">

                <div className="container pt-4">

                    <section className="mb-4">
                        <h1 className="text-center fw-bold" style={{ color: " rgb(108, 109, 209)" }}>Follow Me </h1>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.facebook.com/profile.php?id=100047910730000"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                        >
                            <i class="bi bi-facebook"></i>
                        </a>


                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.linkedin.com/in/robiul-islam-siyam/"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                        >
                            <i class="bi bi-linkedin"></i>
                        </a>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://github.com/robiul99siyam/"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                        >
                            <i class="bi bi-github"></i>
                        </a>
                        <a
                            data-mdb-ripple-init
                            class="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.youtube.com/channel/UC8VbAxseMo51BAY6APH6u8A"
                            role="button"
                            data-mdb-ripple-color="dark"
                            target="_blank"
                        >
                            <i class="bi bi-youtube"></i>
                        </a>

                    </section>
                    < div className="text-center p-4">
                        © 2024 Copyright:
                        <span className="text-reset fw-bold">Robiul Islam Siyam</span>
                    </div>
                </div>

            </footer >

        </>
    );
}


export default Footer