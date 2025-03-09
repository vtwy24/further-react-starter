// Import data file
import {data} from '../data.js';

function AverageTempCard() {
    return (
        <>
            <h2>Average Temperatures</h2>
            <div className="averages">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="card">
                            <h6>{item.location}</h6>
                            <h4>{item.temperature}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default AverageTempCard;
