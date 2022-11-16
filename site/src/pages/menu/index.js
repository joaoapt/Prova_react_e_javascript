import { Link } from 'react-router-dom';

export default function Index() {
    return(
        <div>
            <div>
                <h1>menu</h1>
            </div>
            <div>
                <br/>
                <div>
                    <Link to='/pro1'>1 Prova</Link>
                    <br/> <br/>
                </div>
                <div>
                    <Link to='/pro2'>2 Prova</Link> 
                </div>
            </div>
        </div>
    )
}