import { Camera} from './camera';
import { Rover} from './rover';

export class Picture{
    id:number;
    sol:number;
    camera:Camera;
    img_src:string;
    earth_date:Date;
    rover:Rover;
    
    constructor(id:number, sol:number, camera:Camera, img_src:string, earth_date:Date, rover:Rover){
        this.id = id;
        this.sol = sol;
        this.camera = camera;
        this.img_src = img_src;
        this.earth_date = earth_date;
        this.rover = rover;
    }
}