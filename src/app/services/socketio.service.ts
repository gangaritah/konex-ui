import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket: any;


  constructor(private auth: AuthService) { }

  setupSocketConnection(url: string, path: string) {

    this.socket = io(url, {
      path: path,
      query: {
          token: this.auth.getToken()
        }
    });
  
    /*

    this.socket.on('connect', () => {
      this.socket.emit("create-room", {idAssessment: idAssessment});
    });
    

    this.socket.on('create-room', (data: object) => {
      console.log("&&&&&", data);
      
    });


    this.socket.on('create', (data) => {
      
    });

    this.socket.on('exception', (data) => {
    });


    this.socket.on('get_question', (question) => { 
    });

    this.socket.on('get_example', (example) => { 
   
    });

    this.socket.on('validator_response', (msg) => { 
      
    });


    this.socket.on('disconnect', () => { 
    });


    this.socket.on("connect_error", (r) => { 
      console.log("error de conexion!!!", r);
 

    });

   
    this.socket.io.on("reconnect", () => {
      console.log("reconexion!!! con id ") 
      //this.socket.disconnect();
    });
    

}

parar(){
  this.socket.disconnect();
}

seguir(){
  this.socket.connect();
}
*/

  }
}