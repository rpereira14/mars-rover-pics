
    export class Camera {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
    }

    export class Rover {
        id: number;
        name: string;
        landing_date: string;
        launch_date: string;
        status: string;
    }

    export class Photo {
        id: number;
        sol: number;
        camera: Camera;
        img_src: string;
        earth_date: string;
        rover: Rover;
    }

    export class RootObject {
        photos: Photo[];
    }

