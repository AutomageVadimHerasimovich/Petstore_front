import {useNavigate} from "react-router-dom";

const BasicComponent = () => {

    const navigator = useNavigate();

    return (
        <div className='basic-component-container'>
            <div className="basic-component-text-box">
            <h2 className="text-center">Select a mode</h2>
            <button className="btn btn-outline-primary mb-2" onClick={() => navigator('/employee')}>Employee</button>
            <button className="btn btn-outline-success mb-2" onClick={() => navigator('/petstore')}
                    style={{marginLeft: "10px"}}
            >Pet</button>
            </div>
        </div>
    )
}

export default BasicComponent;

