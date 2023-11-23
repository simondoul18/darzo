"use client";
export default function ComingSoon() {
    return (
        <>
            <h6>Coming Soon</h6>
            <div className="countdown-container">
                <div className="countdown-el days-c">
                    <p>90</p>
                    <span>Days</span>
                </div>
                <div className="countdown-el hours-c">
                    <p>21</p>
                    <span>Hours</span>
                </div>
                <div className="countdown-el mins-c">
                    <p>30</p>
                    <span>Minutes</span>
                </div>
            </div>
        </>
    )
}