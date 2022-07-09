import {Spinner} from "react-bootstrap";
import '../style/loadingcss.css';

export default function Loading(){

    return (
        <div className={'loading'}>
            <div className={'align-items-center justify-content-center'}>
                <Spinner className={'mx-2'} animation={"border"}/>
                <span className={'mx-2'}>loading...</span>
            </div>
        </div>
    );
}