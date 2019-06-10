import { Project } from './project';
import { Screenshot } from './screenshot';
import { Technology } from './technology';

export class ProjectsHelper {
    public static getProjects(): Project[] {
        return [
            this.getShoubu(),
        ];

    }

    private static getShoubu(): Project {
        let screenshots = [
            new Screenshot("./assets/images/p", ""),
        ];

        let technologies = [
            new Technology("./assets/images/programming-languages/c-sharp-logo.png"),
            new Technology("./assets/images/programming-languages/java-logo.png"),
            new Technology("./assets/images/programming-languages/javascript-logo.png"),
            new Technology("./assets/images/programming-languages/css-logo.png"),
            new Technology("./assets/images/programming-languages/html-logo.png"),
            new Technology("./assets/images/programming-languages/typescript-logo.png"),
            new Technology("./assets/images/programming-languages/mysql-logo.png"),
            new Technology("./assets/images/programming-languages/sql-server-logo.png")
            
        ]
        
        let description = "A platform anyone who wants to learn Japanese. "
        

        return new Project("Shoubu", screenshots, description, technologies);
    }
}