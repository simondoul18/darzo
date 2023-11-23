"use client"
import Image from 'next/image'
export default function DashboardStatsWidget(props: {
    title: string,
    counts: number | string,
    percentage: string,
    image: any,
    icon?: any,
    iconColor?: string,
    statsClasses?: string
}) {
    return (
        <div className="col-md-6 col-lg-3">
            <div className="dash-widget">
                <div className="dash-img">
                    <span className={"dash-icon bg-" + props.iconColor}>
                        <Image src={props.image} alt="" />
                    </span>
                    <div className={"dash-value " + props.statsClasses}>
                        <Image src={props.icon} alt="" /> +16.24%
                    </div>
                </div>
                <div className="dash-info">
                    <div className="dash-order">
                        <h6>{props.title}</h6>
                        <h5>{props.counts}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}