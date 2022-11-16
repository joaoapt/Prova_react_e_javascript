import{ useState} from "react"
import { Link } from 'react-router-dom';


export default function Index() {
    const [N1,setN1] = useState('');
    const [N2,setN2] = useState('');
    const [Resp,setResp]= useState([]);

    function Numeros(i, f){
        let z = 0;
        const y=[];
        for(let x = i; x <= f; x++){
            y[z] = x;
            z++;
        }
        return y;
    }

    async function v(){
        let x = Numeros(N1, N2)
        setResp(x);
    }

return (
        <div>
            <h1>Prova 2</h1>
            <div>
            <label>Inicio:</label>
            <input type="number" value={N1} onChange={e => setN1(e.target.value)}></input>
            </div>
            <div>
            <label>Fim:</label>
            <input type="number" value={N2} onChange={e => setN2(e.target.value)}></input>
            </div>
            <div>
            <button onClick ={v}>Verificar</button>
            </div>
            <h2>{Resp}</h2>
            <Link to='/'>Voltar</Link>
        </div>
    )
}