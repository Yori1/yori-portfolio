import { Screenshot } from './screenshot';
import { Technology } from './technology';

export class Project {
    constructor(
        public name: string,
        public screenshots: Screenshot[],
        public description: string,
        public technologies: Technology[]
    ){

    }
}