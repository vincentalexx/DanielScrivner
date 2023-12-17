import '../css/OSF.css'

const Footer = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center gap-lg-5 pt-3 pb-5" >
                <div className="d-flex flex-column text-light" style={{maxWidth: '400px'}}>
                    <p className="fw-bold fs-5 mb-0">Daniel Scrivner is an entreprenuer and investor focused on building enduring companies and breakthrough products.</p>
                    <a href="#" className="text-decoration-none text-hov">See what he’s working on now ></a>
                    <a href="#" className="fs-4 text-decoration-none name-hov fw-bold mt-lg-4 py-4">Daniel Scrivner</a>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-2 gap-md-5 px-4 py-4">
                    <div className="d-flex flex-column text-center text-lg-start gap-4">
                        <p className="text-light fw-bold fs-5 mb-0">Explore</p>
                        <a href="#" className="text-decoration-none pp">Most Popular</a>
                        <a href="#" className="text-decoration-none pp">Most Recent</a>
                        <a href="#" className="text-decoration-none pp">Topics & Tags</a>
                        <a href="#" className="text-decoration-none pp">Friday Five</a>
                    </div>
                    <div className="d-flex flex-column text-center text-lg-start gap-4">
                        <p className="text-light fw-bold fs-5 mb-0">Outliers</p>
                        <a href="#" className="text-decoration-none pp">Episodes</a>
                        <a href="#" className="text-decoration-none pp">Subscribe Now</a>
                        <a href="#" className="text-decoration-none pp">About the Show</a>
                        <a href="#" className="text-decoration-none pp">Sponsors</a>
                    </div>
                    <div className="d-flex flex-column text-center text-lg-start gap-4">
                        <p className="text-light fw-bold fs-5 mb-0">Articles</p>
                        <a href="#" className="text-decoration-none pp">Show Notes</a>
                        <a href="#" className="text-decoration-none pp">Transcripts</a>
                        <a href="#" className="text-decoration-none pp">Essays</a>
                        <a href="#" className="text-decoration-none pp">Snippets</a>
                    </div>
                    <div className="d-flex flex-column text-center text-lg-start gap-4">
                        <p className="text-light fw-bold fs-5 mb-0">More</p>
                        <a href="#" className="text-decoration-none pp">About Daniel</a>
                        <a href="#" className="text-decoration-none pp">Business Card</a>
                        <a href="#" className="text-decoration-none pp">Newsroom</a>
                        <a href="#" className="text-decoration-none pp">Contact</a>
                    </div>
                </div>
            </div>
            <div className="text-secondary d-flex flex-column flex-lg-row justify-content-lg-between w-100 px-5 text-center" style={{fontSize: '12px'}}>
                <p>Copyright © 2020 Daniel Scrivner. All rights reserved</p>
                <div className="d-flex gap-3 text-center justify-content-center">
                    <p>Privacy & Terms</p>
                    <p>Disclosures</p>
                    <p>Sitemap</p>
                </div>
            </div>
        </div>
    );
}

export default Footer