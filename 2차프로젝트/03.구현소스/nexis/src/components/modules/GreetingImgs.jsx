import { greeting } from "../data/greeting";
export function GreetingImgs({ cat }) {
    return (
        <>
            <div className={"subgreimg-wrap " + cat}>
                <ul>
                    <li>
                        <p>{greeting[cat].sub}</p>
                        <h3>{greeting[cat].tit}</h3>
                        <h4>{greeting[cat].cont}</h4>
                    </li>
                    {
                    greeting[cat].hasOwnProperty("img") && (
                        <li>
                            <div className="subgreimg-img">
                                <img src={process.env.PUBLIC_URL + greeting[cat].img} alt="img" />
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
}
