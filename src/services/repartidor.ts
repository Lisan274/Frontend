import axios from "axios";

const query: string = "http://localhost:3001"

export function getRepartidores(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/repartidores`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve([]));
    });
}

export function postRepartidor(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/repartidor/Registro`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function putRepartidor(id:string,data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.put(`${query}/repartidor/${id}`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function deleteRepartidor(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/repartidor/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve({successed:false}));
    });
}

export function getRepartidor(id:string): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/repartidor/${id}`)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function postLoginRepartidor(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/repartidor/Login`,data)
        .then(result => resolve(result) )
        //.catch(error => resolve( {data: {successed:false}} ) );
    });
}

export function getRepartidoresWPaquetes(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/repartidores/paquetes`)
        .then(result=>{        
            resolve(result.data);
        })
        //.catch(error => resolve([]));
    });
}