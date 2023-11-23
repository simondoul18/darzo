import SlickSpinner from "../loaders/SlickSpinner";

export default function ButtonMain(props: { click?: any, text?: string, showLoaderOnRequest?: boolean, type?: "button" | "reset" | "submit" | undefined, classNames?: string, loaderClassNames?: string, scheme?: string, children?: React.ReactNode }) {
    return (
        <button className={`btn relative flex justify-center ${props.classNames} ${props.scheme}`} onClick={props.click} type={`${props.type ? props.type : 'submit'}`}>
            <div className={`${props.showLoaderOnRequest ? 'opacity-0' : 'opacity-100'}`}>{props.text}{props.children}</div>
            <div className={`absolute ${props.showLoaderOnRequest ? 'opacity-100' : 'opacity-0'}`}>
                <SlickSpinner classNames={props.loaderClassNames} />
            </div>
        </button>
    )
}